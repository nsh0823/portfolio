"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { useTheme } from "@/hooks/use-theme";
import { AboutSection } from "@/components/sections/about-section";
import { HomeHero } from "@/components/sections/home-hero";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { SkillsSection } from "@/components/sections/skills-section";

export function PortfolioScrollPage() {
  const shouldReduceMotion = useReducedMotion();
  const theme = useTheme();
  const backgroundX = useMotionValue(50);
  const backgroundY = useMotionValue(42);
  const smoothBackgroundX = useSpring(backgroundX, {
    stiffness: 70,
    damping: 24,
    mass: 0.6,
  });
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 70,
    damping: 24,
    mass: 0.6,
  });

  const lightBackground = useMotionTemplate`
    radial-gradient(circle at ${smoothBackgroundX}% ${smoothBackgroundY}%, rgba(15,118,110,0.22), transparent 28%),
    radial-gradient(circle at ${smoothBackgroundY}% ${smoothBackgroundX}%, rgba(244,211,94,0.18), transparent 30%),
    linear-gradient(135deg, #f8fbfb 0%, #eef5f6 48%, #f6f8f8 100%)
  `;
  const darkBackground = useMotionTemplate`
    radial-gradient(circle at ${smoothBackgroundX}% ${smoothBackgroundY}%, rgba(20,184,166,0.2), transparent 30%),
    radial-gradient(circle at ${smoothBackgroundY}% ${smoothBackgroundX}%, rgba(244,211,94,0.12), transparent 32%),
    linear-gradient(135deg, #050816 0%, #0f172a 48%, #111827 100%)
  `;

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    backgroundX.set(x);
    backgroundY.set(y);
  };

  return (
    <motion.main
      className="relative min-h-svh overflow-x-clip text-black transition-colors duration-300 dark:text-white"
      style={{ background: theme === "dark" ? darkBackground : lightBackground }}
      onPointerMove={handlePointerMove}
    >
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45 dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] dark:opacity-35" />
      <div className="relative z-10">
        <HomeHero />
        <ProjectsShowcase />
        <AboutSection avatarPriority={false} />
        <SkillsSection avatarPriority={false} />
        <footer className="px-5 pb-8 pt-4 text-center text-sm leading-6 text-black/50 transition-colors dark:text-white/48 sm:px-8 lg:px-12">
          Design inspired by{" "}
          <a
            href="https://toss.im/impact"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-black/70 underline decoration-black/20 underline-offset-4 transition-colors hover:text-black dark:text-white/68 dark:decoration-white/20 dark:hover:text-white"
          >
            Toss Impact
          </a>
          .
          <br />
          Coded in{" "}
          <strong className="font-semibold text-black/70 dark:text-white/68">VS Code</strong> with
          assistance from{" "}
          <strong className="font-semibold text-black/70 dark:text-white/68">ChatGPT Codex</strong>.
        </footer>
      </div>
    </motion.main>
  );
}
