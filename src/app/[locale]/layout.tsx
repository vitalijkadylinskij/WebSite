import type { Metadata, Viewport } from "next";
import fs from "fs";
import path from "path";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { generateSEOMetadata, generateStructuredData } from "@/lib/seo";

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



export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messagesPath = path.join(process.cwd(), "messages", `${locale}.json`);
  const messages = JSON.parse(fs.readFileSync(messagesPath, "utf-8"));

  const seoImage = "https://website-bjks.onrender.com/og-image.png";

  return generateSEOMetadata({
    title: messages.seo.title,
    description: messages.seo.description,
    locale: locale as "ru" | "en",
    image: seoImage,
    url: `https://website-bjks.onrender.com/${locale}`,
  });
}


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
