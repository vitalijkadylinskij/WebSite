import { NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://website-bjks.onrender.com";

export const GET = async () => {
  const locales = routing.locales;

  let robotsTxt = `# robots.txt for STACKLEVEL
# Generated dynamically
User-agent: *
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
Crawl-delay: 5
`;

  robotsTxt += `\nHost: ${baseUrl}\n`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};
