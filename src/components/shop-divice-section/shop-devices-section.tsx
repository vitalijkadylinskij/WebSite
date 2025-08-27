import { useTranslations } from "next-intl";

export default function ShopDevicesSection() {
  const t = useTranslations();

  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32
                 text-gray-900 dark:text-white
                 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {t("shop_devices_section.header")}
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              {t("shop_devices_section.foundation_information")}
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t("shop_devices_section.information_about_specialization")}
            </p>
          </div>

          <div className="relative">
            <div className="flip-container w-full h-80 rounded-2xl cursor-pointer">
              <div className="flip-inner">
                <div className="flip-front">
                  <img
                    src="/images/Technology.png"
                    alt="AI Technology Office"
                    className="w-full h-full object-cover rounded-2xl shadow-lg dark:shadow-gray-800"
                  />
                </div>
                <div className="flip-back">
                  <img
                    src="/images/ai-financial-office.png"
                    alt="AI Dashboard Analytics"
                    className="w-full h-full object-cover rounded-2xl shadow-lg dark:shadow-gray-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


