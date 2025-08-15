"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import logoItems from "./data-trusted-clients";
import { useTranslation } from "react-i18next";

export default function TrustedClientsSection() {
  const { t } = useTranslation()

  const rows = [
    logoItems.slice(0, 8),
    logoItems.slice(8, 16),
    logoItems.slice(16, 24),
    logoItems.slice(24, 33),
  ];

  return (
    <section className="w-full py-12 bg-transperent text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-12">
          Нам доверяют
        </h2>
      </div>
      <div className="relative w-full overflow-hidden py-6 space-y-8">
        {rows.map((rowLogos, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-nowrap min-w-max ${
              rowIndex % 2 === 0
                ? "infinite-scroll-left"
                : "infinite-scroll-right"
            }`}
          >
            {[...rowLogos, ...rowLogos].map((item, itemIndex) => (
              <div
                key={`${item.id}-${rowIndex}-${itemIndex}`}
                className="flex-shrink-0 w-[200px] h-[100px] bg-gray-50 rounded-lg flex items-center justify-center mx-4 p-4"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={150}
                  height={75}
                  style={{ width: "auto", height: "auto" }}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center mt-12">
        <Link
          href="/cases"
          prefetch={false}
          className="group inline-flex items-center text-blue-500 text-lg font-medium"
        >
          {t("trustedClients.button")}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
