"use client";

import { useEffect } from "react";

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

function triggerSwitchFallback() {
  const labelElement = document.createElement("label");
  const inputElement = document.createElement("input");

  labelElement.ariaHidden = "true";
  labelElement.style.display = "none";

  inputElement.type = "checkbox";
  inputElement.setAttribute("switch", "");

  labelElement.appendChild(inputElement);
  document.head.appendChild(labelElement);
  labelElement.click();
  document.head.removeChild(labelElement);
}

export function HapticFeedback() {
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch" && event.pointerType !== "pen") {
        return;
      }

      if (isIOSLikeDevice()) {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const interactiveElement = target?.closest(interactiveSelector);

      if (!interactiveElement || isDisabled(interactiveElement)) {
        return;
      }

      navigator.vibrate?.(8);
    };

    const handleClick = (event: MouseEvent) => {
      if (!isIOSLikeDevice()) {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const interactiveElement = target?.closest(interactiveSelector);

      if (!interactiveElement || isDisabled(interactiveElement)) {
        return;
      }

      try {
        triggerSwitchFallback();
      } catch {
        // Ignore unsupported iOS/WebKit combinations.
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, {
      capture: true,
      passive: true,
    });
    document.addEventListener("click", handleClick, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, {
        capture: true,
      });
      document.removeEventListener("click", handleClick, {
        capture: true,
      });
    };
  }, []);

  return null;
}
