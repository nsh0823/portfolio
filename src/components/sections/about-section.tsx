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
      en: "Improved UX and workflow efficiency through survey UI/webview operations, platform integrations, and internal automation tools.",
      kr: "설문 UI와 웹뷰 환경을 운영하며, 외부 플랫폼 연동과 내부 자동화 도구 개발로 사용자 경험과 업무 효율을 개선했습니다.",
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
      en: "Built React, TypeScript, and Node.js-based services, covering real-time features, state management, testing, CI/CD, and deployment.",
      kr: "React, TypeScript, Node.js 기반으로 실시간 기능, 상태 관리, 테스트, CI/CD, 배포까지 서비스 개발 전반을 경험했습니다.",
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
      en: "Developed a Vue-based AI writing service with component UI, state management, and client-server integration.",
      kr: "Vue 기반 AI 글쓰기 서비스를 개발하며 컴포넌트 UI, 상태 관리, 클라이언트-서버 연동을 경험했습니다.",
    },
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
    en: "I am a web developer who identifies user pain points and turns inefficient workflows into practical web solutions. I enjoy using AI and automation to simplify complex problems into better service experiences, while creating convenient and reliable web experiences through careful attention to UI details and the overall user flow.",
    kr: "사용자가 느끼는 불편함을 빠르게 파악하고, 비효율적인 흐름을 실용적인 웹 솔루션으로 개선하는 웹 개발자입니다. AI와 자동화를 활용해 복잡한 문제를 단순한 서비스 경험으로 바꾸는 일을 즐기며, 작은 UI 디테일부터 전체 사용 흐름까지 더 편리하고 안정적인 웹 경험을 만들고자 합니다.",
  },
  survey: {
    en: "Survey UI, webview, internal tools",
    kr: "설문 UI, 웹뷰, 내부 도구 개발",
  },
  bootcamp: {
    en: "React, TypeScript, Node.js development",
    kr: "React, TypeScript, Node.js 기반 개발",
  },
  languages: {
    en: "Communication skills in English, Japanese, and Korean",
    kr: "미국·일본 경험 기반 커뮤니케이션",
  },
  drivesMe: [
    {
      en: "I first became interested in development when I realized that code could make complex problems easier to handle. Even with small features, seeing people actually use what I built and experience less inconvenience helped me understand the impact that development can have.",
      kr: "제가 개발에 흥미를 느끼기 시작한 순간은, 코드를 통해 복잡한 문제를 더 쉽게 다룰 수 있다는 것을 알게 되었을 때였습니다. 작은 기능이라도 누군가가 실제로 사용하고, 그로 인해 불편함이 줄어드는 모습을 보며 개발이 가진 힘을 처음 느꼈습니다.",
    },
    {
      en: "At dataSpring Korea, I carried this interest into practice as a survey programmer and automation lead. Designing and building internal tools on my own was not always easy, but I found great fulfillment in seeing repetitive tasks reduced and users work more efficiently. This experience became a key turning point that led me toward user-centered web development.",
      kr: "데이터스프링코리아에서는 설문 프로그래머이자 자동화 담당자로 일하며 이러한 관심을 실무로 이어갔습니다. 혼자서 내부 도구를 설계하고 구현하는 과정은 쉽지 않았지만, 반복 업무가 줄고 사용자가 더 효율적으로 일하는 모습을 보며 큰 보람을 느꼈습니다. 이 경험은 제가 사용자 중심의 웹 개발을 지향하게 된 중요한 계기가 되었습니다.",
    },
    {
      en: "Later, through Naver Boostcamp, I expanded the way I approach problem-solving by building web services and using AI in the development process. Learning new technologies, structuring ambiguous problems, and turning ideas into working products strengthened my confidence as a developer.",
      kr: "이후 네이버 부스트캠프에서는 웹 서비스 개발과 AI 활용을 경험하며, 문제를 해결하는 방식의 폭을 넓혔습니다. 새로운 기술을 배우고, 모호한 문제를 구조화하고, 실제로 동작하는 결과물로 만들어내는 과정에서 개발자로서의 확신도 커졌습니다.",
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
                  web developer
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
              <div className="grid gap-4">
                {experienceHighlights.map((item) => (
                  <article
                    key={item.title[locale]}
                    className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          {item.title[locale]}
                        </h3>
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
              <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3">
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
