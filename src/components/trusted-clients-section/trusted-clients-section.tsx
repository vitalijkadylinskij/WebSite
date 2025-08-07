import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TrustedClientsSection() {
    const logoItems = [
        { id: 1, name: "Билайн", image: "/images/Ray-Ban.png" },
        { id: 2, name: "IDS Borjomi", image: "/images/Ray-Ban.png" },
        { id: 3, name: "Abbott", image: "/images/Ray-Ban.png" },
        { id: 4, name: "Ак Барс Банк", image: "/images/Ray-Ban.png" },
        { id: 5, name: "Альфа Банк", image: "/images/Ray-Ban.png" },
        { id: 6, name: "AQUIND", image: "/images/Ray-Ban.png" },
        { id: 7, name: "Askona", image: "/images/Ray-Ban.png" },
        { id: 8, name: "Автодор", image: "/images/Ray-Ban.png" },
        { id: 9, name: "BELKA CAR", image: "/images/Ray-Ban.png" },
        { id: 10, name: "Familia", image: "/images/Ray-Ban.png" },
        { id: 11, name: "GRASS", image: "/images/Ray-Ban.png" },
        { id: 12, name: "Henkel", image: "/images/Ray-Ban.png" },
        { id: 13, name: "hh", image: "/images/Ray-Ban.png" },
        { id: 14, name: "ИВИ", image: "/images/Ray-Ban.png" },
        { id: 15, name: "KIA", image: "/images/Ray-Ban.png" },
        { id: 16, name: "KNAUF", image: "/images/Ray-Ban.png" },
        { id: 17, name: "Merck", image: "/images/Ray-Ban.png" },
        { id: 18, name: "VIPPLAY", image: "/images/Ray-Ban.png" },
        { id: 19, name: "Ozon Travel", image: "/images/Ray-Ban.png" },
        { id: 20, name: "QIWI", image: "/images/Ray-Ban.png" },
        { id: 21, name: "Работа.ру", image: "/images/Ray-Ban.png" },
        { id: 22, name: "Ренессанс Страхование", image: "/images/Ray-Ban.png" },
        { id: 23, name: "РОСКОНГРЕСС", image: "/images/Ray-Ban.png" },
        { id: 24, name: "Совкомбанк", image: "/images/Ray-Ban.png" },
        { id: 25, name: "SKODA", image: "/images/Ray-Ban.png" },
        { id: 26, name: "Decathlon", image: "/images/Ray-Ban.png" },
        { id: 27, name: "DNS", image: "/images/Ray-Ban.png" },
        { id: 28, name: "Ozon", image: "/images/Ray-Ban.png" },
        { id: 29, name: "Мегафон", image: "/images/Ray-Ban.png" },
        { id: 30, name: "МТС", image: "/images/Ray-Ban.png" },
        { id: 31, name: "М.Видео", image: "/images/Ray-Ban.png" },
        { id: 32, name: "Кошелёк", image: "/images/Ray-Ban.png" },
        { id: 33, name: "X5 Group", image: "/images/Ray-Ban.png" },
    ]
    const rows = [
        logoItems.slice(0, 8),
        logoItems.slice(8, 16),
        logoItems.slice(16, 24),
        logoItems.slice(24, 33),
    ];

    return (
        <section className="w-full py-12 bg-[#000014] text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-12">Нам доверяют</h2>
            </div>
            <div className="relative w-full overflow-hidden py-6 space-y-8">
                {rows.map((rowLogos, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex flex-nowrap min-w-max ${
                            rowIndex % 2 === 0 ? 'infinite-scroll-left' : 'infinite-scroll-right'
                        }`}
                    >
                        {[...rowLogos, ...rowLogos].map((item, itemIndex) => (
                            <div
                                key={`${item.id}-${rowIndex}-${itemIndex}`}
                                className="flex-shrink-0 w-[200px] h-[100px] bg-[#13131E] rounded-lg flex items-center justify-center mx-4 p-4"
                            >
                                <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    width={150}
                                    height={75}
                                    style={{ objectFit: 'contain' }}
                                    className="max-w-full max-h-full"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="container mx-auto px-4 md:px-6 text-center mt-12">
                <Link href="#" prefetch={false} className="group inline-flex items-center text-[#888DFE] text-lg font-medium">
                    Читать кейсы клиентов
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    )
}
