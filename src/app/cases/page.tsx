import { CaseStudiesSection } from '@/components/case-studies-section/case-studies-section'
import caseStudies from '@/components/case-studies-section/data-cases'


export default function CasesPage() {

  return (
    <main className="bg-gray-950 min-h-screen">
      <CaseStudiesSection caseStudies={caseStudies} />
    </main>
  );
}