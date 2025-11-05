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

export const metadata: Metadata = {
  title: "STACKLEVEL | Professional Web Solutions",
  description:
    "STACKLEVEL provides professional web development using React, TypeScript, Python, Java, PostgreSQL, MongoDB, and AI.",
  openGraph: {
    title: "STACKLEVEL | Professional Web Solutions",
    description:
      "STACKLEVEL provides professional web development using React, TypeScript, Python, Java, PostgreSQL, MongoDB, and AI.",
    url: "https://website-bjks.onrender.com/",
    siteName: "STACKLEVEL",
    images: [
      {
        url: "https://website-bjks.onrender.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "STACKLEVEL",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@stacklevel",
    title: "STACKLEVEL | Professional Web Solutions",
    description:
      "STACKLEVEL provides professional web development using React, TypeScript, Python, Java, PostgreSQL, MongoDB, and AI.",
    images: ["https://website-bjks.onrender.com/og-image.png"],
  },
};


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
