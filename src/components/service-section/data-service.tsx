export interface ServiceItem {
  id: number
  icon: string
  bgColor: string
  textColor: string
  titleKey: string
  descriptionKey: string
}

export const servicesItems: ServiceItem[] = [
  {
    id: 1,
    icon: "🏦",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    titleKey: "services.fintech.title",
    descriptionKey: "services.fintech.description",
  },
  {
    id: 2,
    icon: "⚡",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    titleKey: "services.automation.title",
    descriptionKey: "services.automation.description",
  },
  {
    id: 3,
    icon: "📊",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    titleKey: "services.analytics.title",
    descriptionKey: "services.analytics.description",
  },
  {
    id: 4,
    icon: "🤖",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
    titleKey: "services.ai.title",
    descriptionKey: "services.ai.description",
  },
]

export default servicesItems
