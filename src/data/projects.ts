export type ProjectDetail = {
  title: string;
  description: string;
  href: string;
  repositoryHref: string;
  workflowHref?: string;
  label: string;
  accent: string;
  secondary: string;
  index: string;
  signature: string;
  cardImage?: string;
  cardStack?: string[];
  local?: boolean;
  demoAccount?: {
    email: string;
    password: string;
  };
  overview: string;
  period: string;
  organization: string;
  teamSize: string;
  contribution: string;
  role: string;
  features: string[];
  stack: string[];
  screenshots: {
    title: string;
    caption: string;
    src?: string;
  }[];
};

type ProjectLocale = "en" | "kr";

type ProjectTranslation = {
  description: string;
  overview: string;
  period: string;
  organization: string;
  teamSize: string;
  contribution: string;
  role: string;
  features: string[];
  captions: string[];
};

const projectDisplayOrder = ["Narrive", "instaQuote", "Funda", "Portfolio", "Onego"];

function orderProjects(projects: ProjectDetail[]) {
  return [...projects].sort(
    (a, b) =>
      projectDisplayOrder.indexOf(a.title) - projectDisplayOrder.indexOf(b.title),
  );
}

export const baseProjects: ProjectDetail[] = [
  {
    title: "Portfolio",
    description:
      "A portfolio site framing my work around operational problems, AI automation, and practical web tools.",
    href: "/",
    label: "Portfolio",
    accent: "#0F766E",
    secondary: "#F4D35E",
    index: "04",
    signature: "portfolio",
    local: true,
    cardImage: "/images/screenshots/portfolio_screenshot.png",
    cardStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repositoryHref: "https://github.com/nsh0823/portfolio",
    overview:
      "A personal portfolio focused on presenting selected work through tactile motion, project case studies, and a polished interface system. I wanted the site to feel interactive and user friendly while clearly connecting each project to practical operational impact.",
    period: "2026.04 ~ 2026.05",
    organization: "Personal",
    teamSize: "1",
    contribution: "100%",
    role:
      "I designed and built the portfolio experience end to end, including the project cards, responsive layout, motion interactions, and project detail flow. The visual direction was inspired by Toss Impact, I used ChatGPT to create the avatar version of myself, and I used Codex for coding assistance while shaping the implementation.",
    features: [
      "Interactive parallax project cards that make project exploration feel direct and tactile.",
      "Project detail modal with structured case-study content around problem, role, features, and technical stack.",
      "Responsive navigation with glass styling and scroll-based collapse.",
      "Generated personal avatar artwork created with ChatGPT for a more distinctive portfolio identity.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    screenshots: [
      {
        title: "Home",
        caption: "The interactive landing section with motion and avatar artwork.",
        src: "/images/screenshots/portfolio_home.png",
      },
      {
        title: "Projects",
        caption: "The projects section with parallax cards and modal case studies.",
        src: "/images/screenshots/portfolio_projects.png",
      },
      {
        title: "About",
        caption: "The personal background section with scroll-revealed content.",
        src: "/images/screenshots/portfolio_about.png",
      },
      {
        title: "Skills",
        caption: "The skills section organized around the technologies I use.",
        src: "/images/screenshots/portfolio_skills.png",
      },
    ],
  },
  {
    title: "Funda",
    description:
      "Gamified CS learning with AI-generated quiz content, validation pipelines, roadmaps, review, and real-time battles.",
    href: "https://funda.qzz.io",
    label: "Gamified CS Learning",
    accent: "#6559EA",
    secondary: "#D1CEF9",
    index: "03",
    signature: "funda",
    cardImage: "/images/screenshots/funda_screenshot.png",
    cardStack: ["React", "TypeScript", "n8n", "Socket.io", "NestJS"],
    repositoryHref: "https://github.com/nsh0823/funda",
    workflowHref: "https://share-n8n.com/shared/P4p1HXy7U0Lq",
    overview:
      "Funda is a gamified learning platform for computer science study. It guides learners through a Field, Unit, Step, and Quiz roadmap, then reinforces growth with spaced review, weekly tiers, personal dashboards, AI tutoring, and Socket.io-based real-time quiz battles. My work also included an n8n and AI-based generation workflow that reduced a large manual quiz-creation process into a repeatable, validated pipeline.",
    period: "2025.12 ~ 2026.02",
    organization: "Naver Boostcamp",
    teamSize: "4",
    contribution: "25%",
    role:
      "I designed an n8n and AI-based 6,000-question generation pipeline from Google Sheets curriculum data, separating AI generation, parsing, JSON Schema validation, JSONL conversion, checkpoints, retryable execution, documentation, and teammate handoff. I also improved auth-state loading UX, reduced incorrect pre-auth UI exposure, and refined real-time battle timer accuracy by correcting client/server time offsets, separating timer display and sound responsibilities, and reducing unnecessary rendering scope.",
    features: [
      "n8n and AI workflow that iterates through curriculum data, validates generated quiz output, and converts content into JSONL.",
      "Checkpoint and retry structure for long-running automation, with documentation so teammates can run section-level generation.",
      "Authentication loading refactor with TanStack Query Suspense and isAuthReady guards to reduce incorrect UI exposure.",
      "Socket.io real-time battle timer correction using serverTime-based offset calculation and smaller rendering boundaries.",
      "Roadmap, quiz, progress, toast, code readability, guest unlock, and admin upload UX refinements for a smoother learning flow.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "Zustand",
      "TanStack Query",
      "Socket.io",
      "Framer Motion",
      "Three.js",
      "NestJS",
      "MySQL",
      "Redis",
      "Turborepo",
      "pnpm",
      "Docker",
      "GitHub Actions",
      "Naver Cloud",
      "n8n",
      "Prometheus",
      "Grafana",
    ],
    screenshots: [
      {
        title: "Quiz play",
        caption: "Interactive quiz feedback with clearer code and answer states.",
        src: "/images/screenshots/funda_1.png",
      },
      {
        title: "Ranking",
        caption: "Weekly tiers and ranking feedback for visible growth.",
        src: "/images/screenshots/funda_2.png",
      },
      {
        title: "AI tutor",
        caption: "Context-aware AI help for explanations and follow-up learning.",
        src: "/images/screenshots/funda_3.png",
      },
      {
        title: "Dashboard",
        caption: "Personal study records and profile progress in one view.",
        src: "/images/screenshots/funda_4.png",
      },
      {
        title: "Quiz battle",
        caption: "Real-time quiz competition with synchronized countdowns.",
        src: "/images/screenshots/funda_5.png",
      },
      {
        title: "Battle result",
        caption: "Post-battle scoring and result feedback for competitive study.",
        src: "/images/screenshots/funda_6.png",
      },
    ],
  },
  {
    title: "Onego",
    description:
      "An AI-assisted blogging editor for sentence completion, summarization, tag generation, and structured writing.",
    href: "https://onego.qzz.io",
    label: "AI Blog Writing",
    accent: "#2563EB",
    secondary: "#93C5FD",
    index: "05",
    signature: "onego",
    cardImage: "/images/screenshots/onego_screenshot.png",
    cardStack: ["Vue.js", "Vuex", "Spring Boot", "MongoDB", "GPT-2"],
    repositoryHref: "https://github.com/nsh0823/onego",
    demoAccount: {
      email: "test@example.com",
      password: "test1234",
    },
    overview:
      "ONEGO is an AI-powered writing and blogging website for people who have difficulty writing. With one-click assistance, it can continue unfinished sentences, generate tags from page content, summarize drafts into subtitles, and support a full blog writing workflow from organization to preview.",
    period: "2021.07 ~ 2021.08",
    organization: "En-core Playdata",
    teamSize: "8",
    contribution: "15%",
    role:
      "I handled front-end web development for an AI writing service, implementing search, account settings, profile, saved/published post, and writing screens. I introduced Vuex to centralize writing-state access, separated state into modules, and learned the client-server flow connecting user input, stored data, UI state, and AI-assisted writing features.",
    features: [
      "One-click AI assistance for sentence completion, tag generation, and subtitle summarization.",
      "Writing editor with centralized state, font size and style controls, simple formatting, image upload, and post preview.",
      "Content folder management with add, edit, and delete flows for organizing longer writing.",
      "Memo and tag tools, including draggable memos and enter-to-add tag input for draft structure.",
      "Usability details such as dark mode, tooltips, header/sidebar/footer navigation, search, account, profile, saved blog, and posted blog pages.",
    ],
    stack: [
      "Vue.js",
      "Vuetify",
      "JavaScript",
      "HTML",
      "CSS",
      "Spring Boot",
      "Flask",
      "Python",
      "MongoDB",
      "AWS",
      "Google Cloud",
      "GitHub Actions",
      "Docker",
      "TensorFlow",
      "GPT-2",
      "KoNLPy",
    ],
    screenshots: [
      {
        title: "Main page",
        caption: "The primary entry point for browsing and starting the writing flow.",
        src: "/images/screenshots/onego_main.png",
      },
      {
        title: "Login",
        caption: "Account entry for accessing writing, profile, and saved blog features.",
        src: "/images/screenshots/onego_login.png",
      },
      {
        title: "Search",
        caption: "Search and result surfaces for finding blog content.",
        src: "/images/screenshots/onego_search.png",
      },
      {
        title: "Blog list",
        caption: "Saved and posted blog lists for managing user content.",
        src: "/images/screenshots/onego_bloglist.png",
      },
      {
        title: "Blog post",
        caption: "Published blog reading view with the finished post presentation.",
        src: "/images/screenshots/onego_blogpost.png",
      },
      {
        title: "Writing editor",
        caption: "Draft organization, formatting, memo, tag, image, and preview tools.",
        src: "/images/screenshots/onego_writer.png",
      },
      {
        title: "Dark editor",
        caption: "Dark mode writing surface for reducing eye strain while drafting.",
        src: "/images/screenshots/onego_writer_dark.png",
      },
      {
        title: "Profile",
        caption: "Profile and account surfaces for user-facing settings.",
        src: "/images/screenshots/onego_profile.png",
      },
    ],
  },
  {
    title: "instaQuote",
    description:
      "A quotation automation tool for CPI calculation, RFQ management, quote tracking, and document generation.",
    href: "https://insta-quote-six.vercel.app/",
    label: "Quotation Tool",
    accent: "#3d3d43",
    secondary: "#484458",
    index: "02",
    signature: "insta quote",
    cardImage: "/images/screenshots/instaquote_screenshot.png",
    cardStack: ["Google Apps Script", "React", "TypeScript", "Tailwind CSS", "TanStack Query"],
    repositoryHref: "https://github.com/nsh0823/instaQuote",
    overview:
      "instaQuote is a quotation generation tool that automates CPI calculation, sales and gross margin estimation, RFQ tracking, and quote document creation. It was built from an internal workflow where project managers repeatedly checked client information, quotation items, option conditions, and rate cards across documents and sheets.",
    period: "2024.08 ~ 2025.05",
    organization: "Dataspring Korea + Personal",
    teamSize: "1",
    contribution: "100%",
    role:
      "I analyzed the manual quotation workflow, designed the creation, lookup, management, dashboard, and automated output flow, then built and deployed the internal web tool with Google Apps Script, HTML, CSS, and JavaScript. I implemented required-field validation, option controls, automated calculations, quotation generation, RFQ CRUD, quote tracking, and feedback-driven input/error handling improvements.",
    features: [
      "Automated CPI calculation using IR, LOI, client data, vendor selection, markup, option conditions, and Google Sheets rate cards.",
      "Batch country selection by pasting country lists from Excel into the RFQ creation workflow.",
      "Quotation document generation that fills standardized quote details automatically.",
      "Gmail integration for extracting email titles, client names, and contact names.",
      "Full RFQ CRUD with save, load, update, quote tracking, status dropdowns, validation, and error handling.",
    ],
    stack: [
      "Google Apps Script",
      "JavaScript",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Vercel",
    ],
    screenshots: [
      {
        title: "Dashboard",
        caption: "Overview screen for tracking quote and RFQ activity.",
        src: "/images/screenshots/insta_dashboard.png",
      },
      {
        title: "Create RFQ",
        caption: "The request creation flow for preparing a new quote.",
        src: "/images/screenshots/insta_createrfq.png",
      },
      {
        title: "RFQ list",
        caption: "A list view for reviewing submitted quote requests.",
        src: "/images/screenshots/insta_rfqlist.png",
      },
      {
        title: "RFQ summary",
        caption: "A summary view for checking quote request details.",
        src: "/images/screenshots/insta_rfqsummary.png",
      },
    ],
  },
  {
    title: "Narrive",
    description:
      "AI-based investment research automation with symbol search, market data, report generation, and saved research flows.",
    href: "https://narrive.vercel.app/",
    label: "AI Research Automation",
    accent: "#EA580C",
    secondary: "#FDBA74",
    index: "01",
    signature: "narrive",
    cardImage: "/images/screenshots/narrive_screenshot.png",
    cardStack: ["Next.js", "n8n", "Gemini", "PostgreSQL", "TanStack Query"],
    repositoryHref: "https://github.com/nsh0823/narrive",
    workflowHref: "https://share-n8n.com/shared/VBNUWSQJ8mav",
    overview:
      "Narrive is an AI-based investment research automation web service that connects Next.js, n8n, Gemini, RapidAPI, and PostgreSQL. It turns symbol-based market inputs into generated investment reports, then supports report saving, retrieval, symbol search, trending ticker data, and market calendar data through server APIs.",
    period: "2026.06 ~ 2026.06",
    organization: "Personal",
    teamSize: "1",
    contribution: "100%",
    role:
      "I built the AI-assisted investment research workflow by connecting the web app, n8n automation, Gemini, RapidAPI, and PostgreSQL. I implemented report generation, saving, and retrieval flows, processed symbol search, trending tickers, and market calendar data through server APIs, and used ChatGPT Codex for requirements documentation, implementation planning, code review, testing, and iterative refinement.",
    features: [
      "AI report generation workflow connecting Next.js, n8n, Gemini, RapidAPI, and PostgreSQL.",
      "Symbol-based investment research reports with save and retrieval flows.",
      "Server API processing for symbol search, trending tickers, and market calendar data.",
      "TanStack Query-based client data flow for research, report, and market-data interactions.",
      "Codex-assisted requirements documentation, implementation planning, code review, testing, and iterative refinement.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
      "n8n",
      "Gemini",
      "RapidAPI",
      "Vercel",
    ],
    screenshots: [
      {
        title: "Research Setup",
        caption: "종목 선택 및 리서치 조건 설정",
        src: "/images/screenshots/narrive_1.png",
      },
      {
        title: "Report Summary",
        caption: "AI 투자 리포트 요약",
        src: "/images/screenshots/narrive_2.png",
      },
      {
        title: "Technical Signals",
        caption: "기술적 지표 분석",
        src: "/images/screenshots/narrive_3.png",
      },
      {
        title: "News Analysis",
        caption: "뉴스 및 감성 분석",
        src: "/images/screenshots/narrive_4.png",
      },
    ],
  },
];

const projectKoreanTranslations: ProjectTranslation[] = [
  {
    description:
      "운영 문제, AI 자동화, 실무형 웹 도구를 중심으로 제 작업을 보여주는 포트폴리오 사이트입니다.",
    overview:
      "선별한 작업을 촉각적인 모션, 프로젝트 사례, 완성도 있는 인터페이스 시스템으로 보여주는 개인 포트폴리오입니다. 사이트가 인터랙티브하고 사용자 친화적으로 느껴지면서도, 각 프로젝트가 실무 문제 해결과 어떻게 연결되는지 명확히 보여주고 싶었습니다.",
    period: "2026.04 ~ 2026.05",
    organization: "개인",
    teamSize: "1",
    contribution: "100%",
    role:
      "프로젝트 카드, 반응형 레이아웃, 모션 인터랙션, 프로젝트 상세 흐름까지 포트폴리오 경험 전반을 직접 설계하고 구현했습니다. 시각적 방향은 Toss Impact에서 영감을 받았고, ChatGPT로 저를 닮은 아바타 이미지를 만들었으며, 구현 과정에서는 Codex의 코딩 도움을 활용했습니다.",
    features: [
      "프로젝트 탐색이 직접적이고 촉각적으로 느껴지도록 만든 인터랙티브 패럴랙스 카드.",
      "문제, 역할, 기능, 기술 스택을 구조화해 보여주는 프로젝트 상세 모달.",
      "글래스 스타일과 스크롤 기반 축소 동작을 갖춘 반응형 내비게이션.",
      "더 개성 있는 포트폴리오 정체성을 위해 ChatGPT로 생성한 개인 아바타 아트워크.",
    ],
    captions: [
      "모션과 아바타 아트워크가 포함된 인터랙티브 랜딩 섹션.",
      "패럴랙스 카드와 모달 사례 연구로 구성된 프로젝트 섹션.",
      "스크롤에 따라 드러나는 콘텐츠가 있는 개인 배경 섹션.",
      "제가 사용하는 기술을 중심으로 정리한 스킬 섹션.",
    ],
  },
  {
    description:
      "AI 기반 퀴즈 콘텐츠 생성, 검증 파이프라인, 로드맵, 복습, 실시간 배틀을 결합한 게임형 CS 학습 서비스입니다.",
    overview:
      "Funda는 컴퓨터 과학 학습을 위한 게임형 학습 플랫폼입니다. Field, Unit, Step, Quiz로 이어지는 로드맵으로 학습자를 안내하고, 간격 반복 복습, 주간 티어, 개인 대시보드, AI 튜터링, Socket.io 기반 실시간 퀴즈 배틀로 성장을 강화합니다. 제 작업에는 대규모 수동 퀴즈 제작 과정을 반복 가능하고 검증 가능한 파이프라인으로 줄이는 n8n과 AI 기반 생성 워크플로도 포함되었습니다.",
    period: "2025.12 ~ 2026.02",
    organization: "네이버 부스트캠프",
    teamSize: "4",
    contribution: "25%",
    role:
      "Google Sheets 커리큘럼 데이터를 기반으로 AI 문제 생성, 파싱, JSON Schema 검증, JSONL 변환, 중간 저장, 실패 구간 재실행, 문서화, 팀원 실행 흐름까지 포함한 n8n과 AI 기반 6,000문제 생성 파이프라인을 설계했습니다. 또한 인증 상태 로딩 UX를 개선해 인증 전 잘못된 UI 노출을 줄였고, 서버 시간 기준 offset 보정, 타이머 표시/사운드 책임 분리, 렌더링 범위 축소를 통해 실시간 배틀 타이머 정확도를 개선했습니다.",
    features: [
      "커리큘럼 데이터를 순회하고 생성된 퀴즈 결과를 검증해 JSONL로 변환하는 n8n과 AI 워크플로.",
      "장시간 자동화를 위한 중간 저장과 재실행 구조, 팀원이 구간별 생성을 직접 실행할 수 있도록 돕는 문서화.",
      "TanStack Query Suspense와 isAuthReady 가드를 활용해 인증 전 잘못된 UI 노출을 줄인 인증 로딩 개선.",
      "serverTime 기반 offset 계산과 렌더링 경계 축소로 보정한 Socket.io 실시간 배틀 타이머.",
      "로드맵, 퀴즈, 진행률, 토스트, 코드 가독성, 게스트 잠금 해제, 관리자 업로드 UX 개선.",
    ],
    captions: [
      "더 명확한 코드와 정답 상태를 제공하는 인터랙티브 퀴즈 피드백.",
      "성장을 눈에 보이게 만드는 주간 티어와 랭킹 피드백.",
      "설명과 후속 학습을 돕는 문맥 기반 AI 도움.",
      "개인 학습 기록과 프로필 진행 상황을 한 화면에서 확인.",
      "동기화된 카운트다운을 갖춘 실시간 퀴즈 경쟁.",
      "경쟁 학습을 위한 배틀 후 점수와 결과 피드백.",
    ],
  },
  {
    description:
      "문장 완성, 요약, 태그 생성, 구조적인 글쓰기를 지원하는 AI 보조 블로그 에디터입니다.",
    overview:
      "ONEGO는 글쓰기에 어려움을 느끼는 사람들을 위한 AI 기반 글쓰기 및 블로그 웹사이트입니다. 클릭 한 번으로 미완성 문장을 이어 쓰고, 페이지 내용을 바탕으로 태그를 생성하며, 초안을 부제목으로 요약하고, 정리부터 미리보기까지 전체 블로그 작성 흐름을 지원합니다.",
    period: "2021.07 ~ 2021.08",
    organization: "엔코아 플레이데이터",
    teamSize: "8",
    contribution: "15%",
    role:
      "AI 글쓰기 서비스의 검색, 계정 설정, 프로필, 저장글/발행글, 글쓰기 화면을 구현하며 프런트엔드 개발을 담당했습니다. Vuex를 도입해 글쓰기 상태 접근 경로를 Store 중심으로 일원화하고 상태를 모듈 단위로 분리했으며, 사용자 입력, 저장 데이터, 화면 상태, AI 글쓰기 보조 기능이 연결되는 클라이언트-서버 흐름을 경험했습니다.",
    features: [
      "문장 완성, 태그 생성, 부제목 요약을 위한 원클릭 AI 보조 기능.",
      "중앙화된 상태 관리, 글자 크기와 스타일 조절, 간단한 서식, 이미지 업로드, 게시글 미리보기를 제공하는 글쓰기 에디터.",
      "긴 글을 정리하기 위한 콘텐츠 폴더 추가, 수정, 삭제 흐름.",
      "드래그 가능한 메모와 엔터로 추가하는 태그 입력을 포함한 메모 및 태그 도구.",
      "다크 모드, 툴팁, 헤더/사이드바/푸터 내비게이션, 검색, 계정, 프로필, 저장한 블로그, 작성한 블로그 페이지 등 사용성 디테일.",
    ],
    captions: [
      "브라우징과 글쓰기 흐름을 시작하는 기본 진입 화면.",
      "글쓰기, 프로필, 저장한 블로그 기능에 접근하기 위한 계정 진입 화면.",
      "블로그 콘텐츠를 찾기 위한 검색 및 결과 화면.",
      "사용자 콘텐츠를 관리하는 저장한 블로그와 작성한 블로그 목록.",
      "완성된 게시글을 보여주는 발행 블로그 읽기 화면.",
      "초안 정리, 서식, 메모, 태그, 이미지, 미리보기 도구.",
      "초안 작성 중 눈의 피로를 줄이는 다크 모드 글쓰기 화면.",
      "사용자 설정을 위한 프로필과 계정 화면.",
    ],
  },
  {
    description:
      "CPI 계산, RFQ 관리, 견적 추적, 문서 생성을 자동화하는 견적 업무 도구입니다.",
    overview:
      "instaQuote는 CPI 계산, 매출 및 매출총이익 추정, RFQ 추적, 견적 문서 생성을 자동화하는 견적 생성 도구입니다. 프로젝트 매니저가 고객 정보, 견적 항목, 옵션 조건, 단가표를 여러 문서와 시트에서 반복 확인해야 했던 내부 업무 흐름에서 출발했습니다.",
    period: "2024.08 ~ 2025.05",
    organization: "데이터스프링코리아 + 개인",
    teamSize: "1",
    contribution: "100%",
    role:
      "수동 견적 업무 흐름을 분석하고 생성, 조회, 관리, 대시보드, 자동 출력까지 이어지는 흐름을 설계한 뒤 Google Apps Script, HTML, CSS, JavaScript 기반 내부 웹 도구를 개발 및 배포했습니다. 필수값 검증, 옵션 제어, 자동 계산, 견적서 생성, RFQ CRUD, 견적 추적, 사용자 피드백 기반 입력/오류 처리 개선을 구현했습니다.",
    features: [
      "IR, LOI, 클라이언트 데이터, 벤더 선택, 마크업, 옵션 조건, Google Sheets 단가표를 활용한 자동 CPI 계산.",
      "Excel에서 국가 목록을 붙여 넣어 RFQ 생성 흐름에 적용하는 국가 일괄 선택.",
      "표준화된 견적 세부 정보를 자동으로 채우는 견적 문서 생성.",
      "이메일 제목, 클라이언트 이름, 담당자 이름을 추출하는 Gmail 연동.",
      "저장, 불러오기, 업데이트, 견적 추적, 상태 드롭다운, 검증, 오류 처리를 포함한 전체 RFQ CRUD.",
    ],
    captions: [
      "견적 및 RFQ 활동을 추적하는 개요 화면.",
      "새 견적을 준비하기 위한 요청 생성 흐름.",
      "제출된 견적 요청을 검토하는 목록 화면.",
      "견적 요청 세부 정보를 확인하는 요약 화면.",
    ],
  },
  {
    description:
      "심볼 검색, 시장 데이터, 리포트 생성, 저장된 리서치 흐름을 연결한 AI 기반 투자 리서치 자동화 서비스입니다.",
    overview:
      "Narrive는 Next.js, n8n, Gemini, RapidAPI, PostgreSQL을 연결한 AI 기반 투자 리서치 자동화 웹 서비스입니다. 종목 심볼 기반 시장 입력을 AI 투자 리포트로 생성하고, 리포트 저장과 조회, 심볼 검색, 트렌딩 티커, 시장 캘린더 데이터를 서버 API로 처리합니다.",
    period: "2026.06 ~ 2026.06",
    organization: "개인",
    teamSize: "1",
    contribution: "100%",
    role:
      "웹 앱, n8n 자동화, Gemini, RapidAPI, PostgreSQL을 연결해 AI 투자 리서치 워크플로를 구축했습니다. 리포트 생성, 저장, 조회 흐름을 구현하고 심볼 검색, 트렌딩 티커, 시장 캘린더 데이터를 서버 API로 처리했으며, ChatGPT Codex를 요구사항 정리, 구현 계획, 코드 검토, 테스트, 반복 개선에 활용했습니다.",
    features: [
      "Next.js, n8n, Gemini, RapidAPI, PostgreSQL을 연결한 AI 리포트 생성 워크플로.",
      "종목 심볼 기반 투자 리서치 리포트 생성, 저장, 조회 흐름.",
      "심볼 검색, 트렌딩 티커, 시장 캘린더 데이터를 처리하는 서버 API.",
      "리서치, 리포트, 시장 데이터 상호작용을 위한 TanStack Query 기반 클라이언트 데이터 흐름.",
      "Codex를 활용한 요구사항 문서화, 구현 계획, 코드 검토, 테스트, 반복 개선.",
    ],
    captions: [
      "종목 선택 및 리서치 조건 설정",
      "AI 투자 리포트 요약",
      "기술적 지표 분석",
      "뉴스 및 감성 분석",
    ],
  },
];


export function getLocalizedProjects(locale: ProjectLocale): ProjectDetail[] {
  if (locale === "en") {
    return orderProjects(baseProjects);
  }

  return orderProjects(baseProjects.map((project, projectIndex) => {
    const translation = projectKoreanTranslations[projectIndex];

    return {
      ...project,
      description: translation.description,
      overview: translation.overview,
      period: translation.period,
      organization: translation.organization,
      teamSize: translation.teamSize,
      contribution: translation.contribution,
      role: translation.role,
      features: translation.features,
      screenshots: project.screenshots.map((screenshot, screenshotIndex) => ({
        ...screenshot,
        caption: translation.captions[screenshotIndex],
      })),
    };
  }));
}
