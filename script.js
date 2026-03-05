/* /Users/iseungjun/Desktop/teca-official/script.js */

// Enums for better data management
const Eligibility = {
    UNIVERSITY: "대학생",
    WORKER: "현직자",
    SINCHON: "신촌지역대학생"
};

const Field = {
    PM: { name: "PM", class: "tag-pm" },
    DESIGN: { name: "Design", class: "tag-design" },
    IOS: { name: "iOS", class: "tag-ios" },
    ANDROID: { name: "Android", class: "tag-android" },
    WEB: { name: "WEB", class: "tag-frontend" },
    SPRING: { name: "SpringBoot", class: "tag-backend" },
    NODE: { name: "Node.js", class: "tag-backend" },
    FRONTEND: { name: "Frontend", class: "tag-frontend" },
    BACKEND: { name: "Backend", class: "tag-backend" },
    REACT_NATIVE: { name: "ReactNative", class: "tag-dev" },
    UX: { name: "UX", class: "tag-design" },
    DJANGO: { name: "Django", class: "tag-backend" },
    NONE: { name: "무관", class: "tag-neutral" },
    MARKETING: { name: "Marketing", class: "tag-marketing" },
    DEVELOPER: { name: "Developer", class: "tag-dev" },
    CLOUD: { name: "클라우드", class: "tag-dev" },
    VENDOR_NEUTRAL: { name: "무관", class: "tag-neutral" },
    DATA_ANALYSIS: { name: "데이터 분석", class: "tag-ai" },
    DATA_VIZ: { name: "데이터 시각화", class: "tag-ai" },
    DATA_ENGINEERING: { name: "데이터 엔지니어링", class: "tag-ai" },
    ML: { name: "머신러닝", class: "tag-ai" },
    DL: { name: "딥러닝", class: "tag-ai" },
    AI: { name: "AI", class: "tag-ai" },
    LLM: { name: "LLM", class: "tag-ai" },
    APP: { name: "앱", class: "tag-dev" },
    FLUTTER: { name: "Flutter", class: "tag-dev" },
    MANAGEMENT: { name: "경영", class: "tag-management" }
};

// 필터 카테고리 Enum
const Category = {
    PM: "PM",
    DESIGN: "디자인",
    AI: "AI",
    WEB: "웹",
    MOBILE: "모바일",
    BACKEND: "백엔드",
    ANY: "무관",
    CLOUD: "클라우드",
    MARKETING: "마케팅"
};

// 카테고리 → 필드 매핑
const FilterCategory = {
    [Category.PM]: ["PM"],
    [Category.DESIGN]: ["Design", "UX"],
    [Category.AI]: ["AI", "머신러닝", "딥러닝", "LLM", "데이터 분석", "데이터 시각화", "데이터 엔지니어링"],
    [Category.WEB]: ["WEB", "Frontend"],
    [Category.MOBILE]: ["Android", "iOS", "ReactNative", "Flutter", "앱"],
    [Category.BACKEND]: ["Backend", "SpringBoot", "Node.js", "Django"],
    [Category.ANY]: ["무관"],
    [Category.CLOUD]: ["클라우드"],
    [Category.MARKETING]: ["Marketing"]
};

// 페이지별 표시할 카테고리
const PAGE_CATEGORIES = {
    bootcamp: [Category.WEB, Category.BACKEND, Category.MOBILE, Category.AI, Category.CLOUD, Category.DESIGN, Category.MARKETING],
    marketing: [Category.PM, Category.DESIGN, Category.MARKETING],
    hackathon: [Category.AI, Category.WEB, Category.BACKEND, Category.MOBILE],
};

const Club = {
    // 2025-01-20
    GOORMTHON_UNIV: { name: "구름톤 유니브", link: "https://9oormthon.university/", dots: "🌕", icon: "☁️", themeColor: "slate-500", recruitStart: "2월 26일 2026", recruitEnd: "3월 23일 2026", activity: ["3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY], description: "'함께 성장'이라는 핵심가치를 실현하며 전국의 대학생들과 자유롭게 교류하고 학습하며 성장하는 카카오와 구름이 함께하는 대학생 대상 해커톤", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.SPRING, Field.REACT_NATIVE] },
    // 2025-02-18
    COTATO_1: { name: "코테이토 (1학기)", link: "https://www.cotato.kr/", dots: "🌕🌗", icon: "🥔", themeColor: "slate-500", recruitStart: "2월 19일 2026", recruitEnd: "2월 24일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "IT 서비스 기획부터 개발, 출시에 이르기까지 전 과정을 경험할 수 있는 대학생 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.NODE, Field.SPRING] },
    // 2025-03-08
    SOPT_1: { name: "SOPT (1학기)", link: "https://www.sopt.org/", icon: "📣", themeColor: "neon-green", dots: "🌕🌕🌗", recruitStart: "3월 8일 2025", recruitEnd: "3월 14일 2025", activity: ["3월"], eligibility: [Eligibility.UNIVERSITY], description: "국내 최대 규모 대학생 연합 IT 벤처 창업 동아리로 13년간 2400명이 수료하고 210개 서비스를 만든 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING, Field.FLUTTER] },
    // 2025-02-17
    UMC_1: { name: "UMC (1학기)", link: "https://umc.makeus.in/", dots: "🌕🌗", icon: "🪐", themeColor: "slate-500", recruitStart: "2월 17일 2025", recruitEnd: "3월 2일 2025", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "University MakeUs Challenge의 약자로, 전국 30여개 대학이 참여하는 국내 최대 규모의 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.NODE, Field.SPRING] },
    LIKELION: { name: "멋쟁이사자처럼 대학", link: "https://likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "2월 26일 2025", recruitEnd: "3월 7일 2025", activity: ["3월", "4월", "5월", "6월", "7월", "8월"], eligibility: [Eligibility.UNIVERSITY], description: "아이디어를 실현하고자 하는 의지를 가진 비전공자, 전공자 대학생들이 함께 모여 IT 서비스를 개발하고 기업가정신을 배우는 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.DJANGO, Field.SPRING] },
    // 2025-04-10
    YAPP_1: { name: "YAPP (1학기)", link: "https://www.yapp.co.kr/", dots: "🌕🌕🌕", icon: "📱", themeColor: "slate-500", recruitStart: "4월 10일 2025", recruitEnd: "4월 20일 2025", activity: ["3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "Your Application Partner의 약자로, 기획자, 디자이너, 개발자가 함께 서비스를 만들고 운영하며 성장하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
    // 2025-04-11
    DDD_1: { name: "DDD (1학기)", link: "https://www.instagram.com/dynamic_ddd", dots: "🌕🌕", icon: "💡", themeColor: "slate-500", recruitStart: "4월 11일 2025", recruitEnd: "4월 20일 2025", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "Develop, Design, Discover의 약자로, 디자이너와 개발자가 만나 새로운 가치를 발견하고 함께 성장하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
    // 2025-04-19
    CMC_1: { name: "CMC (1학기)", link: "https://cmc.makeus.in/", dots: "🌕🌕🌗", icon: "🚀", themeColor: "slate-500", recruitStart: "4월 19일 2025", recruitEnd: "4월 25일 2025", activity: ["3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "MakeUs Challenge의 약자로, 기획, 디자인, 개발 직군이 모여 실제 서비스를 런칭하고 운영하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING, Field.REACT_NATIVE] },
    // 2025-05-12
    NEXTERS_SUMMER: { name: "넥스터즈 (여름방학)", link: "https://nexters.co.kr/", dots: "🌕🌕🌕", icon: "🌊", themeColor: "slate-500", recruitStart: "5월 12일 2025", recruitEnd: "5월 21일 2025", activity: ["7월", "8월", "9월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "디자이너와 개발자가 모여 8주 동안 서비스를 만들고 런칭하는 것을 목표로 하는 동아리", fields: [Field.DESIGN, Field.ANDROID, Field.IOS, Field.FRONTEND, Field.BACKEND] },
    // 2025-05-28
    PIROGRAMMING_SUMMER: { name: "피로그래밍 (여름방학)", link: "https://pirogramming.com/", dots: "🌕", icon: "☕", themeColor: "slate-500", recruitStart: "5월 28일 2025", recruitEnd: "6월 6일 2025", activity: ["7월", "8월"], eligibility: [Eligibility.UNIVERSITY], description: "Python 웹 프로그래밍을 함께 공부하고 실제 서비스를 개발하며 성장하는 동아리", fields: [Field.WEB, Field.DJANGO] },
    // 2025-06-09
    TOBIGS_H2: { name: "투빅스 (하반기)", link: "https://tobigs-datamarket.github.io/", dots: "🌕🌕", icon: "📊", themeColor: "slate-500", recruitStart: "6월 9일 2025", recruitEnd: "6월 24일 2025", activity: ["7월", "8월", "9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "데이터 분석 및 AI 분야에 대한 학술적 깊이를 추구하며 함께 성장하는 데이터 분석 연합 동아리", fields: [Field.ML, Field.DL] },
    // 2025-06-12
    DND_SUMMER: { name: "DnD (여름방학)", link: "https://dnd.ac/", dots: "🌕🌕", icon: "🎲", themeColor: "slate-500", recruitStart: "6월 12일 2025", recruitEnd: "6월 22일 2025", activity: ["7월", "8월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "'프로젝트에 즐거움을, 모두에게 기회를'이라는 슬로건으로 8주간 기획자와 디자이너가 함께 협업하는 동아리", fields: [Field.PM, Field.DESIGN, Field.UX, Field.WEB, Field.IOS, Field.ANDROID, Field.SPRING] },
    // 2025-06-14
    AUSG: { name: "AUSG", link: "https://www.instagram.com/ausg.awskrug/", dots: "🌕🌕🌗", icon: "☁️", themeColor: "slate-500", recruitStart: "6월 14일 2025", recruitEnd: "6월 30일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "AWSKRUG University Student Group의 약자로, AWS를 공부하고 활용하는 대학생들의 커뮤니티", fields: [Field.NONE] },
    // 2025-06-16
    BOAZ_H2: { name: "보아즈 (하반기)", link: "https://www.bigdataboaz.com/", dots: "🌕🌕🌕", icon: "📈", themeColor: "slate-500", recruitStart: "6월 16일 2025", recruitEnd: "6월 25일 2025", activity: ["7월", "8월", "9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "국내 최초 빅데이터 동아리로, 6개월간 장기 프로젝트와 컨퍼런스 발표를 진행", fields: [Field.DATA_ANALYSIS, Field.DATA_VIZ, Field.DATA_ENGINEERING] },
    // 2025-06-30
    DEPROMEET_SUMMER: { name: "디프만 (여름방학)", link: "https://www.depromeet.com/", dots: "🌕🌕🌕", icon: "🤝", themeColor: "slate-500", recruitStart: "6월 30일 2025", recruitEnd: "7월 6일 2025", activity: ["7월", "8월", "9월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "디자이너와 개발자가 만나 사용자 중심의 프로덕트를 만들고 함께 성장하는 동아리", fields: [Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
    // 2025-07-17
    KUSITMS_2: { name: "큐시즘 (2학기)", link: "https://kusitms.com/", icon: "🎯", themeColor: "slate-500", dots: "🌕🌕🌗", recruitStart: "7월 17일 2025", recruitEnd: "7월 26일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "기획자, 디자이너, 개발자가 함께 모여 IT 서비스를 기획하고 개발하는 대학생 연합 IT 동아리", fields: [Field.PM, Field.DESIGN, Field.FRONTEND, Field.BACKEND] },
    // 2025-07-24
    PROMETHEUS_2: { name: "프로메테우스 (2학기)", link: "https://prometheus-ai.net/", dots: "🌕🌕🌕", icon: "🔥", themeColor: "slate-500", recruitStart: "7월 24일 2025", recruitEnd: "8월 2일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "AI 기술을 활용하여 사회적 가치를 창출하는 것을 목표로 하는 AI 연합 동아리", fields: [Field.AI] },
    // 2025-07-25
    CLOUD_CLUB_2: { name: "클라우드 클럽 (2학기)", link: "https://www.cloudclub.kr/", dots: "🌕🌗", icon: "☁️", themeColor: "slate-500", recruitStart: "7월 25일 2025", recruitEnd: "8월 4일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "클라우드 기술에 대한 지식을 공유하고 함께 성장하는 대학생 클라우드 엔지니어링 동아리", fields: [Field.CLOUD, Field.VENDOR_NEUTRAL] },
    // 2025-08-07
    TAVE_2: { name: "TAVE (2학기)", link: "https://www.tave-wave.com/", dots: "🌕🌕", icon: "💡", themeColor: "slate-500", recruitStart: "8월 7일 2025", recruitEnd: "8월 17일 2025", activity: ["9월", "10월", "11월", "12월", "1월"], eligibility: [Eligibility.UNIVERSITY], description: `TAVE는 "Tech And Value Exchange"의 약자로, 4차 산업혁명 시대의 핵심 기술(AI, 블록체인, 빅데이터 등)을 함께 공부하고, 실제 아이디어를 구현하여 가치를 창출하는 동아리입니다.`, fields: [Field.DESIGN, Field.ANDROID, Field.WEB, Field.BACKEND, Field.DATA_ANALYSIS, Field.DL] },
    // 2025-08-15
    ITTA_2: { name: "잇타 (2학기)", link: "https://www.instagram.com/its_stime_", dots: "🌕🌗", icon: "✨", themeColor: "slate-500", recruitStart: "8월 15일 2025", recruitEnd: "8월 24일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "IT's TIME의 줄임말로, 기획자, 디자이너, 개발자가 모여 IT 프로젝트를 진행하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.BACKEND] },
    // 2025-08-18
    COTATO_2: { name: "코테이토 (2학기)", link: "https://www.cotato.kr/", dots: "🌕🌗", icon: "🥔", themeColor: "slate-500", recruitStart: "8월 18일 2025", recruitEnd: "8월 25일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "IT 서비스 기획부터 개발, 출시에 이르기까지 전 과정을 경험할 수 있는 대학생 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.NODE, Field.SPRING] },
    UMC_2: { name: "UMC (2학기)", link: "https://umc.makeus.in/", dots: "🌕🌗", icon: "🪐", themeColor: "slate-500", recruitStart: "8월 18일 2025", recruitEnd: "8월 28일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "University MakeUs Challenge의 약자로, 전국 30여개 대학이 참여하는 국내 최대 규모의 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.NODE, Field.SPRING] },
    // 2025-08-20
    CEOS_2: { name: "CEOS (2학기)", link: "https://ceos-sinchon.com/", dots: "🌕🌕", icon: "🦄", themeColor: "slate-500", recruitStart: "8월 20일 2025", recruitEnd: "8월 27일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.SINCHON], description: "신촌지역 5개 대학(서강대, 숙명여대, 연세대, 이화여대, 홍익대) 학생들이 모여 창업 및 IT 서비스를 개발하는 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.SPRING] },
    // 2025-09-06
    SOPT_2: { name: "SOPT (2학기)", link: "https://www.sopt.org/", dots: "🌕🌕🌗", icon: "📣", themeColor: "slate-500", recruitStart: "9월 6일 2025", recruitEnd: "9월 12일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "국내 최대 규모 대학생 연합 IT 벤처 창업 동아리로 13년간 2400명이 수료하고 210개 서비스를 만든 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING, Field.FLUTTER] },
    // 2025-09-08
    SIPE_2: { name: "sipe (2학기)", link: "https://sipe.team/", dots: "🌕🌗", icon: "☘️", themeColor: "slate-500", recruitStart: "9월 8일 2025", recruitEnd: "9월 22일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.WORKER], description: "Side Project Enthusiasts의 약자로, 사이드 프로젝트에 대한 열정을 가진 사람들이 모여 함께 성장하는 동아리", fields: [Field.NONE] },
    // 2025-10-19
    YAPP_2: { name: "YAPP (2학기)", link: "https://www.yapp.co.kr/", dots: "🌕🌕🌕", icon: "📱", themeColor: "slate-500", recruitStart: "10월 19일 2025", recruitEnd: "10월 27일 2025", activity: ["9월", "10월", "11월", "12월", "1월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "Your Application Partner의 약자로, 기획자, 디자이너, 개발자가 함께 서비스를 만들고 운영하며 성장하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
    // 2025-10-28
    CMC_2: { name: "CMC (2학기)", link: "https://cmc.makeus.in/", dots: "🌕🌕🌗", icon: "🚀", themeColor: "slate-500", recruitStart: "10월 28일 2025", recruitEnd: "11월 5일 2025", activity: ["9월", "10월", "11월", "12월", "1월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "MakeUs Challenge의 약자로, 기획, 디자인, 개발 직군이 모여 실제 서비스를 런칭하고 운영하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING, Field.REACT_NATIVE] },
    // 2025-10-30
    DDD_2: { name: "DDD (2학기)", link: "https://www.instagram.com/dynamic_ddd", dots: "🌕🌕", icon: "💡", themeColor: "slate-500", recruitStart: "10월 30일 2025", recruitEnd: "11월 12일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "Develop, Design, Discover의 약자로, 디자이너와 개발자가 만나 새로운 가치를 발견하고 함께 성장하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
    // 2025-11-11
    NEXTERS_WINTER: { name: "넥스터즈 (겨울방학)", link: "https://nexters.co.kr/", dots: "🌕🌕🌕", icon: "🌊", themeColor: "slate-500", recruitStart: "11월 11일 2025", recruitEnd: "11월 20일 2025", activity: ["1월", "2월", "3월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "디자이너와 개발자가 모여 8주 동안 서비스를 만들고 런칭하는 것을 목표로 하는 동아리", fields: [Field.DESIGN, Field.ANDROID, Field.IOS, Field.FRONTEND, Field.BACKEND] },
    // 2025-11-17
    DND_WINTER: { name: "DnD (겨울방학)", link: "https://dnd.ac/", dots: "🌕🌕", icon: "🎲", themeColor: "slate-500", recruitStart: "11월 17일 2025", recruitEnd: "12월 17일 2025", activity: ["1월", "2월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "'프로젝트에 즐거움을, 모두에게 기회를'이라는 슬로건으로 8주간 기획자와 디자이너가 함께 협업하는 동아리", fields: [Field.PM, Field.DESIGN, Field.UX, Field.WEB, Field.IOS, Field.ANDROID, Field.SPRING] },
    // 2025-11-29
    PIROGRAMMING_WINTER: { name: "피로그래밍 (겨울방학)", link: "https://pirogramming.com/", dots: "🌕", icon: "☕", themeColor: "slate-500", recruitStart: "11월 29일 2025", recruitEnd: "12월 6일 2025", activity: ["1월", "2월"], eligibility: [Eligibility.UNIVERSITY], description: "Python 웹 프로그래밍을 함께 공부하고 실제 서비스를 개발하며 성장하는 동아리", fields: [Field.WEB, Field.DJANGO] },
    // 2025-12-08
    BOAZ_H1: { name: "보아즈 (상반기)", link: "https://www.bigdataboaz.com/", dots: "🌕🌕", icon: "📈", themeColor: "slate-500", recruitStart: "12월 8일 2025", recruitEnd: "12월 22일 2025", activity: ["1월", "2월", "3월", "4월", "5월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "국내 최초 빅데이터 동아리로, 6개월간 장기 프로젝트와 컨퍼런스 발표를 진행", fields: [Field.DATA_ANALYSIS, Field.DATA_VIZ, Field.DATA_ENGINEERING] },
    // 2025-12-17
    TOBIGS_H1: { name: "투빅스 (상반기)", link: "https://tobigs-datamarket.github.io/", dots: "🌕🌕", icon: "📊", themeColor: "slate-500", recruitStart: "12월 17일 2025", recruitEnd: "12월 31일 2025", activity: ["1월", "2월", "3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "데이터 분석 및 AI 분야에 대한 학술적 깊이를 추구하며 함께 성장하는 데이터 분석 연합 동아리", fields: [Field.ML, Field.DL] },
    // 2025-12-22
    TEAM_WHITE: { name: "팀 화이트 (1학기)", link: "https://www.instagram.com/teamwhite_official/", dots: "🌕🌕", icon: "🏳️", themeColor: "slate-500", recruitStart: "12월 22일 2025", recruitEnd: "1월 4일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "브랜드의 본질을 배우고 알리는 브랜드 전문가 양성 기관 (선교육 후선발)", fields: [Field.MARKETING] },
    // 2026-01-03
    SIPE_1: { name: "sipe (1학기)", link: "https://sipe.team/", dots: "🌕🌗", icon: "☘️", themeColor: "slate-500", recruitStart: "1월 3일 2026", recruitEnd: "1월 5일 2026", activity: ["2월, 3월", "4월", "5월", "6월"], eligibility: [Eligibility.WORKER], description: "Side Project Enthusiasts의 약자로, 사이드 프로젝트에 대한 열정을 가진 사람들이 모여 함께 성장하는 동아리", fields: [Field.NONE] },
    // 2026-01-17
    KUSITMS_1: { name: "큐시즘 (1학기)", link: "https://kusitms.com/", icon: "🎯", themeColor: "slate-500", dots: "🌕🌕🌗", recruitStart: "1월 17일 2026", recruitEnd: "1월 24일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "기획자, 디자이너, 개발자가 함께 모여 IT 서비스를 기획하고 개발하는 대학생 연합 IT 동아리", fields: [Field.PM, Field.DESIGN, Field.FRONTEND, Field.BACKEND] },
    // 2026-01-28
    MASHUP: { name: "MASH-UP", link: "https://mash-up.kr/", icon: "🧩", themeColor: "neon-blue", dots: "🌕🌕🌕", recruitStart: "1월 28일 2026", recruitEnd: "2월 15일 2026", activity: ["1월", "2월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "개발과 디자인에 진심인 사람들이 모여 웹/앱 서비스 출시를 목표로 하는 IT 연합동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.NODE, Field.SPRING] },
    // 2026-02-01
    PROMETHEUS_1: { name: "프로메테우스 (1학기)", link: "https://prometheus-ai.net/", dots: "🌕🌕🌕", icon: "🔥", themeColor: "slate-500", recruitStart: "2월 1일 2026", recruitEnd: "2월 14일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "AI 기술을 활용하여 사회적 가치를 창출하는 것을 목표로 하는 AI 연합 동아리", fields: [Field.AI] },
    // 2026-02-04
    TAVE_1: { name: "TAVE (1학기)", link: "https://www.tave-wave.com/", dots: "🌕🌕", icon: "💡", themeColor: "slate-500", recruitStart: "2월 4일 2026", recruitEnd: "2월 15일 2026", activity: ["3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY], description: `TAVE는 "Tech And Value Exchange"의 약자로, 4차 산업혁명 시대의 핵심 기술(AI, 블록체인, 빅데이터 등)을 함께 공부하고, 실제 아이디어를 구현하여 가치를 창출하는 동아리입니다.`, fields: [Field.DESIGN, Field.FRONTEND, Field.BACKEND, Field.DATA_ANALYSIS, Field.DL] },
    // 2026-02-06
    ITTA_1: { name: "잇타 (1학기)", link: "https://www.instagram.com/its_stime_", dots: "🌕🌗", icon: "✨", themeColor: "slate-500", recruitStart: "2월 6일 2026", recruitEnd: "2월 14일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "IT's TIME의 줄임말로, 기획자, 디자이너, 개발자가 모여 IT 프로젝트를 진행하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.BACKEND] },
    // 2026-02-10
    DF: { name: "DF (1학기)", link: "", dots: "🌕🌕", icon: "📊", themeColor: "slate-500", recruitStart: "2월 10일 2026", recruitEnd: "2월 24일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "경영학도를 위한 데이터 분석 입문 및 경진대회(Kaggle) 참여 동아리", fields: [Field.DATA_ANALYSIS] },
    POST_UNIV: { name: "포스트유니브 (1학기)", link: "https://www.instagram.com/postuniv_official/", dots: "🌕🌕", icon: "🎨", themeColor: "slate-500", recruitStart: "2월 10일 2026", recruitEnd: "2월 22일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "대학생이 직접 만드는 크리에이티브 매거진 & 광고 기획 동아리", fields: [Field.MARKETING, Field.DESIGN] },
    ADPOWER: { name: "애드파워 (1학기)", link: "http://adpower.org/", dots: "🌕🌕🌗", icon: "⚡", themeColor: "slate-500", recruitStart: "2월 10일 2026", recruitEnd: "3월 1일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "광고의 힘을 믿는 대학생들의 모임, PBA 프로젝트 수행", fields: [Field.MARKETING, Field.PM] },
    // 2026-02-12
    DEPROMEET_1: { name: "디프만 (1학기)", link: "https://www.depromeet.com/", dots: "🌕🌕🌕", icon: "🤝", themeColor: "slate-500", recruitStart: "2월 12일 2026", recruitEnd: "2월 18일 2026", activity: ["3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "디자이너와 개발자가 만나 사용자 중심의 프로덕트를 만들고 함께 성장하는 동아리", fields: [Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
    // 2026-02-13
    CEOS_1: { name: "CEOS (1학기)", link: "https://ceos-sinchon.com/", dots: "🌕🌕", icon: "🦄", themeColor: "slate-500", recruitStart: "2월 13일 2026", recruitEnd: "2월 24일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.SINCHON], description: "신촌지역 5개 대학(서강대, 숙명여대, 연세대, 이화여대, 홍익대) 학생들이 모여 창업 및 IT 서비스를 개발하는 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.SPRING] },
    // 2026-02-14
    PROGRAPHY: { name: "프로그래피 Prography", link: "https://prography.org/", icon: "💻", themeColor: "neon-pink", dots: "🌕🌕🌗", recruitStart: "2월 14일 2026", recruitEnd: "2월 26일 2026", activity: ["1월", "2월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "디자이너, 개발자, P.O, 마케터가 모여 하나의 프로덕트를 만들고 운영하며 함께 성장하는 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.IOS, Field.ANDROID, Field.WEB, Field.SPRING, Field.MARKETING] },
    MCL: { name: "MCL (1학기)", link: "http://mcl.or.kr/", dots: "🌕🌕🌕", icon: "💡", themeColor: "slate-500", recruitStart: "2월 14일 2026", recruitEnd: "2월 25일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "전략적 사고와 논리력을 기르는 마케팅 전략 학회 (대기업 연계 프로젝트 중심)", fields: [Field.MARKETING, Field.PM] },
    // 2026-02-15
    ADPIA: { name: "애드피아 (1학기)", link: "http://www.adpia.or.kr/", dots: "🌕🌕", icon: "📣", themeColor: "slate-500", recruitStart: "2월 15일 2026", recruitEnd: "3월 5일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "35년 전통의 대학생 연합 광고 동아리 (기획/카피/디자인/영상 로테이션)", fields: [Field.MARKETING, Field.DESIGN, Field.UX] },
    // 2026-02-18
    EIC: { name: "EIC (1학기)", link: "http://fki-eic.org/", dots: "🌕🌕", icon: "🏢", themeColor: "slate-500", recruitStart: "2월 18일 2026", recruitEnd: "2월 28일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "전경련 산하 경제경영 동아리. 시장경제 심화 학습 및 다양한 기업 탐방", fields: [Field.MARKETING, Field.PM] },
    // 2026-02-20
    SOME: { name: "SoME (1학기)", link: "https://cafe.naver.com/koreansome", dots: "🌕🌕", icon: "🧩", themeColor: "slate-500", recruitStart: "1월 26일 2026", recruitEnd: "2월 8일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "마케팅 전략 및 기획을 실전처럼 경험하는 연합 마케팅 학회", fields: [Field.MARKETING, Field.PM] },
    // 2026-02-24
    YLC: { name: "YLC (1학기)", link: "http://ylc.or.kr/", dots: "🌕🌕", icon: "🌐", themeColor: "slate-500", recruitStart: "2월 6일 2026", recruitEnd: "2월 17일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "전국 규모의 예비 리더 양성 경제 동아리 (경제 세미나, 인적 네트워크)", fields: [Field.MARKETING, Field.PM] },
    // 2026-05-23
    TEAM_WHITE_2: { name: "팀 화이트 (2학기)", link: "https://www.instagram.com/teamwhite_official/", dots: "🌕🌕", icon: "🏳️", themeColor: "slate-500", recruitStart: "5월 23일 2026", recruitEnd: "6월 8일 2026", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "브랜드의 본질을 배우고 알리는 브랜드 전문가 양성 기관 (하반기 활동)", fields: [Field.MARKETING] },
    // 2026-07-19
    EIC_2: { name: "EIC (2학기)", link: "http://fki-eic.org/", dots: "🌕🌕", icon: "🏢", themeColor: "slate-500", recruitStart: "7월 19일 2026", recruitEnd: "8월 11일 2026", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "전경련 산하 경제경영 동아리, 하반기 신입 회원 모집", fields: [Field.MARKETING, Field.PM] },
    // 2026-07-27
    POST_UNIV_2: { name: "포스트유니브 (2학기)", link: "https://www.instagram.com/postuniv_official/", dots: "🌕🌕", icon: "🎨", themeColor: "slate-500", recruitStart: "7월 27일 2026", recruitEnd: "8월 11일 2026", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "대학생이 직접 만드는 크리에이티브 매거진 & 광고 기획 (하반기)", fields: [Field.MARKETING, Field.DESIGN] },
    // 2026-07-30
    SOME_2: { name: "SoME (2학기)", link: "https://cafe.naver.com/koreansome", dots: "🌕🌕", icon: "🧩", themeColor: "slate-500", recruitStart: "7월 27일 2025", recruitEnd: "8월 11일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "마케팅 전략 및 기획을 실전처럼 경험하는 연합 마케팅 학회 (하반기)", fields: [Field.MARKETING, Field.PM] },
    // 2026-07-31
    YLC_2: { name: "YLC (2학기)", link: "http://ylc.or.kr/", dots: "🌕🌕", icon: "🌐", themeColor: "slate-500", recruitStart: "7월 31일 2026", recruitEnd: "8월 11일 2026", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "전국 규모의 예비 리더 양성 경제 동아리 (하반기 모집)", fields: [Field.MARKETING, Field.PM] },
    // 2026-08-10
    DF_2: { name: "DF (2학기)", link: "", dots: "🌕🌕", icon: "📊", themeColor: "slate-500", recruitStart: "8월 10일 2026", recruitEnd: "8월 24일 2026", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "데이터 분석 입문 및 경진대회 참여 동아리 (하반기)", fields: [Field.DATA_ANALYSIS] },
    // 2026-08-14
    MCL_2: { name: "MCL (2학기)", link: "http://mcl.or.kr/", dots: "🌕🌕🌕", icon: "💡", themeColor: "slate-500", recruitStart: "8월 14일 2026", recruitEnd: "8월 25일 2026", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "전략적 사고와 논리력을 기르는 마케팅 전략 학회 (하반기 모집)", fields: [Field.MARKETING, Field.PM] },
};

const BootcampCost = {
    FREE: "무료",
    GOV_FUNDED: "국비지원",
    PAID: "유료"
};

const Bootcamp = {
    // ── 모집 시작월 기준 정렬 ──
    KAKAO_TECH_FULLSTACK: { name: "카카오 테크 부트캠프 (풀스택)", link: "https://kakaotechbootcamp.com/", dots: "🌕🌕🌕", icon: "💛", themeColor: "slate-500", recruitStart: "2월 26일 2026", recruitEnd: "3월 22일 2026", activity: ["5월", "6월", "7월", "8월", "9월", "10월", "11월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "Java, React, SpringBoot, MySQL을 활용한 풀스택 개발자 양성 과정입니다. 교육 일정: 26.5.12 - 26.11.17", fields: [Field.FRONTEND, Field.BACKEND] },
    KAKAO_TECH_AI: { name: "카카오 테크 부트캠프 (AI 실무)", link: "https://kakaotechbootcamp.com/", dots: "🌕🌕🌕", icon: "💛", themeColor: "slate-500", recruitStart: "2월 26일 2026", recruitEnd: "3월 22일 2026", activity: ["미정"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "AI 이론과 LLM 기반 서비스 개발을 배우고, 서비스 구현·기술 통합 역량을 키우는 실무 개발자 과정입니다. (DeepLearning, NLP, FastAPI, Transformer)", fields: [Field.AI, Field.DL] },
    KAKAO_TECH_CLOUD: { name: "카카오 테크 부트캠프 (클라우드 네이티브)", link: "https://kakaotechbootcamp.com/", dots: "🌕🌕🌕", icon: "💛", themeColor: "slate-500", recruitStart: "2월 26일 2026", recruitEnd: "3월 22일 2026", activity: ["미정"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "클라우드 네이티브 환경에서 백엔드 개발과 서비스 운영 전 과정을 경험하며 실전 역량을 키우는 과정입니다. (Java, SpringBoot, Docker, Kubernetes)", fields: [Field.CLOUD, Field.BACKEND] },

    // 1월 — AI·SW마에스트로 서울 17기 (모집 마감)
    SWM_SEOUL: { name: "AI·SW마에스트로 서울", link: "https://swmaestro.ai/", dots: "🌕🌕🌕", icon: "🎓", themeColor: "slate-500", recruitStart: "1월 12일 2026", recruitEnd: "2월 11일 2026", activity: ["5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.FREE], description: "과기정통부 주관 AI·SW 핵심 인재 양성 프로그램 17기. 월 100만원 장학금, IT기기 300만원, 팀별 1,200만원 지원. 경쟁률 19:1", fields: [Field.NONE] },

    // 2월 — AI·SW마에스트로 부산 17기
    SWM_BUSAN: { name: "AI·SW마에스트로 부산", link: "https://swmaestro.ai/busan/", dots: "🌕🌕🌕", icon: "🎓", themeColor: "slate-500", recruitStart: "2월 13일 2026", recruitEnd: "3월 12일 2026", activity: ["7월", "8월", "9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.FREE], description: "과기정통부 주관 AI·SW 핵심 인재 양성 프로그램 부산센터 17기. 월 100만원 장학금, IT기기 300만원, 팀별 1,200만원 지원. 150명 선발", fields: [Field.NONE] },

    // 1월 — 멋사 그로스 마케팅 4기
    LIKELION_GROWTH: { name: "멋사 그로스 마케팅", link: "https://bootcamp.likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "1월 29일 2026", recruitEnd: "3월 8일 2026", activity: ["3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "멋쟁이사자처럼 그로스 마케팅 부트캠프 4기. 약 5개월 국비지원 과정", fields: [Field.MARKETING] },

    // 1월 — 멋사 백엔드(Java) 23기
    LIKELION_BE_JAVA: { name: "멋사 백엔드 (Java)", link: "https://bootcamp.likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "1월 14일 2026", recruitEnd: "2월 19일 2026", activity: ["2월", "3월", "4월", "5월", "6월", "7월", "8월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "멋쟁이사자처럼 백엔드 부트캠프 23기. Java, Spring 중심 6개월 과정", fields: [Field.BACKEND] },

    // 2월 — 멋사 클라우드 6기
    LIKELION_CLOUD: { name: "멋사 클라우드", link: "https://bootcamp.likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "2월 5일 2026", recruitEnd: "3월 23일 2026", activity: ["3월", "4월", "5월", "6월", "7월", "8월", "9월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "멋쟁이사자처럼 클라우드 엔지니어링 부트캠프 6기. AWS, Docker, Kubernetes 약 6개월 과정", fields: [Field.CLOUD] },

    // 2월 — 멋사 AI 엔지니어(NLP) 4기
    LIKELION_AI: { name: "멋사 AI 엔지니어", link: "https://bootcamp.likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "2월 10일 2026", recruitEnd: "3월 16일 2026", activity: ["3월", "4월", "5월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "멋쟁이사자처럼 AI 엔지니어(NLP) 부트캠프 4기. 자연어처리 약 10주 과정", fields: [Field.AI] },

    // 4월 하순 — SSAFY 상반기 (매년 4월 하순~5월 초, 패턴 일정)
    SSAFY_1: { name: "SSAFY (상반기)", link: "https://www.ssafy.com/", dots: "🌕🌕🌕", icon: "💙", themeColor: "slate-500", recruitStart: "4월 22일 2026", recruitEnd: "5월 9일 2026", activity: ["7월", "8월", "9월", "10월", "11월", "12월", "1월", "2월", "3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], cost: [BootcampCost.FREE], description: "삼성에서 운영하는 12개월 집중 SW 교육. 수료 후 삼성 계열사 입사 기회 제공", fields: [Field.FRONTEND, Field.BACKEND, Field.ANDROID] },

    // 5월 — Apple Developer Academy (매년 5~12월 장기 모집, 패턴 일정)
    APPLE_ACADEMY: { name: "Apple Developer Academy", link: "https://developeracademy.postech.ac.kr/", dots: "🌕🌕🌕", icon: "🍎", themeColor: "slate-500", recruitStart: "5월 1일 2026", recruitEnd: "12월 7일 2026", activity: ["3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.FREE], description: "Apple과 POSTECH이 운영하는 9개월 iOS 개발 교육. 장비 무상대여 + 월 110만원 장학금", fields: [Field.IOS, Field.DESIGN] },

    // 5월 하순 — 부스트캠프 웹/모바일 (매년 5월 말~6월 초, 패턴 일정)
    BOOSTCAMP_WEB: { name: "네이버 부스트캠프 (웹/모바일)", link: "https://boostcamp.connect.or.kr/", dots: "🌕🌕🌕", icon: "💚", themeColor: "slate-500", recruitStart: "5월 25일 2026", recruitEnd: "6월 8일 2026", activity: ["8월", "9월", "10월", "11월", "12월", "1월", "2월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.FREE], description: "네이버 커넥트재단 웹/모바일 과정. 웹 풀스택, iOS, Android 트랙 운영", fields: [Field.WEB, Field.IOS, Field.ANDROID] },

    // 6월 — KT AIVLE School 상반기 (대체로 6~7월, 패턴 대체로 일정)
    KRAFTON_JUNGLE: { name: "크래프톤 정글", link: "https://jungle.krafton.com/", dots: "🌕🌕🌗", icon: "🌿", themeColor: "slate-500", recruitStart: "6월 8일 2026", recruitEnd: "7월 5일 2026", activity: ["8월", "9월", "10월", "11월", "12월", "1월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "크래프톤에서 운영하는 5개월 CS 집중 교육. 국비지원(내일배움카드) 또는 자비(250만원) 참여 가능", fields: [Field.BACKEND, Field.AI] },
    KT_AIVLE_1: { name: "KT AIVLE School (상반기)", link: "https://aivle.kt.co.kr/", dots: "🌕🌕", icon: "🔴", themeColor: "slate-500", recruitStart: "6월 10일 2026", recruitEnd: "7월 1일 2026", activity: ["8월", "9월", "10월", "11월", "12월", "1월"], eligibility: [Eligibility.UNIVERSITY], cost: [BootcampCost.GOV_FUNDED], description: "KT에서 운영하는 AI 전문가 양성 6개월 과정. 내일배움카드 필요", fields: [Field.AI] },

    // 7월 — 부스트캠프 AI Tech (최근 7~8월로 수렴, 기수마다 상이)
    BOOSTCAMP_AI: { name: "네이버 부스트캠프 (AI Tech)", link: "https://boostcamp.connect.or.kr/", dots: "🌕🌕🌕", icon: "💚", themeColor: "slate-500", recruitStart: "7월 14일 2026", recruitEnd: "8월 14일 2026", activity: ["9월", "10월", "11월", "12월", "1월", "2월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.FREE], description: "네이버 커넥트재단 AI 과정. CV, NLP, 추천시스템 트랙 운영", fields: [Field.AI] },

    // 9월 하순 — 우아한테크코스 (매년 9월 말~10월 초, 패턴 일정)
    WOOWACOURSE: { name: "우아한테크코스", link: "https://www.woowacourse.io/", dots: "🌕🌕🌕", icon: "🍊", themeColor: "slate-500", recruitStart: "9월 29일 2026", recruitEnd: "10월 10일 2026", activity: ["2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.FREE], description: "우아한형제들에서 운영하는 10개월 실무형 개발자 교육 프로그램", fields: [Field.FRONTEND, Field.BACKEND, Field.ANDROID] },

    // 10월 하순 — SSAFY 하반기 (매년 10월 하순~11월 초, 패턴 일정)
    SSAFY_2: { name: "SSAFY (하반기)", link: "https://www.ssafy.com/", dots: "🌕🌕🌕", icon: "💙", themeColor: "slate-500", recruitStart: "10월 20일 2026", recruitEnd: "11월 3일 2026", activity: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], cost: [BootcampCost.FREE], description: "삼성에서 운영하는 12개월 집중 SW 교육. 수료 후 삼성 계열사 입사 기회 제공", fields: [Field.FRONTEND, Field.BACKEND, Field.ANDROID] },

    // 12월 — KT AIVLE School 하반기 (대체로 12~1월, 패턴 대체로 일정)
    KT_AIVLE_2: { name: "KT AIVLE School (하반기)", link: "https://aivle.kt.co.kr/", dots: "🌕🌕", icon: "🔴", themeColor: "slate-500", recruitStart: "12월 8일 2026", recruitEnd: "1월 7일 2027", activity: ["2월", "3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY], cost: [BootcampCost.GOV_FUNDED], description: "KT에서 운영하는 AI 전문가 양성 6개월 과정. 내일배움카드 필요", fields: [Field.AI] },

    // 내일배움캠프 트랙별
    NBC_UNREAL: { name: "내일배움캠프 언리얼 게임 개발", link: "https://nbcamp.spartacodingclub.kr/", dots: "🌕", icon: "🏋️", themeColor: "slate-500", recruitStart: "2월 1일 2026", recruitEnd: "2월 22일 2026", activity: ["3월", "4월", "5월", "6월", "7월", "8월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "스파르타 내일배움캠프 언리얼 게임 개발 과정. 국비지원", fields: [Field.BACKEND] },
    NBC_BACKEND: { name: "내일배움캠프 백엔드", link: "https://nbcamp.spartacodingclub.kr/", dots: "🌕", icon: "🏋️", themeColor: "slate-500", recruitStart: "2월 1일 2026", recruitEnd: "3월 8일 2026", activity: ["3월", "4월", "5월", "6월", "7월", "8월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "스파르타 내일배움캠프 백엔드 과정. 국비지원", fields: [Field.BACKEND] },
    NBC_JAVA: { name: "내일배움캠프 Java", link: "https://nbcamp.spartacodingclub.kr/", dots: "🌕", icon: "🏋️", themeColor: "slate-500", recruitStart: "3월 5일 2026", recruitEnd: "4월 6일 2026", activity: ["4월", "5월", "6월", "7월", "8월", "9월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "스파르타 내일배움캠프 Java 과정. 국비지원", fields: [Field.BACKEND] },

    // 멋사 부트캠프 트랙별 (모집 마감)
    LIKELION_PYTHON: { name: "멋사 Python", link: "https://bootcamp.likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "9월 26일 2025", recruitEnd: "11월 23일 2025", activity: ["12월", "1월", "2월", "3월", "4월", "5월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "멋쟁이사자처럼 Python 부트캠프. Django, FastAPI 중심 6개월 과정", fields: [Field.BACKEND] },
    LIKELION_DATA: { name: "멋사 데이터 분석", link: "https://bootcamp.likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "10월 14일 2025", recruitEnd: "11월 23일 2025", activity: ["12월", "1월", "2월", "3월", "4월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "멋쟁이사자처럼 데이터 분석 부트캠프. Tableau, 머신러닝/딥러닝 5개월 과정", fields: [Field.AI] },
    LIKELION_UXUI: { name: "멋사 UX/UI 디자인", link: "https://bootcamp.likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "10월 29일 2025", recruitEnd: "12월 12일 2025", activity: ["1월", "2월", "3월", "4월", "5월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], cost: [BootcampCost.GOV_FUNDED], description: "멋쟁이사자처럼 UX/UI 디자인 부트캠프. Figma 중심 4~5개월 과정", fields: [Field.DESIGN] },
};

const HackathonPrize = {
    PRIZE: "상금",
    RECRUITMENT: "채용우대",
    RESEARCH: "연구지원",
    CERTIFICATE: "수료증"
};

const Hackathon = {
    SWIFT_CHALLENGE: { name: "Apple Swift Student Challenge", link: "https://developer.apple.com/swift-student-challenge/", dots: "🌕🌕🌕", icon: "🍎", themeColor: "slate-500", recruitStart: "2월 6일 2026", recruitEnd: "2월 28일 2026", activity: ["2월"], eligibility: [Eligibility.UNIVERSITY], prize: [HackathonPrize.CERTIFICATE], description: "Apple 주관 Swift Student Challenge. App Playground 제출, 350명 수상, 상위 50명 WWDC 초청", fields: [Field.IOS] },
    SCPC: { name: "Samsung SCPC", link: "https://research.samsung.com/scpc", dots: "🌕🌕🌕", icon: "💙", themeColor: "slate-500", recruitStart: "6월 11일 2025", recruitEnd: "7월 10일 2025", activity: ["6월", "7월", "8월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], prize: [HackathonPrize.PRIZE, HackathonPrize.RECRUITMENT], description: "삼성전자 주관 프로그래밍 경진대회. AI/알고리즘 트랙 분리, 총상금 약 1억원, 삼성 채용 우대", fields: [Field.AI, Field.BACKEND] },
    SKT_FELLOWSHIP: { name: "SKT AI Fellowship", link: "https://devocean.sk.com/community/aiFellowshipRecruitment.do", dots: "🌕🌕", icon: "🟣", themeColor: "slate-500", recruitStart: "4월 15일 2026", recruitEnd: "5월 15일 2026", activity: ["4월", "5월", "6월", "7월", "8월", "9월", "10월"], eligibility: [Eligibility.UNIVERSITY], prize: [HackathonPrize.RESEARCH], description: "SKT 주관 AI 연구 지원 프로그램. 팀당 연구지원금 600만원 + 멘토링 제공", fields: [Field.AI] },
    SHAKE: { name: "shake!", link: "https://shake.codes/", dots: "🌕🌕", icon: "🤝", themeColor: "slate-500", recruitStart: "12월 1일 2025", recruitEnd: "12월 31일 2025", activity: ["1월"], eligibility: [Eligibility.UNIVERSITY], prize: [HackathonPrize.PRIZE], description: "경인지역 7개 대학 연합 알고리즘 대회. 본선 2026년 1월 10일", fields: [Field.BACKEND] },
    ASCII_THON: { name: "ASCII-THON", link: "https://www.asciithon.dev/", dots: "🌕", icon: "💻", themeColor: "slate-500", recruitStart: "1월 7일 2026", recruitEnd: "1월 23일 2026", activity: ["1월"], eligibility: [Eligibility.UNIVERSITY], prize: [HackathonPrize.PRIZE], description: "아주대 주관 수도권 대학 연합 해커톤. 무박 2일(1/30~31) 진행", fields: [Field.WEB, Field.BACKEND, Field.APP] },
    GOORMTHON_SPRING: { name: "9oormthon in JEJU (spring)", link: "https://9oormthon.goorm.io/", dots: "🌕🌕", icon: "☁️", themeColor: "slate-500", recruitStart: "1월 24일 2025", recruitEnd: "2월 5일 2025", activity: ["1월", "2월"], eligibility: [Eligibility.UNIVERSITY], prize: [HackathonPrize.PRIZE], description: "카카오 주관 제주도 3박 4일 해커톤. 프론트엔드, 백엔드, 디자인, 기획 분야 참가 가능", fields: [Field.FRONTEND, Field.BACKEND, Field.DESIGN, Field.PM] },
    GOORMTHON_SUMMER: { name: "9oormthon in JEJU (summer)", link: "https://9oormthon.goorm.io/", dots: "🌕🌕", icon: "☁️", themeColor: "slate-500", recruitStart: "6월 9일 2025", recruitEnd: "6월 22일 2025", activity: ["6월"], eligibility: [Eligibility.UNIVERSITY], prize: [HackathonPrize.PRIZE], description: "카카오 주관 제주도 3박 4일 해커톤. 프론트엔드, 백엔드, 디자인, 기획 분야 참가 가능", fields: [Field.FRONTEND, Field.BACKEND, Field.DESIGN, Field.PM] },
    GOORMTHON_FALL: { name: "9oormthon in JEJU (fall)", link: "https://9oormthon.goorm.io/", dots: "🌕🌕", icon: "☁️", themeColor: "slate-500", recruitStart: "8월 26일 2025", recruitEnd: "9월 8일 2025", activity: ["8월", "9월"], eligibility: [Eligibility.UNIVERSITY], prize: [HackathonPrize.PRIZE], description: "카카오 주관 제주도 3박 4일 해커톤. 프론트엔드, 백엔드, 디자인, 기획 분야 참가 가능", fields: [Field.FRONTEND, Field.BACKEND, Field.DESIGN, Field.PM] },
    GOORMTHON_WINTER: { name: "9oormthon in JEJU (winter)", link: "https://9oormthon.goorm.io/", dots: "🌕🌕", icon: "☁️", themeColor: "slate-500", recruitStart: "11월 4일 2025", recruitEnd: "11월 17일 2025", activity: ["11월"], eligibility: [Eligibility.UNIVERSITY], prize: [HackathonPrize.PRIZE], description: "카카오 주관 제주도 3박 4일 해커톤. 프론트엔드, 백엔드, 디자인, 기획 분야 참가 가능", fields: [Field.FRONTEND, Field.BACKEND, Field.DESIGN, Field.PM] },
};

// ── 리뷰 데이터 (목업) ──
const REVIEW_FORM_URL = "https://forms.gle/PLACEHOLDER";

const ReviewData = {
    "구름톤 유니브": [
        { cohort: "4기", content: "전국 대학생들과 함께 해커톤을 준비하며 성장할 수 있었습니다. 네트워킹이 특히 좋았어요.", anonymous: true, date: "2025-08-20" },
        { cohort: "3기", content: "카카오 현직자 멘토링이 큰 도움이 됐습니다. 다만 일정이 빡빡한 편이에요.", anonymous: false, author: "이○○", date: "2025-02-15" },
    ],
    "코테이토 (1학기)": [
        { cohort: "5기", content: "기획부터 출시까지 전 과정을 경험할 수 있어서 좋았습니다. 스터디도 알차요.", anonymous: false, author: "임○○", date: "2025-07-20" },
    ],
    "SOPT (1학기)": [
        { cohort: "35기", content: "앱잼을 통해 실제 앱을 출시하는 경험이 매우 유익했습니다. 동아리 분위기도 좋고 열정적인 사람들이 많아요.", anonymous: false, author: "박○○", date: "2025-07-10" },
        { cohort: "34기", content: "세미나 퀄리티가 높고 팀 프로젝트를 통해 실력이 많이 늘었습니다.", anonymous: true, date: "2025-01-20" },
        { cohort: "33기", content: "네트워킹 기회가 정말 많아요. 수료 후에도 커뮤니티가 계속 유지됩니다.", anonymous: false, author: "김○○", date: "2024-07-15" },
    ],
    "SOPT (2학기)": [
        { cohort: "36기", content: "합주에서 iOS 파트를 담당했는데 멘토분들이 정말 친절하게 알려주셨어요.", anonymous: false, author: "최○○", date: "2025-12-20" },
        { cohort: "35기", content: "솝커톤, 앱잼 등 다양한 행사가 있어서 지루할 틈이 없었습니다.", anonymous: true, date: "2025-07-15" },
    ],
    "UMC (1학기)": [
        { cohort: "7기", content: "전국 규모라 다양한 학교 학생들을 만날 수 있어 좋았습니다. 프로젝트 경험이 취업에 많이 도움됐어요.", anonymous: false, author: "정○○", date: "2025-06-30" },
    ],
    "디프만 (1학기)": [
        { cohort: "16기", content: "디자이너와 개발자가 긴밀하게 협업하는 구조라 실무 감각을 키우기 좋았습니다.", anonymous: false, author: "조○○", date: "2025-07-10" },
        { cohort: "15기", content: "사용자 중심 프로덕트를 만드는 경험이 인상 깊었어요. 팀 분위기도 좋습니다.", anonymous: true, date: "2025-01-15" },
    ],
    "CEOS (1학기)": [
        { cohort: "20기", content: "신촌 5개 대학 학생들과 네트워킹이 좋았고, 실제 서비스를 런칭하는 경험이 값졌습니다.", anonymous: false, author: "서○○", date: "2025-07-05" },
    ],
    "프로그래피 Prography": [
        { cohort: "10기", content: "다양한 직군이 모여 하나의 프로덕트를 만드는 과정이 재미있었어요.", anonymous: true, date: "2025-08-10" },
        { cohort: "9기", content: "현직자분들도 계셔서 실무적인 피드백을 많이 받을 수 있었습니다.", anonymous: false, author: "문○○", date: "2025-02-20" },
    ],
    "큐시즘 (1학기)": [
        { cohort: "31기", content: "IT 서비스 기획부터 개발까지 체계적으로 진행되어 만족스러웠습니다.", anonymous: false, author: "양○○", date: "2025-07-30" },
        { cohort: "30기", content: "밋업과 데모데이 등 다양한 행사가 있어서 동기부여가 잘 돼요.", anonymous: true, date: "2025-01-25" },
    ],
    "MASH-UP": [
        { cohort: "15기", content: "웹/앱 서비스를 실제로 출시하는 경험이 좋았어요. 열정적인 사람들이 많습니다.", anonymous: false, author: "배○○", date: "2025-08-15" },
    ],
    "카카오 테크 부트캠프 (풀스택)": [
        { cohort: "2기", content: "6개월간의 집중 교육이 정말 알찼습니다. 현직 카카오 개발자분의 코드 리뷰가 특히 도움됐어요.", anonymous: false, author: "한○○", date: "2025-11-20" },
        { cohort: "1기", content: "국비지원이라 부담 없이 참여할 수 있었고, 수료 후 취업 연계도 잘 되는 편입니다.", anonymous: true, date: "2025-05-15" },
        { cohort: "2기", content: "풀스택 과정이라 프론트와 백엔드를 균형 있게 배울 수 있었습니다.", anonymous: false, author: "윤○○", date: "2025-11-25" },
        { cohort: "1기", content: "동기들과 함께 프로젝트를 진행하며 실무 경험을 쌓을 수 있어 좋았습니다.", anonymous: true, date: "2025-05-20" },
    ],
    "넥스터즈 (여름방학)": [
        { cohort: "25기", content: "8주 안에 실제 서비스를 런칭하는 경험이 인상적이었습니다. 팀원들 모두 열정적이에요.", anonymous: false, author: "송○○", date: "2025-09-15" },
        { cohort: "24기", content: "디자이너와 개발자가 협업하는 구조라 실무와 비슷한 환경에서 프로젝트를 진행할 수 있었어요.", anonymous: true, date: "2025-03-20" },
    ],
    "YAPP (1학기)": [
        { cohort: "26기", content: "서비스 기획부터 런칭까지 전 과정을 경험할 수 있어서 좋았습니다. 현직자 분들도 계셔서 배울 점이 많아요.", anonymous: false, author: "강○○", date: "2025-07-25" },
    ],
    "TAVE (1학기)": [
        { cohort: "14기", content: "AI, 빅데이터 등 다양한 분야를 공부할 수 있어서 시야가 넓어졌어요.", anonymous: true, date: "2025-07-20" },
    ],
    "잇타 (1학기)": [
        { cohort: "6기", content: "소규모 팀으로 진행되어 팀원들과 깊이 있게 프로젝트할 수 있었습니다.", anonymous: false, author: "신○○", date: "2025-07-01" },
    ],
};

function getReviews(clubName) {
    return ReviewData[clubName] || [];
}

// Firebase Analytics helper
function trackEvent(name, params) {
    if (typeof window._firebaseLogEvent === 'function') {
        window._firebaseLogEvent(name, params);
    }
}

function getEligibilityBadge(type) {
    if (type === Eligibility.UNIVERSITY) return `<span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-xs w-fit">대학생</span>`;
    if (type === Eligibility.WORKER) return `<span class="px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300 text-xs w-fit">현직자</span>`;
    if (type === Eligibility.SINCHON) return `<span class="px-2 py-0.5 rounded bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-300 text-xs w-fit">신촌지역대학생</span>`;
    return "";
}

function getCostBadge(cost) {
    if (cost === BootcampCost.FREE) return `<span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 text-xs w-fit">무료</span>`;
    if (cost === BootcampCost.GOV_FUNDED) return `<span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-xs w-fit">국비지원</span>`;
    if (cost === BootcampCost.PAID) return `<span class="px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 text-xs w-fit">유료</span>`;
    return "";
}

function getPrizeBadge(prize) {
    if (prize === HackathonPrize.PRIZE) return `<span class="px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 text-xs w-fit">상금</span>`;
    if (prize === HackathonPrize.RECRUITMENT) return `<span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-xs w-fit">채용우대</span>`;
    if (prize === HackathonPrize.RESEARCH) return `<span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 text-xs w-fit">연구지원</span>`;
    if (prize === HackathonPrize.CERTIFICATE) return `<span class="px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300 text-xs w-fit">수료증</span>`;
    return "";
}

function parseDate(str) {
    const parts = str.match(/(\d+)월 (\d+)일 (\d+)/);
    if (!parts) return null;
    return new Date(parts[3], parts[1] - 1, parts[2]);
}

function calculateScore(dots) {
    let score = 0;
    for (const char of dots) {
        if (char === '🌕') score += 1;
        if (char === '🌗') score += 0.5;
    }
    return score;
}

function parseMonthDay(str) {
    const parts = str.match(/(\d+)월\s*(\d+)일/);
    if (!parts) return null;
    return { month: parseInt(parts[1]), day: parseInt(parts[2]) };
}

function getMarketingClubs() {
    return Object.values(Club).filter(club =>
        club.fields.some(f => f.name === Field.MARKETING.name || f.name === Field.MANAGEMENT.name || f.name === Field.PM.name)
    ).sort((a, b) => {
        const dateA = parseMonthDay(a.recruitStart);
        const dateB = parseMonthDay(b.recruitStart);
        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;
        if (dateA.month !== dateB.month) return dateA.month - dateB.month;
        return dateA.day - dateB.day;
    });
}

const NON_DEV_FIELDS = new Set([
    Field.MARKETING.name, Field.MANAGEMENT.name,
    Field.PM.name, Field.DESIGN.name, Field.UX.name
]);

function hasDevPosition(club) {
    return club.fields.some(f => !NON_DEV_FIELDS.has(f.name));
}

function getAllClubs() {
    if (window.isHackathonPage) return Object.values(Hackathon).sort((a, b) => {
        const dateA = parseMonthDay(a.recruitStart);
        const dateB = parseMonthDay(b.recruitStart);
        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;
        if (dateA.month !== dateB.month) return dateA.month - dateB.month;
        return dateA.day - dateB.day;
    });
    if (window.isBootcampPage) return Object.values(Bootcamp).sort((a, b) => {
        const dateA = parseMonthDay(a.recruitStart);
        const dateB = parseMonthDay(b.recruitStart);
        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;
        if (dateA.month !== dateB.month) return dateA.month - dateB.month;
        return dateA.day - dateB.day;
    });
    if (window.isMarketingPage) return getMarketingClubs();
    return Object.values(Club).filter(club => hasDevPosition(club)).sort((a, b) => {
        const dateA = parseMonthDay(a.recruitStart);
        const dateB = parseMonthDay(b.recruitStart);
        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;
        if (dateA.month !== dateB.month) return dateA.month - dateB.month;
        return dateA.day - dateB.day;
    });
}

function getPageName() {
    if (window.isHackathonPage) return 'hackathon';
    if (window.isBootcampPage) return 'bootcamp';
    if (window.isMarketingPage) return 'marketing';
    return 'it';
}

function renderDeadlines() {
    const container = document.getElementById('upcoming-deadlines');
    if (!container) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const currentMonth = today.getMonth();

    // Calculate next month handling year wrap
    let nextMonth = currentMonth + 1;
    if (nextMonth > 11) {
        nextMonth = 0;
    }

    const currentYear = today.getFullYear();
    const lastYear = currentYear - 1;

    const allClubs = getAllClubs();

    // 2026년: 아직 마감 안 된 이번 달/다음 달 항목
    const currentYearItems = allClubs.filter(club => {
        const recruitEnd = parseDate(club.recruitEnd);
        if (!recruitEnd) return false;
        if (recruitEnd < today) return false;
        const endMonth = recruitEnd.getMonth();
        return recruitEnd.getFullYear() === currentYear && (endMonth === currentMonth || endMonth === nextMonth);
    }).map(club => ({ ...club, endDate: parseDate(club.recruitEnd) }))
      .sort((a, b) => a.endDate - b.endDate);

    // 2025년: 같은 달 기준 작년 항목 (아직 업데이트 안 된 곳)
    const lastYearItems = allClubs.filter(club => {
        const recruitEnd = parseDate(club.recruitEnd);
        if (!recruitEnd) return false;
        const endMonth = recruitEnd.getMonth();
        return recruitEnd.getFullYear() === lastYear && (endMonth === currentMonth || endMonth === nextMonth);
    }).map(club => ({ ...club, endDate: parseDate(club.recruitEnd) }))
      .sort((a, b) => a.endDate - b.endDate);

    const upcoming = [...currentYearItems, ...lastYearItems];

    if (upcoming.length === 0) {
        const label = window.isHackathonPage ? 'IT 대회' : '동아리';
        container.innerHTML = `<div class="text-slate-500 text-sm p-4">이번 달과 다음 달에 마감되는 ${label}가 없습니다.</div>`;
        return;
    }

    container.innerHTML = upcoming.map(club => {

        const Tag = club.link ? 'a' : 'div';
        const hrefAttr = club.link ? `href="${club.link}" target="_blank"` : '';

        const accentBg = window.isHackathonPage ? 'bg-violet-50 hover:bg-violet-100' : window.isBootcampPage ? 'bg-emerald-50 hover:bg-emerald-100' : window.isMarketingPage ? 'bg-pink-50 hover:bg-pink-100' : 'bg-blue-50 hover:bg-blue-100';

        return `
        <${Tag} ${hrefAttr} class="block flex-shrink-0 w-72 p-5 rounded-2xl border border-slate-200 dark:border-border-dark ${accentBg} dark:bg-slate-900/40 dark:hover:bg-slate-800/60 transition-all cursor-pointer no-underline hover:no-underline">
            <div class="flex justify-between items-start mb-4">
                <span class="text-2xl">${club.icon}</span>
            </div>
            <h4 class="text-lg font-bold mb-1 text-slate-900 dark:text-slate-100">${(window.isBootcampPage || window.isHackathonPage) ? club.name : club.name.split(' ')[0]}</h4>
            <p class="text-sm font-bold text-slate-500">${club.recruitStart} ~ ${club.recruitEnd}</p>
        </${Tag}>`;
    }).join('');
}

function renderTable(clubs = getAllClubs()) {
    const tbody = document.getElementById('club-list');
    if (!tbody) return;

    if (clubs.length === 0) {
        const cols = window.isHackathonPage ? 7 : 8;
        const emptyLabel = window.isHackathonPage ? 'IT 대회' : '동아리';
        tbody.innerHTML = `<tr><td colspan="${cols}" class="text-center py-12 text-slate-500">조건에 맞는 ${emptyLabel}가 없습니다.</td></tr>`;
        return;
    }

    tbody.innerHTML = clubs.map((club, index) => {
        const nameContent = club.link ? `<a href="${club.link}" target="_blank" class="hover:text-primary hover:underline decoration-2 underline-offset-4">${club.name}</a>` : club.name;
        const reviewCount = getReviews(club.name).length;
        const row = `
        <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group cursor-pointer" data-club-name="${club.name.replace(/"/g, '&quot;')}">
            <td class="px-4 py-5"><div class="flex items-center gap-2"><span class="text-xl">${club.icon}</span><span class="font-bold">${nameContent}</span></div></td>
            <td class="px-4 py-5 text-sm font-bold"><span class="block">${club.recruitStart}</span><span class="text-slate-400">→ ${club.recruitEnd}</span></td>
            <td class="px-4 py-5"><div class="flex gap-1 flex-wrap">${club.activity.map(m => `<span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-xs">${m}</span>`).join('')}</div></td>
            <td class="px-4 py-5"><div class="flex flex-col gap-1">${window.isHackathonPage ? club.prize.map(p => getPrizeBadge(p)).join('') : window.isBootcampPage ? club.cost.map(c => getCostBadge(c)).join('') : club.eligibility.map(e => getEligibilityBadge(e)).join('')}</div></td>
            <td class="px-4 py-5"><div class="flex flex-wrap gap-1.5">${club.fields.map(f => `<span class="px-2 py-0.5 rounded ${f.class} text-xs font-medium">${f.name}</span>`).join('')}</div></td>
            ${window.isHackathonPage ? '' : `<td class="px-4 py-5 text-center"><span class="flex justify-center gap-0.5">${club.dots}</span></td>`}
            <td class="px-4 py-5 text-center"><span class="inline-flex items-center gap-1 text-sm ${reviewCount > 0 ? 'text-amber-500' : 'text-slate-300 dark:text-slate-600'}"><span class="material-symbols-outlined text-base">rate_review</span>${reviewCount}</span></td>
            <td class="px-4 py-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-w-[300px]">${club.description}</td>
        </tr>`;
        return row;
    }).join('');
}

function renderMobileCards(clubs = getAllClubs()) {
    const container = document.getElementById('club-list-mobile');
    if (!container) return;

    if (clubs.length === 0) {
        const emptyLabel2 = window.isHackathonPage ? 'IT 대회' : '동아리';
        container.innerHTML = `<div class="text-center py-12 text-slate-500">조건에 맞는 ${emptyLabel2}가 없습니다.</div>`;
        return;
    }

    container.innerHTML = clubs.map(club => {
        const Tag = club.link ? 'a' : 'div';
        const hrefAttr = club.link ? `href="${club.link}" target="_blank"` : '';
        const reviewCount = getReviews(club.name).length;
        return `
        <${Tag} ${hrefAttr} class="block p-4 bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-2xl backdrop-blur-xl bg-opacity-70 shadow-lg" data-club-name="${club.name.replace(/"/g, '&quot;')}">
            <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-2 min-w-0">
                    <span class="text-2xl shrink-0">${club.icon}</span>
                    <span class="font-bold text-lg">${club.name}</span>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    ${reviewCount > 0 ? `<span class="inline-flex items-center gap-0.5 text-xs text-amber-500"><span class="material-symbols-outlined text-sm">rate_review</span>${reviewCount}</span>` : ''}
                    ${window.isHackathonPage ? '' : `<span class="flex gap-0.5 text-sm">${club.dots}</span>`}
                </div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">${club.description}</p>
            <div class="space-y-2 text-sm">
                <div class="flex items-center gap-2">
                    <span class="text-slate-500 dark:text-slate-400 w-16 shrink-0">모집 기간</span>
                    <span class="font-medium">${club.recruitStart} → ${club.recruitEnd}</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-slate-500 dark:text-slate-400 w-16 shrink-0">활동 기간</span>
                    <div class="flex gap-1 flex-wrap">${club.activity.map(m => `<span class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-xs">${m}</span>`).join('')}</div>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-slate-500 dark:text-slate-400 w-16 shrink-0">${window.isHackathonPage ? '상금/혜택' : window.isBootcampPage ? '비용' : '신청 자격'}</span>
                    <div class="flex gap-1 flex-wrap">${window.isHackathonPage ? club.prize.map(p => getPrizeBadge(p)).join('') : window.isBootcampPage ? club.cost.map(c => getCostBadge(c)).join('') : club.eligibility.map(e => getEligibilityBadge(e)).join('')}</div>
                </div>
                <div class="flex items-start gap-2">
                    <span class="text-slate-500 dark:text-slate-400 w-16 shrink-0 pt-0.5">모집 분야</span>
                    <div class="flex flex-wrap gap-1">${club.fields.map(f => `<span class="px-1.5 py-0.5 rounded ${f.class} text-xs font-medium">${f.name}</span>`).join('')}</div>
                </div>
                ${reviewCount > 0 ? `<div class="flex items-center gap-2">
                    <span class="text-slate-500 dark:text-slate-400 w-16 shrink-0">후기</span>
                    <span class="inline-flex items-center gap-1 text-amber-500 font-medium"><span class="material-symbols-outlined text-sm">rate_review</span>${reviewCount}건</span>
                </div>` : ''}
            </div>
        </${Tag}>
    `}).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    // --- Filter Logic ---
    const activeFilters = {
        eligibility: new Set(),
        fields: new Set(),
        tiers: new Set(),
        months: new Set()
    };
    let currentSortOrder = 'default';

    function populateFilters() {
        // 비용 필터 (부트캠프 전용) / 상금 필터 (해커톤 전용) / 신청 자격 필터 (동아리)
        const eligibilityContainer = document.getElementById('filter-eligibility');
        if (window.isHackathonPage && eligibilityContainer) {
            eligibilityContainer.innerHTML = Object.values(HackathonPrize).map(prize => `
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="${prize}" data-filter-key="eligibility" class="form-checkbox rounded text-primary focus:ring-primary/50">
                    <span>${prize}</span>
                </label>
            `).join('');
        } else if (window.isBootcampPage && eligibilityContainer) {
            eligibilityContainer.innerHTML = Object.values(BootcampCost).map(cost => `
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="${cost}" data-filter-key="eligibility" class="form-checkbox rounded text-primary focus:ring-primary/50">
                    <span>${cost}</span>
                </label>
            `).join('');
        }

        const fieldsContainer = document.getElementById('filter-fields');
        const pageName = getPageName();
        const pageCategories = PAGE_CATEGORIES[pageName];
        const categories = pageCategories
            ? Object.keys(FilterCategory).filter(c => pageCategories.includes(c))
            : Object.keys(FilterCategory);
        fieldsContainer.innerHTML = categories.map(category => `
            <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value="${category}" data-filter-key="fields" class="form-checkbox rounded text-primary focus:ring-primary/50">
                <span>${category}</span>
            </label>
        `).join('');

        const tiersContainer = document.getElementById('filter-tiers');
        if (tiersContainer) {
            const dataSource = window.isHackathonPage ? Hackathon : window.isBootcampPage ? Bootcamp : Club;
            const uniqueTiers = [...new Set(Object.values(dataSource).map(c => c.dots))].sort((a, b) => calculateScore(b) - calculateScore(a));
            tiersContainer.innerHTML = uniqueTiers.map(tier => `
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value="${tier}" data-filter-key="tiers" class="form-checkbox rounded text-primary focus:ring-primary/50">
                    <span>${tier}</span>
                </label>
            `).join('');
        }

        const monthsContainer = document.getElementById('filter-months');
        const quarters = ['1~3월', '4~6월', '7~9월', '10~12월'];
        monthsContainer.innerHTML = quarters.map(quarter => `
            <label class="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                <input type="checkbox" value="${quarter}" data-filter-key="months" class="form-checkbox rounded text-primary focus:ring-primary/50">
                <span>${quarter}</span>
            </label>
        `).join('');
    }

    function applyFilters() {
        const searchInput = document.querySelector('input');
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

        let filteredClubs = getAllClubs().filter(club => {
            // 0. Search Filter
            if (searchTerm) {
                const searchableText = [
                    club.name,
                    club.description,
                    ...club.fields.map(f => f.name)
                ].join(' ').toLowerCase();
                if (!searchableText.includes(searchTerm)) return false;
            }

            if (activeFilters.eligibility.size > 0) {
                if (window.isHackathonPage) {
                    const hasPrizeMatch = club.prize.some(p => activeFilters.eligibility.has(p));
                    if (!hasPrizeMatch) return false;
                } else if (window.isBootcampPage) {
                    const hasCostMatch = club.cost.some(c => activeFilters.eligibility.has(c));
                    if (!hasCostMatch) return false;
                } else {
                    const clubEligibilities = new Set();
                    if (club.eligibility.includes(Eligibility.UNIVERSITY) || club.eligibility.includes(Eligibility.SINCHON)) {
                        clubEligibilities.add('대학생');
                    }
                    if (club.eligibility.includes(Eligibility.WORKER)) {
                        clubEligibilities.add('현직자');
                    }
                    const intersection = new Set([...clubEligibilities].filter(x => activeFilters.eligibility.has(x)));
                    if (intersection.size === 0) return false;
                }
            }

            if (activeFilters.fields.size > 0) {
                const clubFields = club.fields.map(f => f.name);
                // 선택된 카테고리들의 필드들을 합침
                const selectedFields = new Set();
                activeFilters.fields.forEach(category => {
                    if (FilterCategory[category]) {
                        FilterCategory[category].forEach(field => selectedFields.add(field));
                    }
                });
                // 동아리의 필드 중 하나라도 선택된 필드에 포함되면 통과
                const hasMatch = clubFields.some(field => selectedFields.has(field));
                if (!hasMatch) return false;
            }

            if (activeFilters.tiers.size > 0) {
                if (!activeFilters.tiers.has(club.dots)) return false;
            }

            if (activeFilters.months.size > 0) {
                // recruitStart에서 월 추출 (예: "1월 20일 2025" -> 1)
                const monthMatch = club.recruitStart.match(/(\d+)월/);
                if (!monthMatch) return false;
                const recruitMonth = parseInt(monthMatch[1]);

                // 분기별 매핑
                const quarterMap = {
                    '1~3월': [1, 2, 3],
                    '4~6월': [4, 5, 6],
                    '7~9월': [7, 8, 9],
                    '10~12월': [10, 11, 12]
                };

                // 선택된 분기에 해당하는 월인지 확인
                let hasMatch = false;
                activeFilters.months.forEach(quarter => {
                    if (quarterMap[quarter] && quarterMap[quarter].includes(recruitMonth)) {
                        hasMatch = true;
                    }
                });
                if (!hasMatch) return false;
            }

            return true;
        });

        if (currentSortOrder !== 'default') {
            filteredClubs.sort((a, b) => {
                const scoreA = calculateScore(a.dots);
                const scoreB = calculateScore(b.dots);
                if (currentSortOrder === 'desc') return scoreB - scoreA;
                return scoreA - scoreB;
            });
        }

        renderTable(filteredClubs);
        renderMobileCards(filteredClubs);
    }

    const filterButton = document.getElementById('filter-button');
    const filterDropdown = document.getElementById('filter-dropdown');
    const resetFiltersButton = document.getElementById('reset-filters');
    const sortButton = document.getElementById('sort-button');
    const sortDropdown = document.getElementById('sort-dropdown');

    filterButton.addEventListener('click', (e) => {
        e.stopPropagation();
        filterDropdown.classList.toggle('hidden');
        if (sortDropdown) sortDropdown.classList.add('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!filterButton.contains(e.target) && !filterDropdown.contains(e.target)) {
            filterDropdown.classList.add('hidden');
        }
    });

    filterDropdown.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const key = e.target.dataset.filterKey;
            const value = e.target.value;
            if (e.target.checked) {
                activeFilters[key].add(value);
            } else {
                activeFilters[key].delete(value);
            }
            applyFilters();
            trackEvent('filter_apply', {
                filter_type: key,
                filter_value: value,
                action: e.target.checked ? 'add' : 'remove',
                page: getPageName()
            });
        }
    });

    // Sort UI Logic
    if (sortButton && sortDropdown) {
        sortButton.addEventListener('click', (e) => {
            e.stopPropagation();
            sortDropdown.classList.toggle('hidden');
            filterDropdown.classList.add('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!sortButton.contains(e.target) && !sortDropdown.contains(e.target)) {
                sortDropdown.classList.add('hidden');
            }
        });

        sortDropdown.addEventListener('change', (e) => {
            if (e.target.name === 'sort') {
                currentSortOrder = e.target.value;
                applyFilters();
                sortDropdown.classList.add('hidden');
                trackEvent('sort_change', {
                    sort_order: e.target.value,
                    page: getPageName()
                });
            }
        });
    }

    resetFiltersButton.addEventListener('click', () => {
        document.querySelectorAll('#filter-dropdown input[type="checkbox"]').forEach(cb => cb.checked = false);
        Object.values(activeFilters).forEach(set => set.clear());
        applyFilters();
    });

    populateFilters();

    // 후기 컬럼 헤더 동적 추가
    const theadRow = document.querySelector('thead tr');
    if (theadRow) {
        const lastTh = theadRow.querySelector('th:last-child');
        const reviewTh = document.createElement('th');
        reviewTh.className = 'px-4 py-4 font-semibold text-slate-500 dark:text-slate-400 text-sm w-20 text-center';
        reviewTh.textContent = '후기';
        theadRow.insertBefore(reviewTh, lastTh);
    }

    // Initial render
    renderTable();
    renderMobileCards();
    renderDeadlines();

    // Analytics: page_view
    const pageName = getPageName();
    const pageLabels = { it: 'IT 동아리', marketing: '마케팅/경영', bootcamp: '부트캠프', hackathon: '해커톤/대회' };
    trackEvent('page_view', {
        page: pageName,
        page_title: pageLabels[pageName] || pageName
    });

    // Analytics: link_click (desktop table)
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

    // Analytics: link_click (mobile cards)
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

    // Analytics: link_click (deadline cards)
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

    // Search logic
    const searchInput = document.querySelector('input');
    let searchDebounceTimer;
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            applyFilters();
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

    // ── 상세 패널 ──
    const overlay = document.createElement('div');
    overlay.id = 'detail-overlay';
    overlay.className = 'fixed inset-0 bg-black/40 z-40 opacity-0 pointer-events-none transition-opacity duration-300';
    document.body.appendChild(overlay);

    const panel = document.createElement('div');
    panel.id = 'detail-panel';
    panel.className = 'fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white dark:bg-slate-900 shadow-2xl z-50 translate-x-full transition-transform duration-300 ease-out overflow-y-auto';
    panel.innerHTML = `
        <div class="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between z-10">
            <h2 id="panel-title" class="text-lg font-bold text-slate-900 dark:text-slate-100 truncate"></h2>
            <button id="panel-close" class="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <span class="material-symbols-outlined text-slate-500">close</span>
            </button>
        </div>
        <div id="panel-body" class="px-6 py-5"></div>
    `;
    document.body.appendChild(panel);

    function findClubByName(name) {
        const sources = [Club, Bootcamp, Hackathon];
        for (const src of sources) {
            const found = Object.values(src).find(c => c.name === name);
            if (found) return found;
        }
        return null;
    }

    function openPanel(club) {
        if (!club) return;
        const reviews = getReviews(club.name);
        document.getElementById('panel-title').textContent = club.name;
        document.getElementById('panel-body').innerHTML = `
            <div class="flex items-center gap-3 mb-6">
                <span class="text-4xl">${club.icon}</span>
                <div>
                    <p class="text-xl font-bold text-slate-900 dark:text-slate-100">${club.name}</p>
                    ${club.dots ? `<span class="flex gap-0.5 text-sm">${club.dots}</span>` : ''}
                </div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">${club.description}</p>
            <div class="space-y-4 text-sm">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-base text-slate-400">calendar_today</span>
                    <div>
                        <span class="text-slate-500 dark:text-slate-400">모집 기간</span>
                        <p class="font-medium text-slate-900 dark:text-slate-100">${club.recruitStart} → ${club.recruitEnd}</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-base text-slate-400">event</span>
                    <div>
                        <span class="text-slate-500 dark:text-slate-400">활동 기간</span>
                        <div class="flex gap-1.5 flex-wrap mt-1">${club.activity.map(m => `<span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-xs font-medium">${m}</span>`).join('')}</div>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-base text-slate-400">person</span>
                    <div>
                        <span class="text-slate-500 dark:text-slate-400">${window.isHackathonPage ? '상금/혜택' : window.isBootcampPage ? '비용' : '신청 자격'}</span>
                        <div class="flex gap-1.5 flex-wrap mt-1">${window.isHackathonPage ? (club.prize || []).map(p => getPrizeBadge(p)).join('') : window.isBootcampPage ? (club.cost || []).map(c => getCostBadge(c)).join('') : (club.eligibility || []).map(e => getEligibilityBadge(e)).join('')}</div>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-base text-slate-400 mt-0.5">code</span>
                    <div>
                        <span class="text-slate-500 dark:text-slate-400">모집 분야</span>
                        <div class="flex flex-wrap gap-1.5 mt-1">${club.fields.map(f => `<span class="px-2 py-0.5 rounded ${f.class} text-xs font-medium">${f.name}</span>`).join('')}</div>
                    </div>
                </div>
            </div>
            ${club.link ? `<a href="${club.link}" target="_blank" rel="noopener" class="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
                지원하러 가기
                <span class="material-symbols-outlined text-base">open_in_new</span>
            </a>` : ''}
            <div class="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        <span class="material-symbols-outlined text-base text-amber-500">rate_review</span>
                        후기 <span class="text-amber-500">${reviews.length}</span>
                    </h3>
                </div>
                ${reviews.length > 0 ? `
                    <div class="space-y-3 mb-4">
                        ${reviews.map(r => `
                            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 text-xs font-medium">${r.cohort}</span>
                                    <span class="text-xs text-slate-400">${r.anonymous ? '익명' : r.author}</span>
                                    <span class="text-xs text-slate-300 dark:text-slate-600">&middot;</span>
                                    <span class="text-xs text-slate-400">${r.date.slice(0, 7).replace('-', '.')}</span>
                                </div>
                                <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${r.content}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <p class="text-sm text-slate-400 mb-4">아직 등록된 후기가 없습니다.</p>
                `}
                <a href="${REVIEW_FORM_URL}" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 text-sm font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors">
                    <span class="material-symbols-outlined text-base">edit_note</span>
                    구글폼으로 후기 제출
                </a>
            </div>
        `;

        panel.classList.remove('translate-x-full');
        panel.classList.add('translate-x-0');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100');
        document.body.style.overflow = 'hidden';
    }

    function closePanel() {
        panel.classList.remove('translate-x-0');
        panel.classList.add('translate-x-full');
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    }

    document.getElementById('panel-close').addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePanel();
    });

    // 데스크톱 테이블 행 클릭
    document.getElementById('club-list')?.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const row = e.target.closest('tr[data-club-name]');
        if (!row) return;
        const club = findClubByName(row.dataset.clubName);
        if (club) openPanel(club);
    });

    // 모바일 카드 클릭
    document.getElementById('club-list-mobile')?.addEventListener('click', (e) => {
        const card = e.target.closest('[data-club-name]');
        if (!card) return;
        e.preventDefault();
        const club = findClubByName(card.dataset.clubName);
        if (club) openPanel(club);
    });
});
