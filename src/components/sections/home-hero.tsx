"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

import { useInitialLoadReady } from "@/components/layout/initial-image-loader";
import { useLocale } from "@/components/locale-context";
import { ParallaxAvatar } from "@/components/parallax-avatar";

const descriptors = [
  "Full-stack developer",
  "Problem solver",
  "Automation builder",
  "UI-focused engineer",
];

const heroIntro = {
  en: "I build seamless web experiences, practical internal tools, and automation that turns repetitive work into simpler workflows.",
  kr: "매끄러운 웹 경험과 실용적인 내부 툴을 구축하며, 자동화를 통해 반복적인 업무를 간결한 워크플로우로 변화시킵니다.",
};

export function HomeHero() {
  const { locale } = useLocale();
  const isInitialLoadReady = useInitialLoadReady();

  return (
    <section
      id="home"
      className="relative min-h-svh scroll-mt-24 overflow-hidden px-5 pb-12 pt-28 text-black transition-colors dark:text-white sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-10rem)] w-full max-w-7xl flex-col items-center justify-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInitialLoadReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {descriptors.map((descriptor) => (
            <span
              key={descriptor}
              className="rounded-full border border-black/10 bg-white/64 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/54 shadow-[0_10px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-colors dark:border-white/12 dark:bg-white/8 dark:text-white/60 dark:shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
            >
              {descriptor}
            </span>
          ))}
        </motion.div>

        <section className="grid w-full items-center gap-8 lg:grid-cols-[1fr_minmax(300px,440px)_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInitialLoadReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.68, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 text-center transition-colors lg:text-right"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/42 dark:text-white/48">
              Seung Hyun Nam
            </p>
            <h1 className="text-5xl font-semibold leading-[0.92] text-black dark:text-white sm:text-6xl lg:text-7xl">
              Peter<br />Nam
            </h1>
          </motion.div>

          {isInitialLoadReady ? (
            <ParallaxAvatar
              src="/images/avatars/tennis.png"
              alt="Peter Nam tennis avatar"
              priority
              initialDelay={0.2}
              entrance="hero"
              className="mx-auto w-full max-w-[360px] cursor-default sm:max-w-[420px]"
            />
          ) : (
            <div
              aria-hidden="true"
              className="mx-auto aspect-[2/3] w-full max-w-[360px] sm:max-w-[420px]"
            />
          )}

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInitialLoadReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.68, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 text-center lg:text-left"
          >
            <p className="mx-auto max-w-md text-lg leading-8 text-black/62 dark:text-white/68 lg:mx-0">
              {heroIntro[locale]}
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="#projects"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 dark:bg-white dark:text-slate-950 dark:shadow-[0_14px_30px_rgba(0,0,0,0.34)] dark:focus-visible:ring-white/40"
              >
                Projects
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#about"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 text-sm font-semibold text-black/68 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:border-white/12 dark:bg-white/8 dark:text-white/72 dark:shadow-[0_12px_28px_rgba(0,0,0,0.22)] dark:focus-visible:ring-white/24"
              >
                <User className="size-4" />
                About
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </section>
  );
}
