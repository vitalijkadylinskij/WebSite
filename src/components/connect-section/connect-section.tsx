import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export default function ConnectSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
                    <div className="w-full max-w-175">
                        <h2 className="text-4xl tracking-tighter sm:text-5xl">Connect in new ways
                            with our products</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button className=" bg-[#007bff] hover:bg-[#0056b3] text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg cursor-pointer">
                            Explore our technologies
                        </Button>
                        <Link href="#" className="inline-flex items-center text-black-600 text-lg font-medium" prefetch={false}>
                            <ArrowRight className="mx-2 h-6 w-6 border rounded-full" />
                            Go to Help Center
                        </Link>
                    </div>
                </div>
                <div className="w-full max-w-full aspect-[3/2] relative overflow-hidden">
                    <Image
                        src="/images/Technology.png"
                        alt="Connect in new ways with our products"
                        width={1800}
                        height={100}
                        style={{ objectFit: 'cover' }}
                        className="w-full aspect-[3/2] rounded-xl h-full max-h-3/5"
                    />
                </div>
            </div>
        </section>
    )
}
