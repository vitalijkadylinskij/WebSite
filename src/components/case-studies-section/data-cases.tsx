import type { CaseStudy } from "@/types"

export const getCaseStudies = (t: (key: string) => string): CaseStudy[] => [
  {
    id: "1",
    image: "/images/cases-image/case-review-assistant.png",
    title: t("cases.case1.title"),
    companyLogo: "/images/cases-image/logo/walmart-logo.png",
    companyName: "Walmart",
    description: t("cases.case1.description"),
  },
  {
    id: "2",
    image: "/images/cases-image/case-virtual-consultant.png",
    title: t("cases.case2.title"),
    companyLogo: "/images/cases-image/logo/carrefour-logo.png",
    companyName: "Carrefour",
    description: t("cases.case2.description"),
  },
  {
    id: "3",
    image: "/images/cases-image/case-support-agent.png",
    title: t("cases.case3.title"),
    companyLogo: "/images/cases-image/logo/ocado-logo.png",
    companyName: "Ocado",
    description: t("cases.case3.description"),
  },
  {
    id: "4",
    image: "/images/cases-image/case-erp-logistics.png",
    title: t("cases.case4.title"),
    companyLogo: "/images/cases-image/logo/target-logo.png",
    companyName: "Target",
    description: t("cases.case4.description"),
  },
  {
    id: "5",
    image: "/images/cases-image/case-employee-adaptation.png",
    title: t("cases.case5.title"),
    companyLogo: "/images/cases-image/logo/tesco-logo.png",
    companyName: "Tesco",
    description: t("cases.case5.description"),
  },
]

export default getCaseStudies
