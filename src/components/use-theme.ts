"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribeToThemeChange(onStoreChange: () => void) {
  if (typeof document === "undefined") {
    return () => {};
  }

  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}

export function useTheme() {
  return useSyncExternalStore(
    subscribeToThemeChange,
    getThemeSnapshot,
    () => "light",
  );
}
