import type { Metadata } from "next";
import { SiteNavigation } from "@/components/site-navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peter Nam | Projects",
  description: "Selected portfolio projects with interactive motion cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteNavigation />
        {children}
      </body>
    </html>
  );
}
