/* /Users/iseungjun/Desktop/teca-official/analytics.js */
/* Firebase Analytics 이벤트 추적 (script.js 뒤에 로드) */

document.addEventListener('DOMContentLoaded', () => {
    // ── 페이지 뷰 ──
    const pageName = getPageName();
    const pageLabels = { it: 'IT 동아리', marketing: '마케팅/경영', bootcamp: '부트캠프', hackathon: '해커톤/대회' };
    trackEvent('page_view', {
        page: pageName,
        page_title: pageLabels[pageName] || pageName
    });

    // ── 링크 클릭: 데스크톱 테이블 ──
    const clubList = document.getElementById('club-list');
    if (clubList) {
        clubList.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link) {
                const row = link.closest('tr');
                const clubName = row ? row.querySelector('.font-bold')?.textContent : link.textContent;
                trackEvent('link_click', {
                    club_name: (clubName || '').trim(),
                    link_url: link.href,
                    section: 'table',
                    view: 'desktop',
                    page: getPageName()
                });
            }
        });
    }

    // ── 링크 클릭: 모바일 카드 ──
    const clubListMobile = document.getElementById('club-list-mobile');
    if (clubListMobile) {
        clubListMobile.addEventListener('click', (e) => {
            const card = e.target.closest('a');
            if (card) {
                const clubName = card.querySelector('.font-bold')?.textContent || '';
                trackEvent('link_click', {
                    club_name: clubName.trim(),
                    link_url: card.href,
                    section: 'card',
                    view: 'mobile',
                    page: getPageName()
                });
            }
        });
    }

    // ── 링크 클릭: 다가오는 일정 ──
    const deadlineContainer = document.getElementById('upcoming-deadlines');
    if (deadlineContainer) {
        deadlineContainer.addEventListener('click', (e) => {
            const card = e.target.closest('a');
            if (card) {
                const clubName = card.querySelector('h4')?.textContent || '';
                trackEvent('link_click', {
                    club_name: clubName.trim(),
                    link_url: card.href,
                    section: 'deadline',
                    page: getPageName()
                });
            }
        });
    }

    // ── 필터 적용 추적 ──
    const filterDropdown = document.getElementById('filter-dropdown');
    if (filterDropdown) {
        filterDropdown.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                trackEvent('filter_apply', {
                    filter_type: e.target.dataset.filterKey,
                    filter_value: e.target.value,
                    action: e.target.checked ? 'add' : 'remove',
                    page: getPageName()
                });
            }
        });
    }

    // ── 정렬 변경 추적 ──
    const sortDropdown = document.getElementById('sort-dropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', (e) => {
            if (e.target.name === 'sort') {
                trackEvent('sort_change', {
                    sort_order: e.target.value,
                    page: getPageName()
                });
            }
        });
    }

    // ── 검색 추적 ──
    const searchInput = document.querySelector('input');
    let searchDebounceTimer;
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            clearTimeout(searchDebounceTimer);
            searchDebounceTimer = setTimeout(() => {
                const term = searchInput.value.trim();
                if (term) {
                    trackEvent('search', {
                        search_term: term,
                        page: getPageName()
                    });
                }
            }, 1000);
        });
    }

    // ── 광고 노출 추적 (Intersection Observer) ──
    const impressedAds = new Set();

    function observeAdImpressions() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const adKey = el.dataset.adLink + '_' + el.dataset.adView;
                if (impressedAds.has(adKey)) return;
                impressedAds.add(adKey);
                trackEvent('ad_impression', {
                    ad_title: el.dataset.adTitle,
                    ad_link: el.dataset.adLink,
                    ad_categories: el.dataset.adCategories,
                    view: el.dataset.adView,
                    page: getPageName()
                });
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.inflearn-ad').forEach(el => observer.observe(el));
        return observer;
    }

    let adObserver = observeAdImpressions();

    // 렌더링 갱신 시 옵저버 재설정 (MutationObserver로 감지)
    const tableEl = document.getElementById('club-list');
    const mobileEl = document.getElementById('club-list-mobile');
    const mutationObs = new MutationObserver(() => {
        impressedAds.clear();
        if (adObserver) adObserver.disconnect();
        adObserver = observeAdImpressions();
    });
    if (tableEl) mutationObs.observe(tableEl, { childList: true });
    if (mobileEl) mutationObs.observe(mobileEl, { childList: true });

    // ── 광고 클릭 추적 ──
    document.addEventListener('click', (e) => {
        const adLink = e.target.closest('.inflearn-ad-link');
        if (!adLink) return;
        const adEl = adLink.closest('.inflearn-ad') || adLink;
        trackEvent('ad_click', {
            ad_title: adEl.dataset.adTitle,
            ad_link: adEl.dataset.adLink,
            ad_categories: adEl.dataset.adCategories,
            view: adEl.dataset.adView,
            page: getPageName()
        });
    });

    // ── Scroll Depth 추적 ──
    const scrollMilestones = [25, 50, 75, 100];
    const reachedMilestones = new Set();
    let maxScrollDepth = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        const percent = Math.round((scrollTop / docHeight) * 100);
        if (percent > maxScrollDepth) maxScrollDepth = percent;

        scrollMilestones.forEach(milestone => {
            if (percent >= milestone && !reachedMilestones.has(milestone)) {
                reachedMilestones.add(milestone);
                trackEvent('scroll_depth', {
                    depth_percent: milestone,
                    page: getPageName()
                });
            }
        });
    }, { passive: true });

    // ── Session Engagement 추적 (체류시간 + 참여도) ──
    const sessionStart = Date.now();
    let totalClicks = 0;
    let adClickCount = 0;

    document.addEventListener('click', () => { totalClicks++; });
    document.addEventListener('click', (e) => {
        if (e.target.closest('.inflearn-ad-link')) adClickCount++;
    });

    function sendSessionEngagement() {
        const duration = Math.round((Date.now() - sessionStart) / 1000);
        trackEvent('session_engagement', {
            duration_seconds: duration,
            max_scroll_depth: maxScrollDepth,
            total_clicks: totalClicks,
            ad_clicks: adClickCount,
            ad_impressions: impressedAds.size,
            page: getPageName()
        });
    }

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') sendSessionEngagement();
    });
    window.addEventListener('pagehide', sendSessionEngagement);

    // ── Core Web Vitals 추적 ──
    if ('PerformanceObserver' in window) {
        // LCP (Largest Contentful Paint)
        try {
            new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const last = entries[entries.length - 1];
                trackEvent('web_vitals', {
                    metric: 'LCP',
                    value: Math.round(last.startTime),
                    page: getPageName()
                });
            }).observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {}

        // CLS (Cumulative Layout Shift)
        try {
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach(entry => {
                    if (!entry.hadRecentInput) clsValue += entry.value;
                });
            });
            clsObserver.observe({ type: 'layout-shift', buffered: true });
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'hidden') {
                    trackEvent('web_vitals', {
                        metric: 'CLS',
                        value: Math.round(clsValue * 1000) / 1000,
                        page: getPageName()
                    });
                }
            });
        } catch (e) {}

        // INP (Interaction to Next Paint)
        try {
            let maxINP = 0;
            new PerformanceObserver((list) => {
                list.getEntries().forEach(entry => {
                    if (entry.duration > maxINP) maxINP = entry.duration;
                });
            }).observe({ type: 'event', buffered: true, durationThreshold: 16 });
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'hidden' && maxINP > 0) {
                    trackEvent('web_vitals', {
                        metric: 'INP',
                        value: Math.round(maxINP),
                        page: getPageName()
                    });
                }
            });
        } catch (e) {}
    }
});
