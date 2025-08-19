import { CaseStudiesSection } from '@/components/case-studies-section/case-studies-section'
import CasesPageLayout from "@/app/AppLayouts/casesPage-layout";
import {useTranslations} from 'next-intl';
import getCaseStudies from "@/components/case-studies-section/data-cases";


export default function CasesPage() {
  const t = useTranslations()

  return (
    <CasesPageLayout backButtonText={t("cases.backToHome")} backButtonHref="/" showBackButton={true}>
      <main className="bg-gray-950 min-h-screen">
        <CaseStudiesSection caseStudies={getCaseStudies(t)} />
      </main>
    </CasesPageLayout>
  );
}