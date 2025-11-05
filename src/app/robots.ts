import { NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://website-bjks.onrender.com";

export const GET = async () => {
  const locales = routing.locales; // ['ru', 'en']
  let robotsTxt = `User-agent: *
Allow: /
Crawl-delay: 10
`;

  const noIndexPaths = ["/private", "/tmp"];
  noIndexPaths.forEach((path) => {
    robotsTxt += `Disallow: ${path}\n`;
  });

  locales.forEach((locale) => {
    robotsTxt += `Sitemap: ${baseUrl}/${locale}/sitemap.xml\n`;
  });

  robotsTxt += `
User-agent: Googlebot
Allow: /
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};
