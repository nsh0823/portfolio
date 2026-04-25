"use client";

import { useState } from "react";

import {
  ProjectDetail,
  ProjectDetailModal,
} from "@/components/project-detail-modal";
import { ProjectParallaxCard } from "@/components/project-parallax-card";

import Image from 'next/image';

const projects: ProjectDetail[] = [
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
    repositoryHref: "https://github.com/nsh0823/portfolio",
    overview:
      "A personal portfolio focused on presenting selected work through tactile motion, project case studies, and a polished interface system.",
    role:
      "I designed and built the portfolio experience end to end, including the project cards, responsive layout, motion interactions, and project detail flow.",
    features: [
      "Interactive parallax project cards with pointer-based depth.",
      "Project detail modal with structured case-study content.",
      "Responsive navigation with glass styling and scroll-based collapse.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    screenshots: [
      {
        title: "Projects grid",
        caption: "The main project index with animated cards.",
      },
      {
        title: "Detail modal",
        caption: "Expanded project information in a focused overlay.",
      },
      {
        title: "Responsive view",
        caption: "A layout tuned for desktop and smaller screens.",
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
    repositoryHref: "https://github.com/boostcampwm2025/web21-funda",
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

export function ProjectsShowcase() {
  const [activeBackground, setActiveBackground] = useState(
    "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.9), transparent 34%), linear-gradient(180deg, #f6f8f8, #f6f8f8)",
  );
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null,
  );

  return (
    <main
      className="min-h-svh px-5 pb-8 pt-28 text-foreground transition-[background] duration-500 sm:px-8 lg:px-12"
      style={{ background: activeBackground }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <header className="relative flex flex-col justify-between gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[0.94] text-black sm:text-5xl lg:text-6xl">
              Projects
            </h1>
          </div>
          <div className="absolute -bottom-8 right-0">
            <Image src="/images/avatars/programming.png" alt="Programming avatar picture" width={200} height={300}/>
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectParallaxCard
              key={project.title}
              {...project}
              onOpen={() => setSelectedProject(project)}
              onActiveChange={(active) =>
                setActiveBackground(
                  active
                    ? `radial-gradient(circle at 50% 18%, ${project.accent}44, transparent 34%), radial-gradient(circle at 70% 0%, ${project.secondary}55, transparent 36%), linear-gradient(180deg, #f8fbfb, #eef5f6)`
                    : "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.9), transparent 34%), linear-gradient(180deg, #f6f8f8, #f6f8f8)",
                )
              }
            />
          ))}
        </section>
      </div>
      <ProjectDetailModal
        key={selectedProject?.title ?? "empty-project-modal"}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
