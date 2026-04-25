"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FolderKanban, Home, Mail, Sparkles, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/#about", icon: User },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Skills", href: "/#skills", icon: Sparkles },
  { label: "Contact", href: "/#contact", icon: Mail },
];

export function SiteNavigation() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isCondensed, setIsCondensed] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCondensed(latest > 84);
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
        className="relative overflow-hidden rounded-full border border-white/18 bg-black/42 p-1 text-white shadow-[0_16px_50px_rgba(7,10,20,0.28)] backdrop-blur-2xl"
        animate={{
          padding: isCondensed ? 4 : 5,
          boxShadow: isCondensed
            ? "0 14px 38px rgba(7,10,20,0.24)"
            : "0 20px 60px rgba(7,10,20,0.32)",
        }}
        transition={{ type: "spring", stiffness: 360, damping: 32 }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.32),rgba(255,255,255,0.06)_42%,rgba(255,255,255,0.18))]" />
        <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/50" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-1/2 size-24 -translate-y-1/2 rounded-full bg-white/16 blur-2xl"
          animate={{ x: isCondensed ? 128 : 244, opacity: isCondensed ? 0.42 : 0.62 }}
          transition={{ type: "spring", stiffness: 120, damping: 26 }}
        />

        <motion.ul layout className="relative flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith(pathname) && pathname !== "/";

            return (
              <motion.li layout key={item.label} className="shrink-0">
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className="group relative flex h-9 items-center justify-center gap-2 rounded-full px-3 text-[13px] font-semibold text-white/64 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/16 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_8px_20px_rgba(0,0,0,0.2)]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <Icon className="relative z-10 size-4" strokeWidth={2.2} />
                  <AnimatePresence initial={false}>
                    {!isCondensed ? (
                      <motion.span
                        key="label"
                        className="relative z-10 overflow-hidden whitespace-nowrap"
                        initial={{ width: 0, opacity: 0, filter: "blur(6px)" }}
                        animate={{ width: "auto", opacity: 1, filter: "blur(0px)" }}
                        exit={{ width: 0, opacity: 0, filter: "blur(6px)" }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {item.label}
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
}
