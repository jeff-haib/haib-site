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
      { os: "macos",   channel: "direct", status: "available", arch: "Universal · .dmg", url: "https://apps.hai-b.ai/apps/keyradar/keyradar-macos.dmg" },
      { os: "windows", channel: "direct", status: "available", arch: "x64 · .msi", url: "https://apps.hai-b.ai/apps/keyradar/keyradar-windows.msi" }
    ],
    pricing: {
      tier: { ko: "라이프타임", en: "Lifetime" },
      amount: "$34.99", per: { ko: "1회 결제", en: "one-time" },
      sub: { ko: "월/년 구독 준비 중", en: "Monthly / Yearly preparing" },
      pay: "Polar",
      features: {
        ko: ["제공자별 키 자동 탐지", "로컬 우선 · 키 외부 전송 없음", "사용량 · 크레딧 모니터링", "키 회전 알림"],
        en: ["Auto-detect keys per provider", "Local-first · keys never leave device", "Usage & credit monitoring", "Rotation reminders"]
      },
      cta: { ko: "Buy Direct", en: "Buy Direct" }, ctaUrl: "#polar-checkout-keyradar",
      highlight: true
    },
    links: { product: "#product-keyradar", changelog: "#changelog", support: "#support" }
  },

  /* ──────────────────────── Scrap Relay ──────────────────────── */
  {
    id: "scrap-relay",
    name: "Scrap Relay",
    accentVar: "--p-scrap",
    icon: "scrap",
    status: "review",
    category: { ko: "리서치 · 지식 캡처", en: "Research & Knowledge Capture" },
    tagline: { ko: "리서치를 지식으로", en: "Research into knowledge" },
    desc: {
      ko: "AI 대화와 웹 리서치를 캡처·정리하고 재사용 가능한 지식으로 다듬는 도구.",
      en: "Capture, organize, and refine AI conversations and web research into reusable knowledge."
    },
    platforms: [
      { os: "edge",   channel: "edgestore", status: "review",    url: null },
      { os: "chrome", channel: "webstore",  status: "preparing", url: null }
    ],
    pricing: {
      tier: { ko: "라이프타임", en: "Lifetime" },
      amount: "$34.99", per: { ko: "1회 결제", en: "one-time" },
      sub: { ko: "Polar 직접 결제", en: "Direct via Polar" },
      pay: "Polar",
      features: {
        ko: ["한 번 클릭 캡처", "AI 대화 정리 · 태깅", "재사용 가능한 스니펫", "로컬 우선 저장"],
        en: ["One-click capture", "Organize & tag AI chats", "Reusable snippets", "Local-first storage"]
      },
      cta: { ko: "Buy Direct", en: "Buy Direct" }, ctaUrl: "#polar-checkout-scrap-relay"
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
      { os: "macos",   channel: "direct", status: "available", arch: ".dmg", url: "https://apps.hai-b.ai/apps/voca-flow/voca-flow-macos.dmg" },
      { os: "windows", channel: "direct", status: "available", arch: ".exe", url: "https://apps.hai-b.ai/apps/voca-flow/voca-flow-windows.exe" }
    ],
    pricing: {
      tier: { ko: "라이프타임 잠금 해제", en: "Lifetime unlock" },
      amount: "$49.99", per: { ko: "1회 결제", en: "one-time" },
      sub: { ko: "3일 무료 체험 · 언어팩 별도", en: "3-day free trial · language packs separate" },
      pay: "Polar",
      features: {
        ko: ["3일 무료 체험", "시각적 단어 카드", "다방향 학습 흐름", "언어팩: audio.hai-b.ai/audio"],
        en: ["3-day free trial", "Visual word cards", "Multi-direction flow", "Language packs: audio.hai-b.ai/audio"]
      },
      cta: { ko: "Buy Direct", en: "Buy Direct" }, ctaUrl: "#polar-checkout-voca-flow"
    },
    links: { product: "#product-voca", changelog: "#changelog", support: "#support" }
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
      amount: "$79", per: { ko: "1회 결제", en: "one-time" },
      sub: { ko: "엔터프라이즈 / 커스텀 별도 문의", en: "Enterprise / Custom — contact" },
      pay: "Polar",
      features: {
        ko: ["프로젝트 기반 워크플로", "재사용 가능한 템플릿", "AI 보조 콘텐츠 파이프라인", "엔터프라이즈 문의 가능"],
        en: ["Project-based workflow", "Reusable templates", "AI-assisted pipeline", "Enterprise on request"]
      },
      cta: { ko: "Buy Direct", en: "Buy Direct" }, ctaUrl: "#polar-checkout-movie-maker-pro"
    },
    links: { product: "#product-movie", changelog: "#changelog", support: "#support" }
  },

  /* ───────────────────────────  BATON  ──────────────────────── */
  {
    id: "baton",
    name: "BATON",
    accentVar: "--p-baton",
    icon: "baton",
    status: "preparing",
    category: { ko: "AI 워크플로 오케스트레이션 플랫폼", en: "AI Workflow Orchestration Platform" },
    tagline: { ko: "워크플로 오케스트레이션", en: "Workflow orchestration" },
    desc: {
      ko: "AI 기반 프로덕션 시스템을 위한 워크플로 · 템플릿 오케스트레이션 플랫폼.",
      en: "Workflow and template orchestration platform for AI-powered production systems."
    },
    platforms: [
      { os: "web", channel: "web", status: "soon", url: null }
    ],
    pricing: null,
    links: { product: "#product-baton", changelog: "#changelog", support: "#support" }
  }
];

/* ─────────────────────── Changelog entries ────────────────────── */
window.HAIB_CHANGELOG = [
  {
    product: "keyradar", version: "1.2.0", date: "2026-05-28", status: "available",
    changes: [
      { tag: "new", ko: "제공자별 사용량 그래프 추가", en: "Per-provider usage graphs" },
      { tag: "imp", ko: "키 탐지 속도 40% 개선", en: "Key detection 40% faster" },
      { tag: "fix", ko: "키 회전 알림 중복 표시 수정", en: "Fixed duplicate rotation reminders" }
    ]
  },
  {
    product: "scrap-relay", version: "0.9.1", date: "2026-05-22", status: "review",
    changes: [
      { tag: "new", ko: "Edge Add-ons 심사 제출", en: "Submitted to Edge Add-ons review" },
      { tag: "imp", ko: "캡처 정확도 개선", en: "Improved capture accuracy" }
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
    product: "keyradar", version: "1.1.0", date: "2026-04-30", status: "available",
    changes: [
      { tag: "new", ko: "로컬 키 보관소 암호화", en: "Local keystore encryption" },
      { tag: "imp", ko: "macOS 직접 다운로드(.dmg) 공개", en: "macOS direct .dmg released" }
    ]
  }
];

/* ─────────────────────── Board / Notice ────────────────────── */
window.HAIB_NOTICES = [
  { cat: "announce", date: "2026-05-29", ko: "KeyRadar 1.2.0 정식 출시 — apps.hai-b.ai 직접 다운로드 제공", en: "KeyRadar 1.2.0 released — direct downloads via apps.hai-b.ai" },
  { cat: "release",  date: "2026-05-22", ko: "Scrap Relay, Microsoft Edge Add-ons 심사 제출됨", en: "Scrap Relay submitted to Microsoft Edge Add-ons review" },
  { cat: "known",    date: "2026-05-18", ko: "VOCA FLOW iOS 빌드 — 일부 기기에서 카드 전환 지연 (조사 중)", en: "VOCA FLOW iOS — card transition lag on some devices (investigating)" },
  { cat: "support",  date: "2026-05-12", ko: "라이선스 복원 가이드 업데이트 — Polar 구매 내역 연동", en: "License restore guide updated — Polar purchase linking" },
  { cat: "announce", date: "2026-05-05", ko: "Windows 버전 로드맵 공개 — KeyRadar · Movie Maker Pro 준비 중", en: "Windows roadmap published — KeyRadar & Movie Maker Pro in prep" }
];
