import type { Metadata } from "next"

export interface SEOMetadataProps {
  title: string
  description: string
  image?: string
  url?: string
  article?: {
    publishedTime?: string
    modifiedTime?: string
    authors?: string[]
    tags?: string[]
  }
}

export function generateSEOMetadata(props: SEOMetadataProps): Metadata {
  const {
    title,
    description,
    image = "/seo-image.png",
    url = "https://website-bjks.onrender.com",
    article,
  } = props

  return {
    title: `${title} | STACKLEVEL`,
    description,
    openGraph: {
      title: `${title} | STACKLEVEL`,
      description,
      url,
      type: article ? "article" : "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
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
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateTechStackMetadata(title: string, technologies: string[], description: string): Metadata {
  const techString = technologies.join(", ")
  const fullDescription = `${description}. Technologies: ${techString}`

  return generateSEOMetadata({
    title,
    description: fullDescription,
    url: `https://website-bjks.onrender.com/${title.toLowerCase().replace(/\s+/g, "-")}`,
  })
}

export function generateStructuredData(type: "article" | "breadcrumb" | "faq", data: Record<string, unknown>): string {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "BlogPosting" : type === "breadcrumb" ? "BreadcrumbList" : "FAQPage",
  }

  return JSON.stringify({ ...baseSchema, ...data })
}
