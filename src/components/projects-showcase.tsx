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
      "A focused web project with a direct URL, clean presentation, and room for sharper case-study detail.",
    href: "https://funda.website",
    label: "Website",
    accent: "#E11D48",
    secondary: "#7DD3FC",
    index: "02",
    signature: "funda",
    repositoryHref: "https://github.com/nsh0823/funda",
    overview:
      "Funda is a web project centered on a clean public-facing experience, with concise content structure and a direct deployed URL.",
    role:
      "I worked across the frontend experience, shaping the visual presentation, deployment flow, and user-facing page structure.",
    features: [
      "Focused landing experience with direct navigation.",
      "Responsive page structure for desktop and mobile browsing.",
      "Production deployment at a custom website URL.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    screenshots: [
      {
        title: "Landing page",
        caption: "The first screen and primary content entry point.",
      },
      {
        title: "Content section",
        caption: "A structured section for explaining the project.",
      },
      {
        title: "Mobile layout",
        caption: "A compact version of the website experience.",
      },
    ],
  },
  {
    title: "Onego",
    description:
      "A deployed product surface for Onego, shaped around fast access and practical everyday use.",
    href: "https://onego.qzz.io",
    label: "Product",
    accent: "#2563EB",
    secondary: "#A3E635",
    index: "03",
    signature: "onego",
    repositoryHref: "https://github.com/nsh0823/onego",
    overview:
      "Onego is a deployed product surface built around fast access, practical everyday use, and a clean interface for repeated workflows.",
    role:
      "I contributed to the product interface and deployment, focusing on clarity, flow, and making the experience feel straightforward to use.",
    features: [
      "Product-style interface for quick access and repeated use.",
      "Clear content hierarchy for scanning and action.",
      "Live deployment available through the project website.",
    ],
    stack: ["Vue", "TypeScript", "Spring Boot", "MongoDB", "Docker"],
    screenshots: [
      {
        title: "Product home",
        caption: "The main product entry screen.",
      },
      {
        title: "Workflow view",
        caption: "A focused screen for the core user flow.",
      },
      {
        title: "Account surface",
        caption: "Supporting pages for user-facing interactions.",
      },
    ],
  },
  {
    title: "instaQuote",
    description:
      "A compact quote-making app published on Vercel with a simple flow and shareable output.",
    href: "https://insta-quote-six.vercel.app/",
    label: "App",
    accent: "#7C3AED",
    secondary: "#FB923C",
    index: "04",
    signature: "insta quote",
    repositoryHref: "https://github.com/nsh0823/insta-quote",
    overview:
      "instaQuote is a compact quote-making app for quickly composing a visual quote and turning it into a shareable output.",
    role:
      "I built the app experience around a simple creation flow, focusing on fast editing, clear preview feedback, and a lightweight deployment.",
    features: [
      "Quote creation flow with immediate visual feedback.",
      "Compact interface optimized for quick composition.",
      "Hosted Vercel deployment for easy sharing and review.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    screenshots: [
      {
        title: "Quote editor",
        caption: "The main composition screen for creating a quote.",
      },
      {
        title: "Preview output",
        caption: "A styled preview of the final quote visual.",
      },
      {
        title: "Share state",
        caption: "The completed output ready to share.",
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
            <Image src="/images/programming.png" alt="Programming avatar picture" width={200} height={300}/>
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
