interface ProjectCardProps {
  image: string
  title: string
  description: string
  category: string
  categoryColor: string
}

export function ProjectCard({ image, title, description, category, categoryColor }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl shadow-lg
                      bg-white dark:bg-gray-800
                      transition-colors duration-300">

        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-60 object-cover
                     transition-all duration-700 ease-out
                     group-hover:scale-125 water-blur-effect"
        />
        <div className="absolute inset-0
                        bg-gradient-to-t from-black/80 via-black/20 to-transparent
                        dark:from-gray-900/90 dark:via-gray-800/30 dark:to-transparent
                        opacity-0 group-hover:opacity-100
                        transition-all duration-500 ease-out">

          <div className="absolute bottom-0 left-0 right-0 p-6
                          text-white dark:text-gray-100
                          transform translate-y-4
                          group-hover:translate-y-0
                          transition-transform duration-500 ease-out">

            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-200 dark:text-gray-300">{description}</p>
            <div className="mt-3 opacity-0 group-hover:opacity-100
                            transition-opacity duration-700 delay-200">
              <span className={`inline-block ${categoryColor} text-white px-3 py-1 rounded-full text-xs`}>
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

