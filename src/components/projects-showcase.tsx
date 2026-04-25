"use client";

import { useState } from "react";

import { ProjectParallaxCard } from "@/components/project-parallax-card";

const projects = [
  {
    title: "Current Portfolio",
    description:
      "The living home for my work, experiments, and interface details as this site takes shape.",
    href: "/",
    label: "Portfolio",
    accent: "#0F766E",
    secondary: "#F4D35E",
    index: "01",
    signature: "portfolio",
    local: true,
  },
  {
    title: "funda.website",
    description:
      "A focused web project with a direct URL, clean presentation, and room for sharper case-study detail.",
    href: "https://funda.website",
    label: "Website",
    accent: "#E11D48",
    secondary: "#7DD3FC",
    index: "02",
    signature: "funda",
  },
  {
    title: "onego.qzz.io",
    description:
      "A deployed product surface for Onego, shaped around fast access and practical everyday use.",
    href: "https://onego.qzz.io",
    label: "Product",
    accent: "#2563EB",
    secondary: "#A3E635",
    index: "03",
    signature: "onego",
  },
  {
    title: "Insta Quote",
    description:
      "A compact quote-making app published on Vercel with a simple flow and shareable output.",
    href: "https://insta-quote-six.vercel.app/",
    label: "App",
    accent: "#7C3AED",
    secondary: "#FB923C",
    index: "04",
    signature: "insta quote",
  },
];

export function ProjectsShowcase() {
  const [activeBackground, setActiveBackground] = useState(
    "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.9), transparent 34%), linear-gradient(180deg, #f6f8f8, #f6f8f8)",
  );

  return (
    <main
      className="min-h-svh px-5 pb-8 pt-28 text-foreground transition-[background] duration-500 sm:px-8 lg:px-12"
      style={{ background: activeBackground }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <header className="flex flex-col justify-between gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/54">
              Projects
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] text-black sm:text-6xl lg:text-7xl">
              Selected work in motion.
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/58 sm:text-base">
            A first pass at the work I want to show, from this portfolio to
            shipped experiments and product surfaces.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectParallaxCard
              key={project.title}
              {...project}
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
    </main>
  );
}
