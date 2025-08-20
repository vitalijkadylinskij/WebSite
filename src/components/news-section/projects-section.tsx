import projectsItems from "./data-projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useTranslations } from 'next-intl';

export default function ProjectsSection() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-bl from-white to-blue-50
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t("projects_section.header")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t("projects_section.description")}</p>
        </div>

        <div
          className={`grid gap-8 ${
            projectsItems.length === 1
              ? "grid-cols-1 max-w-md mx-auto"
              : projectsItems.length === 2
                ? "md:grid-cols-2 max-w-4xl mx-auto"
                : projectsItems.length === 3
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {projectsItems.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              category={t(project.categoryKey)}
              categoryColor={project.categoryColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


