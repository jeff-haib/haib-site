/* ──────────────────────────────────────────────────────────────
   HAIB — Product DETAIL content (per product page)
   Keyed by product id. Bilingual. Used by product.html template.
   ────────────────────────────────────────────────────────────── */
window.HAIB_PRODUCT_DETAIL = {
  keyradar: {
    what: {
      ko: "여러 AI 제공자의 API 키를 쓰다 보면, 어떤 키가 어디에 있고 얼마나 쓰이는지 금세 흐려집니다. KeyRadar는 로컬에서 키를 탐지·정리하고, 제공자별 사용량과 크레딧을 한 화면에서 보여줍니다. 키는 기기를 떠나지 않습니다.",
      en: "When you juggle API keys across multiple AI providers, it gets hard to know which key lives where and how much it's used. KeyRadar detects and organizes keys locally and shows per-provider usage and credit in one view. Keys never leave your device."
    },
    features: [
      { icon: "radar", title: { ko: "자동 키 탐지", en: "Automatic key detection" }, desc: { ko: "환경 변수·설정 파일·키체인에서 제공자별 키를 찾아 한 곳에 모읍니다.", en: "Finds keys across env vars, config files, and keychains, grouped by provider." } },
      { icon: "shield", title: { ko: "로컬 우선 · 외부 전송 없음", en: "Local-first · nothing sent out" }, desc: { ko: "키 값은 마스킹되어 표시되고, 어떤 데이터도 외부 서버로 전송되지 않습니다.", en: "Key values are masked on screen and no data is sent to any external server." } },
      { icon: "flow", title: { ko: "사용량 · 크레딧 모니터링", en: "Usage & credit monitoring" }, desc: { ko: "제공자별 사용량과 남은 크레딧을 추정치 표시(≈)와 함께 정직하게 보여줍니다.", en: "Per-provider usage and remaining credit, shown honestly with estimate (≈) marks." } },
      { icon: "refresh", title: { ko: "키 회전 알림", en: "Rotation reminders" }, desc: { ko: "오래된 키를 'stale'로 표시하고, 회전 시점을 as-of 라벨로 안내합니다.", en: "Flags old keys as 'stale' and surfaces rotation timing with as-of labels." } }
    ],
    screens: [
      { src: "vendor/keyradar/screens/dashboard.html", ko: "대시보드 — 오늘 살펴볼 것", en: "Dashboard — what needs attention" },
      { src: "vendor/keyradar/screens/usage.html", ko: "사용량 & 크레딧", en: "Usage & credit" },
      { src: "vendor/keyradar/screens/risk.html", ko: "위험도 · 회전", en: "Risk & rotation" },
      { src: "vendor/keyradar/screens/keys.html", ko: "키 목록 · 검증 상태", en: "Keys · validation state" }
    ],
    shots: [
      { ko: "대시보드 — 제공자별 키 현황", en: "Dashboard — keys by provider" },
      { ko: "사용량 & 크레딧", en: "Usage & credit" },
      { ko: "위험도 · 회전", en: "Risk & rotation" }
    ],
    faq: [
      { q: { ko: "키 값이 외부로 전송되나요?", en: "Are my key values sent anywhere?" }, a: { ko: "아니요. 모든 처리는 로컬에서 이뤄지며 키는 마스킹되어 표시됩니다.", en: "No. Everything runs locally and keys are shown masked." } },
      { q: { ko: "Windows도 지원하나요?", en: "Is Windows supported?" }, a: { ko: "네. 설치 파일은 apps.hai-b.ai의 KeyRadar 경로에서 macOS DMG와 Windows MSI로 제공합니다.", en: "Yes. Installers are provided from the KeyRadar path on apps.hai-b.ai as macOS DMG and Windows MSI files." } },
      { q: { ko: "라이선스는 어떻게 활성화하나요?", en: "How do I activate a license?" }, a: { ko: "Polar 구매 후 받은 라이선스 키를 앱 설정에서 입력하면 활성화됩니다.", en: "Enter the license key from your Polar purchase in the app's settings." } }
    ]
  },

  "scrap-relay": {
    what: {
      ko: "리서치는 흩어지기 쉽습니다. Scrap Relay는 AI 대화와 웹 페이지를 한 번의 클릭으로 캡처하고, 태깅·정리해 재사용 가능한 스니펫으로 만듭니다.",
      en: "Research scatters easily. Scrap Relay captures AI chats and web pages in one click, then tags and organizes them into reusable snippets."
    },
    features: [
      { icon: "scrap", title: { ko: "한 번 클릭 캡처", en: "One-click capture" }, desc: { ko: "사이드 패널에서 대화·선택 영역을 즉시 저장합니다.", en: "Save chats or selections instantly from the side panel." } },
      { icon: "flow", title: { ko: "태깅 · 정리", en: "Tag & organize" }, desc: { ko: "미디어 타입별로 자동 분류하고 태그로 묶습니다.", en: "Auto-classifies by media type and groups by tag." } },
      { icon: "shield", title: { ko: "로컬 우선 저장", en: "Local-first storage" }, desc: { ko: "캡처는 기본적으로 로컬에 저장됩니다.", en: "Captures are stored locally by default." } }
    ],
    shots: [
      { ko: "사이드 패널 캡처", en: "Side-panel capture" },
      { ko: "스니펫 라이브러리", en: "Snippet library" }
    ],
    faq: [
      { q: { ko: "어떤 브라우저를 지원하나요?", en: "Which browsers are supported?" }, a: { ko: "Microsoft Edge는 심사 중, Chrome 웹 스토어는 준비 중입니다.", en: "Edge is in review; Chrome Web Store is in preparation." } },
      { q: { ko: "결제는 어떻게 하나요?", en: "How is payment handled?" }, a: { ko: "Polar를 통한 라이프타임 1회 결제입니다.", en: "A one-time lifetime purchase via Polar." } }
    ]
  },

  "voca-flow": {
    what: {
      ko: "단어 암기는 번역 한 줄로 끝나지 않습니다. VOCA FLOW는 시각적 카드와 다방향 학습 흐름으로 단어를 맥락 속에서 익히게 합니다.",
      en: "Vocabulary isn't a single translation line. VOCA FLOW teaches words in context through visual cards and a multi-direction flow."
    },
    features: [
      { icon: "voca", title: { ko: "시각적 단어 카드", en: "Visual word cards" }, desc: { ko: "이미지와 함께 단어를 기억에 고정합니다.", en: "Anchors words in memory with imagery." } },
      { icon: "flow", title: { ko: "다방향 학습 흐름", en: "Multi-direction flow" }, desc: { ko: "한 방향이 아닌 여러 방향으로 반복합니다.", en: "Repeats in multiple directions, not just one." } },
      { icon: "check", title: { ko: "영/한 3일 무료 체험", en: "EN/KO 3-day trial" }, desc: { ko: "체험 후 라이프타임 잠금 해제로 이어집니다.", en: "Trial leads into a lifetime unlock." } }
    ],
    shots: [
      { ko: "학습 카드", en: "Study card" },
      { ko: "흐름 진행", en: "Flow progress" }
    ],
    faq: [
      { q: { ko: "지금 받을 수 있나요?", en: "Can I get it now?" }, a: { ko: "설치 파일은 apps.hai-b.ai에서 macOS DMG와 Windows EXE로 연결합니다.", en: "Installers connect through apps.hai-b.ai as macOS DMG and Windows EXE files." } },
      { q: { ko: "언어팩은 어디서 받나요?", en: "Where do language packs come from?" }, a: { ko: "언어팩 ZIP은 audio.hai-b.ai/audio 경로에서 분리해 제공합니다.", en: "Language pack ZIP files are separated under audio.hai-b.ai/audio." } },
      { q: { ko: "결제는?", en: "Payment?" }, a: { ko: "구매와 라이선스는 Polar 기준으로 연결합니다. 체험 흐름 이후 설치 파일과 언어팩 경로를 분리합니다.", en: "Purchases and licenses connect through Polar. After the trial flow, installer and language pack paths remain separate." } }
    ]
  },

  "movie-maker-pro": {
    what: {
      ko: "홍보 영상 제작은 매번 처음부터 시작될 필요가 없습니다. Movie Maker Pro는 프로젝트와 템플릿 기반으로 재사용 가능한 AI 보조 콘텐츠 워크플로를 만듭니다.",
      en: "Promo video work shouldn't start from scratch each time. Movie Maker Pro builds reusable, AI-assisted content workflows around projects and templates."
    },
    features: [
      { icon: "movie", title: { ko: "프로젝트 기반", en: "Project-based" }, desc: { ko: "에셋과 설정을 프로젝트로 묶어 재사용합니다.", en: "Bundles assets and settings into reusable projects." } },
      { icon: "flow", title: { ko: "재사용 템플릿", en: "Reusable templates" }, desc: { ko: "반복 작업을 템플릿으로 표준화합니다.", en: "Standardizes repeat work into templates." } },
      { icon: "shield", title: { ko: "AI 보조 파이프라인", en: "AI-assisted pipeline" }, desc: { ko: "생성 단계를 파이프라인으로 연결합니다.", en: "Connects generation steps into a pipeline." } }
    ],
    shots: [
      { ko: "프로젝트 보드", en: "Project board" },
      { ko: "템플릿 편집", en: "Template editor" }
    ],
    faq: [
      { q: { ko: "언제 출시되나요?", en: "When does it launch?" }, a: { ko: "macOS · Windows 버전 모두 준비 중입니다. 출시 소식은 노트에서 공지됩니다.", en: "macOS and Windows builds are both in preparation. Launch news will be posted in Notes." } },
      { q: { ko: "엔터프라이즈 옵션이 있나요?", en: "Is there an enterprise option?" }, a: { ko: "엔터프라이즈 / 커스텀은 별도 문의로 진행합니다.", en: "Enterprise / custom is handled by contacting us." } }
    ]
  },

  baton: {
    what: {
      ko: "BATON은 AI 기반 프로덕션 시스템을 위한 워크플로·템플릿 오케스트레이션 플랫폼입니다. 현재 컨셉을 정교화하며 준비 중입니다.",
      en: "BATON is a workflow and template orchestration platform for AI-powered production systems. The concept is being refined and is in preparation."
    },
    features: [
      { icon: "baton", title: { ko: "워크플로 오케스트레이션", en: "Workflow orchestration" }, desc: { ko: "여러 단계를 하나의 흐름으로 연결합니다.", en: "Connects many steps into one flow." } },
      { icon: "flow", title: { ko: "템플릿 시스템", en: "Template system" }, desc: { ko: "반복 가능한 프로덕션 패턴을 정의합니다.", en: "Defines repeatable production patterns." } }
    ],
    shots: [
      { ko: "오케스트레이션 뷰 (컨셉)", en: "Orchestration view (concept)" }
    ],
    faq: [
      { q: { ko: "사용해볼 수 있나요?", en: "Can I try it?" }, a: { ko: "아직 준비 중입니다. 진행 상황은 노트에서 공지됩니다.", en: "Not yet — it's in preparation. Progress is posted in Notes." } }
    ]
  }
};
