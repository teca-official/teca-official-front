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

// 필터 카테고리 매핑
const FilterCategory = {
    "PM": ["PM"],
    "디자인": ["Design", "UX"],
    "AI": ["AI", "머신러닝", "딥러닝", "LLM", "데이터 분석", "데이터 시각화", "데이터 엔지니어링"],
    "웹": ["WEB", "Frontend"],
    "모바일": ["Android", "iOS", "ReactNative", "Flutter", "앱"],
    "백엔드": ["Backend", "SpringBoot", "Node.js", "Django"],
    "무관": ["무관"],
    "클라우드": ["클라우드"],
    "마케팅": ["Marketing", "경영"]
};

const Club = {
    // 2025-01-20
    GOORMTHON_UNIV: { name: "구름톤 유니브", link: "https://9oormthon.university/", dots: "🌕", icon: "☁️", themeColor: "slate-500", recruitStart: "1월 20일 2025", recruitEnd: "2월 12일 2025", activity: ["3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY], description: "'함께 성장'이라는 핵심가치를 실현하며 전국의 대학생들과 자유롭게 교류하고 학습하며 성장하는 카카오와 구름이 함께하는 대학생 대상 해커톤", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.SPRING, Field.REACT_NATIVE] },
    // 2025-02-18
    COTATO_1: { name: "코테이토 (1학기)", link: "https://www.cotato.kr/", dots: "🌕", icon: "🥔", themeColor: "slate-500", recruitStart: "2월 18일 2025", recruitEnd: "2월 23일 2025", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "IT 서비스 기획부터 개발, 출시에 이르기까지 전 과정을 경험할 수 있는 대학생 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.NODE, Field.SPRING] },
    // 2025-03-08
    SOPT_1: { name: "SOPT (1학기)", link: "https://www.sopt.org/", icon: "📣", themeColor: "neon-green", dots: "🌕🌕🌗", recruitStart: "3월 8일 2025", recruitEnd: "3월 14일 2025", activity: ["3월"], eligibility: [Eligibility.UNIVERSITY], description: "국내 최대 규모 대학생 연합 IT 벤처 창업 동아리로 13년간 2400명이 수료하고 210개 서비스를 만든 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING, Field.FLUTTER, Field.MANAGEMENT] },
    // 3월 초
    UMC_1: { name: "UMC (1학기)", link: "https://umc.makeus.in/", dots: "🌕🌗", icon: "🪐", themeColor: "slate-500", recruitStart: "3월 초", recruitEnd: "4월 초", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY], description: "University MakeUs Challenge의 약자로, 전국 30여개 대학이 참여하는 국내 최대 규모의 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.NODE, Field.SPRING] },
    LIKELION: { name: "멋쟁이사자처럼 대학", link: "https://likelion.net/", dots: "🌕", icon: "🦁", themeColor: "slate-500", recruitStart: "3월 초", recruitEnd: "3월 말", activity: ["3월", "4월", "5월", "6월", "7월", "8월"], eligibility: [Eligibility.UNIVERSITY], description: "아이디어를 실현하고자 하는 의지를 가진 비전공자, 전공자 대학생들이 함께 모여 IT 서비스를 개발하고 기업가정신을 배우는 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.DJANGO, Field.SPRING] },
    // 2025-04-10
    YAPP_1: { name: "YAPP (1학기)", link: "https://www.yapp.co.kr/", dots: "🌕🌕🌕", icon: "📱", themeColor: "slate-500", recruitStart: "4월 10일 2025", recruitEnd: "4월 20일 2025", activity: ["3월", "4월", "5월", "6월", "7월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "Your Application Partner의 약자로, 기획자, 디자이너, 개발자가 함께 서비스를 만들고 운영하며 성장하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
    // 2025-04-11
    DDD_1: { name: "DDD (1학기)", link: "https://dddset.notion.site/DDD-7b73ca41b67c4658b292a4662581ee01", dots: "🌕🌕", icon: "💡", themeColor: "slate-500", recruitStart: "4월 11일 2025", recruitEnd: "4월 20일 2025", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "Develop, Design, Discover의 약자로, 디자이너와 개발자가 만나 새로운 가치를 발견하고 함께 성장하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
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
    COTATO_2: { name: "코테이토 (2학기)", link: "https://www.cotato.kr/", dots: "🌕", icon: "🥔", themeColor: "slate-500", recruitStart: "8월 18일 2025", recruitEnd: "8월 25일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "IT 서비스 기획부터 개발, 출시에 이르기까지 전 과정을 경험할 수 있는 대학생 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.NODE, Field.SPRING] },
    UMC_2: { name: "UMC (2학기)", link: "https://umc.makeus.in/", dots: "🌕🌗", icon: "🪐", themeColor: "slate-500", recruitStart: "8월 18일 2025", recruitEnd: "8월 28일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "University MakeUs Challenge의 약자로, 전국 30여개 대학이 참여하는 국내 최대 규모의 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.NODE, Field.SPRING] },
    // 2025-08-20
    CEOS_2: { name: "CEOS (2학기)", link: "https://ceos-sinchon.com/", dots: "🌕🌕", icon: "🦄", themeColor: "slate-500", recruitStart: "8월 20일 2025", recruitEnd: "8월 27일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.SINCHON], description: "신촌지역 5개 대학(서강대, 숙명여대, 연세대, 이화여대, 홍익대) 학생들이 모여 창업 및 IT 서비스를 개발하는 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.SPRING, Field.MANAGEMENT] },
    // 2025-09-06
    SOPT_2: { name: "SOPT (2학기)", link: "https://www.sopt.org/", dots: "🌕🌕🌗", icon: "📣", themeColor: "slate-500", recruitStart: "9월 6일 2025", recruitEnd: "9월 12일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY], description: "국내 최대 규모 대학생 연합 IT 벤처 창업 동아리로 13년간 2400명이 수료하고 210개 서비스를 만든 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING, Field.FLUTTER, Field.MANAGEMENT] },
    // 2025-09-08
    SIPE_2: { name: "sipe (2학기)", link: "https://sipe.team/", dots: "🌕🌗", icon: "☘️", themeColor: "slate-500", recruitStart: "9월 8일 2025", recruitEnd: "9월 22일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.WORKER], description: "Side Project Enthusiasts의 약자로, 사이드 프로젝트에 대한 열정을 가진 사람들이 모여 함께 성장하는 동아리", fields: [Field.NONE] },
    // 2025-10-19
    YAPP_2: { name: "YAPP (2학기)", link: "https://www.yapp.co.kr/", dots: "🌕🌕🌕", icon: "📱", themeColor: "slate-500", recruitStart: "10월 19일 2025", recruitEnd: "10월 27일 2025", activity: ["9월", "10월", "11월", "12월", "1월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "Your Application Partner의 약자로, 기획자, 디자이너, 개발자가 함께 서비스를 만들고 운영하며 성장하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
    // 2025-10-28
    CMC_2: { name: "CMC (2학기)", link: "https://cmc.makeus.in/", dots: "🌕🌕🌗", icon: "🚀", themeColor: "slate-500", recruitStart: "10월 28일 2025", recruitEnd: "11월 5일 2025", activity: ["9월", "10월", "11월", "12월", "1월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "MakeUs Challenge의 약자로, 기획, 디자인, 개발 직군이 모여 실제 서비스를 런칭하고 운영하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING, Field.REACT_NATIVE] },
    // 2025-10-30
    DDD_2: { name: "DDD (2학기)", link: "https://dddset.notion.site/DDD-7b73ca41b67c4658b292a4662581ee01", dots: "🌕🌕", icon: "💡", themeColor: "slate-500", recruitStart: "10월 30일 2025", recruitEnd: "11월 12일 2025", activity: ["9월", "10월", "11월", "12월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "Develop, Design, Discover의 약자로, 디자이너와 개발자가 만나 새로운 가치를 발견하고 함께 성장하는 동아리", fields: [Field.PM, Field.DESIGN, Field.ANDROID, Field.IOS, Field.WEB, Field.SPRING] },
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
    CEOS_1: { name: "CEOS (1학기)", link: "https://ceos-sinchon.com/", dots: "🌕🌕", icon: "🦄", themeColor: "slate-500", recruitStart: "2월 13일 2026", recruitEnd: "2월 24일 2026", activity: ["3월", "4월", "5월", "6월"], eligibility: [Eligibility.SINCHON], description: "신촌지역 5개 대학(서강대, 숙명여대, 연세대, 이화여대, 홍익대) 학생들이 모여 창업 및 IT 서비스를 개발하는 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.WEB, Field.SPRING, Field.MANAGEMENT] },
    // 2026-02-14
    PROGRAPHY: {name: "프로그래피 Prography", link: "https://prography.org/", icon: "💻", themeColor: "neon-pink", dots: "🌕🌕🌗", recruitStart: "2월 14일 2026", recruitEnd: "2월 26일 2026", activity: ["1월", "2월"], eligibility: [Eligibility.UNIVERSITY, Eligibility.WORKER], description: "디자이너, 개발자, P.O, 마케터가 모여 하나의 프로덕트를 만들고 운영하며 함께 성장하는 IT 연합 동아리", fields: [Field.PM, Field.DESIGN, Field.IOS, Field.ANDROID, Field.WEB, Field.SPRING, Field.MARKETING] },
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

function getEligibilityBadge(type) {
    if (type === Eligibility.UNIVERSITY) return `<span class="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-xs w-fit">대학생</span>`;
    if (type === Eligibility.WORKER) return `<span class="px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300 text-xs w-fit">현직자</span>`;
    if (type === Eligibility.SINCHON) return `<span class="px-2 py-0.5 rounded bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-300 text-xs w-fit">신촌지역대학생</span>`;
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
        club.fields.some(f => f.name === Field.MARKETING.name || f.name === Field.MANAGEMENT.name)
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
    if (window.isMarketingPage) return getMarketingClubs();
    return Object.values(Club).filter(club => hasDevPosition(club));
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

    const upcoming = getAllClubs().filter(club => {
        const recruitEnd = parseDate(club.recruitEnd);
        if (!recruitEnd) return false;
        
        const endMonth = recruitEnd.getMonth();
        
        return endMonth === currentMonth || endMonth === nextMonth;
    }).map(club => {
        const endDate = parseDate(club.recruitEnd);
        return { ...club, endDate };
    }).sort((a, b) => {
        const currentYear = new Date().getFullYear();
        const aIsCurrentYear = a.endDate.getFullYear() === currentYear;
        const bIsCurrentYear = b.endDate.getFullYear() === currentYear;

        // 올해 날짜인 동아리 우선
        if (aIsCurrentYear && !bIsCurrentYear) return -1;
        if (!aIsCurrentYear && bIsCurrentYear) return 1;

        // 같은 그룹 내에서는 마감일 순
        return a.endDate - b.endDate;
    });

    if (upcoming.length === 0) {
        container.innerHTML = `<div class="text-slate-500 text-sm p-4">이번 달과 다음 달에 마감되는 동아리가 없습니다.</div>`;
        return;
    }

    container.innerHTML = upcoming.map(club => {

        const Tag = club.link ? 'a' : 'div';
        const hrefAttr = club.link ? `href="${club.link}" target="_blank"` : '';

        return `
        <${Tag} ${hrefAttr} class="block flex-shrink-0 w-72 p-5 rounded-2xl border border-slate-200 dark:border-border-dark bg-blue-50 dark:bg-slate-900/40 hover:bg-blue-100 dark:hover:bg-slate-800/60 transition-all cursor-pointer no-underline hover:no-underline">
            <div class="flex justify-between items-start mb-4">
                <span class="text-2xl">${club.icon}</span>
            </div>
            <h4 class="text-lg font-bold mb-1 text-slate-900 dark:text-slate-100">${club.name.split(' ')[0]}</h4>
            <p class="text-sm font-bold text-slate-500">${club.recruitStart} ~ ${club.recruitEnd}</p>
        </${Tag}>`;
    }).join('');
}

function renderTable(clubs = getAllClubs()) {
    const tbody = document.getElementById('club-list');
    if (!tbody) return;

    if (clubs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-12 text-slate-500">조건에 맞는 동아리가 없습니다.</td></tr>`;
        return;
    }

    tbody.innerHTML = clubs.map((club, index) => {
        const nameContent = club.link ? `<a href="${club.link}" target="_blank" class="hover:text-primary hover:underline decoration-2 underline-offset-4">${club.name}</a>` : club.name;
        const row = `
        <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
            <td class="px-4 py-5"><div class="flex items-center gap-2"><span class="text-xl">${club.icon}</span><span class="font-bold">${nameContent}</span></div></td>
            <td class="px-4 py-5 text-sm font-bold"><span class="block">${club.recruitStart}</span><span class="text-slate-400">→ ${club.recruitEnd}</span></td>
            <td class="px-4 py-5"><div class="flex gap-1 flex-wrap">${club.activity.map(m => `<span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-xs">${m}</span>`).join('')}</div></td>
            <td class="px-4 py-5"><div class="flex flex-col gap-1">${club.eligibility.map(e => getEligibilityBadge(e)).join('')}</div></td>
            <td class="px-4 py-5"><div class="flex flex-wrap gap-1.5">${club.fields.map(f => `<span class="px-2 py-0.5 rounded ${f.class} text-xs font-medium">${f.name}</span>`).join('')}</div></td>
            <td class="px-4 py-5 text-center"><span class="flex justify-center gap-0.5">${club.dots}</span></td>
            <td class="px-4 py-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-w-[300px]">${club.description}</td>
        </tr>`;
        return row;
    }).join('');
}

function renderMobileCards(clubs = getAllClubs()) {
    const container = document.getElementById('club-list-mobile');
    if (!container) return;

    if (clubs.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-slate-500">조건에 맞는 동아리가 없습니다.</div>`;
        return;
    }

    container.innerHTML = clubs.map(club => {
        const Tag = club.link ? 'a' : 'div';
        const hrefAttr = club.link ? `href="${club.link}" target="_blank"` : '';
        return `
        <${Tag} ${hrefAttr} class="block p-4 bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-2xl backdrop-blur-xl bg-opacity-70 shadow-lg">
            <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-2">
                    <span class="text-2xl">${club.icon}</span>
                    <span class="font-bold text-lg">${club.name}</span>
                </div>
                <span class="flex gap-0.5 text-sm">${club.dots}</span>
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
                    <span class="text-slate-500 dark:text-slate-400 w-16 shrink-0">신청 자격</span>
                    <div class="flex gap-1 flex-wrap">${club.eligibility.map(e => getEligibilityBadge(e)).join('')}</div>
                </div>
                <div class="flex items-start gap-2">
                    <span class="text-slate-500 dark:text-slate-400 w-16 shrink-0 pt-0.5">모집 분야</span>
                    <div class="flex flex-wrap gap-1">${club.fields.map(f => `<span class="px-1.5 py-0.5 rounded ${f.class} text-xs font-medium">${f.name}</span>`).join('')}</div>
                </div>
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
        const fieldsContainer = document.getElementById('filter-fields');
        const categories = Object.keys(FilterCategory);
        fieldsContainer.innerHTML = categories.map(category => `
            <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value="${category}" data-filter-key="fields" class="form-checkbox rounded text-primary focus:ring-primary/50">
                <span>${category}</span>
            </label>
        `).join('');

        const tiersContainer = document.getElementById('filter-tiers');
        const uniqueTiers = [...new Set(Object.values(Club).map(c => c.dots))].sort((a, b) => calculateScore(b) - calculateScore(a));
        tiersContainer.innerHTML = uniqueTiers.map(tier => `
            <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value="${tier}" data-filter-key="tiers" class="form-checkbox rounded text-primary focus:ring-primary/50">
                <span>${tier}</span>
            </label>
        `).join('');

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

    filterButton.addEventListener('click', (e) => {
        e.stopPropagation();
        filterDropdown.classList.toggle('hidden');
        sortDropdown.classList.add('hidden');
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
    const sortButton = document.getElementById('sort-button');
    const sortDropdown = document.getElementById('sort-dropdown');

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
