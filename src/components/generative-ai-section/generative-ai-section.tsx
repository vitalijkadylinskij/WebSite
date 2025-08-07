import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GenerativeAISection() {
    return (
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gray-900 text-white overflow-hidden">
            <Image
                src="/images/Generative-AI-1.png"
                alt="Abstract generative AI background"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="absolute inset-0 z-0 opacity-50"
            />

            <div className="container mx-auto px-4 md:px-6 relative items-center">
                {/* Left Column - Text and Button */}
                <div className="flex flex-col space-y-6 text-left lg:pr-12">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight max-w-[70%]">
                        Генеративный искусственный интеллект для решения бизнес-задач
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                        Разрабатываем и внедряем
                        <span className="bg-teal-600/30 text-teal-200 px-2 py-1 rounded-md whitespace-nowrap">
              AI-решения
            </span>
                        , которые повышают эффективность команд и оптимизируют затраты
                    </p>
                    <Link href="#" prefetch={false}>
                        <Button className="bg-transparent cursor-pointer border border-white text-white px-8 py-6 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300 w-fit">
                            Оставить заявку
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
