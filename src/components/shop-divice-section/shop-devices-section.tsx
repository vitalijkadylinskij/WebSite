"use client";
import { useTranslation } from "react-i18next";

export default function ShopDevicesSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("shop_devices_section.header")}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t("shop_devices_section.foundation_information")}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
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
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flip-back">
                  <img
                    src="/images/ai-financial-office.png"
                    alt="AI Dashboard Analytics"
                    className="w-full h-full object-cover rounded-2xl"
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
