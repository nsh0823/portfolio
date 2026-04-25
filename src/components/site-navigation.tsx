"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FolderKanban, Home, Mail, Sparkles, User } from "lucide-react";
import { useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Skills", href: "/#skills", icon: Sparkles },
  { label: "Contact", href: "/#contact", icon: Mail },
];

const smoothTransition = {
  duration: 0.34,
  ease: [0.16, 1, 0.3, 1] as const,
};

const activeTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function SiteNavigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isCondensed, setIsCondensed] = useState(false);
  const condensedRef = useRef(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldCondense = condensedRef.current ? latest > 36 : latest > 96;

    if (shouldCondense !== condensedRef.current) {
      condensedRef.current = shouldCondense;
      setIsCondensed(shouldCondense);
    }
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      initial={{ opacity: 0, y: -18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.nav
        aria-label="Primary navigation"
        layout
        className="relative overflow-hidden rounded-full border border-white/18 bg-black/42 text-white shadow-[0_16px_50px_rgba(7,10,20,0.28)] backdrop-blur-2xl will-change-transform"
        animate={{
          padding: isCondensed ? 4 : 5,
          y: isCondensed ? -2 : 0,
          scale: isCondensed ? 0.96 : 1,
          boxShadow: isCondensed
            ? "0 14px 38px rgba(7,10,20,0.24)"
            : "0 20px 60px rgba(7,10,20,0.32)",
        }}
        transition={smoothTransition}
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.32),rgba(255,255,255,0.06)_42%,rgba(255,255,255,0.18))]" />
        <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/50" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 h-20 w-8 rotate-[20deg] rounded-full bg-white/20 blur-xl"
          animate={{
            x: isCondensed ? 92 : 278,
            opacity: isCondensed ? 0.28 : 0.56,
          }}
          transition={smoothTransition}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-1/2 size-24 -translate-y-1/2 rounded-full bg-white/16 blur-2xl"
          animate={{
            x: isCondensed ? 128 : 244,
            opacity: isCondensed ? 0.42 : 0.62,
          }}
          transition={smoothTransition}
        />

        <motion.ul
          layout
          transition={smoothTransition}
          className="relative flex items-center gap-1"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith(pathname) && pathname !== "/";

            return (
              <motion.li
                layout
                transition={smoothTransition}
                key={item.label}
                className="shrink-0"
              >
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className="group relative flex h-9 items-center justify-center rounded-full text-[13px] font-semibold text-white/64 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-y-0 rounded-full"
                    animate={{
                      left: isCondensed ? 0 : 0,
                      right: isCondensed ? 0 : 0,
                    }}
                    transition={smoothTransition}
                  />
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/16 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_8px_20px_rgba(0,0,0,0.2)]"
                      transition={activeTransition}
                    />
                  ) : null}
                  <span className="absolute inset-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
                  <motion.span
                    className="relative z-10 grid size-9 shrink-0 place-items-center"
                    animate={{
                      rotate: isCondensed ? 360 : 0,
                      scale: isCondensed ? 1.04 : 1,
                    }}
                    transition={{
                      rotate: { duration: 0.44, ease: [0.16, 1, 0.3, 1] },
                      scale: activeTransition,
                    }}
                  >
                    <Icon className="size-4" strokeWidth={2.2} />
                  </motion.span>
                  <motion.span
                    className="relative z-10 inline-block overflow-hidden whitespace-nowrap"
                    animate={{
                      maxWidth: isCondensed ? 0 : 72,
                      marginLeft: isCondensed ? 0 : -4,
                      marginRight: isCondensed ? 0 : 12,
                      opacity: isCondensed ? 0 : 1,
                      filter: isCondensed ? "blur(4px)" : "blur(0px)",
                    }}
                    transition={smoothTransition}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
}
