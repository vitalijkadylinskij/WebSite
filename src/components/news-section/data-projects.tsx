export interface ProjectItem {
  id: number
  titleKey: string // Changed from title to titleKey
  descriptionKey: string // Changed from description to descriptionKey
  categoryKey: string
  image: string
  category: string
  categoryColor: string
  href?: string
}

const projectsItems: ProjectItem[] = [
  {
    id: 1,
    titleKey: "projects_section.banking_app.title",
    descriptionKey: "projects_section.banking_app.description",
    categoryKey: "projects_section.banking_app.category",
    image: "/images/banking-app-analytics.png",
    category: "Финтех",
    categoryColor: "bg-blue-600",
    href: "@/images/banking-app-analytics.png",
  },
  {
    id: 2,
    titleKey: "projects_section.risk_management.title",
    descriptionKey: "projects_section.risk_management.description",
    categoryKey: "projects_section.risk_management.category",
    image: "/images/AI_platform_for_-forecasting.png",
    category: "Риск-менеджмент",
    categoryColor: "bg-purple-600",
    href: "/projects/risk-management",
  },
  {
    id: 3,
    titleKey: "projects_section.bi_platform.title",
    descriptionKey: "projects_section.bi_platform.description",
    categoryKey: "projects_section.bi_platform.category",
    image: "/images/bi-dashboard-ai.png",
    category: "Аналитика",
    categoryColor: "bg-green-600",
    href: "/projects/bi-platform",
  },
]

export default projectsItems
