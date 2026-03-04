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
    IOS: "iOS",
    ANDROID: "Android",
    FLUTTER: "Flutter",
    REACT_NATIVE: "ReactNative",
    BACKEND: "백엔드",
    ANY: "무관",
    CLOUD: "클라우드",
    MARKETING: "마케팅",
    ALGORITHM: "Algorithm",
    CS: "CS"
};

// 카테고리 → 필드 매핑
const FilterCategory = {
    [Category.PM]: ["PM"],
    [Category.DESIGN]: ["Design", "UX"],
    [Category.AI]: ["AI", "머신러닝", "딥러닝", "LLM", "데이터 분석", "데이터 시각화", "데이터 엔지니어링"],
    [Category.WEB]: ["WEB", "Frontend"],
    [Category.IOS]: ["iOS"],
    [Category.ANDROID]: ["Android"],
    [Category.FLUTTER]: ["Flutter", "앱"],
    [Category.REACT_NATIVE]: ["ReactNative"],
    [Category.BACKEND]: ["SpringBoot", "Backend", "Django", "Node.js"],
    [Category.ANY]: ["무관"],
    [Category.CLOUD]: ["클라우드"],
    [Category.MARKETING]: ["Marketing"],
    [Category.ALGORITHM]: ["Algorithm"],
    [Category.CS]: ["CS"]
};

// 페이지별 표시할 카테고리
const PAGE_CATEGORIES = {
    it: [Category.PM, Category.DESIGN, Category.AI, Category.WEB, Category.IOS, Category.ANDROID, Category.FLUTTER, Category.REACT_NATIVE, Category.BACKEND, Category.ANY, Category.CLOUD, Category.ALGORITHM, Category.CS],
    bootcamp: [Category.WEB, Category.BACKEND, Category.IOS, Category.ANDROID, Category.FLUTTER, Category.REACT_NATIVE, Category.AI, Category.CLOUD, Category.DESIGN, Category.MARKETING],
    marketing: [Category.PM, Category.DESIGN, Category.MARKETING],
    hackathon: [Category.AI, Category.WEB, Category.BACKEND, Category.IOS, Category.ANDROID, Category.FLUTTER, Category.REACT_NATIVE],
};

const Club = {
    // 2025-01-20
    GOORMTHON_UNIV: { name: "구름톤 유니브", link: "https://9oormthon.university/", dots: "🌕", icon: "☁️", themeColor: "slate-500", recruitStart: "2월 26일 2026", recruitEnd: "3월 23일 2026", activity: ["3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY], description: "'함께 성장'이라는 핵심가치를 실현하며 전국의 대학생들과 자유롭게 교류하고 학습하며 성장하는 카카오와 구름이 함께하는 대학생 대상 해커톤", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.SPRING, Field.REACT_NATIVE] },
    // 2025-02-18
    COTATO_1: { name: "코테이토 (1학기)", link: "https://www.cotato.kr/", dots: "🌕🌗", icon: "🥔", themeColor: "slate-500", recruitStart: "2월 19일 2026", recruitEnd: "2월 24일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "IT 서비스 기획부터 개발, 출시에 이르기까지 전 과정을 경험할 수 있는 대학생 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.NODE, Field.SPRING] },
    // 2025-03-08
    SOPT_1: { name: "SOPT (1학기)", link: "https://www.sopt.org/", icon: "📣", themeColor: "neon-green", dots: "🌕🌕🌗", recruitStart: "3월 8일 2025", recruitEnd: "3월 14일 2025", activity: ["3월"], eligibility: [Eligibility.UNIVERSITY], description: "국내 최대 규모 대학생 연합 IT 벤처 창업 동아리로 13년간 2400명이 수료하고 210개 서비스를 만든 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING, Field.FLUTTER] },
    // 2025-02-17
    UMC_1: { name: "UMC (1학기)", link: "https://umc.makeus.in/", dots: "🌕🌗", icon: "🪐", themeColor: "slate-500", recruitStart: "2월 16일 2026", recruitEnd: "3월 8일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "University MakeUs Challenge의 약자로, 전국 30여개 대학이 참여하는 국내 최대 규모의 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.NODE, Field.SPRING] },
    LIKELION: { name: "멋쟁이사자처럼 대학", link: "https://likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "2월 26일 2026", recruitEnd: "3월 7일 2026", activity: ["3월", "4월", "5월", "6월", "7월", "8월"], eligibility: [Eligibility.UNIVERSITY], description: "아이디어를 실현하고자 하는 의지를 가진 비전공자, 전공자 대학생들이 함께 모여 IT 서비스를 개발하고 기업가정신을 배우는 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.DJANGO, Field.SPRING] },
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
    AUSG: { name: "AUSG", link: "https://www.instagram.com/ausg.awskrug/", dots: "🌕🌕🌗", icon: "☁️", themeColor: "slate-500", recruitStart: "6월 14일 2025", recruitEnd: "6월 30일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "AWSKRUG University Student Group의 약자로, AWS를 공부하고 활용하는 대학생들의 커뮤니티", fields: [Field.CLOUD, Field.NONE] },
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
    SIPE_1: { name: "sipe (1학기)", link: "https://sipe.team/", dots: "🌕🌗", icon: "☘️", themeColor: "slate-500", recruitStart: "1월 3일 2026", recruitEnd: "1월 5일 2026", activity: ["2월", "3월", "4월", "5월", "6월"], eligibility: [Eligibility.WORKER], description: "Side Project Enthusiasts의 약자로, 사이드 프로젝트에 대한 열정을 가진 사람들이 모여 함께 성장하는 동아리", fields: [Field.NONE] },
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

// ── 인프런 파트너스 네이티브 광고 (미니멀 추천) ──
const InflearnAds = [
    { title: "옵시디언 마스터 클래스(생산성을 바꾸는 기록 습관)", link: "https://inf.run/sb7Rc", categories: ["PM"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/337714/cover/01jyn838cx48pfk0hfh77c2k2q", instructor: "조영수(데이먼)", rating: 4.9, reviewCount: 99, studentCount: 581, regularPrice: 132000, payPrice: 132000, discountRate: 0, isBest: true, skillTags: ["업무 생산성","obsidian"], hookText: "옵시디언 마스터 클래스(생산성을 바꾸는 기록 습관)", hookSub: "조영수(데이먼) · ⭐ 4.9 · 수강생 581명" },
    { title: "PM을 위한 데이터 리터러시(프로덕트 데이터 분석)", link: "https://inf.run/pvSun", categories: ["PM"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/329416/cover/32d4b07f-caf1-4ce8-83d0-e4fe8ed7eca6/329416-eng.png", instructor: "카일스쿨", rating: 4.9, reviewCount: 164, studentCount: 2751, regularPrice: 132000, payPrice: 132000, discountRate: 0, isBest: true, skillTags: ["데이터 리터러시","metric hierarchy","AB test"], hookText: "PM을 위한 데이터 리터러시(프로덕트 데이터 분석)", hookSub: "카일스쿨 · ⭐ 4.9 · 수강생 2,751명" },
    { title: "PM을 위한 데이터 리터러시 함께 공부하기 챌린지 - 1기 챌린지", link: "https://inf.run/13JYP", categories: ["PM"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/340788/cover/ai/3/49009886-86a3-4be5-804c-697f90b0acac.png", instructor: "", rating: 0, reviewCount: 0, studentCount: 0, regularPrice: 143000, payPrice: 143000, discountRate: 0, isBest: false, skillTags: [], hookText: "PM을 위한 데이터 리터러시 함께 공부하기 챌린지 - 1기 챌린지", hookSub: " · ⭐ 0 · 수강생 0명" },
    { title: "개발자 없이 만드는 AI 웹서비스! 구글 안티그래비티로 웹앱 제작·배포·수익화까지", link: "https://inf.run/9P8oE", categories: ["PM"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/340837/cover/01khemxmvw34tx5xt20e4n2r1t", instructor: "스탠리탬", rating: 0, reviewCount: 0, studentCount: 26, regularPrice: 60500, payPrice: 42350, discountRate: 30, isBest: false, skillTags: ["Google Ads","GitHub","vercel","supabase","바이브코딩"], hookText: "개발자 없이 만드는 AI 웹서비스! 구글 안티그래비티로 웹앱 제작·배포·수익화까지 - 30% 할인 중!", hookSub: "스탠리탬 · ⭐ 0 · 수강생 26명" },
    { title: "[기초스피치] 14년차 아나운서에게 배우는 말 잘하는 방법!", link: "https://inf.run/nEnxv", categories: ["PM"], thumbnailUrl: "https://cdn.inflearn.com/public/course-325171-cover/aba3e219-8982-4410-935c-b930bbe0f6fe", instructor: "흥버튼 정흥수", rating: 4.7, reviewCount: 139, studentCount: 1268, regularPrice: 99000, payPrice: 99000, discountRate: 0, isBest: true, skillTags: ["스피치","면접","대인관계","프레젠테이션"], hookText: "[기초스피치] 14년차 아나운서에게 배우는 말 잘하는 방법!", hookSub: "흥버튼 정흥수 · ⭐ 4.7 · 수강생 1,268명" },
    { title: "초보자를 위한 발표 요령", link: "https://inf.run/hQQ1Z", categories: ["PM"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/332105/cover/c82a0b03-dc23-4479-a443-c4ec3b06ba70/inf-short-logo-발표요령.jpg", instructor: "드립커피+한모금더", rating: 4.8, reviewCount: 27, studentCount: 3644, regularPrice: 11000, payPrice: 11000, discountRate: 0, isBest: true, skillTags: ["프레젠테이션","기술면접","audience","slideshow"], hookText: "초보자를 위한 발표 요령", hookSub: "드립커피+한모금더 · ⭐ 4.8 · 수강생 3,644명" },
    { title: "IT 회사에서 비개발자가 살아남기 위한 모든 개발 지식 A to Z", link: "https://inf.run/MPybe", categories: ["PM","마케팅"], thumbnailUrl: "https://cdn.inflearn.com/public/course-325903-cover/335d6f7d-bb22-4ea8-b1dc-131d79b721cd", instructor: "그랩", rating: 4.7, reviewCount: 230, studentCount: 1908, regularPrice: 55000, payPrice: 55000, discountRate: 0, isBest: true, skillTags: ["커뮤니케이션"], hookText: "IT 회사에서 비개발자가 살아남기 위한 모든 개발 지식 A to Z", hookSub: "그랩 · ⭐ 4.7 · 수강생 1,908명" },
    { title: "CTA를 높이는 랜딩페이지 설계법", link: "https://inf.run/TF313", categories: ["PM","마케팅"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/340884/cover/01kh5h1cgyfrxbn3ek8q58gbss", instructor: "zenith", rating: 0, reviewCount: 0, studentCount: 14, regularPrice: 16500, payPrice: 8250, discountRate: 50, isBest: false, skillTags: ["웹 디자인","서비스 기획","UX 기획","프로덕트디자인","고객경험설계"], hookText: "CTA를 높이는 랜딩페이지 설계법 - 50% 할인 중!", hookSub: "zenith · ⭐ 0 · 수강생 14명" },
    { title: "지금 당장 성과내기, 페이스북 퍼포먼스 마케팅 실습", link: "https://inf.run/yq7Js", categories: ["마케팅"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/315347/cover/8cdc5f1c-7808-4a45-857b-8ee4ff667a0b/315347-eng.png", instructor: "Seongmin Yoo", rating: 5, reviewCount: 30, studentCount: 401, regularPrice: 44000, payPrice: 44000, discountRate: 0, isBest: true, skillTags: ["디지털 마케팅","그로스해킹","Facebook Page","Facebook Pixel","Facebook Ads"], hookText: "지금 당장 성과내기, 페이스북 퍼포먼스 마케팅 실습", hookSub: "Seongmin Yoo · ⭐ 5 · 수강생 401명" },
    { title: "잘나가는 프리랜서의, AI 자동화 마케팅 [AI 활용 1위 작가]", link: "https://inf.run/GzdjU", categories: ["마케팅"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/338586/cover/01k2vfn09h9kdvcgc87sggzn8b", instructor: "Slearnic AI LAB", rating: 4.8, reviewCount: 16, studentCount: 333, regularPrice: 33000, payPrice: 33000, discountRate: 0, isBest: true, skillTags: ["디지털 마케팅","퍼포먼스 마케팅","인공지능(AI)","ChatGPT","AI 활용 (AX)"], hookText: "잘나가는 프리랜서의, AI 자동화 마케팅 [AI 활용 1위 작가]", hookSub: "Slearnic AI LAB · ⭐ 4.8 · 수강생 333명" },
    { title: "맥킨지 출신 김재성의 AI로 앞서가는 문제 해결력 & 리서치 전략", link: "https://inf.run/JZRKL", categories: ["마케팅"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/338841/cover/01k5r218y9fnz5sw1qqghj69m9", instructor: "Jaesung Kim", rating: 4.8, reviewCount: 38, studentCount: 367, regularPrice: 330000, payPrice: 330000, discountRate: 0, isBest: true, skillTags: ["경영노하우","인공지능(AI)","ChatGPT","컨설팅","문제해결능력"], hookText: "맥킨지 출신 김재성의 AI로 앞서가는 문제 해결력 & 리서치 전략", hookSub: "Jaesung Kim · ⭐ 4.8 · 수강생 367명" },
    { title: "모르면 야근하는 AI 마케팅 노하우", link: "https://inf.run/Gvtg2", categories: ["마케팅"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/338670/cover/01k4p44dm4nyn5vfv9ygf992sa", instructor: "챗대리", rating: 4.8, reviewCount: 22, studentCount: 154, regularPrice: 68200, payPrice: 68200, discountRate: 0, isBest: false, skillTags: ["make.com","프롬프트엔지니어링","AI 활용 (AX)","MCP"], hookText: "모르면 야근하는 AI 마케팅 노하우", hookSub: "챗대리 · ⭐ 4.8 · 수강생 154명" },
    { title: "입문자에서 실무자로: 피그마로 마스터하는 디자인 시스템 A to Z", link: "https://inf.run/9C8D3", categories: ["디자인"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/335180/cover/01kg55fmr33f3rabt2cz6sdrvy", instructor: "에릭", rating: 5, reviewCount: 7, studentCount: 33, regularPrice: 139700, payPrice: 139700, discountRate: 0, isBest: false, skillTags: ["Figma","Figma Tokens","디자인 시스템","responsive-design","UIUX"], hookText: "입문자에서 실무자로: 피그마로 마스터하는 디자인 시스템 A to Z", hookSub: "에릭 · ⭐ 5 · 수강생 33명" },
    { title: "UX/UI 시작하기 : UX 서비스 기획 (Inflearn Original)", link: "https://inf.run/vAQqk", categories: ["디자인"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/326442/cover/9d0dd9bb-676d-4955-be52-f533ba423d88", instructor: "인프런", rating: 3.9, reviewCount: 128, studentCount: 19953, regularPrice: 33000, payPrice: 33000, discountRate: 0, isBest: false, skillTags: ["서비스 기획"], hookText: "UX/UI 시작하기 : UX 서비스 기획 (Inflearn Original)", hookSub: "인프런 · ⭐ 3.9 · 수강생 19,953명" },
    { title: "기초부터 실무까지 제대로 배우는 피그마 UI 디자인 클래스", link: "https://inf.run/qAQUA", categories: ["디자인"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/333517/cover/01k3f3zjvjz4tcs9msy33h2v0v", instructor: "볼드 UX", rating: 4.8, reviewCount: 16, studentCount: 276, regularPrice: 79200, payPrice: 79200, discountRate: 0, isBest: true, skillTags: ["웹 디자인","프로토타이핑","Figma","반응형 웹","프로덕트디자인"], hookText: "기초부터 실무까지 제대로 배우는 피그마 UI 디자인 클래스", hookSub: "볼드 UX · ⭐ 4.8 · 수강생 276명" },
    { title: "RAG를 활용한 LLM Application 개발 (feat. LangChain)", link: "https://inf.run/iXpfe", categories: ["AI"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/333796/cover/97e4a8aa-06b4-4e6d-89c7-a6231062cedd/333796.png", instructor: "제이쓴", rating: 4.9, reviewCount: 479, studentCount: 3945, regularPrice: 66000, payPrice: 66000, discountRate: 0, isBest: true, skillTags: ["LLM","RAG","LangChain","vector-database","openAI API"], hookText: "RAG를 활용한 LLM Application 개발 (feat. LangChain)", hookSub: "제이쓴 · ⭐ 4.9 · 수강생 3,945명" },
    { title: "클로드 코드 완벽 마스터: AI 개발 워크플로우 기초부터 실전까지", link: "https://inf.run/1nrN2", categories: ["AI"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/339317/cover/01ka8fyg15t2g2tzh7hcd5ern5.gif", instructor: "짐코딩", rating: 4.9, reviewCount: 246, studentCount: 2963, regularPrice: 165000, payPrice: 165000, discountRate: 0, isBest: true, skillTags: ["React","claude","AI 활용 (AX)","인공지능(AI)"], hookText: "클로드 코드 완벽 마스터: AI 개발 워크플로우 기초부터 실전까지", hookSub: "짐코딩 · ⭐ 4.9 · 수강생 2,963명" },
    { title: "한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지", link: "https://inf.run/ZfCoZ", categories: ["웹"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/328340/cover/01jx9xv8sprqfcjdkhy723nw9y", instructor: "이정환 Winterlood", rating: 4.9, reviewCount: 1367, studentCount: 14503, regularPrice: 48400, payPrice: 48400, discountRate: 0, isBest: true, skillTags: ["JavaScript","React","Node.js"], hookText: "한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지", hookSub: "이정환 Winterlood · ⭐ 4.9 · 수강생 14,503명" },
    { title: "한 입 크기로 잘라먹는 타입스크립트(TypeScript)", link: "https://inf.run/YNTjk", categories: ["웹"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/330452/cover/01jx9xw8c433n8hppthehe9r1g", instructor: "이정환 Winterlood", rating: 5, reviewCount: 649, studentCount: 13910, regularPrice: 48400, payPrice: 48400, discountRate: 0, isBest: true, skillTags: ["TypeScript"], hookText: "한 입 크기로 잘라먹는 타입스크립트(TypeScript)", hookSub: "이정환 Winterlood · ⭐ 5 · 수강생 13,910명" },
    { title: "한 입 크기로 잘라먹는 Next.js", link: "https://inf.run/2Mhb9", categories: ["웹"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/333250/cover/01jx9zy2h8wyf9qbcrk2kyyt26", instructor: "이정환 Winterlood", rating: 5, reviewCount: 552, studentCount: 5335, regularPrice: 48400, payPrice: 48400, discountRate: 0, isBest: true, skillTags: ["React","TypeScript","Next.js"], hookText: "한 입 크기로 잘라먹는 Next.js", hookSub: "이정환 Winterlood · ⭐ 5 · 수강생 5,335명" },
    { title: "타입스크립트 입문 - 기초부터 실전까지", link: "https://inf.run/pU8ib", categories: ["웹"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/326082/cover/c6519e92-f334-46ac-8a31-6290db19b32a", instructor: "캡틴판교", rating: 5, reviewCount: 644, studentCount: 5623, regularPrice: 44000, payPrice: 44000, discountRate: 0, isBest: true, skillTags: ["TypeScript","ES6","JavaScript"], hookText: "타입스크립트 입문 - 기초부터 실전까지", hookSub: "캡틴판교 · ⭐ 5 · 수강생 5,623명" },
    { title: "앨런 Swift문법 마스터 스쿨 (온라인 BootCamp -  2개월과정)", link: "https://inf.run/xDG94", categories: ["iOS"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/327472/cover/e56033c6-33a2-4275-9b86-a685045146ef/327472.jpg", instructor: "앨런(Allen)", rating: 5, reviewCount: 299, studentCount: 1453, regularPrice: 1430000, payPrice: 1430000, discountRate: 0, isBest: true, skillTags: ["Swift"], hookText: "앨런 Swift문법 마스터 스쿨 (온라인 BootCamp -  2개월과정)", hookSub: "앨런(Allen) · ⭐ 5 · 수강생 1,453명" },
    { title: "앨런 Swift Concurrency for Swift 6 (Part-1)", link: "https://inf.run/L17du", categories: ["iOS"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/335069/cover/1e62d3be-b4f1-4889-9c73-d22c49136a65/335069.jpg", instructor: "앨런(Allen)", rating: 5, reviewCount: 62, studentCount: 578, regularPrice: 99000, payPrice: 99000, discountRate: 0, isBest: true, skillTags: ["iOS","Swift","동시성","async-await","concurrency"], hookText: "앨런 Swift Concurrency for Swift 6 (Part-1)", hookSub: "앨런(Allen) · ⭐ 5 · 수강생 578명" },
    { title: "앨런 Swift Concurrency for Swift 6 (Part-2)", link: "https://inf.run/hFK5d", categories: ["iOS"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/336499/cover/cf65b9cb-9827-4e85-abdb-aa92382b44f4/336499.png", instructor: "앨런(Allen)", rating: 5, reviewCount: 25, studentCount: 258, regularPrice: 242000, payPrice: 242000, discountRate: 0, isBest: true, skillTags: ["iOS","Swift","동시성","async-await","concurrency"], hookText: "앨런 Swift Concurrency for Swift 6 (Part-2)", hookSub: "앨런(Allen) · ⭐ 5 · 수강생 258명" },
    { title: "[Lv.1] iOS 17 앱 개발 기초 - SwiftUI로 시작하기", link: "https://inf.run/qkbkT", categories: ["iOS"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/329815/cover/f0cadfc4-389a-4cef-a67b-72fed66ff4c5/Basic_Cover.png", instructor: "Jacob(제이콥)", rating: 5, reviewCount: 32, studentCount: 519, regularPrice: 88000, payPrice: 66000, discountRate: 25, isBest: true, skillTags: ["iOS","SwiftUI","Swift"], hookText: "[Lv.1] iOS 17 앱 개발 기초 - SwiftUI로 시작하기 - 25% 할인 중!", hookSub: "Jacob(제이콥) · ⭐ 5 · 수강생 519명" },
    { title: "[Lv.3] 실전 네트워크 통신 - SwiftUI Combine, Async/Await", link: "https://inf.run/JonM7", categories: ["iOS"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/335552/cover/01kj15b6f429wcq1d8e2aa189s", instructor: "Jacob(제이콥)", rating: 5, reviewCount: 5, studentCount: 92, regularPrice: 165000, payPrice: 123750, discountRate: 25, isBest: false, skillTags: ["SwiftUI","combine","async-await","iOS","Swift"], hookText: "[Lv.3] 실전 네트워크 통신 - SwiftUI Combine, Async/Await - 25% 할인 중!", hookSub: "Jacob(제이콥) · ⭐ 5 · 수강생 92명" },
    { title: "SwiftUI + TCA: 실전 프로젝트로 완성하는 차세대 iOS 아키텍처", link: "https://inf.run/FdpRN", categories: ["iOS"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/337595/cover/01jytf26x7a1fzkhzma409c36f", instructor: "덤벨로퍼", rating: 5, reviewCount: 10, studentCount: 65, regularPrice: 79200, payPrice: 79200, discountRate: 0, isBest: false, skillTags: ["Swift","SwiftUI","iOS","swift-composable-architecture"], hookText: "SwiftUI + TCA: 실전 프로젝트로 완성하는 차세대 iOS 아키텍처", hookSub: "덤벨로퍼 · ⭐ 5 · 수강생 65명" },
    { title: "[왕초보편] 앱 8개를 만들면서 배우는 안드로이드 코틀린(Android Kotlin)", link: "https://inf.run/7uspX", categories: ["Android"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/327096/cover/fa1cbc3c-c0e8-4a3d-9f2a-1150b67f6457/327096-eng.png", instructor: "개복치개발자", rating: 4.8, reviewCount: 230, studentCount: 3511, regularPrice: 24200, payPrice: 24200, discountRate: 0, isBest: true, skillTags: ["Android","Kotlin","Firebase"], hookText: "[왕초보편] 앱 8개를 만들면서 배우는 안드로이드 코틀린(Android Kotlin)", hookSub: "개복치개발자 · ⭐ 4.8 · 수강생 3,511명" },
    { title: "모던 안드로이드 - Jetpack Compose 입문", link: "https://inf.run/xz1Qt", categories: ["Android"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/327890/cover/767897fa-36b3-4b8a-a4aa-2355ec4b5602/327890-eng.png", instructor: "오준석", rating: 4.7, reviewCount: 24, studentCount: 393, regularPrice: 77000, payPrice: 77000, discountRate: 0, isBest: true, skillTags: ["Jetpack","Kotlin","Android"], hookText: "모던 안드로이드 - Jetpack Compose 입문", hookSub: "오준석 · ⭐ 4.7 · 수강생 393명" },
    { title: "모던 안드로이드 - 코틀린과 Jetpack 활용", link: "https://inf.run/AKrUS", categories: ["Android"], thumbnailUrl: "https://cdn.inflearn.com/public/course-325652-cover/ac6b554c-bd7c-4b20-94fb-6e0e82b482ee", instructor: "오준석", rating: 4, reviewCount: 42, studentCount: 435, regularPrice: 99000, payPrice: 99000, discountRate: 0, isBest: false, skillTags: ["Android","Kotlin","Jetpack"], hookText: "모던 안드로이드 - 코틀린과 Jetpack 활용", hookSub: "오준석 · ⭐ 4 · 수강생 435명" },
    { title: "[코드팩토리] [초급] Flutter 3.0 앱 개발 - 10개의 프로젝트로 오늘 초보 탈출!", link: "https://inf.run/LgetC", categories: ["Flutter"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/328329/cover/72f06aa7-f5f1-422b-88a7-bca65e78dffd/328329.png", instructor: "코드팩토리", rating: 4.9, reviewCount: 331, studentCount: 5426, regularPrice: 99000, payPrice: 99000, discountRate: 0, isBest: true, skillTags: ["Flutter","클론코딩"], hookText: "[코드팩토리] [초급] Flutter 3.0 앱 개발 - 10개의 프로젝트로 오늘 초보 탈출!", hookSub: "코드팩토리 · ⭐ 4.9 · 수강생 5,426명" },
    { title: "[코드팩토리] [초급] 8시간만에 끝내는 코드팩토리의 Typescript 완전정복 풀코스", link: "https://inf.run/LWvPj", categories: ["Flutter"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/330970/cover/3c24c2b8-9dc1-44ed-af4e-2b58542a6504/330970-eng.png", instructor: "코드팩토리", rating: 5, reviewCount: 89, studentCount: 1203, regularPrice: 44000, payPrice: 44000, discountRate: 0, isBest: true, skillTags: ["TypeScript"], hookText: "[코드팩토리] [초급] 8시간만에 끝내는 코드팩토리의 Typescript 완전정복 풀코스", hookSub: "코드팩토리 · ⭐ 5 · 수강생 1,203명" },
    { title: "Flutter 앱 개발 기초", link: "https://inf.run/mhU3P", categories: ["Flutter"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/328842/cover/10e28601-a5b8-4df6-b54f-18916e8631ad/flutter 앱 개발 기초.png", instructor: "DevStory", rating: 5, reviewCount: 125, studentCount: 1433, regularPrice: 66000, payPrice: 49500, discountRate: 25, isBest: true, skillTags: ["Flutter"], hookText: "Flutter 앱 개발 기초 - 25% 할인 중!", hookSub: "DevStory · ⭐ 5 · 수강생 1,433명" },
    { title: "[코드팩토리] [중급] Flutter 진짜 실전! 상태관리, 캐시관리, Code Generation, GoRouter, 인증로직 등 중수가 되기 위한 필수 스킬들!", link: "https://inf.run/jyrKK", categories: ["Flutter"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/328615/cover/4abab928-4fd1-442b-b422-3968f9cc393e/thumbnail.png", instructor: "코드팩토리", rating: 4.9, reviewCount: 179, studentCount: 3058, regularPrice: 132000, payPrice: 132000, discountRate: 0, isBest: true, skillTags: ["Flutter","하이브리드 앱"], hookText: "[코드팩토리] [중급] Flutter 진짜 실전! 상태관리, 캐시관리, Code Generation, GoRouter, 인증로직 등 중수가 되기 위한 필수 스킬들!", hookSub: "코드팩토리 · ⭐ 4.9 · 수강생 3,058명" },
    { title: "Flutter 앱 개발 실전", link: "https://inf.run/h6Dh2", categories: ["Flutter"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/331298/cover/27a22615-d818-4265-998e-1450f24c1559/flutter 앱 개발 실전.png", instructor: "DevStory", rating: 4.8, reviewCount: 36, studentCount: 508, regularPrice: 143000, payPrice: 107250, discountRate: 25, isBest: true, skillTags: ["Flutter"], hookText: "Flutter 앱 개발 실전 - 25% 할인 중!", hookSub: "DevStory · ⭐ 4.8 · 수강생 508명" },
    { title: "Flutter 입문 - 안드로이드, iOS 개발을 한 번에 (with Firebase)", link: "https://inf.run/pfmMm", categories: ["Flutter"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/287760/cover/442e883c-66ce-4b2f-9dd2-03c954eef60e/287760-eng.png", instructor: "오준석", rating: 4.6, reviewCount: 201, studentCount: 2455, regularPrice: 66000, payPrice: 66000, discountRate: 0, isBest: true, skillTags: ["Flutter","iOS","Android"], hookText: "Flutter 입문 - 안드로이드, iOS 개발을 한 번에 (with Firebase)", hookSub: "오준석 · ⭐ 4.6 · 수강생 2,455명" },
    { title: "TDD 개발 방법론을 활용한 React Native 앱 개발", link: "https://inf.run/fYy4A", categories: ["ReactNative"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/324046/course_cover/f22ad076-c7b5-4706-ae65-fa68c16f29e6/bdh_TDDreact.png", instructor: "박동호", rating: 4.2, reviewCount: 54, studentCount: 487, regularPrice: 29700, payPrice: 29700, discountRate: 0, isBest: false, skillTags: ["JavaScript","React","React Native","TDD","소프트웨어 테스트"], hookText: "TDD 개발 방법론을 활용한 React Native 앱 개발", hookSub: "박동호 · ⭐ 4.2 · 수강생 487명" },
    { title: "스프링 핵심 원리 - 기본편", link: "https://inf.run/FCqpv", categories: ["Java/Spring"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/325969/cover/2868c757-5886-4508-a140-7cb68a83dfd8/325969-eng.png", instructor: "김영한", rating: 5, reviewCount: 4765, studentCount: 49381, regularPrice: 88000, payPrice: 88000, discountRate: 0, isBest: true, skillTags: ["Spring","객체지향"], hookText: "스프링 핵심 원리 - 기본편", hookSub: "김영한 · ⭐ 5 · 수강생 49,381명" },
    { title: "스프링 MVC 1편 - 백엔드 웹 개발 핵심 기술", link: "https://inf.run/a9My3", categories: ["Java/Spring"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e", instructor: "김영한", rating: 5, reviewCount: 2521, studentCount: 30370, regularPrice: 99000, payPrice: 99000, discountRate: 0, isBest: true, skillTags: ["MVC","Spring"], hookText: "스프링 MVC 1편 - 백엔드 웹 개발 핵심 기술", hookSub: "김영한 · ⭐ 5 · 수강생 30,370명" },
    { title: "비전공자도 이해할 수 있는 Docker 입문/실전", link: "https://inf.run/LFn3p", categories: ["Java/Spring"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/334085/cover/01k0qnn19n56p5gtsphaqfmqz5", instructor: "JSCODE 박재성", rating: 4.9, reviewCount: 575, studentCount: 14346, regularPrice: 88000, payPrice: 88000, discountRate: 0, isBest: true, skillTags: ["Docker","container","docker-compose","docker-volume","ecr"], hookText: "비전공자도 이해할 수 있는 Docker 입문/실전", hookSub: "JSCODE 박재성 · ⭐ 4.9 · 수강생 14,346명" },
    { title: "[개정3판] Node.js 교과서 - 기본부터 프로젝트 실습까지", link: "https://inf.run/rr6bz", categories: ["Node.js"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/330181/cover/47e0125e-75ad-4946-96d3-54bbc444a188/330181-eng.jpg", instructor: "제로초(조현영)", rating: 4.7, reviewCount: 71, studentCount: 2303, regularPrice: 49500, payPrice: 49500, discountRate: 0, isBest: true, skillTags: ["Node.js","Express","MySQL","MongoDB","Socket.io"], hookText: "[개정3판] Node.js 교과서 - 기본부터 프로젝트 실습까지", hookSub: "제로초(조현영) · ⭐ 4.7 · 수강생 2,303명" },
    { title: "얄코의 가장 쉬운 Node.js", link: "https://inf.run/7z8R8", categories: ["Node.js"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/336276/cover/01jwqpa3aad1vkfz2c4cjjdzrv", instructor: "얄팍한 코딩사전", rating: 4.9, reviewCount: 52, studentCount: 596, regularPrice: 33000, payPrice: 23100, discountRate: 30, isBest: true, skillTags: ["Node.js"], hookText: "얄코의 가장 쉬운 Node.js - 30% 할인 중!", hookSub: "얄팍한 코딩사전 · ⭐ 4.9 · 수강생 596명" },
    { title: "김영한의 실전 자바 - 기본편", link: "https://inf.run/9efRW", categories: ["Language"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/332506/cover/a2cc776f-4996-44a4-bbb3-b31df29c087c/332506.png", instructor: "김영한", rating: 5, reviewCount: 2169, studentCount: 26855, regularPrice: 44000, payPrice: 44000, discountRate: 0, isBest: true, skillTags: ["Java","객체지향"], hookText: "김영한의 실전 자바 - 기본편", hookSub: "김영한 · ⭐ 5 · 수강생 26,855명" },
    { title: "처음하는 컴퓨터공학(CS 지식) 부트캠프 | 컴퓨터구조, 운영체제, 네트워크", link: "https://inf.run/PaMxM", categories: ["CS"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/337332/cover/01jtn2tf5nwh8s7n0c1m2s4bre", instructor: "잔재미코딩 DaveLee", rating: 5, reviewCount: 7, studentCount: 104, regularPrice: 132000, payPrice: 132000, discountRate: 0, isBest: false, skillTags: ["네트워크","컴퓨터 구조","운영체제"], hookText: "처음하는 컴퓨터공학(CS 지식) 부트캠프 | 컴퓨터구조, 운영체제, 네트워크", hookSub: "잔재미코딩 DaveLee · ⭐ 5 · 수강생 104명" },
    { title: "모든 개발자를 위한 HTTP 웹 기본 지식", link: "https://inf.run/BBy39", categories: ["CS"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/326277/cover/52d4f143-b470-4109-96cb-a0b146fb42ed/http.png", instructor: "김영한", rating: 5, reviewCount: 3908, studentCount: 36192, regularPrice: 44000, payPrice: 44000, discountRate: 0, isBest: true, skillTags: ["네트워크"], hookText: "모든 개발자를 위한 HTTP 웹 기본 지식", hookSub: "김영한 · ⭐ 5 · 수강생 36,192명" },
    { title: "모든 개발자의 실무를 위한 올인원 기본기 클래스", link: "https://inf.run/wid86", categories: ["CS"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/327997/cover/6d8192c6-8a28-40c3-b8df-ef5bff5cb9ac/327997-eng.png", instructor: "그랩", rating: 4.7, reviewCount: 47, studentCount: 1326, regularPrice: 165000, payPrice: 165000, discountRate: 0, isBest: true, skillTags: ["객체지향","소프트웨어 테스트","아키텍처","Git","Python"], hookText: "모든 개발자의 실무를 위한 올인원 기본기 클래스", hookSub: "그랩 · ⭐ 4.7 · 수강생 1,326명" },
    { title: "CS 지식의 정석 | 디자인패턴 네트워크 운영체제 데이터베이스 자료구조", link: "https://inf.run/DAXoZ", categories: ["CS"], thumbnailUrl: "https://cdn.inflearn.com/public/courses/328823/cover/1081d7c2-64b4-4063-87f4-c40e11bb481f/KakaoTalk_20220517_140737840.jpg", instructor: "큰돌", rating: 4.8, reviewCount: 254, studentCount: 4027, regularPrice: 165000, payPrice: 165000, discountRate: 0, isBest: true, skillTags: ["기술면접","면접","운영체제"], hookText: "CS 지식의 정석 | 디자인패턴 네트워크 운영체제 데이터베이스 자료구조", hookSub: "큰돌 · ⭐ 4.8 · 수강생 4,027명" },
    { title: "Git & GitHub, 원리부터 차근차근 - 근본깃 [AI 더빙]", link: "https://inf.run/CMK3d", categories: ["CS"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/335191/cover/01kgzxr3ww6a02k2923tjt9y0z.gif", instructor: "geek", rating: 4.9, reviewCount: 63, studentCount: 733, regularPrice: 52800, payPrice: 39600, discountRate: 25, isBest: true, skillTags: ["Git","GitHub"], hookText: "Git & GitHub, 원리부터 차근차근 - 근본깃 [AI 더빙] - 25% 할인 중!", hookSub: "geek · ⭐ 4.9 · 수강생 733명" },
    { title: "얄코의 가장 쉬운 자료구조와 알고리즘", link: "https://inf.run/nJU8L", categories: ["Algorithm"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/337721/cover/01jxc8hmgmr5je2nb9p2dk837t", instructor: "얄팍한 코딩사전", rating: 4.9, reviewCount: 102, studentCount: 1180, regularPrice: 44000, payPrice: 30800, discountRate: 30, isBest: true, skillTags: ["알고리즘","data-structure"], hookText: "얄코의 가장 쉬운 자료구조와 알고리즘 - 30% 할인 중!", hookSub: "얄팍한 코딩사전 · ⭐ 4.9 · 수강생 1,180명" },
    { title: "38군데 합격 비법, 2025 코딩테스트 필수 알고리즘", link: "https://inf.run/VgHmC", categories: ["Algorithm"], thumbnailUrl: "https://cdn.inflearn.com/public/files/courses/335301/cover/01jwb6qbc5ps47da0skg233zdw.gif", instructor: "딩코딩코", rating: 5, reviewCount: 396, studentCount: 2528, regularPrice: 165000, payPrice: 165000, discountRate: 0, isBest: true, skillTags: ["Python","코딩 테스트","알고리즘","data-structure"], hookText: "38군데 합격 비법, 2025 코딩테스트 필수 알고리즘", hookSub: "딩코딩코 · ⭐ 5 · 수강생 2,528명" }
];

const AD_INTERVAL = 7; // 매 N번째 행마다 광고 삽입

const IT_EXCLUDED_AD_CATEGORIES = new Set(["PM", "마케팅", "디자인"]);
const IT_DEFAULT_AD_CATEGORIES = new Set(["Algorithm", "CS"]);

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

let _shuffledAdsCache = null;
let _lastFilterKey = null;

function getFilteredAds(activeFieldFilters) {
    const isITPage = !window.isMarketingPage && !window.isBootcampPage && !window.isHackathonPage;
    let ads = InflearnAds;

    if (isITPage) {
        ads = ads.filter(ad => !ad.categories.some(c => IT_EXCLUDED_AD_CATEGORIES.has(c)));

        if (activeFieldFilters && activeFieldFilters.size > 0) {
            const matching = ads.filter(ad => ad.categories.some(c => activeFieldFilters.has(c)));
            if (matching.length > 0) ads = matching;
        } else {
            const defaults = ads.filter(ad => ad.categories.some(c => IT_DEFAULT_AD_CATEGORIES.has(c)));
            if (defaults.length > 0) ads = defaults;
        }
    }

    const filterKey = [...(activeFieldFilters || [])].sort().join(',');
    if (_lastFilterKey !== filterKey) {
        _shuffledAdsCache = shuffleArray(ads);
        _lastFilterKey = filterKey;
    }

    return _shuffledAdsCache;
}

function pickAdForContext(index, activeFieldFilters) {
    const ads = getFilteredAds(activeFieldFilters);
    if (ads.length === 0) return null;
    return ads[index % ads.length];
}

function renderAdSkillTags(ad) {
    return (ad.skillTags || []).map(tag => `<span class="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700/70 text-xs font-medium text-slate-600 dark:text-slate-300">${tag}</span>`).join('');
}

function renderAdDiscountBadge(ad) {
    if (!ad.discountRate) return '';
    return `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold leading-none" style="background:rgba(239,68,68,0.15);color:#ef4444">${ad.discountRate}%</span>`;
}

function renderAdMinimal_Desktop(ad) {
    return `
    <tr class="bg-slate-50/30 dark:bg-slate-800/20 inflearn-ad" data-ad-title="${ad.title.replace(/"/g, '&quot;')}" data-ad-link="${ad.link}" data-ad-categories="${(ad.categories || []).join(',')}" data-ad-view="desktop">
        <td colspan="7" class="px-4 py-2.5">
            <a href="${ad.link}" target="_blank" rel="noopener" class="inflearn-ad-link flex items-center justify-between gap-4 group">
                <div class="flex items-center gap-3">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold leading-none" style="background:rgba(0,196,113,0.15);color:#00c471">AD</span>
                    ${renderAdDiscountBadge(ad)}
                    <span class="text-sm text-slate-500 dark:text-slate-400">
                        <span class="font-medium text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">${ad.hookText}</span>
                        ${ad.hookSub}
                    </span>
                    <div class="flex gap-1.5">${renderAdSkillTags(ad)}</div>
                </div>
                <span class="text-xs font-medium shrink-0 group-hover:underline" style="color:#00c471">강의 보기 →</span>
            </a>
        </td>
    </tr>`;
}

function renderAdMinimal_Mobile(ad) {
    return `
    <a href="${ad.link}" target="_blank" rel="noopener" class="inflearn-ad inflearn-ad-link flex items-center gap-3 px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl" data-ad-title="${ad.title.replace(/"/g, '&quot;')}" data-ad-link="${ad.link}" data-ad-categories="${(ad.categories || []).join(',')}" data-ad-view="mobile">
        <span class="px-1.5 py-0.5 rounded text-[10px] font-bold leading-none shrink-0" style="background:rgba(0,196,113,0.15);color:#00c471">AD</span>
        ${renderAdDiscountBadge(ad)}
        <div class="flex-1 min-w-0">
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">${ad.hookText}</span>
            <span class="text-xs text-slate-400 block">${ad.hookSub}</span>
        </div>
        <span class="text-xs shrink-0" style="color:#00c471">→</span>
    </a>`;
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

function renderTable(clubs = getAllClubs(), activeFieldFilters = new Set()) {
    const tbody = document.getElementById('club-list');
    if (!tbody) return;

    if (clubs.length === 0) {
        const cols = window.isHackathonPage ? 6 : 7;
        const emptyLabel = window.isHackathonPage ? 'IT 대회' : '동아리';
        tbody.innerHTML = `<tr><td colspan="${cols}" class="text-center py-12 text-slate-500">조건에 맞는 ${emptyLabel}가 없습니다.</td></tr>`;
        return;
    }

    let adIndex = 0;
    const result = [];
    clubs.forEach((club, index) => {
        const nameContent = club.link ? `<a href="${club.link}" target="_blank" class="hover:text-primary hover:underline decoration-2 underline-offset-4">${club.name}</a>` : club.name;
        result.push(`
        <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
            <td class="px-4 py-5"><div class="flex items-center gap-2"><span class="text-xl">${club.icon}</span><span class="font-bold">${nameContent}</span></div></td>
            <td class="px-4 py-5 text-sm font-bold"><span class="block">${club.recruitStart}</span><span class="text-slate-400">→ ${club.recruitEnd}</span></td>
            <td class="px-4 py-5"><div class="flex gap-1 flex-wrap">${club.activity.map(m => `<span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-xs">${m}</span>`).join('')}</div></td>
            <td class="px-4 py-5"><div class="flex flex-col gap-1">${window.isHackathonPage ? club.prize.map(p => getPrizeBadge(p)).join('') : window.isBootcampPage ? club.cost.map(c => getCostBadge(c)).join('') : club.eligibility.map(e => getEligibilityBadge(e)).join('')}</div></td>
            <td class="px-4 py-5"><div class="flex flex-wrap gap-1.5">${club.fields.map(f => `<span class="px-2 py-0.5 rounded ${f.class} text-xs font-medium">${f.name}</span>`).join('')}</div></td>
            ${window.isHackathonPage ? '' : `<td class="px-4 py-5 text-center"><span class="flex justify-center gap-0.5">${club.dots}</span></td>`}
            <td class="px-4 py-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-w-[300px]">${club.description}</td>
        </tr>`);
        if ((index + 1) % AD_INTERVAL === 0) {
            const ad = pickAdForContext(adIndex++, activeFieldFilters);
            if (ad) result.push(renderAdMinimal_Desktop(ad));
        }
    });

    tbody.innerHTML = result.join('');
}

function renderMobileCards(clubs = getAllClubs(), activeFieldFilters = new Set()) {
    const container = document.getElementById('club-list-mobile');
    if (!container) return;

    if (clubs.length === 0) {
        const emptyLabel2 = window.isHackathonPage ? 'IT 대회' : '동아리';
        container.innerHTML = `<div class="text-center py-12 text-slate-500">조건에 맞는 ${emptyLabel2}가 없습니다.</div>`;
        return;
    }

    let adIndex = 0;
    const result = [];
    clubs.forEach((club, index) => {
        const Tag = club.link ? 'a' : 'div';
        const hrefAttr = club.link ? `href="${club.link}" target="_blank"` : '';
        result.push(`
        <${Tag} ${hrefAttr} class="block p-4 bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-2xl backdrop-blur-xl bg-opacity-70 shadow-lg">
            <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-2 min-w-0">
                    <span class="text-2xl shrink-0">${club.icon}</span>
                    <span class="font-bold text-lg">${club.name}</span>
                </div>
                ${window.isHackathonPage ? '' : `<span class="flex gap-0.5 text-sm shrink-0">${club.dots}</span>`}
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
            </div>
        </${Tag}>`);
        if ((index + 1) % AD_INTERVAL === 0) {
            const ad = pickAdForContext(adIndex++, activeFieldFilters);
            if (ad) result.push(renderAdMinimal_Mobile(ad));
        }
    });

    container.innerHTML = result.join('');
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
        const allItems = getAllClubs();
        const allFieldNames = new Set(allItems.flatMap(item => item.fields.map(f => f.name)));
        const DISPLAY_ORDER = [Category.PM, Category.DESIGN, Category.WEB, Category.ANDROID, Category.IOS, Category.FLUTTER, Category.REACT_NATIVE, Category.BACKEND, Category.CLOUD, Category.AI, Category.ANY, Category.MARKETING, Category.ALGORITHM, Category.CS];
        const categorySet = new Set(
            (pageCategories
                ? Object.keys(FilterCategory).filter(c => pageCategories.includes(c))
                : Object.keys(FilterCategory)
            ).filter(category => FilterCategory[category].some(field => allFieldNames.has(field)))
        );
        const categories = DISPLAY_ORDER.filter(c => categorySet.has(c));
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

        renderTable(filteredClubs, activeFilters.fields);
        renderMobileCards(filteredClubs, activeFilters.fields);
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
            }
        });
    }

    resetFiltersButton.addEventListener('click', () => {
        document.querySelectorAll('#filter-dropdown input[type="checkbox"]').forEach(cb => cb.checked = false);
        Object.values(activeFilters).forEach(set => set.clear());
        applyFilters();
    });

    populateFilters();

    // Initial render
    renderTable();
    renderMobileCards();
    renderDeadlines();

    // Search logic
    const searchInput = document.querySelector('input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            applyFilters();
        });
    }
});

// 🦕 Easter Egg (IT 연합동아리 페이지에서만 동작)
(function() {
    if (getPageName() !== 'it') return;

    const logo = document.querySelector('header img[alt="Logo"]');
    if (!logo) return;

    logo.style.cursor = 'pointer';

    logo.addEventListener('click', function() {
        if (document.getElementById('easter-egg-modal')) return;

        trackEvent('favicon_easter_egg_click', { page: getPageName() });

        const overlay = document.createElement('div');
        overlay.id = 'easter-egg-modal';
        overlay.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm';

        overlay.innerHTML = `
            <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl text-center max-w-sm mx-4 transform animate-bounce-in">
                <div class="text-5xl mb-4">🎉</div>
                <p class="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">쿠폰을 발견했어요!</p>
                <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">인프런 쿠폰번호</p>
                <div class="bg-slate-100 dark:bg-slate-700 rounded-xl px-6 py-3 mb-4 select-all">
                    <span class="text-xl font-bold text-primary tracking-wider">인프런짱짱</span>
                </div>
                <p class="text-xs text-slate-400 dark:text-slate-500 mb-4">쿠폰번호를 복사해서 인프런에서 사용하세요!</p>
                <button id="easter-egg-close" class="px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors mb-3">닫기</button>
                <p class="text-[10px] text-slate-400 dark:text-slate-500">본 쿠폰은 이미 공개된 코드이며, 인프런과는 무관합니다.</p>
            </div>
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay || e.target.id === 'easter-egg-close') {
                overlay.remove();
            }
        });
    });
})();
