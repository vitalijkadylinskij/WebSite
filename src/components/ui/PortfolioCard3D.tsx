interface PortfolioCard3DProps {
  image: string
  title: string
  description: string
  technologies: Array<{ name: string; color: string }>
  gradientFrom: string
  gradientTo: string
  transform: string
  hoverTransform: string
}

export function PortfolioCard3D({
                                  image,
                                  title,
                                  description,
                                  technologies,
                                  gradientFrom,
                                  gradientTo,
                                  transform,
                                  hoverTransform,
                                }: PortfolioCard3DProps) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`relative bg-white rounded-2xl p-6 transition-all duration-700 ease-out transform-gpu ${hoverTransform}`}
        style={{
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.8),
            inset 0 1px 0 rgba(255, 255, 255, 0.9)
          `,
          transform: transform,
        }}
      >
        <div className="mb-4">
          <div
            className={`w-full h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl mb-4 relative overflow-hidden`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 water-blur-effect"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 min-h-[45px] text-sm mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className={`px-2 py-1 ${tech.color} text-xs rounded-full`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
