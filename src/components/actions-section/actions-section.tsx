import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ActionsSection() {
    const actionItems = [
        {
            id: 1,
            image: "/images/VR.png",
            title: "Safety and expression",
            description: "Protecting your voice and helping you connect and share safely",
            href: "#", // Замените на реальную ссылку
        },
        {
            id: 2,
            image: "/images/VR.png",
            title: "Data and privacy",
            description: "Giving you control over your privacy and protecting your information",
            href: "#", // Замените на реальную ссылку
        },
        {
            id: 3,
            image: "/images/VR.png",
            title: "Responsible innovation",
            description: "Building for the future with privacy and safety in mind",
            href: "#", // Замените на реальную ссылку
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12">
                <div className="flex flex-col space-y-6 lg:pr-12 items-start max-w-5xl">
                    <h2 className="text-4xl md:text-5xl text-left w-full">
                        Stay informed about our actions
                    </h2>
                    <p className="text-lg text-gray-600 text-left">
                        We're committed to helping keep people safe and making a positive impact.
                    </p>
                    <Link href="#" prefetch={false}>
                        <Button className="bg-[#007bff] hover:bg-[#0056b3] text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg w-fit cursor-pointer">
                            Learn more
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-col space-y-6 items-left justify-left">
                    {actionItems.map((item) => (
                        <Link key={item.id} href={item.href} prefetch={false} className="group">
                            <div className="flex items-center gap-6 py-4 px-6 bg-gray-50 rounded-xl cursor-pointer">
                                <div
                                    className="flex-shrink-0 relative w-[123px] h-[123px] max-w-[123px] max-h-[123px]">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        fill
                                        style={{objectFit: 'cover'}}
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 mt-1">{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
