import type { Metadata } from "next";
import { LanguageToggle } from "@/components/language-toggle";
import { LocaleProvider } from "@/components/locale-context";
import { SiteNavigation } from "@/components/site-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peter Nam",
  description: "Selected portfolio projects with interactive motion cards.",
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
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  document.documentElement.classList.toggle("dark", theme ? theme === "dark" : prefersDark);
                } catch {}
              })();
            `,
          }}
        />
        <LocaleProvider>
          <SiteNavigation />
          <LanguageToggle />
          {children}
          <ThemeToggle />
        </LocaleProvider>
      </body>
    </html>
  );
}
