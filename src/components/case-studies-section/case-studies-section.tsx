import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ caseStudies }) => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container max-w-[80%] mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-left">
          Кейсы
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="bg-gray-300 gap-3 border-none cursor-pointer rounded-lg overflow-hidden flex flex-col py-0 group">
              <div className="relative w-full aspect-[3/1] overflow-hidden">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-lg font-semibold text-gray-600">
                  {caseStudy.title}
                </CardTitle>
                <div className="flex items-center mt-2">
                  <Image
                    src={caseStudy.companyLogo || "/placeholder.svg"}
                    alt={caseStudy.companyName}
                    width={20}
                    height={20}
                    className="mr-2 rounded-full"
                  />
                  <span className="text-sm text-gray-600">
                    {caseStudy.companyName}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <Link
                  key={caseStudy.id}
                  href={`/cases/${caseStudy.id}`}
                  prefetch={false}
                  className="inline-flex items-center text-blue-500 underline text-sm font-medium"
                >
                 <span className="inline-flex items-center text-blue-500 underline text-sm font-medium">Подробнее</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
