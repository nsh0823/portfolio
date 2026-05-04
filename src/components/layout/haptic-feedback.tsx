"use client";

import { useEffect, useId, useRef } from "react";

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
  const switchId = useId();
  const labelRef = useRef<HTMLLabelElement>(null);
  const switchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    switchRef.current?.setAttribute("switch", "");

    const triggerSwitchFallback = () => {
      const labelElement = labelRef.current;

      if (!labelElement) {
        return;
      }

      labelElement.click();
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
    <label
      ref={labelRef}
      htmlFor={switchId}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 size-px opacity-0"
      data-haptic="off"
    >
      <input
        ref={switchRef}
        id={switchId}
        aria-hidden="true"
        data-haptic="off"
        tabIndex={-1}
        type="checkbox"
      />
    </label>
  );
}
