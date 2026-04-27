export type ProjectDetail = {
  title: string;
  description: string;
  href: string;
  repositoryHref: string;
  label: string;
  accent: string;
  secondary: string;
  index: string;
  signature: string;
  cardImage?: string;
  local?: boolean;
  demoAccount?: {
    email: string;
    password: string;
  };
  overview: string;
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
  role: string;
  features: string[];
  captions: string[];
};

export const baseProjects: ProjectDetail[] = [
  {
    title: "Portfolio",
    description:
      "The living home for my work, experiments, and interface details as this site takes shape.",
    href: "/",
    label: "Portfolio",
    accent: "#0F766E",
    secondary: "#F4D35E",
    index: "01",
    signature: "portfolio",
    local: true,
    cardImage: "/images/screenshots/portfolio_screenshot.png",
    repositoryHref: "https://github.com/nsh0823/portfolio",
    overview:
      "A personal portfolio focused on presenting selected work through tactile motion, project case studies, and a polished interface system. I wanted the site to feel interactive and user friendly while challenging myself with newer tools such as Next.js and Framer Motion.",
    role:
      "I designed and built the portfolio experience end to end, including the project cards, responsive layout, motion interactions, and project detail flow. The visual direction was inspired by Toss Impact, I used ChatGPT to create the avatar version of myself, and I used Codex for coding assistance while building the site.",
    features: [
      "Interactive parallax project cards with pointer-based depth.",
      "Project detail modal with structured case-study content.",
      "Responsive navigation with glass styling and scroll-based collapse.",
      "Generated personal avatar artwork created with ChatGPT for a more distinctive portfolio identity.",
      "Toss Impact-inspired visual language adapted into a custom portfolio experience.",
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
      "Gamified CS learning with roadmaps, quizzes, review, AI help, and real-time battles.",
    href: "https://funda.website",
    label: "Gamified CS Learning",
    accent: "#6559EA",
    secondary: "#D1CEF9",
    index: "02",
    signature: "funda",
    cardImage: "/images/screenshots/funda_screenshot.png",
    repositoryHref: "https://github.com/nsh0823/funda",
    overview:
      "Funda is a gamified learning platform for computer science study. It guides learners through a Field, Unit, Step, and Quiz roadmap, then reinforces growth with spaced review, weekly tiers, personal dashboards, AI tutoring, and Socket.io-based real-time quiz battles.",
    role:
      "I improved the first-entry experience by refining landing and main loading states, removing auth-state flicker, and tightening scroll and responsive behavior. I also shaped the learning synchronization UX around roadmap progress, answer rates, step completion, guest unlock logic, toast feedback, quiz animation and sound, readable code rendering, admin quiz upload flows, roadmap/sidebar UI, and the real-time battle start, quiz, disconnect, and countdown synchronization logic.",
    features: [
      "Structured Field, Unit, Step, and Quiz roadmap that lowers the entry barrier for CS learning.",
      "Progress, answer-rate, step-completion, guest unlock, and toast feedback states that keep study flow synchronized.",
      "Multiple quiz formats with animation, sound effects, code-block readability, and SM-2 spaced review support.",
      "Socket.io real-time battle experience with stable battle start, quiz state, disconnect handling, and server-time countdown sync.",
      "Operational UI improvements including multi-file admin quiz uploads plus roadmap and sidebar refinements.",
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
    index: "03",
    signature: "onego",
    cardImage: "/images/screenshots/onego_screenshot.png",
    repositoryHref: "https://github.com/nsh0823/onego",
    demoAccount: {
      email: "test@example.com",
      password: "test1234",
    },
    overview:
      "ONEGO is an AI-powered writing and blogging website for people who have difficulty writing. With one-click assistance, it can continue unfinished sentences, generate tags from page content, summarize drafts into subtitles, and support a full blog writing workflow from organization to preview.",
    role:
      "I handled front-end web development with Vue.js, HTML, and CSS. I designed and implemented the header, sidebar, footer, search, search results, account settings, edit profile, my profile, change password, saved blogs, posted blogs, and blog writing pages. On the writing page, I added font size and style controls, content folder management, memos, tags, image upload, and blog preview features.",
    features: [
      "One-click AI assistance for sentence completion, tag generation, and subtitle summarization.",
      "Writing editor with font size and style controls, simple formatting, image upload, and post preview.",
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
    index: "04",
    signature: "insta quote",
    cardImage: "/images/screenshots/instaquote_screenshot.png",
    repositoryHref: "https://github.com/nsh0823/instaQuote",
    overview:
      "instaQuote is a quotation generation tool that automates CPI calculation, sales and gross margin estimation, RFQ tracking, and quote document creation. It connects Google Sheets, Gmail, and a web interface so project managers can generate standardized quotations efficiently and avoid manual RFQ data-entry errors.",
    role:
      "I designed the UI/UX in Figma, built the front end with HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, and shadcn/ui, and developed Google Apps Script back-end flows for processing Google Sheets data. I implemented batch country selection, automated quotation document generation, Gmail-based client/contact extraction, RFQ CRUD, saved RFQ loading, RFQ updates, quote tracking, and workflow logic that removes manual CPI lookup and RFQ input.",
    features: [
      "Automated CPI calculation using IR, LOI, client data, vendor selection, markup, and Google Sheets rate cards.",
      "Batch country selection by pasting country lists from Excel into the RFQ creation workflow.",
      "Quotation document generation that fills standardized quote details automatically.",
      "Gmail integration for extracting email titles, client names, and contact names.",
      "Full RFQ CRUD with save, load, update, quote tracking, and status dropdowns.",
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
];

const projectKoreanTranslations: ProjectTranslation[] = [
  {
    description:
      "이 사이트가 발전해 가는 과정 속에서 제 작업, 실험, 인터페이스 디테일을 담아내는 살아 있는 공간입니다.",
    overview:
      "선별한 작업을 촉각적인 모션, 프로젝트 사례, 완성도 있는 인터페이스 시스템으로 보여주는 개인 포트폴리오입니다. Next.js와 Framer Motion 같은 새로운 도구에 도전하면서도, 사이트가 인터랙티브하고 사용자 친화적으로 느껴지도록 만들고 싶었습니다.",
    role:
      "프로젝트 카드, 반응형 레이아웃, 모션 인터랙션, 프로젝트 상세 흐름까지 포트폴리오 경험 전반을 직접 설계하고 구현했습니다. 시각적 방향은 Toss Impact에서 영감을 받았고, ChatGPT로 저를 닮은 아바타 이미지를 만들었으며, 사이트를 구축하는 과정에서는 Codex의 코딩 도움을 활용했습니다.",
    features: [
      "포인터 움직임에 따라 깊이감이 반응하는 인터랙티브 패럴랙스 프로젝트 카드.",
      "구조화된 사례 연구 콘텐츠를 보여주는 프로젝트 상세 모달.",
      "글래스 스타일과 스크롤 기반 축소 동작을 갖춘 반응형 내비게이션.",
      "더 개성 있는 포트폴리오 정체성을 위해 ChatGPT로 생성한 개인 아바타 아트워크.",
      "Toss Impact에서 영감을 받은 시각 언어를 커스텀 포트폴리오 경험에 맞게 적용.",
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
      "로드맵, 퀴즈, 복습, AI 도움, 실시간 배틀을 결합한 게임형 CS 학습 서비스입니다.",
    overview:
      "Funda는 컴퓨터 과학 학습을 위한 게임형 학습 플랫폼입니다. Field, Unit, Step, Quiz로 이어지는 로드맵으로 학습자를 안내하고, 간격 반복 복습, 주간 티어, 개인 대시보드, AI 튜터링, Socket.io 기반 실시간 퀴즈 배틀로 성장을 강화합니다.",
    role:
      "랜딩과 메인 로딩 상태를 개선하고, 인증 상태 깜빡임을 제거했으며, 스크롤과 반응형 동작을 다듬어 첫 진입 경험을 개선했습니다. 또한 로드맵 진행률, 정답률, 스텝 완료, 게스트 잠금 해제 로직, 토스트 피드백, 퀴즈 애니메이션과 사운드, 읽기 쉬운 코드 렌더링, 관리자 퀴즈 업로드 흐름, 로드맵/사이드바 UI, 실시간 배틀 시작, 퀴즈, 연결 해제, 카운트다운 동기화 로직을 중심으로 학습 동기화 UX를 다듬었습니다.",
    features: [
      "CS 학습의 진입 장벽을 낮추는 Field, Unit, Step, Quiz 구조의 로드맵.",
      "학습 흐름을 동기화하는 진행률, 정답률, 스텝 완료, 게스트 잠금 해제, 토스트 피드백 상태.",
      "애니메이션, 사운드 효과, 코드 블록 가독성, SM-2 간격 반복 복습을 지원하는 다양한 퀴즈 형식.",
      "안정적인 배틀 시작, 퀴즈 상태, 연결 해제 처리, 서버 시간 기반 카운트다운 동기화를 갖춘 Socket.io 실시간 배틀 경험.",
      "다중 파일 관리자 퀴즈 업로드와 로드맵 및 사이드바 개선을 포함한 운영 UI 개선.",
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
    role:
      "Vue.js, HTML, CSS를 사용해 프런트엔드 웹 개발을 담당했습니다. 헤더, 사이드바, 푸터, 검색, 검색 결과, 계정 설정, 프로필 수정, 내 프로필, 비밀번호 변경, 저장한 블로그, 작성한 블로그, 블로그 글쓰기 페이지를 설계하고 구현했습니다. 글쓰기 페이지에는 글자 크기와 스타일 조절, 콘텐츠 폴더 관리, 메모, 태그, 이미지 업로드, 블로그 미리보기 기능을 추가했습니다.",
    features: [
      "문장 완성, 태그 생성, 부제목 요약을 위한 원클릭 AI 보조 기능.",
      "글자 크기와 스타일 조절, 간단한 서식, 이미지 업로드, 게시글 미리보기를 제공하는 글쓰기 에디터.",
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
      "instaQuote는 CPI 계산, 매출 및 매출총이익 추정, RFQ 추적, 견적 문서 생성을 자동화하는 견적 생성 도구입니다. Google Sheets, Gmail, 웹 인터페이스를 연결해 프로젝트 매니저가 표준화된 견적서를 효율적으로 생성하고 수작업 RFQ 데이터 입력 오류를 줄일 수 있도록 합니다.",
    role:
      "Figma로 UI/UX를 설계하고, HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, shadcn/ui로 프런트엔드를 구축했으며, Google Sheets 데이터를 처리하는 Google Apps Script 백엔드 흐름을 개발했습니다. 국가 일괄 선택, 자동 견적 문서 생성, Gmail 기반 클라이언트/담당자 추출, RFQ CRUD, 저장된 RFQ 불러오기, RFQ 업데이트, 견적 추적, 수동 CPI 조회와 RFQ 입력을 줄이는 워크플로 로직을 구현했습니다.",
    features: [
      "IR, LOI, 클라이언트 데이터, 벤더 선택, 마크업, Google Sheets 단가표를 활용한 자동 CPI 계산.",
      "Excel에서 국가 목록을 붙여 넣어 RFQ 생성 흐름에 적용하는 국가 일괄 선택.",
      "표준화된 견적 세부 정보를 자동으로 채우는 견적 문서 생성.",
      "이메일 제목, 클라이언트 이름, 담당자 이름을 추출하는 Gmail 연동.",
      "저장, 불러오기, 업데이트, 견적 추적, 상태 드롭다운을 포함한 전체 RFQ CRUD.",
    ],
    captions: [
      "견적 및 RFQ 활동을 추적하는 개요 화면.",
      "새 견적을 준비하기 위한 요청 생성 흐름.",
      "제출된 견적 요청을 검토하는 목록 화면.",
      "견적 요청 세부 정보를 확인하는 요약 화면.",
    ],
  },
];


export function getLocalizedProjects(locale: ProjectLocale): ProjectDetail[] {
  if (locale === "en") {
    return baseProjects;
  }

  return baseProjects.map((project, projectIndex) => {
    const translation = projectKoreanTranslations[projectIndex];

    return {
      ...project,
      description: translation.description,
      overview: translation.overview,
      role: translation.role,
      features: translation.features,
      screenshots: project.screenshots.map((screenshot, screenshotIndex) => ({
        ...screenshot,
        caption: translation.captions[screenshotIndex],
      })),
    };
  });
}
