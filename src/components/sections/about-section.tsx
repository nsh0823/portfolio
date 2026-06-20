"use client";

import {
  BriefcaseBusiness,
  CircleDot,
  CircleDotDashed,
  Coffee,
  Crown,
  FileDown,
  Dumbbell,
  GraduationCap,
  Languages,
  MapPin,
  Music2,
  PawPrint,
  User,
} from "lucide-react";

import { useLocale } from "@/components/locale-context";
import { ParallaxAvatar } from "@/components/parallax-avatar";
import { ScrollReveal } from "@/components/scroll-reveal";

const experienceHighlights = [
  {
    title: {
      en: "Survey & Solutions Coordinator",
      kr: "Survey & Solutions Coordinator",
    },
    subtitle: {
      en: "dataSpring Korea | Seoul, South Korea",
      kr: "데이터스프링코리아 | 서울, 대한민국",
    },
    period: "2022.02 - 2025.06",
    detail: {
      en: "Identified repetitive work, input errors, and unstable response flows, then improved operational efficiency with web tools, survey UI/webview development, and automation scripts.",
      kr: "반복 업무, 입력 오류, 불안정한 응답 흐름을 파악하고 웹 도구, 설문 UI/웹뷰 개발, 자동화 스크립트로 업무 효율과 운영 안정성을 개선했습니다.",
    },
  },
  {
    title: {
      en: "Boostcamp Web Full-stack Membership",
      kr: "네이버 부스트캠프 웹 풀스택 10기 멤버십",
    },
    subtitle: {
      en: "Naver Connect Foundation | Seoul, South Korea",
      kr: "네이버 커넥트재단 | 서울, 대한민국",
    },
    period: "2025.06 - 2026.02",
    detail: {
      en: "Built React, TypeScript, and Node.js services while applying AI and n8n to content generation, validation workflows, auth UX, and real-time synchronization.",
      kr: "React, TypeScript, Node.js 기반 서비스 개발과 함께 AI/n8n 콘텐츠 생성 자동화, 검증 흐름, 인증 UX, 실시간 동기화를 다뤘습니다.",
    },
  },
  {
    title: {
      en: "AI Applied SW Development & Data Analysis",
      kr: "AI 응용 SW 개발 및 데이터 분석",
    },
    subtitle: {
      en: "Encore Playdata | Seoul, South Korea",
      kr: "엔코아 플레이데이터 | 서울, 대한민국",
    },
    period: "2021.02 - 2021.08",
    detail: {
      en: "Developed a Vue-based AI writing service and learned how user input, stored data, UI state, and AI model workflows connect in a full-stack product.",
      kr: "Vue 기반 AI 글쓰기 서비스를 개발하며 사용자 입력, 저장 데이터, 화면 상태, AI 모델 흐름이 연결되는 풀스택 서비스 구조를 경험했습니다.",
    },
  },
];

const experienceGroups = [
  {
    heading: {
      en: "Work Experience",
      kr: "실무 경험",
    },
    items: [experienceHighlights[0]],
  },
  {
    heading: {
      en: "Bootcamp",
      kr: "부트캠프",
    },
    items: experienceHighlights.slice(1),
  },
];

const education = {
  school: "Furman University",
  degreeLocation: {
    en: "BA in Japanese Studies | South Carolina, USA",
    kr: "일본학 학사 | 사우스캐롤라이나주, 미국",
  },
  period: "2014.08 ~ 2018.05",
  gpa: {
    en: "GPA: 3.89 / 4.0",
    kr: "학점: 3.89 / 4.0",
  },
  honor: {
    en: "Phi Beta Kappa Member",
    kr: "Phi Beta Kappa(우수학생 협회) 회원",
  },
  courses: [
    "Intro to Programming",
    "Intro to Discrete Math",
    "Vectors and Matrices",
    "Differential Equations",
    "Analytic Geometry & Calculus",
    "Statistics",
  ],
};

const hobbies = [
  { label: { en: "Working out", kr: "운동" }, icon: Dumbbell },
  { label: { en: "Tennis", kr: "테니스" }, icon: CircleDot },
  { label: { en: "Table tennis", kr: "탁구" }, icon: CircleDotDashed },
  { label: { en: "Chess", kr: "체스" }, icon: Crown },
  { label: { en: "Violin", kr: "바이올린" }, icon: Music2 },
  { label: { en: "Coffee", kr: "커피" }, icon: Coffee },
  { label: { en: "Dog walking", kr: "강아지 산책" }, icon: PawPrint },
];

const aboutCopy = {
  intro: {
    en: "I am a developer who analyzes repetitive tasks, operational bottlenecks, and user friction, then turns them into practical structures through web development, AI, and automation. I value fast experimentation, validation, and tools that people can adopt in their daily work.",
    kr: "반복 작업, 운영 병목, 사용자 불편을 분석하고 웹 개발, AI, 자동화로 실무에서 바로 쓸 수 있는 구조로 바꾸는 개발자입니다. 빠르게 시도하고 검증하며, 사용자가 일상 업무에서 편하게 적용할 수 있는 도구를 만드는 일을 중요하게 생각합니다.",
  },
  survey: {
    en: "Operational workflow automation",
    kr: "운영 워크플로 자동화",
  },
  bootcamp: {
    en: "AI/n8n validation pipelines",
    kr: "AI/n8n 검증 파이프라인",
  },
  languages: {
    en: "Communication skills in English, Japanese, and Korean",
    kr: "미국·일본 경험 기반 커뮤니케이션",
  },
  drivesMe: [
    {
      en: "I first became interested in development when I saw that code could turn repeated manual work into a clear, reusable process. Even a small tool can have real impact when it removes friction from someone’s daily workflow.",
      kr: "코드가 반복적인 수작업을 명확하고 재사용 가능한 프로세스로 바꿀 수 있다는 것을 보며 개발에 흥미를 느끼기 시작했습니다. 작은 도구라도 누군가의 매일 반복되는 업무 마찰을 줄인다면 실제적인 영향을 만들 수 있다고 생각합니다.",
    },
    {
      en: "At dataSpring Korea, I analyzed quotation, survey programming, and app/webview response flows that depended on repeated checks across sheets, documents, and external platforms. I built internal web tools, automation scripts, validation logic, and reusable script documentation so teams could reduce preparation time, input errors, and manual checks. Designing and building internal tools on my own was not always easy, but I found great fulfillment in seeing repetitive tasks reduced and users work more efficiently.",
      kr: "데이터스프링코리아에서는 견적, 설문 프로그래밍, 앱/웹뷰 응답 흐름처럼 시트, 문서, 외부 플랫폼을 반복 확인해야 하는 업무를 분석했습니다. 내부 웹 도구, 자동화 스크립트, 검증 로직, 재사용 가능한 스크립트 문서를 만들어 작업 시간, 입력 오류, 수동 확인 과정을 줄였습니다. 혼자서 내부 도구를 설계하고 구현하는 과정은 쉽지 않았지만, 반복 업무가 줄고 사용자가 더 효율적으로 일하는 모습을 보며 큰 보람을 느꼈습니다",
    },
    {
      en: "Through Naver Boostcamp, I expanded this approach into product engineering. I built an n8n and AI-based pipeline that converted curriculum data into validated JSONL quiz content, then worked on auth loading UX, real-time timer accuracy, rendering boundaries, testing, and refactoring. Learning new technologies, structuring ambiguous problems, and turning ideas into working products helped me grow significantly as a developer.",
      kr: "네이버 부스트캠프에서는 이러한 접근을 제품 개발로 확장했습니다. 커리큘럼 데이터를 검증된 JSONL 퀴즈 콘텐츠로 변환하는 n8n과 AI 기반 파이프라인을 만들고, 인증 로딩 UX, 실시간 타이머 정확도, 렌더링 경계, 테스트와 리팩토링을 다뤘습니다. 새로운 기술을 빠르게 배우고, 모호한 문제를 구조화하고, 실제로 동작하는 결과물로 만들어내는 과정을 통해 개발자로서 크게 성장했습니다.",
    },
    {
      en: "For me, the joy of development starts with solving problems, but it becomes most rewarding when those solutions reduce someone’s inconvenience and create a better user experience. I want to keep learning and growing by identifying small user pain points and turning them into more convenient experiences.",
      kr: "저에게 개발의 즐거움은 문제를 해결하는 과정에서 시작되지만, 그 해결이 누군가의 불편함을 줄이고 더 나은 사용 경험으로 이어질 때, 가장 큰 보람을 느낍니다. 사용자의 작은 불편함을 발견하고 더 편리한 경험으로 바꾸는 과정 속에서 계속 배우고 성장하고자 합니다.",
    },
  ],
};

type AboutSectionProps = {
  id?: string;
  avatarPriority?: boolean;
};

export function AboutSection({ id = "about", avatarPriority = true }: AboutSectionProps) {
  const { locale } = useLocale();

  return (
    <section
      id={id}
      className="min-h-svh scroll-mt-24 px-5 pb-12 pt-28 text-black transition-colors dark:text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100svh-8rem)] lg:self-start">
          <ParallaxAvatar
            src="/images/avatars/violin.png"
            alt="Peter Nam playing violin avatar"
            priority={avatarPriority}
            className="w-full"
            imageClassName="lg:max-h-[calc(100svh-18rem)]"
          />
          <ScrollReveal className="mt-4 rounded-lg border border-black/10 bg-white/78 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45 dark:text-white/48">
                  Automation | Web Developer
                </p>
                <h2 className="mt-2 text-3xl font-semibold leading-tight text-black dark:text-white">
                  {locale === "en" ? "Peter Nam" : "남승현"}
                </h2>
                <p className="mt-3 flex items-center gap-2 text-sm text-black/58 dark:text-white/62">
                  <MapPin className="size-4" />
                  {locale === "en" ? "Seoul, South Korea" : "서울, 대한민국"}
                </p>
              </div>
              <a
                href={`/Seunghyun_Nam_CV_${locale.toUpperCase()}.pdf`}
                download={`Seunghyun_Nam_CV_${locale.toUpperCase()}.pdf`}
                aria-label="Download Peter Nam resume"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-black/10 bg-black px-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-black/82 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-white/12 dark:bg-white dark:text-slate-950 dark:hover:bg-white/86 dark:focus-visible:ring-white/30"
              >
                <FileDown className="size-5" />
                Download CV
              </a>
            </div>
          </ScrollReveal>
        </aside>

        <div className="space-y-8">
          <ScrollReveal>
            <header className="border-b border-black/10 pb-8 dark:border-white/12">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/48">
                <User className="size-4" />
                About
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[0.94] text-black dark:text-white sm:text-5xl lg:text-6xl">
                About
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/64 dark:text-white/68">
                {aboutCopy.intro[locale]}
              </p>
            </header>
          </ScrollReveal>

          <ScrollReveal className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-black/10 bg-white/72 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
              <BriefcaseBusiness className="size-5 text-[#0f766e]" />
              <p className="mt-4 text-2xl font-semibold">3+ years</p>
              <p className="mt-1 text-sm leading-6 text-black/56 dark:text-white/62">
                {aboutCopy.survey[locale]}
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white/72 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
              <GraduationCap className="size-5 text-[#b45309]" />
              <p className="mt-4 text-2xl font-semibold">Full-stack</p>
              <p className="mt-1 text-sm leading-6 text-black/56 dark:text-white/62">
                {aboutCopy.bootcamp[locale]}
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white/72 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
              <Languages className="size-5 text-[#2563eb]" />
              <p className="mt-4 text-2xl font-semibold">EN / JP / KR</p>
              <p className="mt-1 text-sm leading-6 text-black/56 dark:text-white/62">
                {aboutCopy.languages[locale]}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">What drives me</h2>
              <div className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.09)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)] sm:p-8">
                <div className="space-y-4 text-base leading-8 text-black/62 dark:text-white/66">
                  {aboutCopy.drivesMe.map((paragraph) => (
                    <p key={paragraph.en}>{paragraph[locale]}</p>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Experience</h2>
              <div className="space-y-6">
                {experienceGroups.map((group) => (
                  <div key={group.heading.en} className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/44 dark:text-white/50">
                      {group.heading[locale]}
                    </h3>
                    <div className="grid gap-4">
                      {group.items.map((item) => (
                        <article
                          key={item.title[locale]}
                          className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-black dark:text-white">
                                {item.title[locale]}
                              </h4>
                              <p className="mt-1 text-sm font-medium text-black/46 dark:text-white/50">
                                {item.subtitle[locale]}
                              </p>
                            </div>
                            <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/50 dark:bg-white/10 dark:text-white/56">
                              {item.period}
                            </span>
                          </div>
                          <p className="mt-3 max-w-3xl text-sm leading-6 text-black/58 dark:text-white/62">
                            {item.detail[locale]}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Education</h2>
              <div className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {education.school}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-black/46 dark:text-white/50">
                      {education.degreeLocation[locale]}
                    </p>
                  </div>
                  <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/50 dark:bg-white/10 dark:text-white/56">
                    {education.period}
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-sm leading-6 text-black/62 dark:text-white/66">
                  <p>{education.gpa[locale]}</p>
                  <p>{education.honor[locale]}</p>
                </div>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-black/54 dark:text-white/60">
                    Relevant Courses:
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-black/62 dark:text-white/66 sm:grid-cols-2">
                    {education.courses.map((course) => (
                      <li key={course} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0f766e]" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Outside of code</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {hobbies.map((hobby) => {
                  const Icon = hobby.icon;

                  return (
                    <div
                      key={hobby.label.en}
                      className="flex min-w-0 items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/62 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:text-white/66 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
                    >
                      <span className="grid size-5 shrink-0 place-items-center">
                        <Icon
                          className="size-[18px] text-[#0f766e]"
                          strokeWidth={1.9}
                        />
                      </span>
                      <span className="min-w-0 leading-5">
                        {hobby.label[locale]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
