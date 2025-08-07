import Link from "next/link"
import { Facebook, Instagram, X } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="w-full h-full bg-white py-12 md:py-16 lg:py-20">
            <div className="container w-full  max-w-full px-4 md:px-6 mt-12 pt-8 border-t border-gray-200 flex justify-start"></div>
                <div
                    className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-left">
                    <div className="flex flex-col space-y-6">
                        <Link href="#" className="flex items-center justify-start" prefetch={false}>
                            <div className="max-w-[48px] max-h-[24px]">
                                <Image
                                    src="/images/LogoMeta.jpg"
                                    alt="Описание моей SVG-иконки"
                                    width={24}
                                    height={24}
                                    className="w-full max-w-[24px] h-full max-h-[24px] object-cover"
                                />
                            </div>
                            <span className="pl-[10px] text-xl font-bold">Meta</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                                <Facebook className="h-6 w-6"/>
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                                <Instagram className="h-6 w-6"/>
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                                <X className="h-6 w-6"/>
                                <span className="sr-only">X (Twitter)</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Meta Store</h3>
                        <nav className="flex flex-col space-y-2 text-gray-600 text-sm">
                            <Link href="#" className="hover:underline" prefetch={false}>Ray-Ban Meta glasses</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Meta Quest</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Accessories</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Apps and games</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Meta Quest gift cards</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Refurbished Meta Quest 3</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Refurbished Meta Quest 3S</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Refurbished Ray-Ban Meta
                                glasses</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>More from Ray-Ban</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Meta Quest: Play now. Pay
                                later.</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Meta Warranty Plus</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Meta for Work</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Meta for Education</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Meta Quest referrals</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Education discount</Link>
                            <Link href="#" className="hover:underline" prefetch={false}>Blog</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Community</h3>
                            <nav className="flex flex-col space-y-2 text-gray-600 text-sm">
                                <Link href="#" className="hover:underline" prefetch={false}>Creators</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Developers</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Businesses</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Non-profits</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Download SDKs</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Made for Meta partner
                                    program</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>VR for Good</Link>
                            </nav>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Our actions</h3>
                            <nav className="flex flex-col space-y-2 text-gray-600 text-sm">
                                <Link href="#" className="hover:underline" prefetch={false}>Data and privacy</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Responsible business
                                    practices</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Elections</Link>
                            </nav>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">About us</h3>
                            <nav className="flex flex-col space-y-2 text-gray-600 text-sm">
                                <Link href="#" className="hover:underline" prefetch={false}>About Meta</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Careers</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Media gallery</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Brand resources</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>For investors</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Newsroom</Link>
                            </nav>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Site terms and policies</h3>
                            <nav className="flex flex-col space-y-2 text-gray-600 text-sm">
                                <Link href="#" className="hover:underline" prefetch={false}>Community standards</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Privacy policy</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Terms</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Cookie policy</Link>
                            </nav>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">App support</h3>
                            <nav className="flex flex-col space-y-2 text-gray-600 text-sm">
                                <Link href="#" className="hover:underline" prefetch={false}>Facebook Help Center</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Messenger Help Center</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Instagram Help Center</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>WhatsApp Help Center</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Workplace Help Center</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Meta Verified</Link>
                            </nav>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Store support and legal</h3>
                            <nav className="flex flex-col space-y-2 text-gray-600 text-sm">
                                <Link href="#" className="hover:underline" prefetch={false}>Meta Help Center</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Order status</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Returns</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Find a product demo</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Authorized retailers</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Legal</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Terms of sale</Link>
                                <Link href="#" className="hover:underline" prefetch={false}>Meta Quest safety
                                    center</Link>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container w-full max-w-full px-4 md:px-6 mt-12 pt-8 border-t border-gray-200 flex justify-start">
                    <Link href="#" className="text-gray-600 hover:underline text-sm" prefetch={false}>
                        English (US)
                    </Link>
                </div>
        </footer>
)
}
