"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function IntroMotionCard() {
  const openDocs = () => {
    window.open("https://nextjs.org/docs", "_blank", "noreferrer");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="space-y-8 rounded-lg border bg-card p-8 shadow-sm"
    >
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Next.js + Tailwind CSS + shadcn/ui + Framer Motion
        </p>
        <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
          Portfolio starter
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          The app is ready for building pages with the App Router, Tailwind CSS
          v4 styling, shadcn/ui components, and Framer Motion animations.
        </p>
      </div>
      <Button onClick={openDocs}>
        Open Next.js docs
      </Button>
    </motion.section>
  );
}
