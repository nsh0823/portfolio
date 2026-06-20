import type { Metadata } from "next";
import { HapticFeedback } from "@/components/layout/haptic-feedback";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { InitialImageLoader } from "@/components/layout/initial-image-loader";
import { LocaleProvider } from "@/components/locale-context";
import { SiteNavigation } from "@/components/layout/site-navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Analytics } from "@vercel/analytics/next";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peter Nam",
  description:
    "Portfolio covering AI automation, workflow optimization, and practical full-stack web tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const theme = localStorage.getItem("portfolio-theme");
                  const locale = localStorage.getItem("portfolio-locale");
                  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
                  const systemLocale = languages.some((language) => language.toLowerCase().startsWith("ko")) ? "kr" : "en";
                  const resolvedLocale = locale === "kr" || locale === "en" ? locale : systemLocale;
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  document.documentElement.classList.toggle("dark", theme ? theme === "dark" : prefersDark);
                  document.documentElement.lang = resolvedLocale === "kr" ? "ko" : "en";
                } catch {}
              })();
            `,
          }}
        />
        <InitialImageLoader>
          <LocaleProvider>
            <HapticFeedback />
            <SiteNavigation />
            <LanguageToggle />
            {children}
            <ThemeToggle />
            <Analytics />
          </LocaleProvider>
        </InitialImageLoader>
      </body>
    </html>
  );
}
