"use client";

import { useLocale, type Locale } from "@/components/locale-context";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  kr: "KR",
};

export function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();
  const nextLocale = locale === "en" ? "kr" : "en";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextLocale === "en" ? "English" : "Korean"}`}
      onClick={toggleLocale}
      className="fixed right-4 top-20 z-[80] grid h-10 min-w-12 cursor-pointer place-items-center rounded-full border border-white/18 bg-black/42 px-3 text-xs font-bold text-white shadow-[0_16px_50px_rgba(7,10,20,0.24)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-black/54 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:top-4"
    >
      {localeLabels[locale]}
    </button>
  );
}
