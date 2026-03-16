window.isTournamentPage = true;

// --- 프로젝트 데이터 ---
// 형식: { id, name, club, cohort, description, image, link, webLink, appStoreLink, playStoreLink }
const projects = [
    {
        id: 1,
        name: "Cherrish",
        club: "SOPT",
        cohort: "37기",
        description: "당신이 가장 아름다워야 할 그날을 위해",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/cf720174-6c47-42d1-938a-210e129c3225-Frame 2087328973.png",
    },
    {
        id: 2,
        name: "CLUSTAR",
        club: "SOPT",
        cohort: "37기",
        description: "흩어진 메모를 빛나는 결과물로",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/b800f9f0-490b-4b12-94ca-ff5e887e59c1-썸네일.png",
    },
    {
        id: 3,
        name: "Snappin'",
        club: "SOPT",
        cohort: "37기",
        description: "나만의 무드로 연결되는 스냅, AI 기반 스냅 촬영 매칭 서비스",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/41b2102e-39ea-4bd9-b426-e37bdbf2505f-1.png",
    },
    {
        id: 4,
        name: "Flint",
        club: "SOPT",
        cohort: "37기",
        description: "끌림에서 시작하는 나를 위한 콘텐츠 탐색 서비스",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/7c2675aa-6415-441c-bd36-7b6a0ab1957e-1.png",
    },
    {
        id: 5,
        name: "Kareer",
        club: "SOPT",
        cohort: "37기",
        description: "외국인 유학생들을 위한 AI 기반 한국 취업•비자 길잡이",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/989d49ce-65b0-4fda-9d7a-833b5f2cbf84-플그 썸네일.png",
    },
    {
        id: 6,
        name: "CareNA",
        club: "SOPT",
        cohort: "37기",
        description: "건강검진 결과를 쉽게, 관리까지 한 번에",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/833be73e-e62e-4d3f-8447-a42d070ee4c1-playground.png",
    },
    {
        id: 7,
        name: "KIERO",
        club: "SOPT",
        cohort: "37기",
        description: "아이의 하루가 모험이 되는 곳",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/7a7bb600-c361-42c4-b4ee-0f1bb93710e4-KakaoTalk_20260203_134853998.png",
    },
    {
        id: 8,
        name: "Comfit",
        club: "SOPT",
        cohort: "37기",
        description: "기업과 나를 잇는 자소서 작성 가이드",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/8b5281b1-32b3-49a0-a64c-9732f4e8d71a-Slide 16_9 - 3.png",
    },
    {
        id: 9,
        name: "Dear.Nest",
        club: "SOPT",
        cohort: "37기",
        description: "동네 기반의 소규모 일거리 매칭 플랫폼",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/53034dfd-b75b-47e5-a844-5ea1a5e04e3f-thumb.png",
    },
    {
        id: 10,
        name: "바스락",
        club: "SOPT",
        cohort: "37기",
        description: "밟을수록 즐거운 낙엽 놀이터🍁",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/5704e45a-f028-4c3e-9244-e8b1806c15a5-1.png",
    },
    {
        id: 11,
        name: "핸즈업",
        club: "SOPT",
        cohort: "37기",
        description: "내 손으로 만드는 대학교, 핸즈업🖐️",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/ffc986ac-403e-4c61-a703-a6f177abb120-IMG_2592.png",
    },
    {
        id: 12,
        name: "아라고라",
        club: "SOPT",
        cohort: "37기",
        description: "선택하고, 말하고, 함께 만드는 10대 밸런스 토론 서비스",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/9cf936e7-f004-4d44-8b76-052abadefe1d-1.png",
    },
    {
        id: 13,
        name: "SUNTA : 살타 할아버지",
        club: "SOPT",
        cohort: "37기",
        description: "호주 야외 액티비티 스팟별 실시간 UV 지수 제공 서비스",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/5cd8064d-8e14-4167-bcca-3d68530614e8-썸네일.png",
    },
    {
        id: 14,
        name: "MIDI Mate",
        club: "SOPT",
        cohort: "37기",
        description: "벨기에의 가장 맛있는 언어 교환. 미디메이트 (MIDI Mate)",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/74933f14-9a9c-4d76-9541-e6d431dd1f9e-썸네일.png",
    },
    {
        id: 15,
        name: "Shamrock Tales",
        club: "SOPT",
        cohort: "37기",
        description: "일상의 한 줄이, 아일랜드 설화가 되는 순간",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/ec2cea88-e16b-4d65-9488-67d2803088da-0.png",
    },
    {
        id: 16,
        name: "파리방get",
        club: "SOPT",
        cohort: "37기",
        description: "낯선 파리에서, 나와 잘 맞는 사람과 편안한 집을 찾게 해주는 쉐어하우스 매칭 서비스",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/002e1828-0232-4c87-bf7d-88ff351744f2-10.png",
    },
    {
        id: 17,
        name: "ELFISODE",
        club: "SOPT",
        cohort: "37기",
        description: "익명으로 마음을 털어놓고, 또래의 이야기를 받아볼 수 있는 아이슬란드 청소년 감정 공유 플랫폼",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/b6e38a4b-d311-4071-b12e-7f4ccc6eb04c-1.png",
    },
    {
        id: 18,
        name: "Certi",
        club: "SOPT",
        cohort: "36기",
        description: "취업을 위한 첫걸음, Certi",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/18b0abd6-8a6a-4ef0-895b-1b7ddbfb040d-1.png",
    },
    {
        id: 19,
        name: "솔플리",
        club: "SOPT",
        cohort: "36기",
        description: "혼자만의 시간을 더 쉽게, 더 즐겁게 !",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/734f72c5-fcee-4d18-8c05-4fe65c3752c4-thumbnail.png",
    },
    {
        id: 20,
        name: "Pinback",
        club: "SOPT",
        cohort: "36기",
        description: "가장 재미있게 북마크를 활용하는 방법, Pinback!",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/d1cecffb-15a6-492f-87aa-6505f2552481-%E1%84%91%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A2%E1%86%A8_%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%91%E1%85%AD.png",
    },
    {
        id: 21,
        name: "하우미",
        club: "SOPT",
        cohort: "36기",
        description: "나다운 집을 위한 맞춤형 AI 인테리어 가이드",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/440ffe41-a8d0-496c-b5c9-08938aba7288-%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B52.png",
    },
    {
        id: 22,
        name: "PAWKEY",
        club: "SOPT",
        cohort: "36기",
        description: "반려견과 동네를 산책하는 새로운 방법",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/54353a15-9237-4ca8-b154-a2de71a029b8-Git%20Thumbnail.png",
    },
    {
        id: 23,
        name: "NiNEDOT",
        club: "SOPT",
        cohort: "36기",
        description: "그토록 원하던 목표에 다가갈 방법, NiNEDOT",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/e10987ae-2111-44fd-b051-19609dd75ca6-1.png",
    },
    {
        id: 24,
        name: "Lococo",
        club: "SOPT",
        cohort: "36기",
        description: "일본에서 K-뷰티를 만나는 가장 빠른 방법, 로코코",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/1f211a11-ea81-4403-aadb-ee455ad24be7-0.png"
    },
    {
        id: 25,
        name: "봉투백서",
        club: "SOPT",
        cohort: "36기",
        description: "검색은 그만! 나만의 경조사비 가이드",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/2b2b228c-e069-4fb2-a993-698cccdba367-썸네일.jpg",
    },
    {
        id: 26,
        name: "메잇볼",
        club: "SOPT",
        cohort: "36기",
        description: "나와 딱! 맞는 야구 직관 메이트와 연결되는 공간",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/dc3dd643-5c68-4a2b-abaf-a41cafd8771a-1.png",
    },
    {
        id: 27,
        name: "보핏",
        club: "SOPT",
        cohort: "36기",
        description: "누구나 보험을 이해하고 스스로 선택할 수 있도록 돕는 인슈어테크 서비스, 보핏",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/bdbc9bcf-d444-4e82-8f8d-122c63f0c2ff-368_208.png",
    },
    {
        id: 28,
        name: "하이링구얼 Hilingual",
        club: "SOPT",
        cohort: "36기",
        description: "일기로 시작하는 일상 속 영어 습관",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/d2670006-3723-4832-b306-6ac0d423aa15-527.png",
    },
    {
        id: 29,
        name: "Bye Boo",
        club: "SOPT",
        cohort: "36기",
        description: "이별 극복을 위한 단 하나의 가이드",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/ce567bbe-0361-46e2-b4a6-7cd8dfaeea2a-썸네일.png",
    },
    {
        id: 30,
        name: "이음상회",
        club: "SOPT",
        cohort: "36기",
        description: "지역과 사람을 잇는 로컬 특산품 공동구매 플랫폼",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/512fb836-db24-450e-8166-4225bb672f5e-Thumbnail.png",
    },
    {
        id: 31,
        name: "쪼매못났슈",
        club: "SOPT",
        cohort: "36기",
        description: "충청남도 기반 못난이 농산물 유통 서비스",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/a1e6bf1f-7541-42a9-963e-10f9616bf00f-1.png",
    },
    {
        id: 32,
        name: "감자가자",
        club: "SOPT",
        cohort: "36기",
        description: "전애인한테 연락해서라도 다시 가고 싶은 그 곳, 이제는 너에게 추천해줄게",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/f2c4773e-acbb-4f85-b791-db8bfabf7cd0-KakaoTalk_20250608_181643488_01.png",
    },
    {
        id: 1,
        name: "미나리",
        club: "프로그래피",
        cohort: "10기",
        description: "미래의 나를 위한 리허설, 미나리",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/minari/minarith.jpg",
        webLink: "https://minari-official.com/",
    },
    {
        id: 2,
        name: "LightON",
        club: "프로그래피",
        cohort: "10기",
        description: "로컬 공연 정보 큐레이션 및 사용자 취향 맞춤 음악 플랫폼",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/lighton/lightonth.jpg",
        link: "https://link.inpock.co.kr/lighton",
    },
    {
        id: 3,
        name: "체리단",
        club: "프로그래피",
        cohort: "10기",
        description: "흩어진 체험단 공고를 한곳에서 간편하게 보고, 찜하고, 바로 신청까지!",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/cherrydan/cherrydanth.jpg",
        webLink: "https://cherrydan.webflow.io",
    },
    {
        id: 4,
        name: "Zone2Be",
        club: "프로그래피",
        cohort: "10기",
        description: "심박수 조절을 통해 효과적인 지방 연소를 도와주는 운동 앱",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/zone2be/zone2beth.jpg",
        appStoreLink: "https://apps.apple.com/us/app/zone2be/id6748695230?l=ko",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.prography.zonetwobe",
    },
    {
        id: 5,
        name: "사초생",
        club: "프로그래피",
        cohort: "9기",
        description: "사회생활 고민은 사초생 투표로 해결해요. 비즈니스 매너, 경조사, 대인 관계, 커리어 정답 확인!",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/sachosang/sachosangth.jpg",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.sachosaeng.app",
    },
    {
        id: 6,
        name: "소울",
        club: "프로그래피",
        cohort: "7기",
        description: "인터넷 상에 분산되어있는 유용한 정보들만을 모아 취준생들에게 제공하는 앱",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/soul/thumbnail.jpg",
        appStoreLink: "https://apps.apple.com/kr/app/소울/id1619778072",
    },
    {
        id: 7,
        name: "이러나",
        club: "프로그래피",
        cohort: "8기",
        description: "혼자 일어나기 어려운 기상, 함께 하자! 참여자 모두가 기상해야 알람이 꺼지는 시스템",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/eruna/thumbnail.jpg",
        link: "https://github.com/Eruna-Jeoruna/jeoruna",
    },
    {
        id: 8,
        name: "MOMOKJI",
        club: "프로그래피",
        cohort: "8기",
        description: "냉장고에 있는 재료를 검색해 쉽고 멋진 요리를 만들어보세요. 요리 초보에게 추천하는 레시피 추천 서비스",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/momokji/thumbnail.jpg",
    },
    {
        id: 9,
        name: "카공실록",
        club: "프로그래피",
        cohort: "8기",
        description: "카공족을 위한 카공카페 검색 플랫폼. 주변 카페를 검색하고 와이파이, 테이블 정보를 탐색하세요",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/kagong/thumbnail.jpg",
    },
    {
        id: 10,
        name: "오늘 하루를 그려줘",
        club: "프로그래피",
        cohort: "8기",
        description: "하루동안 느낀 감정과 일상을 기록하면 AI가 멋진 그림으로 하루를 그려주는 서비스",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/todaydraw/thumbnail.jpg",
        link: "https://draw-my-today.notion.site/faa33d05815a4ec0acca04a3d882951c",
        appStoreLink: "https://apps.apple.com/kr/app/오늘-하루를-그려줘-ai-그림일기/id6447301941",
        playStoreLink: "https://play.google.com/store/apps/details?id=kr.co.devstory.draw_my_today",
    },
    {
        id: 11,
        name: "Aria",
        club: "프로그래피",
        cohort: "8기",
        description: "신인 작가들의 작품을 만날 수 있는 전시 플랫폼",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/aria/thumbnail.jpg",
    },
    {
        id: 12,
        name: "Jrnylist",
        club: "프로그래피",
        cohort: "8기",
        description: "P도 J가 되는 저니리스트. 여행 중 정산을 쉽고 빠르게, 가계부부터 일정 짜기까지!",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/jrnylist/thumbnail.jpg",
    },
    {
        id: 13,
        name: "Lovebird",
        club: "프로그래피",
        cohort: "8기",
        description: "연인과의 기억을 오래 간직할 수 있도록 일기, 타임라인, 데이트 일정을 기록하는 앱",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/lovebird/thumbnail.jpg",
        appStoreLink: "https://apps.apple.com/kr/app/lovebird-커플-공유-일기-앱/id6462698149",
    },
    {
        id: 14,
        name: "케이크크",
        club: "프로그래피",
        cohort: "8기",
        description: "지도로 한 눈에 보는 위치 기반 동네별 커스텀 케이크샵 정보 앱",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/cakk/thumbnail.jpg",
        appStoreLink: "https://apps.apple.com/kr/app/케이크크/id6449973946",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.prography.cakk",
    },
    {
        id: 15,
        name: "포동포동",
        club: "프로그래피",
        cohort: "7기",
        description: "게임하듯 즐기는 갓생라이프. 포모도로를 완주하면 동물 캐릭터를 얻고, 멀티모드로 친구들과 함께!",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/podong/thumbnail.jpg",
    },
    {
        id: 16,
        name: "날씨알리미",
        club: "프로그래피",
        cohort: "7기",
        description: "사용자가 지정한 시간에 날씨를 알려주고, 날씨에 알맞은 행동을 추천·알림해주는 서비스",
        image: "https://s3.ap-northeast-2.amazonaws.com/cdn.prography/project/nalssi/thumbnail.jpg",
    },
];

// --- 토너먼트 상태 ---
let currentRound = [];
let nextRound = [];
let matchIndex = 0;
let totalRounds = 0;
let completedMatches = 0;
let roundSize = 16;
let isAnimating = false;

// --- 통계 업데이트 ---
function updateStats() {
    document.getElementById('total-projects').textContent = projects.length;
}

// --- 토너먼트 버튼 동적 생성 ---
// 프로젝트 수 이하인 2의 제곱 옵션만 표시 (예: 20개 → 16강, 8강)
function renderTournamentButtons() {
    const container = document.getElementById('tournament-buttons');
    const sizes = [32, 16, 8, 4];
    const available = sizes.filter(s => projects.length >= s);

    if (available.length === 0) {
        container.innerHTML = '<p class="text-slate-400 dark:text-slate-500 text-sm">수상작 데이터가 준비 중입니다.</p>';
        return;
    }

    container.innerHTML = available.map((size, i) => {
        if (i === 0) {
            return `<button onclick="startTournament(${size})" class="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-amber-500/20">${size}강 시작</button>`;
        }
        return `<button onclick="startTournament(${size})" class="px-8 py-4 rounded-2xl bg-white dark:bg-card-dark border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-bold text-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all">${size}강 시작</button>`;
    }).join('');
}

// --- 셔플 (Fisher-Yates) ---
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// --- 링크 버튼 렌더링 (카드 클릭 이벤트 차단) ---
function renderLinkButtons(project) {
    const links = [
        { url: project.link,          icon: 'article',      label: '소개' },
        { url: project.webLink,       icon: 'language',     label: 'Web' },
        { url: project.appStoreLink,  icon: 'phone_iphone', label: 'App Store' },
        { url: project.playStoreLink, icon: 'android',      label: 'Play Store' },
    ].filter(l => l.url);

    if (links.length === 0) return '';

    const buttons = links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener"
           onclick="event.stopPropagation()"
           class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200 dark:border-border-dark text-slate-500 dark:text-slate-400 text-xs font-medium hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all">
            <span class="material-symbols-outlined text-sm">${l.icon}</span>${l.label}
        </a>
    `).join('');

    return `<div class="flex flex-wrap gap-1.5 mt-3">${buttons}</div>`;
}

// --- 대결 카드 렌더링 ---
function renderBattleCard(project) {
    return `
        <div class="tournament-card bg-white dark:bg-card-dark border-2 border-slate-200 dark:border-border-dark rounded-2xl overflow-hidden card-enter hover:border-amber-400 dark:hover:border-amber-500">
            <img src="${project.image}" alt="${project.name}" class="w-full h-48 object-cover object-center" loading="lazy" />
            <div class="p-4 sm:p-5">
                <h3 class="font-bold text-base sm:text-lg mb-1">${project.name}</h3>
                <p class="text-sm text-amber-600 dark:text-amber-400 font-medium mb-2">${project.club} ${project.cohort}</p>
                <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">${project.description}</p>
                ${renderLinkButtons(project)}
            </div>
        </div>
    `;
}

// --- 라운드 이름 ---
function getRoundName(size) {
    if (size === 2) return '결승';
    if (size === 4) return '준결승';
    return `${size}강`;
}

// --- 진행 상황 업데이트 ---
function updateProgress() {
    const currentRoundMatches = currentRound.length / 2;
    const currentMatchNum = matchIndex / 2 + 1;
    const roundName = getRoundName(currentRound.length);

    document.getElementById('round-label').textContent = `${roundName} ${currentMatchNum}/${currentRoundMatches}`;

    const pct = Math.round((completedMatches / totalRounds) * 100);
    document.getElementById('round-progress').textContent = `${pct}%`;
    document.getElementById('progress-bar').style.width = `${pct}%`;
}

// --- 현재 매치 표시 ---
function showCurrentMatch() {
    if (matchIndex >= currentRound.length) {
        if (nextRound.length === 1) {
            showResult(nextRound[0]);
            return;
        }
        currentRound = nextRound;
        nextRound = [];
        matchIndex = 0;
    }

    const left = currentRound[matchIndex];
    const right = currentRound[matchIndex + 1];

    document.getElementById('card-left').innerHTML = renderBattleCard(left);
    document.getElementById('card-right').innerHTML = renderBattleCard(right);

    updateProgress();
}

// --- 토너먼트 시작 ---
// size개를 랜덤 추첨해서 토너먼트 진행
window.startTournament = function(size) {
    roundSize = size;
    currentRound = shuffle(projects).slice(0, size);
    nextRound = [];
    matchIndex = 0;
    completedMatches = 0;
    isAnimating = false;

    // 총 매치 수 계산 (예: 16강 → 8+4+2+1 = 15)
    totalRounds = 0;
    let s = size;
    while (s > 1) {
        totalRounds += s / 2;
        s /= 2;
    }

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('battle-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');

    showCurrentMatch();
    trackEvent('tournament_start', { round_size: size });
};

// --- 승자 선택 ---
window.selectWinner = function(index) {
    if (isAnimating) return;
    isAnimating = true;

    const winner = currentRound[matchIndex + index];
    const loser = currentRound[matchIndex + (index === 0 ? 1 : 0)];

    const winnerCard = index === 0 ? document.getElementById('card-left') : document.getElementById('card-right');
    const loserCard = index === 0 ? document.getElementById('card-right') : document.getElementById('card-left');

    winnerCard.querySelector('.tournament-card').classList.add('card-winner');
    winnerCard.querySelector('.tournament-card').style.borderColor = '#f59e0b';
    loserCard.querySelector('.tournament-card').classList.add('card-loser');

    nextRound.push(winner);
    matchIndex += 2;
    completedMatches++;

    trackEvent('tournament_pick', {
        winner: winner.name,
        loser: loser.name,
        round: getRoundName(currentRound.length)
    });

    setTimeout(() => {
        isAnimating = false;
        showCurrentMatch();
    }, 600);
};

// --- 결과 표시 ---
function showResult(winner) {
    document.getElementById('battle-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    document.getElementById('winner-card').innerHTML = `
        <div class="bg-white dark:bg-card-dark border-2 border-amber-400 rounded-2xl overflow-hidden shadow-xl shadow-amber-500/10">
            <div class="relative">
                <img src="${winner.image}" alt="${winner.name}" class="w-full h-48 object-cover object-center" loading="lazy" />
                <div class="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">1st</div>
            </div>
            <div class="p-5 sm:p-6">
                <h3 class="font-bold text-xl sm:text-2xl mb-1">${winner.name}</h3>
                <p class="text-amber-600 dark:text-amber-400 font-medium mb-3">${winner.club} ${winner.cohort}</p>
                <p class="text-slate-500 dark:text-slate-400">${winner.description}</p>
                ${renderLinkButtons(winner)}
            </div>
        </div>
    `;

    spawnConfetti();

    trackEvent('tournament_complete', {
        winner: winner.name,
        winner_club: winner.club,
        round_size: roundSize
    });

    const results = JSON.parse(localStorage.getItem('tournament_results') || '[]');
    results.push({ name: winner.name, club: winner.club, date: new Date().toISOString() });
    localStorage.setItem('tournament_results', JSON.stringify(results.slice(-20)));
}

// --- Confetti ---
function spawnConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#f59e0b', '#ef4444', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899'];

    for (let i = 0; i < 60; i++) {
        const el = document.createElement('div');
        el.classList.add('confetti');
        el.style.left = Math.random() * 100 + '%';
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        el.style.animationDuration = (2 + Math.random() * 3) + 's';
        el.style.animationDelay = Math.random() * 1 + 's';
        el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        el.style.width = (6 + Math.random() * 8) + 'px';
        el.style.height = (6 + Math.random() * 8) + 'px';
        container.appendChild(el);
    }

    setTimeout(() => { container.innerHTML = ''; }, 5000);
}

// --- 리셋 ---
window.resetTournament = function() {
    document.getElementById('start-screen').classList.remove('hidden');
    document.getElementById('battle-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
};

// --- 공유 ---
window.shareTournament = function() {
    const winnerName = document.getElementById('winner-card').querySelector('h3')?.textContent || '';
    const text = `🏆 수상작 토너먼트에서 "${winnerName}"을(를) 우승으로 뽑았어요!\n\n나도 해보기 👉 ${window.location.origin}/tournament`;

    if (navigator.share) {
        navigator.share({ title: '수상작 토너먼트 결과', text }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.querySelector('#result-screen button:last-of-type');
            const original = btn.innerHTML;
            btn.innerHTML = '<span class="material-symbols-outlined text-base">check</span> 복사됨!';
            setTimeout(() => { btn.innerHTML = original; }, 2000);
        }).catch(() => {});
    }
};

// --- Analytics Helper ---
function trackEvent(name, params) {
    if (typeof window._firebaseLogEvent === 'function') {
        window._firebaseLogEvent(name, params);
    }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    renderTournamentButtons();
});
