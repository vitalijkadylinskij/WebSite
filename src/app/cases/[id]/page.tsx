import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { caseStudies } from "@/components/case-studies-section/data-cases"

interface PageProps {
  params: {
    id: string
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = caseStudies.find((cs) => cs.id === params.id)

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-8">
          ← Назад к кейсам
        </Link>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Image
              src={caseStudy.companyLogo || "/placeholder.svg"}
              alt={caseStudy.companyName}
              width={40}
              height={40}
              className="mr-3 rounded-full"
            />
            <span className="text-lg text-gray-600">{caseStudy.companyName}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{caseStudy.title}</h1>

          <div className="relative w-full aspect-[2/1] mb-8 rounded-lg overflow-hidden">
            <Image
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.description}</p>
          </div>
        </div>
      </div>
    </main>
  )
}


