import Image from "next/image";
import {useTranslations} from 'next-intl';

export default function GenerativeAISection() {
  const t = useTranslations();
  return (
    <section className="relative w-full lg:min-h-[650px] py-20 md:py-32 lg:py-40 bg-gray-900 text-white overflow-hidden">
      <Image
        src="/images/unnamed.jpg"
        alt="Abstract generative AI background"
        fill
        priority={true}
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="absolute inset-0 z-0 opacity-70"
      />

      <div className="container mx-auto px-4 md:px-6 relative items-center">
        <div className="flex flex-col space-y-6 text-left lg:pr-12">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight max-w-[60%]">
            {t("generative_ai_section.header")}
          </h2>
          <p className="text-lg min-h-[85px] md:text-xl text-gray-300 max-w-lg">
            {t("generative_ai_section.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
