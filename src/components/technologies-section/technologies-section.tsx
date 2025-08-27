import { useTranslations } from 'next-intl';
import technologiesItems from "./data-technologies";
import { TechnologyCard } from "@/components/ui/TechnologyCard";

export default function TechnologiesSection() {
  const t = useTranslations();

  return (
    <section id="technologies" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-white to-blue-50
                 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t("technologies_section.header")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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

