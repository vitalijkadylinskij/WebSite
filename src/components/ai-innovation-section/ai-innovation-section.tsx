"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import innovationItems from "./data-ai-innovation"

export default function AIInnovationSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto text-left">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("innovation.section.title")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("innovation.section.subtitle")}</p>
        </div>

        <div
          className={`grid gap-8 ${
            innovationItems.length === 1
              ? "grid-cols-1 max-w-md mx-auto"
              : innovationItems.length === 2
                ? "md:grid-cols-2 max-w-4xl mx-auto"
                : innovationItems.length === 3
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : innovationItems.length === 4
                    ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                    : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {innovationItems.map((item) => (
            <Card key={item.id} className="border-0 shadow-lg cursor-pointer hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(item.titleKey)}</h3>
                <p className="text-gray-700 mb-4 min-h-[96px]">{t(item.descriptionKey)}</p>
                <Badge className={item.badgeColor}>{t(item.badgeKey)}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

