"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, FolderKanban } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { useLocale } from "@/components/locale-context";
import { getLocalizedProjects } from "@/data/projects";
import { ProjectDetailModal } from "@/components/projects/project-detail-modal";
import { ParallaxAvatar } from "@/components/parallax-avatar";
import { ProjectParallaxCard } from "@/components/projects/project-parallax-card";
import { ScrollReveal } from "@/components/scroll-reveal";

type ProjectsShowcaseProps = {
  id?: string;
};

export function ProjectsShowcase({ id = "projects" }: ProjectsShowcaseProps) {
  const { locale } = useLocale();
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<
    string | null
  >(null);
  const [hasEnteredGrid, setHasEnteredGrid] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const gridRef = useRef<HTMLElement | null>(null);
  const secondRowRef = useRef<HTMLDivElement | null>(null);
  const pendingScrollTargetRef = useRef<"top" | "second-row" | null>(null);
  const projects = useMemo(() => getLocalizedProjects(locale), [locale]);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);
  const hasExpandableProjects = projects.length > 3;
  const selectedProject = useMemo(
    () =>
      selectedProjectTitle
        ? projects.find((project) => project.title === selectedProjectTitle) ??
          null
        : null,
    [projects, selectedProjectTitle],
  );

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const fallback = globalThis.setTimeout(() => setHasEnteredGrid(true), 0);
      return () => globalThis.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredGrid(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(grid);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const pendingScrollTarget = pendingScrollTargetRef.current;

    if (!pendingScrollTarget) {
      return;
    }

    pendingScrollTargetRef.current = null;

    const element =
      pendingScrollTarget === "second-row"
        ? secondRowRef.current
        : gridRef.current;

    if (!element) {
      return;
    }

    const top =
      element.getBoundingClientRect().top + window.scrollY - 112;

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "smooth",
      });
    });
  }, [showAllProjects]);

  const handleProjectVisibilityToggle = () => {
    pendingScrollTargetRef.current = showAllProjects ? "top" : "second-row";
    setShowAllProjects((current) => !current);
  };

  return (
    <section
      id={id}
      className="min-h-svh scroll-mt-24 px-5 pb-8 pt-28 text-foreground transition-colors sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <ScrollReveal>
          <header className="relative flex flex-col justify-between gap-6 border-b border-black/10 pb-8 dark:border-white/12 sm:flex-row sm:items-end">
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/48">
                <FolderKanban className="size-4" />
                Projects
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[0.94] text-black dark:text-white sm:text-5xl lg:text-6xl">
                Projects
              </h1>
            </div>
            <div className="absolute -bottom-10 right-0 hidden w-36 sm:block lg:w-44">
              <ParallaxAvatar
                src="/images/avatars/coffee.png"
                alt="Coffee avatar picture"
                width={180}
                height={270}
                imageClassName="drop-shadow-[0_18px_24px_rgba(15,23,42,0.16)]"
              />
            </div>
          </header>
        </ScrollReveal>

        <section
          ref={gridRef}
          className="grid gap-12 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={index === 3 ? secondRowRef : undefined}
              className="min-h-[430px] sm:min-h-[480px]"
              initial={{ opacity: 0, x: -26, y: 18 }}
              animate={
                hasEnteredGrid
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: -26, y: 18 }
              }
              transition={{
                duration: 0.58,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectParallaxCard
                {...project}
                onOpen={() => setSelectedProjectTitle(project.title)}
              />
            </motion.div>
          ))}
        </section>

        {hasExpandableProjects ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleProjectVisibilityToggle}
              className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white/72 px-5 text-sm font-semibold text-black/68 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:border-white/12 dark:bg-white/8 dark:text-white/72 dark:shadow-[0_12px_28px_rgba(0,0,0,0.22)] dark:hover:bg-white/12 dark:focus-visible:ring-white/24"
            >
              {showAllProjects ? "Show Less" : "Load More"}
              {showAllProjects ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
            </button>
          </div>
        ) : null}
      </div>
      <ProjectDetailModal
        key={selectedProject?.title ?? "empty-project-modal"}
        project={selectedProject}
        onClose={() => setSelectedProjectTitle(null)}
      />
    </section>
  );
}
