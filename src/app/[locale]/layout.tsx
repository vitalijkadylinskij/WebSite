import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
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
}

export const metadata: Metadata = generateSEOMetadata({
  title: "STACKLEVEL | Professional Web Solutions",
  description:
    "STACKLEVEL provides professional web development using React, TypeScript, Python, Java, PostgreSQL, MongoDB, and AI (TensorFlow, PyTorch, OpenAI). Build reliable, scalable solutions with our expert team.",
  locale: "en",
});

export default async function RootLayout({
  children,params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const jsonLd = generateStructuredData("website", {
    name: "STACKLEVEL",
    url: `https://website-bjks.onrender.com/${locale}`,
    sameAs: ["https://twitter.com/stacklevel", "https://t.me/stacklevel"],
  });
  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
    <head>
      <link rel="icon" href="/favicon.ico" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <title></title>
    </head>
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
