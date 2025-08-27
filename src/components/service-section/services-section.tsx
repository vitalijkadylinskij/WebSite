import { useTranslations } from "next-intl";
import { servicesItems } from "./data-service";

export function ServicesSection() {
  const t = useTranslations();

  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-500">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-500">
            {t("services.subtitle")}
          </p>
        </div>

        <div
          className={`grid gap-8 ${
            servicesItems.length === 1
              ? "grid-cols-1 max-w-md mx-auto"
              : servicesItems.length === 2
                ? "md:grid-cols-2 max-w-4xl mx-auto"
                : servicesItems.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {servicesItems.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer text-center transition-colors duration-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl p-4"
            >
              <div
                className={`w-16 h-16 ${service.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg dark:shadow-black/40 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}
              >
                <span className={`${service.textColor} text-2xl transition-colors duration-300 group-hover:text-white`}>
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-500">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-500">
                {t(service.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

