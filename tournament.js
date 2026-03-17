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
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/06e50d37-d334-451d-ba5e-c3c3bf006a5d-01.png"
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
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/b8695044-4758-482d-a69a-53422b40fce1-1.png"
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
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/9f33ce81-6799-48ab-b18b-a9bbd68544ed-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%9D%B4%EB%AF%B8%EC%A7%80_1.png",
    },
    {
        id: 30,
        name: "메멘토",
        club: "SOPT",
        cohort: "35기",
        description: "To-Do의 자율주행",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/4141ef05-199a-4680-b68f-e7afa86ecb18-01.jpg",
    },
    {
        id: 31,
        name: "코코스",
        club: "SOPT",
        cohort: "35기",
        description: "반려인의 간절함이 모이는 공간, 코코스",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/be143b5a-1650-4aba-afa3-df833663b8bc-장표 사이즈 (2).png",
    },
    {
        id: 32,
        name: "공백",
        club: "SOPT",
        cohort: "35기",
        description: "공강을 백으로 채우다.",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/0575a00c-118a-4916-b4c7-80a5d466030c-IMG_3289.png",
    },
    {
        id: 33,
        name: "납작마켓",
        club: "SOPT",
        cohort: "35기",
        description: "덕후들이 사랑하는 거래 공간",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/f21f3758-12b6-45e9-bb16-37e1cac029a2-Slide 16_9 - 1.png",
    },
    {
        id: 34,
        name: "제 과제 빵점",
        club: "SOPT",
        cohort: "35기",
        description: "제 과제 빵점 사장님은 이번 학기 백점!",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/d3400e33-4617-44ef-a34b-950d9ff4e7c9-App Icon.png",
    },
    {
        id: 35,
        name: "Roomie",
        club: "SOPT",
        cohort: "35기",
        description: "스트레스 없이 시작하는 코리빙!",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/42ab7bb6-a1c4-4eb3-b8b4-37de6d95350f-THUMBNAIL2.png",
    },
    {
        id: 36,
        name: "Spoony",
        club: "SOPT",
        cohort: "35기",
        description: "한 입 떠먹으며 완성하는 나만의 찐 맛집 지도",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/6ee28b54-6489-468d-bccd-419c563e902d-%E1%84%89%E1%85%B3%E1%84%91%E1%85%AE%E1%84%82%E1%85%B5%E1%84%91%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B3%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%91%E1%85%AD.png",
    },
    {
        id: 37,
        name: "Dash",
        club: "SOPT",
        cohort: "35기",
        description: "당신에게 춤을 더 가까이, 꿈꾸던 댄스 클래스를 만나다",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/d64f20c7-cbf0-4741-8a07-8176c2c56c5d-1.png"
    },
    {
        id: 38,
        name: "confeti",
        club: "SOPT",
        cohort: "35기",
        description: "공연의 설렘부터 감동까지, 콘페티와 함께!",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/aab67880-3214-4b45-9da4-74391214f95a-1.png",
    },
    {
        id: 39,
        name: "acon",
        club: "SOPT",
        cohort: "35기",
        description: "매번 맛집을 찾느라 고민 중인 당신을 위한 지도",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/2e76bd25-23ff-46e0-a5b8-4e1feda6da81-Frame 2085665462.png",
    },
    {
        id: 40,
        name: "절로가",
        club: "SOPT",
        cohort: "35기",
        description: "템플스테이를 만나는 가장 쉬운 방법",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/c24ef896-a3f7-4240-be58-e74144a6bca7-c84cae9b02bd92fb.png",
    },
    {
        id: 41,
        name: "수현이랑",
        club: "SOPT",
        cohort: "35기",
        description: "완벽하게 엄빠몰래 가는 여행",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/d834c266-79e3-41b4-aeab-13e412e09d0e-Frame 2085667795.png",
    },
    {
        id: 42,
        name: "daruda",
        club: "SOPT",
        cohort: "35기",
        description: "대학생활에 필요한 툴을 다루다",
        image: "https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//prod/image/project/b75dce68-fd7a-4bc0-b9cb-73f333bc739a-Group 2085665301.png",
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
    // --- YAPP ---
    {
        id: 1,
        name: "네키",
        club: "YAPP",
        cohort: "27기",
        description: "네컷의 순간이 이어지는 곳, NEKI. 흩어져 있던 네컷 부스 이용 경험을 이어주는 서비스",
        image: "https://www.yapp.co.kr/assets/project/27_thumbnail_neki.jpg",
        appStoreLink: "https://apps.apple.com/kr/app/neki/id6757490609",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.neki.android",
    },
    {
        id: 2,
        name: "나도갈래",
        club: "YAPP",
        cohort: "27기",
        description: "유튜브·넷플릭스·TV 여행 콘텐츠 속 여행 동선을 따라가 내 여행 일정으로 전환해주는 여행 따라가기 서비스",
        image: "https://www.yapp.co.kr/assets/project/27_thumbnail_nadogalrae.jpg",
        appStoreLink: "https://apps.apple.com/kr/app/%EB%82%98%EB%8F%84%EA%B0%88%EB%9E%98/id6757995826",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.yapp.ndgl",
    },
    {
        id: 3,
        name: "moit & weddin",
        club: "YAPP",
        cohort: "27기",
        description: "모두의 만남을 잇다, 모잇. 청첩장 모임 일정 관리를 가장 쉽고 빠르게",
        image: "https://www.yapp.co.kr/assets/project/27_thumbnail_moitweddin.png",
        webLink: "https://moit.kr/",
    },
    {
        id: 4,
        name: "moa",
        club: "YAPP",
        cohort: "27기",
        description: "몰입된 회고 작성 경험을 돕고, 팀의 회고를 체계적으로 아카이빙하여 팀의 경험을 성장의 자산으로 만들어주는 팀 회고 서비스",
        image: "https://www.yapp.co.kr/assets/project/27_thumbnail_moa.png",
        webLink: "https://moaofficial.kr/",
    },
    {
        id: 5,
        name: "Lokit",
        club: "YAPP",
        cohort: "27기",
        description: "함께 만드는 둘만의 커플지도, 로킷. 커플의 일상 속 크고 작은 모든 순간을 지도 위에 아카이빙하고 추억으로 함께 쌓아요",
        image: "https://www.yapp.co.kr/assets/project/27_thumbnail_lokit.jpg",
        webLink: "https://lokit.co.kr/",
    },
    {
        id: 6,
        name: "keepiluv",
        club: "YAPP",
        cohort: "27기",
        description: "서로를 원동력으로, 멈추지 않는 우리. keep it luv! 혼자만의 다짐이 작심삼일로 끝나 아쉬웠다면 키피럽에서 서로의 페이스메이커가 되어 보세요",
        image: "https://www.yapp.co.kr/assets/project/27_thumbnail_keepluv.png",
        appStoreLink: "https://apps.apple.com/kr/app/%ED%82%A4%ED%94%BC%EB%9F%BD-%EC%BB%A4%ED%94%8C-%EA%B3%84%ED%9A%8D-%EB%AA%A9%ED%91%9C-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC/id6757021644",
    },
    {
        id: 7,
        name: "Ssok",
        club: "YAPP",
        cohort: "26기",
        description: "나에게 딱 맞는 여행 숙소 찾기. 쏙에서 링크만 넣으면 자동으로 비교표가 완성돼요. 가격·평점·후기를 한눈에 보고 친구와 의견도 쉽게 모을 수 있어요",
        image: "https://www.yapp.co.kr/assets/project/26_thumbnail_ssok.png",
        webLink: "https://ssok.info/",
    },
    {
        id: 8,
        name: "Reed",
        club: "YAPP",
        cohort: "26기",
        description: "문장과 감정을 함께 담는 독서 기록 서비스. 책 덮기 전 남기는 한 문장으로 독서 기록을 쌓아가는 서비스입니다",
        image: "https://www.yapp.co.kr/assets/project/26_thumbnail_reed.jpg",
        appStoreLink: "https://apps.apple.com/kr/app/reed/id6747740414",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.ninecraft.booket",
    },
    {
        id: 9,
        name: "Lettie",
        club: "YAPP",
        cohort: "26기",
        description: "함께하는 순간을 기억하고 싶은 사람들을 위한 그룹 편지(타임캡슐) 플랫폼. 정해진 날짜가 되면 캡슐을 열어 모인 편지를 확인해요",
        image: "https://www.yapp.co.kr/assets/project/26_thumbnail_lettie.png",
        webLink: "https://lettie.me/",
    },
    {
        id: 10,
        name: "FitRun",
        club: "YAPP",
        cohort: "26기",
        description: "러닝 초보부터 러너라면 누구나! 체력 기반 맞춤 플랜과 오디오 코칭 및 피드백, 기록 관리로 꾸준한 러닝 습관을 만들어 보세요",
        image: "https://www.yapp.co.kr/assets/project/26_thumbnail_fitrun.png",
        appStoreLink: "https://apps.apple.com/kr/app/%ED%95%8F%EB%9F%B0-%EC%B4%88%EB%B3%B4-%EB%9F%AC%EB%84%88%EB%93%A4%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%9F%AC%EB%8B%9D-%EA%B0%80%EC%9D%B4%EB%93%9C/id6747997955",
    },
    {
        id: 11,
        name: "잇다",
        club: "YAPP",
        cohort: "26기",
        description: "없어져서는 안 되는 가게의 모습과 음식 경험을 다채롭고 행복하게 기록할 수 있는 플랫폼",
        image: "https://www.yapp.co.kr/assets/project/26_thumbnail_eatda.png",
        webLink: "https://eatda.net/",
    },
    {
        id: 12,
        name: "Brake",
        club: "YAPP",
        cohort: "26기",
        description: "사용자가 스스로 스크린타임을 관리하도록 도와주는 앱. 앱을 열 때마다 사용 시간을 스스로와 약속하고 건강한 디지털 습관을 만들어요",
        image: "https://www.yapp.co.kr/assets/project/26_thumbnail_brake.png",
        appStoreLink: "https://apps.apple.com/kr/app/id6748244545",
    },
    {
        id: 13,
        name: "빛나길",
        club: "YAPP",
        cohort: "26기",
        description: "은둔·고립·단절을 경험하는 청년과 자신만의 일상을 회복하고자 하는 모든 분들을 위한 기초 생활 루틴 회복 플랫폼",
        image: "https://www.yapp.co.kr/assets/project/26_thumbnail_bitnagil.png",
        appStoreLink: "https://apps.apple.com/kr/app/%EB%B9%9B%EB%82%98%EA%B8%B8/id6749437799",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.threegap.bitnagil",
    },
    {
        id: 14,
        name: "Piece",
        club: "YAPP",
        cohort: "25기",
        description: "나의 가치관과 생각을 먼저 보여주고, 서로를 깊이 이해할 수 있도록 돕는 새로운 방식의 소개팅 앱",
        image: "https://www.yapp.co.kr/assets/project/25_thumbnail_piece.png",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.puzzle.piece&hl=ko",
    },
    {
        id: 15,
        name: "Orbit",
        club: "YAPP",
        cohort: "25기",
        description: "알람 기능에 하루 운세 콘텐츠를 결합한 서비스. 기상 미션과 운세 콘텐츠를 함께 제공해 아침에 대한 기대감을 높이고 즐겁게 일어날 수 있도록 도와줘요",
        image: "https://www.yapp.co.kr/assets/project/25_thumbnail_orbit.png",
        appStoreLink: "https://apps.apple.com/kr/app/id6741705831",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.yapp.orbit",
    },
    {
        id: 16,
        name: "인스테드",
        club: "YAPP",
        cohort: "25기",
        description: "키워드만 입력해도 자동으로 글을 생성하고 클릭 한 번으로 최대 25개까지 콘텐츠를 제작할 수 있는 SNS 관리 서비스",
        image: "https://www.yapp.co.kr/assets/project/25_thumbnail_instead.png",
        webLink: "https://www.instd.io",
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
    const sizes = [64, 32, 16, 8, 4];
    const available = sizes.filter(s => projects.length >= s);

    if (available.length === 0) {
        container.innerHTML = '<p class="text-slate-400 dark:text-slate-500 text-sm">프로젝트 데이터가 준비 중입니다.</p>';
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
    const text = `🏆 프로젝트 이상형 월드컵에서 "${winnerName}"을(를) 1위로 뽑았어요!\n\n나도 해보기 👉 ${window.location.origin}/tournament`;

    if (navigator.share) {
        navigator.share({ title: '프로젝트 이상형 월드컵 결과', text }).catch(() => {});
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
