import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Arianna Pérez Rodríguez — Desarrolladora Frontend",
  description:
    "Portfolio de Arianna Pérez Rodríguez, desarrolladora frontend especializada en React, Next.js, Vue, Nuxt, TypeScript y analítica web con GA4.",
  keywords: [
    "Arianna Pérez",
    "portfolio",
    "frontend developer",
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "TypeScript",
    "Tailwind CSS",
    "GA4",
  ],
  metadataBase: new URL("https://arianna9912.github.io/portfolio-arianna/"),
  openGraph: {
    title: "Arianna Pérez — Desarrolladora Frontend",
    description: "Interfaces construidas como sistemas: React, Vue, Next, Nuxt y GA4.",
    url: "https://arianna9912.github.io/portfolio-arianna/",
    siteName: "Arianna Pérez Portfolio",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg text-text">
        <GoogleAnalytics />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}