"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const criticalImages = [
  { src: "/images/avatars/tennis.png", width: 828 },
  { src: "/images/screenshots/portfolio_screenshot.png", width: 640 },
  { src: "/images/screenshots/funda_screenshot.png", width: 640 },
  { src: "/images/screenshots/onego_screenshot.png", width: 640 },
  { src: "/images/screenshots/instaquote_screenshot.png", width: 640 },
] as const;

const backgroundImages = [
  { src: "/images/avatars/coffee.png", width: 640 },
  { src: "/images/avatars/violin.png", width: 828 },
  { src: "/images/avatars/programming.png", width: 828 },
  { src: "/images/screenshots/portfolio_home.png", width: 1200 },
  { src: "/images/screenshots/portfolio_projects.png", width: 1200 },
  { src: "/images/screenshots/portfolio_about.png", width: 1200 },
  { src: "/images/screenshots/portfolio_skills.png", width: 1200 },
  { src: "/images/screenshots/funda_1.png", width: 1200 },
  { src: "/images/screenshots/funda_2.png", width: 1200 },
  { src: "/images/screenshots/funda_3.png", width: 1200 },
  { src: "/images/screenshots/funda_4.png", width: 1200 },
  { src: "/images/screenshots/funda_5.png", width: 1200 },
  { src: "/images/screenshots/funda_6.png", width: 1200 },
  { src: "/images/screenshots/onego_main.png", width: 1200 },
  { src: "/images/screenshots/onego_login.png", width: 1200 },
  { src: "/images/screenshots/onego_search.png", width: 1200 },
  { src: "/images/screenshots/onego_bloglist.png", width: 1200 },
  { src: "/images/screenshots/onego_blogpost.png", width: 1200 },
  { src: "/images/screenshots/onego_writer.png", width: 1200 },
  { src: "/images/screenshots/onego_writer_dark.png", width: 1200 },
  { src: "/images/screenshots/onego_profile.png", width: 1200 },
  { src: "/images/screenshots/insta_dashboard.png", width: 1200 },
  { src: "/images/screenshots/insta_createrfq.png", width: 1200 },
  { src: "/images/screenshots/insta_rfqlist.png", width: 1200 },
  { src: "/images/screenshots/insta_rfqsummary.png", width: 1200 },
] as const;

const MINIMUM_DISPLAY_TIME = 900;
const IMAGE_TIMEOUT = 8000;

const InitialLoadContext = createContext(true);

export function useInitialLoadReady() {
  return useContext(InitialLoadContext);
}

function optimizedImageUrl(src: string, width: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new window.Image();
    let didFinish = false;

    const finish = () => {
      if (didFinish) {
        return;
      }

      didFinish = true;
      resolve();
    };

    const timeout = window.setTimeout(finish, IMAGE_TIMEOUT);

    image.onload = () => {
      window.clearTimeout(timeout);
      if ("decode" in image) {
        image.decode().then(finish).catch(finish);
        return;
      }
      finish();
    };
    image.onerror = () => {
      window.clearTimeout(timeout);
      finish();
    };
    image.src = src;
  });
}

function preloadImagesInBackground(images: readonly { src: string; width: number }[]) {
  let imageIndex = 0;

  const loadNextBatch = () => {
    const batch = images.slice(imageIndex, imageIndex + 2);
    imageIndex += batch.length;

    if (!batch.length) {
      return;
    }

    Promise.all(
      batch.map((image) => preloadImage(optimizedImageUrl(image.src, image.width))),
    ).then(() => {
      window.setTimeout(loadNextBatch, 160);
    });
  };

  const requestIdle = window.requestIdleCallback as
    | typeof window.requestIdleCallback
    | undefined;

  if (requestIdle) {
    requestIdle(loadNextBatch, { timeout: 1800 });
    return;
  }

  globalThis.setTimeout(loadNextBatch, 600);
}

type InitialImageLoaderProps = {
  children: ReactNode;
};

export function InitialImageLoader({ children }: InitialImageLoaderProps) {
  const [isReady, setIsReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const criticalUrls = useMemo(
    () => criticalImages.map((image) => optimizedImageUrl(image.src, image.width)),
    [],
  );
  const progress = Math.max(0.12, loadedCount / criticalUrls.length);

  useEffect(() => {
    let isMounted = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const minimumDelay = new Promise((resolve) => {
      window.setTimeout(resolve, MINIMUM_DISPLAY_TIME);
    });

    const criticalLoad = Promise.all(
      criticalUrls.map((src) =>
        preloadImage(src).then(() => {
          if (isMounted) {
            setLoadedCount((count) => count + 1);
          }
        }),
      ),
    );

    Promise.all([criticalLoad, minimumDelay]).then(() => {
      if (!isMounted) {
        return;
      }

      setIsReady(true);
      document.body.style.overflow = previousOverflow;

      preloadImagesInBackground(backgroundImages);
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = previousOverflow;
    };
  }, [criticalUrls]);

  return (
    <InitialLoadContext.Provider value={isReady}>
      {children}
      <AnimatePresence>
        {!isReady ? (
          <motion.div
            role="status"
            aria-label="Loading portfolio"
            className="fixed inset-0 z-[200] grid place-items-center bg-[#f8fbfb] text-black dark:bg-[#050816] dark:text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative grid place-items-center">
              <motion.div
                aria-hidden="true"
                className="absolute size-48 rounded-full border border-[#0f766e]/18 dark:border-white/14"
                animate={{ scale: [0.82, 1.18, 0.82], opacity: [0.35, 0.9, 0.35] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute size-36 rounded-full bg-[#f4d35e]/24 blur-2xl dark:bg-[#14b8a6]/18"
                animate={{ scale: [1, 1.24, 1], rotate: [0, 18, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="relative [perspective:900px]"
                animate={{
                  rotateY: [-18, 18, -18],
                  rotateX: [5, -5, 5],
                  y: [0, -6, 0],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/logo_portfolio.png"
                  alt="Peter Nam portfolio logo"
                  width={118}
                  height={118}
                  priority
                  unoptimized
                  className="h-auto w-[118px] drop-shadow-[0_18px_34px_rgba(15,23,42,0.18)] dark:drop-shadow-[0_18px_34px_rgba(0,0,0,0.42)]"
                />
              </motion.div>
              <div className="mt-12 h-1 w-44 overflow-hidden rounded-full bg-black/8 dark:bg-white/12">
                <motion.div
                  className="h-full rounded-full bg-[#0f766e] dark:bg-[#f4d35e]"
                  initial={{ width: "12%" }}
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </InitialLoadContext.Provider>
  );
}
