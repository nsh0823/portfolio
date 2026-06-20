"use client";

import {
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import { useLocale } from "@/components/locale-context";
import { ParallaxAvatar } from "@/components/parallax-avatar";
import { ScrollReveal } from "@/components/scroll-reveal";

const skillSections = [
  {
    title: "Automation / AI",
    icon: Wrench,
    accent: "#be123c",
    skills: [
      "n8n",
      "Google Apps Script",
      "JavaScript automation",
      "JSON Schema",
      "Macro tools",
      "ChatGPT Codex",
      "Workflow optimization",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    accent: "#0f766e",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Emotion",
      "Vite",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "#2563eb",
    skills: ["Node.js", "Express.js", "NestJS", "Spring Boot", "Java"],
  },
  {
    title: "Data",
    icon: Database,
    accent: "#7c3aed",
    skills: ["MySQL", "Redis", "MongoDB", "Google Sheets", "JSON", "JSONL", "RDBMS", "Excel"],
  },
  {
    title: "DevOps",
    icon: Cloud,
    accent: "#b45309",
    skills: [
      "Docker",
      "AWS EC2",
      "AWS RDS",
      "AWS IAM",
      "Google Cloud",
      "Nginx",
      "GitHub Actions",
      "NCloud",
      "Azure",
      "Cloudflare",
    ],
  },
  {
    title: "Tools",
    icon: GitBranch,
    accent: "#334155",
    skills: ["Git", "GitHub", "Figma", "Notion", "Jira", "VS Code", "Postman"],
  },
];

const focusAreas = [
  {
    en: "Operational problem discovery",
    kr: "운영 문제 발견과 분석",
  },
  {
    en: "AI and workflow automation",
    kr: "AI 및 워크플로 자동화",
  },
  {
    en: "Validation-first implementation",
    kr: "검증 중심 구현",
  },
  {
    en: "Adoptable internal tools",
    kr: "실무에 적용 가능한 내부 도구",
  },
];

const skillsCopy = {
  intro: {
    en: "A practical stack shaped by building internal tools, AI-assisted content pipelines, validation workflows, automation scripts, and full-stack web applications.",
    kr: "내부 도구, AI 기반 콘텐츠 파이프라인, 검증 워크플로, 자동화 스크립트, 풀스택 웹 애플리케이션을 만들며 다져온 실용적인 기술 스택입니다.",
  },
  workingStyle: {
    en: "I work from problem analysis to prototype, validation, implementation, and iteration. I use AI tools, n8n, and automation deliberately to reduce repetitive work, make outputs easier to verify, and build workflows that teammates can actually run.",
    kr: "문제 분석에서 프로토타입, 검증, 구현, 반복 개선까지 이어지는 방식으로 일합니다. AI 도구, n8n, 자동화를 목적에 맞게 활용해 반복 작업을 줄이고, 결과를 검증하기 쉽게 만들며, 팀원이 실제로 실행할 수 있는 워크플로를 구축합니다.",
  },
};

type SkillsSectionProps = {
  id?: string;
  avatarPriority?: boolean;
};

export function SkillsSection({
  id = "skills",
  avatarPriority = true,
}: SkillsSectionProps) {
  const { locale } = useLocale();

  return (
    <section
      id={id}
      className="min-h-svh scroll-mt-24 px-5 pb-12 pt-28 text-black transition-colors dark:text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-8">
          <ScrollReveal>
            <header className="border-b border-black/10 pb-8 dark:border-white/12">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/48">
                <Sparkles className="size-4" />
                Skills
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[0.94] text-black dark:text-white sm:text-5xl lg:text-6xl">
                Skills
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/64 dark:text-white/68">
                {skillsCopy.intro[locale]}
              </p>
            </header>
          </ScrollReveal>

          <ScrollReveal className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.en}
                className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/72 p-4 text-sm font-semibold text-black/62 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:text-white/66 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
              >
                <Braces className="size-4 shrink-0 text-[#0f766e]" />
                {area[locale]}
              </div>
            ))}
          </ScrollReveal>

          <section className="grid gap-5 md:grid-cols-2">
            {skillSections.map((section, index) => {
              const Icon = section.icon;

              return (
                <ScrollReveal key={section.title} delay={index * 0.04}>
                  <article className="rounded-lg border border-black/10 bg-white/78 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid size-10 place-items-center rounded-lg"
                        style={{ backgroundColor: `${section.accent}18` }}
                      >
                        <Icon
                          className="size-5"
                          style={{ color: section.accent }}
                        />
                      </span>
                      <h2 className="text-2xl font-semibold">
                        {section.title}
                      </h2>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {section.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-black/58 transition-colors dark:border-white/12 dark:bg-white/8 dark:text-white/62"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </section>
        </div>

        <aside className="lg:sticky lg:top-28">
          <ParallaxAvatar
            src="/images/avatars/programming.png"
            alt="Peter Nam programming avatar"
            priority={avatarPriority}
            className="mx-auto w-full max-w-sm lg:max-w-md"
          />
          <ScrollReveal className="mt-4 rounded-lg border border-black/10 bg-white/78 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors dark:border-white/12 dark:bg-white/8 dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45 dark:text-white/48">
              Working style
            </p>
            <p className="mt-3 text-base leading-7 text-black/62 dark:text-white/66">
              {skillsCopy.workingStyle[locale]}
            </p>
          </ScrollReveal>
        </aside>
      </div>
    </section>
  );
}
