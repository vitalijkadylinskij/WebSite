"use client"
import { notFound } from "next/navigation"
import Image from "next/image"
import { getCaseStudies } from "@/components/case-studies-section/data-cases";
import { useTranslation } from "react-i18next";
import { use } from "react";
import CasesPageLayout from "@/app/AppLayouts/casesPage-layout";

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const { t } = useTranslation()
  const caseStudies = getCaseStudies(t)
  const caseStudy = caseStudies.find((cs) => cs.id === resolvedParams.id)

  if (!caseStudy) {
    notFound()
  }

  return (
    <CasesPageLayout backButtonText={t("cases.backToCases")} backButtonHref="/cases" showBackButton={true}>
      <main className="min-h-screen bg-white">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Image
                src={caseStudy.companyLogo || "/placeholder.svg"}
                alt={caseStudy.companyName}
                width={40}
                height={40}
                className="mr-3 rounded-full"
                style={{ width: 'auto' }}
              />
              <span className="text-lg text-gray-600">{caseStudy.companyName}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{caseStudy.title}</h1>

            <div className="relative w-full aspect-[2/1] mb-8 rounded-lg overflow-hidden">
              <Image
                src={caseStudy.image || "/placeholder.svg"}
                priority={true}
                alt={caseStudy.title}
                width={750}
                height={450}
                style={{  width: '100%' }}
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.description}</p>
            </div>
          </div>
        </div>
      </main>
    </CasesPageLayout>
  )
}


