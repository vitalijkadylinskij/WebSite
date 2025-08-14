export interface PortfolioItem {
  id: number
  titleKey: string
  descriptionKey: string
  image: string
  technologies: Array<{
    name: string
    color: string
  }>
  gradientFrom: string
  gradientTo: string
  transform: string
  hoverTransform: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    titleKey: "portfolio_section.banking.title",
    descriptionKey: "portfolio_section.banking.description",
    image: "/images/banking-app-analytics.png",
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Python", color: "bg-purple-100 text-purple-800" },
      { name: "AI/ML", color: "bg-green-100 text-green-800" },
    ],
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-600",
    transform: "rotateX(5deg) rotateY(-5deg)",
    hoverTransform: "hover:scale-105 hover:-rotate-2 hover:translate-y-[-20px]",
  },
  {
    id: 2,
    titleKey: "portfolio_section.risk.title",
    descriptionKey: "portfolio_section.risk.description",
    image: "/images/AI_platform_for_-forecasting.png",
    technologies: [
      { name: "TensorFlow", color: "bg-purple-100 text-purple-800" },
      { name: "Java", color: "bg-orange-100 text-orange-800" },
      { name: "Risk AI", color: "bg-red-100 text-red-800" },
    ],
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-600",
    transform: "rotateX(-3deg) rotateY(8deg)",
    hoverTransform: "hover:scale-105 hover:rotate-1 hover:translate-y-[-15px]",
  },
  {
    id: 3,
    titleKey: "portfolio_section.bi.title",
    descriptionKey: "portfolio_section.bi.description",
    image: "/images/bi-dashboard-ai.png",
    technologies: [
      { name: "PostgreSQL", color: "bg-green-100 text-green-800" },
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "LLM", color: "bg-yellow-100 text-yellow-800" },
    ],
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-600",
    transform: "rotateX(8deg) rotateY(-3deg)",
    hoverTransform: "hover:scale-105 hover:-rotate-1 hover:translate-y-[-25px]",
  },
]

export default portfolioItems
