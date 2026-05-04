"use client";

import { useEffect, useRef } from "react";

const interactiveSelector = [
  "a[href]",
  "button",
  "[role='button']",
  "[role='link']",
  "input[type='button']",
  "input[type='submit']",
  "input[type='reset']",
  "summary",
  "[data-haptic]",
].join(",");

function isDisabled(element: Element) {
  if (element.closest("[data-haptic='off']")) {
    return true;
  }

  if (element.getAttribute("aria-disabled") === "true") {
    return true;
  }

  return (
    element instanceof HTMLButtonElement ||
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  ) && element.disabled;
}

function isIOSLikeDevice() {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export function HapticFeedback() {
  const switchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const triggerSwitchFallback = () => {
      const switchElement = switchRef.current;

      if (!switchElement) {
        return;
      }

      switchElement.click();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch" && event.pointerType !== "pen") {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const interactiveElement = target?.closest(interactiveSelector);

      if (!interactiveElement || isDisabled(interactiveElement)) {
        return;
      }

      const didVibrate = navigator.vibrate?.(8) ?? false;

      if (!didVibrate && isIOSLikeDevice()) {
        triggerSwitchFallback();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, {
        capture: true,
      });
    };
  }, []);

  return (
    <input
      ref={switchRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 size-px opacity-0"
      data-haptic="off"
      tabIndex={-1}
      type="checkbox"
      role="switch"
    />
  );
}
