"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, User } from "lucide-react";
import type { SVGProps } from "react";

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

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.97c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .28.18.6.69.5A10.23 10.23 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.67 3H4.33C3.6 3 3 3.58 3 4.3v15.4c0 .72.6 1.3 1.33 1.3h15.34c.73 0 1.33-.58 1.33-1.3V4.3c0-.72-.6-1.3-1.33-1.3ZM8.34 18.33H5.67V9.75h2.67v8.58ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.33 9.75h-2.66v-4.17c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.2v4.25h-2.66V9.75h2.55v1.17h.04c.35-.67 1.22-1.39 2.52-1.39 2.69 0 3.2 1.77 3.2 4.08v4.72Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/nsh0823",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seung-hyun-nam-8810b6205/",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:nsh_823@naver.com",
    icon: Mail,
  },
];

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
            <div className="flex justify-center gap-3 lg:justify-end">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex size-8 items-center justify-center rounded-full text-black/64 transition-colors hover:bg-black/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:text-white/70 dark:hover:bg-white/12 dark:focus-visible:ring-white/24"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
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
