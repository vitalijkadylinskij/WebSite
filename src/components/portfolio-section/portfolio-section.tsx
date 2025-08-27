import { Button } from "@/components/ui/button"
import {useTranslations} from 'next-intl';
import { portfolioItems } from "./data-portfolio"
import { PortfolioCard3D } from "@/components/ui/PortfolioCard3D";

export default function PortfolioSection() {
  const t = useTranslations()

  return (
    <section className="py-20 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t("portfolio_section.title")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t("portfolio_section.subtitle")}</p>
        </div>

        <div className="relative" style={{ perspective: "1200px" }}>
          <div
            className={`grid gap-8 relative ${
              portfolioItems.length === 1
                ? "grid-cols-1 max-w-md mx-auto"
                : portfolioItems.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                  : portfolioItems.length === 3
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            {portfolioItems.map((item) => (
              <PortfolioCard3D
                key={item.id}
                image={item.image}
                title={t(item.titleKey)}
                description={t(item.descriptionKey)}
                technologies={item.technologies}
                gradientFrom={item.gradientFrom}
                gradientTo={item.gradientTo}
                transform={item.transform}
                hoverTransform={item.hoverTransform}
              />
            ))}
          </div>

          <div className="absolute top-10 right-10 opacity-20 dark:opacity-10">
            <div
              className="w-32 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-2xl transform rotate-12"
              style={{
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                transform: "rotateX(45deg) rotateY(15deg) rotateZ(12deg)",
              }}
            ></div>
          </div>

          <div className="absolute bottom-20 left-10 opacity-15 dark:opacity-10">
            <div
              className="w-24 h-32 bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800 rounded-lg opacity-20 blur-3xl"
              style={{
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transform: "rotateX(-30deg) rotateY(-20deg) rotateZ(-6deg)",
              }}
            ></div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 cursor-pointer to-purple-600 dark:from-blue-700 dark:to-purple-700 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t("portfolio_section.viewAll")}
          </Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200 dark:bg-blue-800 rounded-full opacity-15 dark:opacity-10 blur-3xl"></div>
      </div>
    </section>
  )
}


