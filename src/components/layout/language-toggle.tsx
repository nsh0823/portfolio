"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useLocale, type Locale } from "@/components/locale-context";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  kr: "KR",
};

export function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();
  const nextLocale = locale === "en" ? "kr" : "en";
  const { scrollY } = useScroll();
  const [isCondensed, setIsCondensed] = useState(false);
  const condensedRef = useRef(false);

  const updateCondensedState = (latest: number) => {
    const shouldCondense = condensedRef.current ? latest > 36 : latest > 96;

    if (shouldCondense !== condensedRef.current) {
      condensedRef.current = shouldCondense;
      setIsCondensed(shouldCondense);
    }
  };

  useEffect(() => {
    updateCondensedState(window.scrollY);
  }, []);

  useMotionValueEvent(scrollY, "change", updateCondensedState);

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextLocale === "en" ? "English" : "Korean"}`}
      onClick={toggleLocale}
      className={cn(
        "fixed right-4 z-[80] grid h-10 min-w-12 cursor-pointer place-items-center rounded-full border border-white/18 bg-black/42 px-3 text-xs font-bold text-white shadow-[0_16px_50px_rgba(7,10,20,0.24)] backdrop-blur-2xl transition-all hover:-translate-y-0.5 hover:bg-black/54 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:top-4",
        isCondensed ? "top-4" : "top-20",
      )}
    >
      {localeLabels[locale]}
    </button>
  );
}
