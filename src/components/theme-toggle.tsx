"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme, type Theme } from "@/components/use-theme";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  const theme = useTheme();

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem(storageKey, nextTheme);
  };

  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-[90] grid size-12 cursor-pointer place-items-center rounded-full border border-black/10 bg-white/82 text-black shadow-[0_18px_44px_rgba(15,23,42,0.22)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-white/14 dark:bg-slate-950/78 dark:text-white dark:shadow-[0_18px_44px_rgba(0,0,0,0.45)] dark:hover:bg-slate-900"
    >
      <Icon className="size-5" />
    </button>
  );
}
