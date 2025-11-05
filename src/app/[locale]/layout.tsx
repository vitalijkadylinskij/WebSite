import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { ThemeProvider } from "@/components/theme-provider/theme-provider"

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
  metadataBase: new URL("https://website-bjks.onrender.com"),
  title: "STACKLEVEL | Professional Web Solutions",
  description:  "STACKLEVEL provides professional web development using React, TypeScript, Python, Java, PostgreSQL, MongoDB, and AI (TensorFlow, PyTorch, OpenAI). Build reliable, scalable solutions with our expert team.",
  keywords: [
    "web development",
    "SEO optimization",
    "digital solutions",
    "STACKLEVEL",
    "React",
    "TypeScript",
    "Python",
    "Java",
    "PostgreSQL",
    "MongoDB",
    "AI development",
    "TensorFlow",
    "PyTorch",
    "OpenAI",
    "LangChain",
  ],
  creator: "STACKLEVEL",
  generator: "Next.js",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://website-bjks.onrender.com",
    siteName: "STACKLEVEL",
    title: "STACKLEVEL | Professional Web Solutions",
    description:
      "Expert web development with React, TypeScript, Python, Java, PostgreSQL, MongoDB, and AI technologies (TensorFlow, PyTorch, OpenAI, LangChain)",
    images: ["https://website-bjks.onrender.com/seo-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "STACKLEVEL | Professional Web Solutions",
    description:
      "React, TypeScript, Python, Java, PostgreSQL, MongoDB & AI development with TensorFlow, PyTorch, OpenAI",
    images: ["https://website-bjks.onrender.com/seo-image.png"],
    creator: "@stacklevel",
  },

  other: {
    "telegram:title": "STACKLEVEL | Professional Web Solutions",
    "telegram:description":
      "Expert web development with React, TypeScript, Python, Java, PostgreSQL, MongoDB, and AI technologies",
    "telegram:image": "https://website-bjks.onrender.com/seo-image.png",
    "telegram:site": "@stacklevel",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://website-bjks.onrender.com/en",
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
  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
    <head>
      <link rel="icon" href="/favicon.ico" />
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
