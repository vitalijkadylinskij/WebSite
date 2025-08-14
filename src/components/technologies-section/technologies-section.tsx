"use client";

import { useTranslation } from "react-i18next";
import technologiesItems from "./data-technologies";
import { TechnologyCard } from "@/components/ui/TechnologyCard";

export default function TechnologiesSection() {
  const { t } = useTranslation();

  return (
    <section id="technologies" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("technologies_section.header")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("technologies_section.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left cursor-pointer">
          {technologiesItems.map((item) => (
            <TechnologyCard
              key={item.id}
              icon={item.icon}
              title={t(item.titleKey)}
              technologies={item.technologies}
              bgColor={item.bgColor}
              textColor={item.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}