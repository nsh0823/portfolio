"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type ParallaxAvatarProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  initialDelay?: number;
  entrance?: "default" | "hero";
};

export function ParallaxAvatar({
  src,
  alt,
  width = 1024,
  height = 1536,
  priority = false,
  className = "",
  imageClassName = "",
  initialDelay = 0,
  entrance = "default",
}: ParallaxAvatarProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, {
    stiffness: 160,
    damping: 22,
    mass: 0.38,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 160,
    damping: 22,
    mass: 0.38,
  });

  const rotateX = useTransform(smoothY, [-1, 1], [7, -7]);
  const rotateY = useTransform(smoothX, [-1, 1], [-9, 9]);
  const imageX = useTransform(smoothX, [-1, 1], [-16, 16]);
  const imageY = useTransform(smoothY, [-1, 1], [-12, 12]);
  const shadowX = useTransform(smoothX, [-1, 1], [18, -18]);
  const shadowY = useTransform(smoothY, [-1, 1], [16, -16]);

  const updatePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    pointerX.set(x * 2 - 1);
    pointerY.set(y * 2 - 1);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePointer(event);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    updatePointer(event);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    resetPointer();
  };

  const isHeroEntrance = entrance === "hero";

  return (
    <motion.div
      className={`group relative touch-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      initial={
        isHeroEntrance
          ? {
              opacity: 0,
              scale: 0.72,
              y: 56,
              rotate: -8,
              filter: "blur(14px) saturate(0.7)",
            }
          : { opacity: 0, scale: 0.92, y: 24 }
      }
      whileInView={
        isHeroEntrance
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: 0,
              filter: "blur(0px) saturate(1)",
            }
          : { opacity: 1, scale: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        type: isHeroEntrance ? "spring" : "tween",
        duration: isHeroEntrance ? 1.05 : 0.72,
        delay: initialDelay,
        bounce: isHeroEntrance ? 0.28 : 0,
        ease: isHeroEntrance ? undefined : [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1000 }}
    >
      {isHeroEntrance ? (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute inset-[12%] rounded-[50%] border border-white/70"
            initial={{ opacity: 0, scale: 0.72 }}
            whileInView={{ opacity: [0, 0.72, 0], scale: [0.72, 1.16, 1.42] }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1.28,
              delay: initialDelay + 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute inset-[20%] rounded-[50%] bg-[radial-gradient(circle,rgba(244,211,94,0.3),transparent_66%)] blur-xl"
            initial={{ opacity: 0, scale: 0.48 }}
            whileInView={{ opacity: [0, 0.9, 0.26], scale: [0.48, 1.18, 1] }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1.05,
              delay: initialDelay + 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </>
      ) : null}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-8 bottom-8 h-20 rounded-[50%] bg-black/14 blur-2xl"
        style={{
          x: shouldReduceMotion ? 0 : shadowX,
          y: shouldReduceMotion ? 0 : shadowY,
        }}
      />
      <motion.div
        className="relative"
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="relative z-10"
          style={{
            x: shouldReduceMotion ? 0 : imageX,
            y: shouldReduceMotion ? 0 : imageY,
            z: shouldReduceMotion ? 0 : 52,
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={`h-auto w-full object-contain drop-shadow-[0_28px_36px_rgba(15,23,42,0.18)] transition-transform duration-300 group-hover:scale-[1.02] ${imageClassName}`}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
