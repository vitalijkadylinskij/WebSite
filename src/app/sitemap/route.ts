import { NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://website-bjks.onrender.com";

const anchors = ["About", "Technologies", "Services", "Contact"];

export const GET = async () => {
  const locales = routing.locales;

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  locales.forEach((locale) => {
    const homeUrl = `${baseUrl}/${locale}`;
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${homeUrl}</loc>\n`;
    sitemap += `    <changefreq>weekly</changefreq>\n`;
    sitemap += `    <priority>1.0</priority>\n`;
    sitemap += `  </url>\n`;

    anchors.forEach((anchor) => {
      const anchorUrl = `${homeUrl}#${anchor}`;
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${anchorUrl}</loc>\n`;
      sitemap += `    <changefreq>weekly</changefreq>\n`;
      sitemap += `    <priority>0.8</priority>\n`;
      sitemap += `  </url>\n`;
    });
  });

  sitemap += `</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
};
