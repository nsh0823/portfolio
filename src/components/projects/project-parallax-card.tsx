"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type ProjectParallaxCardProps = {
  title: string;
  description: string;
  href: string;
  label: string;
  accent: string;
  secondary: string;
  index: string;
  signature: string;
  cardImage?: string;
  local?: boolean;
  revealDelay?: number;
  onActiveChange?: (active: boolean) => void;
  onOpen?: () => void;
};

export function ProjectParallaxCard({
  title,
  description,
  label,
  accent,
  secondary,
  index,
  cardImage,
  revealDelay = 0,
  onActiveChange,
  onOpen,
}: ProjectParallaxCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const didTouchDragRef = useRef(false);

  const smoothX = useSpring(pointerX, { stiffness: 170, damping: 22, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 170, damping: 22, mass: 0.35 });

  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);
  const artworkX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const artworkY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const detailX = useTransform(smoothX, [-1, 1], [18, -18]);
  const detailY = useTransform(smoothY, [-1, 1], [14, -14]);
  const glareX = useTransform(smoothX, [-1, 1], [0, 100]);
  const glareY = useTransform(smoothY, [-1, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.44), rgba(255,255,255,0.12) 24%, transparent 54%)`;

  const updatePointer = (event: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    pointerX.set(x * 2 - 1);
    pointerY.set(y * 2 - 1);

    if (event.pointerType === "touch" && touchStartRef.current) {
      const deltaX = event.clientX - touchStartRef.current.x;
      const deltaY = event.clientY - touchStartRef.current.y;

      if (Math.hypot(deltaX, deltaY) > 8) {
        didTouchDragRef.current = true;
      }
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    onActiveChange?.(true);
    event.currentTarget.setPointerCapture(event.pointerId);

    if (event.pointerType === "touch") {
      touchStartRef.current = { x: event.clientX, y: event.clientY };
      didTouchDragRef.current = false;
    }

    updatePointer(event);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    updatePointer(event);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
    onActiveChange?.(false);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    touchStartRef.current = null;
    resetPointer();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (didTouchDragRef.current) {
      didTouchDragRef.current = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onOpen?.();
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      onFocus={() => onActiveChange?.(true)}
      onBlur={() => onActiveChange?.(false)}
      onPointerEnter={() => onActiveChange?.(true)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      initial={{ y: 22 }}
      animate={{ opacity: 1 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.48, delay: revealDelay, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      className="group relative block w-full touch-pan-y cursor-pointer text-left focus-visible:outline-none"
      style={{ perspective: 1000 }}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-[36px] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background: `linear-gradient(135deg, ${accent}55, ${secondary}44)`,
        }}
      />
      <motion.article
        className="relative min-h-[430px] overflow-hidden rounded-[22px] bg-white shadow-[0_16px_38px_rgba(15,23,42,0.14)] transition-shadow duration-300 group-hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)] group-focus-visible:ring-3 group-focus-visible:ring-ring/40 dark:bg-slate-950 dark:shadow-[0_16px_38px_rgba(0,0,0,0.34)] dark:group-hover:shadow-[0_26px_70px_rgba(0,0,0,0.46)] sm:min-h-[480px]"
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glare }}
        />

        <div
          aria-hidden="true"
          className="absolute bottom-4 right-[-2px] top-4 w-5 rounded-r-[22px] opacity-60 blur-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(15,23,42,0.14) 55%, rgba(255,255,255,0.6))",
            transform: "translateZ(-18px)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[45%] overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 10% 110%, rgba(255,255,255,0.92), transparent 28%),
              radial-gradient(circle at 22% 98%, ${secondary}77, transparent 34%),
              radial-gradient(circle at 84% 12%, rgba(255,255,255,0.64), transparent 12%),
              linear-gradient(160deg, ${accent}, ${secondary})
            `,
          }}
        >
          <motion.div
            className="absolute -bottom-16 -left-12 h-48 w-64 rounded-[50%] bg-white/72 blur-[2px]"
            style={{
              x: shouldReduceMotion ? 0 : artworkX,
              y: shouldReduceMotion ? 0 : artworkY,
              z: shouldReduceMotion ? 0 : 28,
            }}
          />
          <motion.div
            className="absolute -bottom-8 left-6 h-40 w-16 rotate-[28deg] rounded-[50%] bg-white/58 blur-[1px]"
            style={{
              x: shouldReduceMotion ? 0 : detailX,
              y: shouldReduceMotion ? 0 : detailY,
              z: shouldReduceMotion ? 0 : 38,
            }}
          />
          <motion.div
            className="absolute -bottom-12 left-20 h-52 w-9 rotate-[-20deg] rounded-full border-[7px] border-white/72"
            style={{
              x: shouldReduceMotion ? 0 : detailX,
              y: shouldReduceMotion ? 0 : detailY,
              z: shouldReduceMotion ? 0 : 46,
            }}
          />
          <motion.div
            className="absolute -top-10 right-8 h-72 w-8 rotate-[18deg] rounded-full border-[6px] border-white/68"
            style={{
              x: shouldReduceMotion ? 0 : artworkX,
              y: shouldReduceMotion ? 0 : artworkY,
              z: shouldReduceMotion ? 0 : 32,
            }}
          />
          <motion.div
            className="absolute -top-6 right-24 h-72 w-7 rotate-[-16deg] rounded-full border-[6px] border-white/62"
            style={{
              x: shouldReduceMotion ? 0 : detailX,
              y: shouldReduceMotion ? 0 : detailY,
              z: shouldReduceMotion ? 0 : 40,
            }}
          />
          <div className="absolute right-20 top-16 size-4 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]" />
          {cardImage ? (
            <motion.div
              className="absolute inset-5 overflow-hidden rounded-[16px] bg-white/28 shadow-[0_18px_34px_rgba(15,23,42,0.2)] ring-1 ring-white/45"
              style={{
                x: shouldReduceMotion ? 0 : artworkX,
                y: shouldReduceMotion ? 0 : artworkY,
                z: shouldReduceMotion ? 0 : 62,
              }}
            >
              <Image
                src={cardImage}
                alt=""
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0)_45%,rgba(15,23,42,0.08))]" />
            </motion.div>
          ) : null}
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-10 flex h-[55%] flex-col bg-white px-7 py-7 transition-colors dark:bg-slate-950"
          style={{ transform: "translateZ(58px)" }}
        >
          <div className="flex items-center justify-between gap-3 text-xs font-semibold text-black/38 dark:text-white/42 sm:text-sm">
            <span>{label}</span>
            <span>{index}</span>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-lg font-semibold leading-none text-black/38 dark:text-white/42">
              Project {index}
            </p>
            <h2 className="text-2xl font-bold leading-tight text-[#202731] dark:text-white sm:text-[1.7rem]">
              {title}
            </h2>
            <p className="line-clamp-3 max-w-sm text-sm leading-6 text-black/58 dark:text-white/62">
              {description}
            </p>
          </div>
        </div>
      </motion.article>
    </motion.button>
  );
}
