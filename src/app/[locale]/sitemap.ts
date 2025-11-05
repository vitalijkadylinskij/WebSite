import { NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://website-bjks.onrender.com";

function isLocale(locale: string): locale is "ru" | "en" {
  return routing.locales.includes(locale as any);
}

export const GET = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params;

  if (!isLocale(locale)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const pages = ["", "about", "contact", "tech-stack", "blog/example-article"];

  const urls = pages.map(
    (page) =>
      `<url><loc>${baseUrl}/${locale}${page ? "/" + page : ""}</loc></url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
};

