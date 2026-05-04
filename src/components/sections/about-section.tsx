"use client";

import {
  BriefcaseBusiness,
  CircleDot,
  Coffee,
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
    title: "Survey & Solutions, dataSpring Korea",
    period: "2022 - 2025",
    detail: {
      en: "Built online surveys with HTML, CSS, and JavaScript, cleaned survey data, supported script reuse, and automated recurring department workflows.",
      kr: "HTML, CSS, JavaScript로 온라인 설문을 구축하고, 설문 데이터를 정리했으며, 스크립트 재사용과 반복적인 부서 업무 자동화를 지원했습니다.",
    },
  },
  {
    title: "Internal quotation system",
    period: "instaQuote",
    detail: {
      en: "Designed and developed an internal quotation web application with Figma, Google Apps Script, HTML, CSS, and JavaScript, reducing manual quote work by about 40%.",
      kr: "Figma, Google Apps Script, HTML, CSS, JavaScript로 내부 견적 웹 애플리케이션을 설계하고 개발해 수작업 견적 업무를 약 40% 줄였습니다.",
    },
  },
  {
    title: "Automation and team enablement",
    period: "Operations",
    detail: {
      en: "Created JavaScript, Apps Script, and macro-based automation that shortened repetitive work, reduced manual errors, and helped teammates move faster.",
      kr: "JavaScript, Apps Script, 매크로 기반 자동화를 만들어 반복 업무 시간을 줄이고 수작업 오류를 낮추며 팀원들이 더 빠르게 일할 수 있도록 도왔습니다.",
    },
  },
];

const educationItems = [
  {
    en: "Naver Boostcamp Web/Mobile 10th, full-stack web development",
    kr: "네이버 부스트캠프 웹/모바일 10기, 풀스택 웹 개발",
  },
  {
    en: "Encore Playdata, AI application software development and data analysis",
    kr: "엔코아 플레이데이터, AI 응용 소프트웨어 개발 및 데이터 분석",
  },
  {
    en: "Furman University, B.A. in Japanese Studies",
    kr: "Furman University, 일본학 학사",
  },
  {
    en: "Seinan Gakuin University, exchange study in Japanese",
    kr: "Seinan Gakuin University, 일본어 교환학생",
  },
];

const hobbies = [
  { label: { en: "Working out", kr: "운동" }, icon: Dumbbell },
  { label: { en: "Tennis", kr: "테니스" }, icon: CircleDot },
  { label: { en: "Violin", kr: "바이올린" }, icon: Music2 },
  { label: { en: "Coffee", kr: "커피" }, icon: Coffee },
  { label: { en: "Dog walks", kr: "강아지 산책" }, icon: PawPrint },
];

const aboutCopy = {
  intro: {
    en: "I am an aspiring full-stack web developer who enjoys turning complex problems into simple, elegant web solutions. I care about seamless user experiences, practical automation, and building tools that help people work with less friction.",
    kr: "복잡한 문제를 단순하고 우아한 웹 솔루션으로 바꾸는 일을 즐기는 풀스택 웹 개발자 지망생입니다. 매끄러운 사용자 경험, 실용적인 자동화, 사람들이 더 적은 마찰로 일할 수 있도록 돕는 도구를 중요하게 생각합니다.",
  },
  survey: {
    en: "Survey programming, automation, and internal tool development.",
    kr: "설문 프로그래밍, 자동화, 내부 도구 개발.",
  },
  bootcamp: {
    en: "Naver Boostcamp and Encore Playdata bootcamp training.",
    kr: "네이버 부스트캠프와 엔코아 플레이데이터 부트캠프 교육.",
  },
  languages: {
    en: "Native-level English and business Japanese communication.",
    kr: "원어민 수준의 영어와 비즈니스 일본어 커뮤니케이션.",
  },
  drivesMe: [
    {
      en: "What I love most about coding is the problem-solving aspect. It feels like assembling a complex puzzle, and the moment the final piece fits is what keeps me motivated.",
      kr: "제가 코딩에서 가장 좋아하는 부분은 문제를 해결하는 과정입니다. 복잡한 퍼즐을 맞추는 것처럼 느껴지고, 마지막 조각이 딱 들어맞는 순간이 계속 도전하게 만드는 원동력입니다.",
    },
    {
      en: "Before focusing fully on web development, I worked for about three years at dataSpring Korea as a survey programmer and automation specialist. That experience shaped how I think about software: a good tool should remove repetitive work, reduce errors, and make the next decision clearer.",
      kr: "웹 개발에 집중하기 전에는 dataSpring Korea에서 약 3년간 설문 프로그래머이자 자동화 담당자로 일했습니다. 그 경험은 좋은 도구란 반복 업무를 줄이고, 오류를 낮추며, 다음 결정을 더 명확하게 만들어야 한다는 소프트웨어에 대한 관점을 만들어 주었습니다.",
    },
    {
      en: "I approach challenges with a positive mindset and a determined attitude. I like learning new domains, working through ambiguity, and staying with a problem until the result is useful.",
      kr: "저는 긍정적인 마음가짐과 끈기 있는 태도로 도전에 접근합니다. 새로운 분야를 배우고, 모호함을 풀어가며, 결과가 실제로 유용해질 때까지 문제를 붙잡고 해결하는 과정을 좋아합니다.",
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
                  Full-stack developer
                </p>
                <h2 className="mt-2 text-3xl font-semibold leading-tight text-black dark:text-white">
                  Peter Nam
                </h2>
                <p className="mt-3 flex items-center gap-2 text-sm text-black/58 dark:text-white/62">
                  <MapPin className="size-4" />
                  Seoul, South Korea
                </p>
              </div>
              <a
                href="/Peter_Nam_Resume.pdf"
                download="Peter_Nam_Resume.pdf"
                aria-label="Download Peter Nam resume"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-black/10 bg-black px-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-black/82 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-white/12 dark:bg-white dark:text-slate-950 dark:hover:bg-white/86 dark:focus-visible:ring-white/30"
              >
                <FileDown className="size-5" />
                Resume
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

          <ScrollReveal className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.09)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)] sm:p-8">
            <h2 className="text-2xl font-semibold">What drives me</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-black/62 dark:text-white/66">
              {aboutCopy.drivesMe.map((paragraph) => (
                <p key={paragraph.en}>{paragraph[locale]}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Experience</h2>
              <div className="grid gap-4">
                {experienceHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        {item.title}
                      </h3>
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

          <ScrollReveal className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
            <h2 className="text-2xl font-semibold">Education</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-black/62 dark:text-white/66">
              {educationItems.map((item) => (
                <li key={item.en} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0f766e]" />
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)] sm:p-8">
            <h2 className="text-2xl font-semibold">Outside of code</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {hobbies.map((hobby) => {
                const Icon = hobby.icon;

                return (
                  <div
                    key={hobby.label.en}
                    className="flex items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/62 transition-colors dark:border-white/12 dark:bg-white/8 dark:text-white/66"
                  >
                    <Icon className="size-4 text-[#0f766e]" />
                    {hobby.label[locale]}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
