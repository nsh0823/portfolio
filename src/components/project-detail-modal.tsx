"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GitBranch,
  ExternalLink,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  local?: boolean;
  overview: string;
  role: string;
  features: string[];
  stack: string[];
  screenshots: {
    title: string;
    caption: string;
  }[];
};

type ProjectDetailModalProps = {
  project: ProjectDetail | null;
  onClose: () => void;
};

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, project]);

  const slideCount = project?.screenshots.length ?? 0;
  const showPrevious = () => {
    if (!slideCount) {
      return;
    }

    setActiveSlide((current) => (current - 1 + slideCount) % slideCount);
  };
  const showNext = () => {
    if (!slideCount) {
      return;
    }

    setActiveSlide((current) => (current + 1) % slideCount);
  };

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] overflow-y-auto bg-black/42 px-4 py-6 backdrop-blur-xl sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            className="relative mx-auto grid min-h-[calc(100svh-48px)] w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(3,7,18,0.35)] lg:grid-cols-[1.05fr_0.95fr]"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={onClose}
              className="absolute right-4 top-4 z-30 grid size-9 place-items-center rounded-full bg-white/82 text-black/68 shadow-sm backdrop-blur transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              <X className="size-4" />
            </button>

            <div
              className="relative min-h-[420px] overflow-hidden px-5 py-16 sm:px-8 lg:min-h-full"
              style={{
                background: `
                  radial-gradient(circle at 18% 18%, ${project.secondary}88, transparent 26%),
                  radial-gradient(circle at 84% 18%, rgba(255,255,255,0.72), transparent 22%),
                  linear-gradient(145deg, ${project.accent}, ${project.secondary})
                `,
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-white/10" />
              <div className="pointer-events-none absolute -left-32 top-24 size-72 rounded-full bg-white/22 blur-3xl" />
              <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-24 rotate-[24deg] rounded-full bg-white/28 blur-2xl" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between pr-12 text-xs font-semibold uppercase tracking-[0.18em] text-white/76">
                  <span>{project.label}</span>
                  <span>{project.index}</span>
                </div>

                <div className="relative flex flex-1 items-center justify-center [perspective:1100px]">
                  <div className="relative h-[300px] w-full max-w-[620px] sm:h-[360px]">
                    {project.screenshots.map((screenshot, screenshotIndex) => {
                      const offset = screenshotIndex - activeSlide;
                      const isVisible = Math.abs(offset) <= 1;

                      return (
                        <motion.div
                          key={screenshot.title}
                          className="absolute inset-0"
                          animate={{
                            x: `${offset * 54}%`,
                            rotateY: offset * -24,
                            rotateZ: offset * 2,
                            scale: offset === 0 ? 1 : 0.82,
                            opacity: isVisible ? (offset === 0 ? 1 : 0.52) : 0,
                            zIndex: 10 - Math.abs(offset),
                          }}
                          transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <div className="h-full overflow-hidden rounded-[18px] bg-white shadow-[0_28px_60px_rgba(3,7,18,0.24)] ring-1 ring-white/40">
                            <div className="flex h-8 items-center gap-1.5 border-b border-black/8 bg-white/92 px-4">
                              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                              <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                              <span className="size-2.5 rounded-full bg-[#28c840]" />
                              <span className="ml-3 h-3 w-36 rounded-full bg-black/8" />
                            </div>
                            <div
                              className="relative h-[calc(100%-2rem)] overflow-hidden p-5"
                              style={{
                                background: `linear-gradient(135deg, ${project.accent}18, ${project.secondary}22), #f8fafc`,
                              }}
                            >
                              <div className="mb-4 h-6 w-2/3 rounded-full bg-black/10" />
                              <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.85fr_1.15fr] gap-4">
                                <div className="space-y-3">
                                  <div className="h-24 rounded-[14px] bg-white shadow-sm" />
                                  <div className="h-16 rounded-[14px] bg-white/78 shadow-sm" />
                                  <div className="h-10 rounded-[14px] bg-black/10" />
                                </div>
                                <div className="rounded-[16px] bg-white p-4 shadow-sm">
                                  <div
                                    className="mb-4 h-28 rounded-[14px]"
                                    style={{
                                      background: `linear-gradient(135deg, ${project.accent}, ${project.secondary})`,
                                    }}
                                  />
                                  <div className="space-y-2">
                                    <div className="h-3 rounded-full bg-black/12" />
                                    <div className="h-3 w-5/6 rounded-full bg-black/10" />
                                    <div className="h-3 w-2/3 rounded-full bg-black/8" />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-5 left-5 rounded-full bg-white/82 px-3 py-1 text-xs font-semibold text-black/58 shadow-sm">
                                {screenshot.title}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative z-20 mt-8 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous screenshot"
                    onClick={showPrevious}
                    className="grid size-10 place-items-center rounded-full bg-white/24 text-white shadow-sm backdrop-blur transition hover:bg-white/34 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <p className="min-w-44 text-center text-sm font-medium text-white/78">
                    {project.screenshots[activeSlide]?.caption}
                  </p>
                  <button
                    type="button"
                    aria-label="Next screenshot"
                    onClick={showNext}
                    className="grid size-10 place-items-center rounded-full bg-white/24 text-white shadow-sm backdrop-blur transition hover:bg-white/34 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
              <div className="space-y-4 pr-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/42">
                  {project.signature}
                </p>
                <h2
                  id="project-detail-title"
                  className="text-4xl font-bold leading-tight text-[#202731] sm:text-5xl"
                >
                  {project.title}
                </h2>
                <p className="text-base leading-7 text-black/58">
                  {project.overview}
                </p>
              </div>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-black/42">
                  My role
                </h3>
                <p className="text-sm leading-7 text-black/64">{project.role}</p>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-black/42">
                  Main features
                </h3>
                <ul className="grid gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-[8px] border border-black/8 bg-black/[0.025] px-3 py-2 text-sm leading-6 text-black/64"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-black/42">
                  Tech stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs font-semibold text-black/58 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.href}
                  target={project.local ? undefined : "_blank"}
                  rel={project.local ? undefined : "noreferrer"}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#202731] px-4 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Visit website
                  <ExternalLink className="size-4" />
                </a>
                <a
                  href={project.repositoryHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/68 transition hover:bg-black/[0.04]"
                >
                  Project repository
                  <GitBranch className="size-4" />
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
