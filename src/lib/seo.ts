import type { Metadata } from "next";

export interface SEOMetadataProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  locale?: "ru" | "en";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
  };
}

export function generateSEOMetadata(props: SEOMetadataProps): Metadata {
  const {
    title,
    description,
    image,
    url = "https://website-bjks.onrender.com",
    locale = "ru",
    article,
  } = props;

  const seoImage = image ?? `${url}/seo-image.png`;
  const ogLocale = locale === "ru" ? "ru_RU" : "en_US";

  return {
    title: `${title} | STACKLEVEL`,
    description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${title} | STACKLEVEL`,
      description,
      url,
      type: article ? "article" : "website",
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: ogLocale,
      siteName: "STACKLEVEL",
      ...(article && {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        authors: article.authors,
        tags: article.tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | STACKLEVEL`,
      description,
      images: [seoImage],
      creator: "@stacklevel",
    },
    alternates: {
      canonical: url,
      languages: {
        ru: url.replace("/en/", "/ru/"),
        en: url.replace("/ru/", "/en/"),
      },
    },
  };
}

export function generateStructuredData(
  type: "website" | "article" | "breadcrumb" | "faq",
  data: Record<string, unknown>
): string {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type === "article"
      ? "BlogPosting"
      : type === "breadcrumb"
        ? "BreadcrumbList"
        : type === "faq"
          ? "FAQPage"
          : "WebSite",
  };

  return JSON.stringify({ ...baseSchema, ...data });
}



