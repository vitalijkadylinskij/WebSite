import type React from "react"
import Image from "next/image"
import Link from "next/link"
import type { CaseStudy } from "@/types"
import {useTranslations} from 'next-intl';
import { getCaseStudies } from "./data-cases"

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = () => {
  const t = useTranslations()
  const caseStudies = getCaseStudies(t)

  return (
    <section className="w-full py-12
      bg-gradient-to-r from-white to-white
      dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="container max-w-[80%] mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-left">
          {t("cases.title")}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  width={600}
                  height={200}
                  priority={false}
                  className="w-full h-75 object-cover transition-all duration-700 ease-out group-hover:scale-125 water-blur-effect"
                  style={{ width: '100%' }}
                />
                <div className="absolute inset-0
                  bg-gradient-to-t
                  from-black/80 via-black/20 to-transparent
                  dark:from-gray-900/90 dark:via-gray-800/60 dark:to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500 ease-out">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white dark:text-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                    <div className="flex w-8 h-6 items-center mb-3">
                      <Image
                        src={caseStudy.companyLogo}
                        alt={caseStudy.companyName}
                        width={20}
                        height={20}
                        className="mr-2 rounded-full"
                        style={{ width: '100%', height: '100%' }}
                      />
                      <span className="text-sm text-gray-200 dark:text-gray-300">{caseStudy.companyName}</span>
                    </div>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      <Link
                        href={`/cases/${caseStudy.id}`}
                        prefetch={false}
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                      >
                        {t("cases.details")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


