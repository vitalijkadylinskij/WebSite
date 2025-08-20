import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechnologyCardProps {
  icon: string;
  title: string;
  technologies: string[];
  bgColor: string;
  textColor: string;
}

export function TechnologyCard({ icon, title, technologies, bgColor, textColor }: TechnologyCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group bg-white dark:bg-gray-800">
      <CardContent className="p-6">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
          <span className={`${textColor} text-xl font-bold spin-once-on-hover`}>{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="dark:bg-opacity-60 dark:text-gray-200">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}



