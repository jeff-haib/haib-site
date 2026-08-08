/* ──────────────────────────────────────────────────────────────
   HAIB — Product / Download / Pricing definitions
   SINGLE SOURCE OF TRUTH. Server-ready. The website renders from this.
   ──────────────────────────────────────────────────────────────
   STATUS vocabulary (spec — never hide unfinished products):
     available · review · preparing · soon · internal · testflight
   PLATFORM os:   macos · windows · ios · android · chrome · edge · web
   CHANNEL:       appstore · direct · testflight · playstore · webstore · edgestore · web
   ROLE SPLIT:
     hai-b.ai       = marketing / product website
     apps.hai-b.ai  = install file downloads
     audio.hai-b.ai = language packs
     Polar          = checkout / license
   ────────────────────────────────────────────────────────────── */

window.HAIB_STATUS = {
  available: { ko: "사용 가능",     en: "Available",      cls: "s-available" },
  review:    { ko: "심사 중",       en: "In Review",      cls: "s-review" },
  preparing: { ko: "준비 중",       en: "Preparing",      cls: "s-prep" },
  soon:      { ko: "출시 예정",     en: "Coming Soon",    cls: "s-soon" },
  internal:  { ko: "내부 빌드",     en: "Internal Build", cls: "s-internal" },
  testflight:{ ko: "TestFlight",   en: "TestFlight",     cls: "s-test" }
};

/* OS / channel display labels (bilingual) */
window.HAIB_PLATFORM_LABEL = {
  macos:   { ko: "macOS",   en: "macOS" },
  windows: { ko: "Windows", en: "Windows" },
  ios:     { ko: "iOS",     en: "iOS" },
  android: { ko: "Android", en: "Android" },
  chrome:  { ko: "Chrome",  en: "Chrome" },
  edge:    { ko: "Microsoft Edge", en: "Microsoft Edge" },
  web:     { ko: "웹",      en: "Web" }
};
window.HAIB_CHANNEL_LABEL = {
  appstore:  { ko: "App Store",        en: "App Store" },
  direct:    { ko: "직접 다운로드",     en: "Direct Download" },
  testflight:{ ko: "TestFlight",       en: "TestFlight" },
  playstore: { ko: "Google Play",      en: "Google Play" },
  webstore:  { ko: "Chrome 웹 스토어",  en: "Chrome Web Store" },
  edgestore: { ko: "Edge 추가 기능",    en: "Edge Add-ons" },
  web:       { ko: "웹 앱",            en: "Web App" }
};

window.HAIB_PRODUCTS = [
  /* ───────────────────────── KeyRadar ───────────────────────── */
  {
    id: "keyradar",
    name: "KeyRadar",
    accentVar: "--p-keyradar",
    icon: "radar",
    status: "available",
    feature: true,
    category: { ko: "AI 키 관리", en: "AI Key Management" },
    tagline: { ko: "흩어진 AI 키, 한눈에", en: "Every AI key, in view" },
    desc: {
      ko: "여러 AI 제공자를 쓰는 사람을 위한 AI 자격증명 가시성 + 로컬 키 관리 도구.",
      en: "AI credential visibility and local key management for people using multiple AI providers."
    },
    platforms: [
      { os: "macos",   channel: "appstore", status: "available", arch: "Mac App Store", url: "https://apps.apple.com/kr/app/keyradar/id6775709663?mt=12" },
      { os: "windows", channel: "direct", status: "available", arch: "x64 · .msi", url: "https://apps.hai-b.ai/apps/keyradar/keyradar-windows.msi" }
    ],
    pricing: {
      tier: { ko: "라이프타임", en: "Lifetime" },
      amount: "₩55,000", per: { ko: "라이프타임", en: "lifetime" },
      sub: { ko: "App Store 현재 가격 · 월/년 구독 제공", en: "Current App Store price · monthly/yearly available" },
      pay: "App Store",
      sale: {
        label: { ko: "SALE", en: "SALE" },
        note: { ko: "Mac App Store 기준 현재 라이프타임 가격", en: "Current lifetime price on the Mac App Store" },
        detail: { ko: "월 ₩6,600 · 연 ₩49,000", en: "Monthly ₩6,600 · Annual ₩49,000" }
      },
      features: {
        ko: ["제공자별 키 자동 탐지", "로컬 우선 · 키 외부 전송 없음", "사용량 · 크레딧 모니터링", "키 회전 알림"],
        en: ["Auto-detect keys per provider", "Local-first · keys never leave device", "Usage & credit monitoring", "Rotation reminders"]
      },
      cta: { ko: "Mac App Store", en: "Mac App Store" }, ctaUrl: "https://apps.apple.com/kr/app/keyradar/id6775709663?mt=12",
      highlight: true
    },
    links: { product: "#product-keyradar", changelog: "#changelog", support: "#support" }
  },

  /* ──────────────────── KeyRadar Enterprise ─────────────────── */
  {
    id: "keyradar-enterprise",
    name: "KeyRadar Enterprise",
    accentVar: "--p-keyradar-enterprise",
    icon: "radar",
    status: "soon",
    category: { ko: "조직용 AI 키 관리", en: "Enterprise AI Key Management" },
    tagline: { ko: "조직을 위한 키 가시성과 정책", en: "Key visibility and policy for organizations" },
    desc: {
      ko: "팀·조직 단위 API 키 가시성, 정책 배포, 감사 흐름을 위한 KeyRadar의 엔터프라이즈 방향.",
      en: "The enterprise direction for KeyRadar: organization-wide API key visibility, policy rollout, and audit workflows."
    },
    platforms: [
      { os: "web", channel: "web", status: "soon", arch: "Enterprise", url: null },
      { os: "macos", channel: "direct", status: "soon", arch: "Managed build", url: null },
      { os: "windows", channel: "direct", status: "soon", arch: "Managed build", url: null }
    ],
    pricing: {
      tier: { ko: "Enterprise", en: "Enterprise" },
      amount: "Coming Soon", per: { ko: "문의 기반", en: "contact-based" },
      sub: { ko: "조직 배포 · 정책 관리 준비 중", en: "Org rollout and policy management in preparation" },
      pay: "Contact",
      features: {
        ko: ["조직 키 인벤토리 방향", "정책 기반 키 관리", "감사와 위험 알림", "관리형 배포 준비 중"],
        en: ["Organization key inventory direction", "Policy-based key management", "Audit and risk alerts", "Managed rollout in preparation"]
      },
      cta: { ko: "Coming Soon", en: "Coming Soon" }, ctaUrl: "#keyradar-enterprise-coming-soon"
    },
    links: { product: "#product-keyradar-enterprise", changelog: "#changelog", support: "#support" }
  },

  /* ──────────────────────── Scrap Relay ──────────────────────── */
  {
    id: "scrap-relay",
    name: "Scrap Relay",
    accentVar: "--p-scrap",
    icon: "scrap",
    status: "available",
    category: { ko: "리서치 · 지식 캡처", en: "Research & Knowledge Capture" },
    tagline: { ko: "리서치를 지식으로", en: "Research into knowledge" },
    desc: {
      ko: "AI 대화와 웹 리서치를 캡처·정리하고 재사용 가능한 지식으로 다듬는 도구.",
      en: "Capture, organize, and refine AI conversations and web research into reusable knowledge."
    },
    platforms: [
      { os: "edge",   channel: "edgestore", status: "available", arch: "Edge Add-ons", url: "https://microsoftedge.microsoft.com/addons/detail/scrap-relay/aplmkfcdgdibmnhbaimmhookgfhcnjhm" },
      { os: "chrome", channel: "webstore", status: "available", arch: "Chrome Web Store", url: "https://chromewebstore.google.com/detail/scrap-relay/jpeblmdajkmapghdenmfingcinhkbobe" }
    ],
    pricing: {
      tier: { ko: "라이프타임", en: "Lifetime" },
      amount: "$24.49", per: { ko: "1회 결제", en: "one-time" },
      compareAt: "$34.99",
      sub: { ko: "사이트 직판매 상시 30% 세일", en: "Always 30% off via direct site sale" },
      pay: "Polar",
      sale: {
        label: { ko: "30% SALE", en: "30% SALE" },
        note: { ko: "사이트 직판매 기본 세일 적용", en: "Direct site sale applied" }
      },
      features: {
        ko: ["한 번 클릭 캡처", "AI 대화 정리 · 태깅", "재사용 가능한 스니펫", "로컬 우선 저장"],
        en: ["One-click capture", "Organize & tag AI chats", "Reusable snippets", "Local-first storage"]
      },
      cta: { ko: "사이트 직구매", en: "Buy Direct" }, ctaUrl: "https://buy.polar.sh/polar_cl_UDeCTbabHoykkNs3vbANsdzkYZryxA5W9sRAc4KrixF"
    },
    links: { product: "#product-scrap", changelog: "#changelog", support: "#support" }
  },

  /* ───────────────────────── VOCA FLOW ───────────────────────── */
  {
    id: "voca-flow",
    name: "VOCA FLOW",
    accentVar: "--p-voca",
    icon: "voca",
    status: "available",
    category: { ko: "언어 학습", en: "Language Learning" },
    tagline: { ko: "번역을 넘어선 어휘 흐름", en: "Vocabulary beyond translation" },
    desc: {
      ko: "번역을 넘어, 시각적이고 다방향적인 어휘 흐름으로 단어를 익히는 학습 앱.",
      en: "Visual and multi-direction vocabulary flow beyond translation."
    },
    platforms: [
      { os: "ios",     channel: "appstore", status: "available", arch: "iPhone · iPad", url: "https://apps.apple.com/kr/app/voca-flow/id6776681960" },
      { os: "macos",   channel: "direct", status: "available", arch: ".dmg", url: "https://apps.hai-b.ai/apps/voca-flow/voca-flow-macos.dmg" },
      { os: "windows", channel: "direct", status: "available", arch: ".exe", url: "https://apps.hai-b.ai/apps/voca-flow/voca-flow-windows.exe" }
    ],
    pricing: {
      tier: { ko: "라이프타임 잠금 해제", en: "Lifetime unlock" },
      amount: "₩69,300", per: { ko: "1회 결제", en: "one-time" },
      compareAt: "₩77,000",
      sub: { ko: "App Store 세일가보다 10% 더 낮은 사이트 직판매", en: "Direct site sale, 10% below the App Store sale price" },
      pay: "Polar",
      sale: {
        label: { ko: "추가 10% SALE", en: "Extra 10% SALE" },
        note: { ko: "App Store 현재 라이프타임 ₩77,000 기준", en: "Compared with current App Store lifetime ₩77,000" },
        detail: { ko: "7일 무료 체험", en: "7-day free trial" }
      },
      features: {
        ko: ["7일 무료 체험", "시각적 단어 카드", "다방향 학습 흐름", "언어팩: audio.hai-b.ai/audio"],
        en: ["7-day free trial", "Visual word cards", "Multi-direction flow", "Language packs: audio.hai-b.ai/audio"]
      },
      cta: { ko: "사이트 직구매", en: "Buy Direct" }, ctaUrl: "#polar-checkout-voca-flow"
    },
    links: { product: "#product-voca", changelog: "#changelog", support: "#support" }
  },

  /* ─────────────────────── AI Contentory ─────────────────────── */
  {
    id: "ai-contentory",
    name: "AI Contentory",
    accentVar: "--p-contentory",
    icon: "scrap",
    status: "soon",
    category: { ko: "AI 콘텐츠 작업실", en: "AI Content Workspace" },
    tagline: { ko: "아이디어와 자료를 콘텐츠 흐름으로", en: "Ideas and sources into content flow" },
    desc: {
      ko: "아이디어, 레퍼런스, 생성 결과를 콘텐츠 제작 흐름으로 정리하기 위한 준비 중인 작업실.",
      en: "A coming workspace for organizing ideas, references, and generated outputs into content production flows."
    },
    platforms: [
      { os: "web", channel: "web", status: "soon", arch: "Web", url: null },
      { os: "macos", channel: "direct", status: "soon", arch: "Desktop", url: null }
    ],
    pricing: {
      tier: { ko: "Coming Soon", en: "Coming Soon" },
      amount: "TBD", per: { ko: "준비 중", en: "in preparation" },
      sub: { ko: "출시 채널과 가격은 추후 공개", en: "Release channel and pricing to be announced" },
      pay: "TBD",
      features: {
        ko: ["콘텐츠 작업 흐름", "자료와 레퍼런스 정리", "생성 결과 재사용", "로컬 우선 방향"],
        en: ["Content workflow", "Source and reference organization", "Generated output reuse", "Local-first direction"]
      },
      cta: { ko: "Coming Soon", en: "Coming Soon" }, ctaUrl: "#ai-contentory-coming-soon"
    },
    links: { product: "#product-ai-contentory", changelog: "#changelog", support: "#support" }
  },

  /* ─────────────────────── Movie Maker Pro ───────────────────── */
  {
    id: "movie-maker-pro",
    name: "Movie Maker Pro",
    accentVar: "--p-movie",
    icon: "movie",
    status: "preparing",
    category: { ko: "워크플로 자동화", en: "Workflow Automation" },
    tagline: { ko: "프로젝트 기반 영상 제작", en: "Project-based video creation" },
    desc: {
      ko: "재사용 가능한 AI 보조 콘텐츠 워크플로를 위한 프로젝트 기반 홍보 영상 제작 도구.",
      en: "Project-based promotional video creation for reusable AI-assisted content workflows."
    },
    platforms: [
      { os: "macos",   channel: "direct", status: "available", arch: ".dmg", url: "https://apps.hai-b.ai/apps/movie-maker-pro/movie-maker-pro-macos.dmg" },
      { os: "windows", channel: "direct", status: "available", arch: ".exe", url: "https://apps.hai-b.ai/apps/movie-maker-pro/movie-maker-pro-windows.exe" }
    ],
    pricing: {
      tier: { ko: "라이프타임", en: "Lifetime" },
      amount: "$55.30", per: { ko: "1회 결제", en: "one-time" },
      compareAt: "$79",
      sub: { ko: "사이트 직판매 상시 30% 세일 · 엔터프라이즈 별도 문의", en: "Always 30% off via direct site sale · Enterprise on request" },
      pay: "Polar",
      sale: {
        label: { ko: "30% SALE", en: "30% SALE" },
        note: { ko: "사이트 직판매 기본 세일 적용", en: "Direct site sale applied" }
      },
      features: {
        ko: ["프로젝트 기반 워크플로", "재사용 가능한 템플릿", "AI 보조 콘텐츠 파이프라인", "엔터프라이즈 문의 가능"],
        en: ["Project-based workflow", "Reusable templates", "AI-assisted pipeline", "Enterprise on request"]
      },
      cta: { ko: "사이트 직구매", en: "Buy Direct" }, ctaUrl: "#polar-checkout-movie-maker-pro"
    },
    links: { product: "#product-movie", changelog: "#changelog", support: "#support" }
  },

  /* ─────────────────────── Ripple Capture ────────────────────── */
  {
    id: "ripple-capture",
    name: "Ripple Capture",
    accentVar: "--p-ripple",
    icon: "movie",
    status: "available",
    category: { ko: "화면 녹화", en: "Screen Recording" },
    tagline: { ko: "클릭이 보이는 화면 녹화", en: "Screen recording with visible clicks" },
    desc: {
      ko: "커서 글로우와 클릭 리플을 담아 튜토리얼·제품 데모·지원 영상을 더 명확하게 만드는 macOS 화면 녹화 도구.",
      en: "A macOS screen recorder that makes tutorials, product demos, and support videos clearer with cursor glow and click ripples."
    },
    platforms: [
      { os: "macos", channel: "appstore", status: "available", arch: "Mac App Store", url: "https://apps.apple.com/kr/app/ripple-capture/id6790279465?mt=12" }
    ],
    pricing: {
      tier: { ko: "Mac App Store", en: "Mac App Store" },
      amount: "₩11,000", per: { ko: "1회 구매", en: "one-time" },
      sub: { ko: "Mac 전용", en: "Mac only" },
      pay: "App Store",
      features: {
        ko: ["영역·창·전체 화면 녹화", "커서 글로우 · 클릭 리플", "MP4 · GIF 내보내기", "로컬 처리 · 계정 불필요"],
        en: ["Area, window, or full-screen recording", "Cursor glow and click ripples", "MP4 and GIF export", "Local processing · no account required"]
      },
      cta: { ko: "Mac App Store", en: "Mac App Store" }, ctaUrl: "https://apps.apple.com/kr/app/ripple-capture/id6790279465?mt=12"
    },
    links: { product: "#product-ripple", changelog: "#changelog", support: "#support" }
  },

  /* ───────────────────────────  BATON  ──────────────────────── */
  {
    id: "baton",
    name: "BATON",
    accentVar: "--p-baton",
    icon: "baton",
    status: "soon",
    category: { ko: "AI 워크플로 오케스트레이션 플랫폼", en: "AI Workflow Orchestration Platform" },
    tagline: { ko: "워크플로 오케스트레이션", en: "Workflow orchestration" },
    desc: {
      ko: "AI 기반 프로덕션 시스템을 위한 워크플로 · 템플릿 오케스트레이션 플랫폼.",
      en: "Workflow and template orchestration platform for AI-powered production systems."
    },
    platforms: [
      { os: "web", channel: "web", status: "soon", arch: "Web", url: null }
    ],
    pricing: {
      tier: { ko: "Coming Soon", en: "Coming Soon" },
      amount: "TBD", per: { ko: "준비 중", en: "in preparation" },
      sub: { ko: "워크플로 오케스트레이션 제품 방향 준비 중", en: "Workflow orchestration direction in preparation" },
      pay: "TBD",
      features: {
        ko: ["워크플로 오케스트레이션", "템플릿 시스템", "AI 프로덕션 흐름", "출시 채널 추후 공개"],
        en: ["Workflow orchestration", "Template system", "AI production flow", "Release channel to be announced"]
      },
      cta: { ko: "Coming Soon", en: "Coming Soon" }, ctaUrl: "#baton-coming-soon"
    },
    links: { product: "#product-baton", changelog: "#changelog", support: "#support" }
  }
];

/* ─────────────────────── Changelog entries ────────────────────── */
window.HAIB_CHANGELOG = [
  {
    product: "keyradar-enterprise", version: "preview", date: "2026-08-08", status: "soon",
    changes: [
      { tag: "new", ko: "KeyRadar Enterprise Coming Soon 페이지 추가", en: "Added KeyRadar Enterprise Coming Soon page" },
      { tag: "new", ko: "조직용 키 가시성·정책 관리 방향 공개", en: "Published organization key visibility and policy direction" }
    ]
  },
  {
    product: "ai-contentory", version: "preview", date: "2026-08-08", status: "soon",
    changes: [
      { tag: "new", ko: "AI Contentory Coming Soon 페이지 추가", en: "Added AI Contentory Coming Soon page" },
      { tag: "new", ko: "콘텐츠 작업실 제품 방향 공개", en: "Published content workspace product direction" }
    ]
  },
  {
    product: "baton", version: "preview", date: "2026-08-08", status: "soon",
    changes: [
      { tag: "new", ko: "BATON을 Coming Soon 제품으로 정리", en: "Updated BATON as a Coming Soon product" },
      { tag: "new", ko: "워크플로 오케스트레이션 방향 공개", en: "Published workflow orchestration direction" }
    ]
  },
  {
    product: "keyradar", version: "1.2.0", date: "2026-05-28", status: "available",
    changes: [
      { tag: "new", ko: "제공자별 사용량 그래프 추가", en: "Per-provider usage graphs" },
      { tag: "imp", ko: "키 탐지 속도 40% 개선", en: "Key detection 40% faster" },
      { tag: "fix", ko: "키 회전 알림 중복 표시 수정", en: "Fixed duplicate rotation reminders" }
    ]
  },
  {
    product: "scrap-relay", version: "1.0.1", date: "2026-08-07", status: "available",
    changes: [
      { tag: "new", ko: "직접 다운로드 패키지 공개", en: "Direct download package released" },
      { tag: "imp", ko: "Polar 라이선스 활성화 경로 정리", en: "Polar license activation flow hardened" }
    ]
  },
  {
    product: "voca-flow", version: "0.7.0", date: "2026-05-15", status: "internal",
    changes: [
      { tag: "new", ko: "다방향 학습 흐름 베타", en: "Multi-direction flow (beta)" },
      { tag: "fix", ko: "카드 전환 애니메이션 끊김 수정", en: "Fixed card transition stutter" }
    ]
  },
  {
    product: "ripple-capture", version: "1.0", date: "2026-08-08", status: "available",
    changes: [
      { tag: "new", ko: "Mac App Store 출시", en: "Released on the Mac App Store" },
      { tag: "new", ko: "커서 글로우와 클릭 리플 화면 녹화", en: "Screen recording with cursor glow and click ripples" }
    ]
  },
  {
    product: "keyradar", version: "1.1.0", date: "2026-04-30", status: "available",
    changes: [
      { tag: "new", ko: "로컬 키 보관소 암호화", en: "Local keystore encryption" },
      { tag: "imp", ko: "macOS 직접 다운로드(.dmg) 공개", en: "macOS direct .dmg released" }
    ]
  }
];

/* ─────────────────────── Board / Notice ────────────────────── */
window.HAIB_NOTICES = [
  { cat: "announce", date: "2026-05-29", ko: "KeyRadar Mac App Store 링크를 공식 다운로드 채널로 정리했습니다", en: "KeyRadar Mac App Store link is now the official download channel" },
  { cat: "release",  date: "2026-08-07", ko: "Scrap Relay는 Chrome Web Store와 Microsoft Edge Add-ons 링크를 공식 설치 채널로 사용합니다", en: "Scrap Relay uses Chrome Web Store and Microsoft Edge Add-ons as official install channels" },
  { cat: "release",  date: "2026-08-08", ko: "Ripple Capture를 Mac App Store 다운로드에 추가했습니다", en: "Ripple Capture added with Mac App Store download" },
  { cat: "announce", date: "2026-08-08", ko: "KeyRadar Enterprise, AI Contentory, BATON을 Coming Soon으로 정리했습니다", en: "KeyRadar Enterprise, AI Contentory, and BATON are listed as Coming Soon" },
  { cat: "known",    date: "2026-05-18", ko: "VOCA FLOW iOS 빌드 — 일부 기기에서 카드 전환 지연 (조사 중)", en: "VOCA FLOW iOS — card transition lag on some devices (investigating)" },
  { cat: "support",  date: "2026-05-12", ko: "라이선스 복원 가이드 업데이트 — Polar 구매 내역 연동", en: "License restore guide updated — Polar purchase linking" },
  { cat: "announce", date: "2026-05-05", ko: "Windows 버전 로드맵 공개 — KeyRadar · Movie Maker Pro 준비 중", en: "Windows roadmap published — KeyRadar & Movie Maker Pro in prep" }
];
