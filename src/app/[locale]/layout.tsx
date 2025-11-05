import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { generateStructuredData, generateSEOMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
                                           children,
                                           params,
                                         }: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const seoDescription = locale === "ru"
    ? "STACKLEVEL предоставляет профессиональную разработку веб-приложений с использованием React, TypeScript, Python, Java, PostgreSQL, MongoDB и AI."
    : "STACKLEVEL provides professional web development using React, TypeScript, Python, Java, PostgreSQL, MongoDB, and AI.";

  const seoTitle = locale === "ru"
    ? "STACKLEVEL | Профессиональные веб-решения"
    : "STACKLEVEL | Professional Web Solutions";

  const metadata: Metadata = generateSEOMetadata({
    title: seoTitle,
    description: seoDescription,
    url: `https://website-bjks.onrender.com/${locale}`,
  });

  const jsonLd = generateStructuredData("website", {
    name: "STACKLEVEL",
    url: `https://website-bjks.onrender.com/${locale}`,
    sameAs: ["https://twitter.com/stacklevel", "https://t.me/stacklevel"],
  });
  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
