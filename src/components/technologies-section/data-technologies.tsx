
export interface TechnologyItem {
  id: number
  icon: string
  titleKey: string
  technologies: string[]
  bgColor: string
  textColor: string
}

const technologiesItems: TechnologyItem[] = [
  {
    id: 1,
    icon: "BE",
    titleKey: "technologies_section.backend.title",
    technologies: ["Python", "Java", "PHP7", "Symfony"],
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    id: 2,
    icon: "FE",
    titleKey: "technologies_section.frontend.title",
    technologies: ["React.js", "JavaScript", "TypeScript"],
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    id: 3,
    icon: "DB",
    titleKey: "technologies_section.database.title",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Kafka"],
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    id: 4,
    icon: "AI",
    titleKey: "technologies_section.ai.title",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
  },
]

export default technologiesItems
