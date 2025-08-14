export interface InnovationItem {
  id: number
  titleKey: string
  descriptionKey: string
  badgeKey: string
  badgeColor: string
}

export const innovationItems: InnovationItem[] = [
  {
    id: 1,
    titleKey: "innovation.knowledgeGeneration.title",
    descriptionKey: "innovation.knowledgeGeneration.description",
    badgeKey: "innovation.knowledgeGeneration.badge",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    titleKey: "innovation.biPlatforms.title",
    descriptionKey: "innovation.biPlatforms.description",
    badgeKey: "innovation.biPlatforms.badge",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 3,
    titleKey: "innovation.recommendationSystems.title",
    descriptionKey: "innovation.recommendationSystems.description",
    badgeKey: "innovation.recommendationSystems.badge",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: 4,
    titleKey: "innovation.agentSystems.title",
    descriptionKey: "innovation.agentSystems.description",
    badgeKey: "innovation.agentSystems.badge",
    badgeColor: "bg-orange-100 text-orange-800",
  },
]

export default innovationItems

