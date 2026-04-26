"use client";

import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
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
  const gridRef = useRef<HTMLElement | null>(null);
  const projects = useMemo(() => getLocalizedProjects(locale), [locale]);
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
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
      </div>
      <ProjectDetailModal
        key={selectedProject?.title ?? "empty-project-modal"}
        project={selectedProject}
        onClose={() => setSelectedProjectTitle(null)}
      />
    </section>
  );
}
