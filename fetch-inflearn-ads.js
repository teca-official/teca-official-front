#!/usr/bin/env node
/**
 * 인프런 파트너스 링크에서 강의 정보를 추출하여 script.js의 InflearnAds 배열을 업데이트하는 스크립트
 *
 * 사용법:
 *   node fetch-inflearn-ads.js
 *
 * 파트너스 링크를 PARTNER_LINKS 배열에 추가하면,
 * 각 링크에서 강의 제목, 썸네일, 가격, 할인율, 강사, 평점 등을 자동 추출하고
 * script.js의 InflearnAds 배열을 갱신합니다.
 */

// ── 분야별 인프런 파트너스 링크 ──
// categories: script.js의 Category 값과 동일하게 작성
// 하나의 강의가 여러 분야에 해당할 수 있음
const PARTNER_LINKS = [
    // PM
    // { link: "https://inf.run/xxx", categories: ["PM"] },

    // 디자인
    // { link: "https://inf.run/xxx", categories: ["디자인"] },

    // AI
    // { link: "https://inf.run/xxx", categories: ["AI"] },

    // 웹
    // { link: "https://inf.run/xxx", categories: ["웹"] },

    // iOS
    { link: "https://inf.run/xDG94", categories: ["iOS"] },

    // Android
    // { link: "https://inf.run/xxx", categories: ["Android"] },

    // Flutter
    // { link: "https://inf.run/xxx", categories: ["Flutter"] },

    // ReactNative
    // { link: "https://inf.run/xxx", categories: ["ReactNative"] },

    // Java/Spring
    // { link: "https://inf.run/xxx", categories: ["Java/Spring"] },

    // Node.js
    // { link: "https://inf.run/xxx", categories: ["Node.js"] },

    // 클라우드
    // { link: "https://inf.run/xxx", categories: ["클라우드"] },

    // 마케팅
    // { link: "https://inf.run/xxx", categories: ["마케팅"] },
];

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * URL을 fetch하고 리다이렉트를 따라가서 최종 HTML을 반환
 */
function fetchWithRedirect(url, maxRedirects = 5) {
    return new Promise((resolve, reject) => {
        if (maxRedirects <= 0) return reject(new Error('Too many redirects'));

        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let redirectUrl = res.headers.location;
                if (redirectUrl.startsWith('/')) {
                    const parsed = new URL(url);
                    redirectUrl = `${parsed.protocol}//${parsed.host}${redirectUrl}`;
                }
                return resolve(fetchWithRedirect(redirectUrl, maxRedirects - 1));
            }

            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ html: data, finalUrl: url }));
        });
        req.on('error', reject);
        req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
    });
}

/**
 * HTML에서 __NEXT_DATA__ JSON을 파싱하여 강의 정보를 추출
 */
function extractCourseData(html, partnerLink) {
    // __NEXT_DATA__ 추출
    const nextDataMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
    if (!nextDataMatch) {
        console.warn('  ⚠ __NEXT_DATA__ not found, falling back to OG tags');
        return extractFromOG(html, partnerLink);
    }

    try {
        const nextData = JSON.parse(nextDataMatch[1]);
        const queries = nextData.props.pageProps.dehydratedState.queries;

        // Query 4 (또는 online/info 쿼리)에서 상세 정보 추출
        const infoQuery = queries.find(q => {
            const key = JSON.stringify(q.queryKey || '');
            return key.includes('/online/info');
        });

        // Query 2 (meta 쿼리)에서 카테고리/스킬 추출
        const metaQuery = queries.find(q => {
            const key = JSON.stringify(q.queryKey || '');
            return key.includes('/meta');
        });

        if (!infoQuery) {
            console.warn('  ⚠ online/info query not found, falling back to OG tags');
            return extractFromOG(html, partnerLink);
        }

        const info = infoQuery.state.data.data;
        const meta = metaQuery ? metaQuery.state.data.data : {};

        const payment = info.paymentInfo || {};
        const review = info.review || {};
        const instructors = info.instructors || [];
        const skillTags = info.skillTags || [];
        const category = info.category || {};

        return {
            title: info.title || '',
            link: partnerLink,
            thumbnailUrl: info.thumbnailUrl || '',
            description: info.description || '',
            regularPrice: payment.regularPrice || 0,
            payPrice: payment.payPrice || 0,
            discountRate: payment.discountRate || 0,
            instructor: instructors.length > 0 ? instructors[0].name : '',
            averageStar: review.averageStar || 0,
            reviewCount: review.count || 0,
            studentCount: info.studentCount || 0,
            likeCount: info.likeCount || 0,
            isBest: info.isBest || false,
            isNew: info.isNew || false,
            categoryMain: category.main ? category.main.title : '',
            categorySub: category.sub ? category.sub.title : '',
            skillTags: skillTags.map(t => t.title),
            skillSlugs: (meta.skillSlugs || []),
            lectureCount: info.unitSummary ? info.unitSummary.lectureUnitCount : 0,
            runtime: info.unitSummary ? info.unitSummary.runtime : 0,
        };
    } catch (e) {
        console.warn('  ⚠ JSON parse error:', e.message);
        return extractFromOG(html, partnerLink);
    }
}

/**
 * OG 메타태그에서 최소 정보 추출 (폴백)
 */
function extractFromOG(html, partnerLink) {
    const og = (prop) => {
        const m = html.match(new RegExp(`<meta[^>]*property="og:${prop}"[^>]*content="([^"]*)"`, 'i'));
        return m ? m[1] : '';
    };
    const desc = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);

    return {
        title: og('title').replace(/\|.*$/, '').trim(),
        link: partnerLink,
        thumbnailUrl: og('image'),
        description: desc ? desc[1] : '',
        regularPrice: parseInt(og('price:amount')) || 0,
        payPrice: parseInt(og('price:amount')) || 0,
        discountRate: 0,
        instructor: '',
        averageStar: 0,
        reviewCount: 0,
        studentCount: 0,
        likeCount: 0,
        isBest: false,
        isNew: false,
        categoryMain: '',
        categorySub: '',
        skillTags: [],
        skillSlugs: [],
        lectureCount: 0,
        runtime: 0,
    };
}

/**
 * 가격을 한국어 표시 형태로 포맷팅
 */
function formatPrice(price) {
    if (!price) return '무료';
    return price.toLocaleString('ko-KR') + '원';
}

/**
 * 초 단위 runtime을 시간 표시로 변환
 */
function formatRuntime(seconds) {
    if (!seconds) return '';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}시간 ${minutes}분`;
    return `${minutes}분`;
}

/**
 * 추출 결과를 보기 좋게 출력
 */
function printCourseInfo(course) {
    console.log(`  📚 ${course.title}`);
    console.log(`     🎯 분야: ${(course.categories || []).join(', ')}`);
    console.log(`     👤 강사: ${course.instructor}`);
    console.log(`     💰 가격: ${formatPrice(course.payPrice)}${course.discountRate > 0 ? ` (${course.discountRate}% 할인, 원가 ${formatPrice(course.regularPrice)})` : ''}`);
    console.log(`     ⭐ 평점: ${course.averageStar} (리뷰 ${course.reviewCount}개)`);
    console.log(`     👥 수강생: ${course.studentCount.toLocaleString()}명`);
    console.log(`     🏷️ 기술: ${course.skillTags.join(', ') || '(없음)'}`);
    console.log(`     📂 카테고리: ${course.categoryMain} > ${course.categorySub}`);
    console.log(`     🎬 강의: ${course.lectureCount}강 (${formatRuntime(course.runtime)})`);
    console.log(`     🖼️ 썸네일: ${course.thumbnailUrl}`);
    console.log(`     🔗 링크: ${course.link}`);
    if (course.isBest) console.log(`     🏆 베스트 강의`);
    if (course.isNew) console.log(`     🆕 신규 강의`);
    console.log();
}

/**
 * script.js의 InflearnAds 배열을 추출한 데이터로 업데이트
 */
function updateScriptJs(courses) {
    const scriptPath = path.join(__dirname, 'script.js');
    let content = fs.readFileSync(scriptPath, 'utf-8');

    const entries = courses.map(c => {
        const hasDiscount = c.discountRate > 0;
        const hookText = hasDiscount
            ? `${c.title} - ${c.discountRate}% 할인 중!`
            : c.title;
        const hookSub = `${c.instructor} · ⭐ ${c.averageStar} · 수강생 ${c.studentCount.toLocaleString()}명`;

        return `    { title: ${JSON.stringify(c.title)}, link: ${JSON.stringify(c.link)}, categories: ${JSON.stringify(c.categories)}, thumbnailUrl: ${JSON.stringify(c.thumbnailUrl)}, instructor: ${JSON.stringify(c.instructor)}, rating: ${c.averageStar}, reviewCount: ${c.reviewCount}, studentCount: ${c.studentCount}, regularPrice: ${c.regularPrice}, payPrice: ${c.payPrice}, discountRate: ${c.discountRate}, isBest: ${c.isBest}, skillTags: ${JSON.stringify(c.skillTags)}, hookText: ${JSON.stringify(hookText)}, hookSub: ${JSON.stringify(hookSub)} }`;
    });

    const newArray = `const InflearnAds = [\n${entries.join(',\n')}\n];`;

    // 기존 InflearnAds 배열을 새 데이터로 교체
    const regex = /const InflearnAds = \[[\s\S]*?\];/;
    if (regex.test(content)) {
        content = content.replace(regex, newArray);
        fs.writeFileSync(scriptPath, content, 'utf-8');
        console.log(`✅ script.js 업데이트 완료 (${courses.length}개 강의)`);
    } else {
        console.error('❌ script.js에서 InflearnAds 배열을 찾을 수 없습니다');
    }
}

// ── 메인 실행 ──
async function main() {
    console.log(`🔍 ${PARTNER_LINKS.length}개 인프런 파트너스 링크에서 강의 정보 추출 중...\n`);

    const courses = [];

    for (const entry of PARTNER_LINKS) {
        console.log(`📡 Fetching: ${entry.link} [${entry.categories.join(', ')}]`);
        try {
            const { html, finalUrl } = await fetchWithRedirect(entry.link);
            console.log(`  → Redirected to: ${finalUrl.substring(0, 80)}...`);

            const course = extractCourseData(html, entry.link);
            course.categories = entry.categories;
            printCourseInfo(course);
            courses.push(course);
        } catch (err) {
            console.error(`  ❌ Error: ${err.message}`);
        }
    }

    if (courses.length > 0) {
        updateScriptJs(courses);
    } else {
        console.log('⚠ 추출된 강의가 없습니다.');
    }
}

main().catch(console.error);
