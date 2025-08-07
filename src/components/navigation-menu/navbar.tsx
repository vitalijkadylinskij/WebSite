"use client"

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { User, ShoppingBag } from "lucide-react"

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className,
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    },
)
ListItem.displayName = "ListItem"

export default function MetaNavbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center space-x-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-infinity"
                        >
                            <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
                        </svg>
                        <span>Meta</span>
                    </Link>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transperent hover:cursor-pointer font-normal">AI glasses</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[600px] lg:w-[full] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/ai-glasses"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">AI Glasses Overview</div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Explore the future of augmented reality eyewear.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/ai-glasses/features" title="Features">
                                            Discover the cutting-edge capabilities.
                                        </ListItem>
                                        <ListItem href="/ai-glasses/models" title="Models">
                                            Compare different models and specifications.
                                        </ListItem>
                                        <ListItem href="/ai-glasses/developers" title="For Developers">
                                            Build apps for AI glasses.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transperent hover:cursor-pointer font-normal">Meta Quest</NavigationMenuTrigger>
                                <NavigationMenuContent className="w-100%">
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[full] ">
                                        <ListItem href="/meta-quest/quest-3" title="Quest 3">
                                            Our latest VR headset.
                                        </ListItem>
                                        <ListItem href="/meta-quest/quest-2" title="Quest 2">
                                            The popular all-in-one VR.
                                        </ListItem>
                                        <ListItem href="/meta-quest/games" title="VR Games">
                                            Immersive gaming experiences.
                                        </ListItem>
                                        <ListItem href="/meta-quest/apps" title="VR Apps">
                                            Productivity, fitness, and more.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transperent hover:cursor-pointer font-normal">Apps and games</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[600px] ">
                                        <ListItem href="/apps-games/popular" title="Popular Apps">
                                            Top-rated applications.
                                        </ListItem>
                                        <ListItem href="/apps-games/new-releases" title="New Releases">
                                            Latest games and apps.
                                        </ListItem>
                                        <ListItem href="/apps-games/categories" title="Categories">
                                            Browse by genre or type.
                                        </ListItem>
                                        <ListItem href="/apps-games/developers" title="Developer Tools">
                                            Resources for creators.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center space-x-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem >
                                <NavigationMenuLink className="bg-transperent hover:cursor-pointer" >Explore Meta</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="bg-transperent hover:cursor-pointer">Support</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link href="/profile" className="text-gray-700 hover:text-gray-900">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Profile</span>
                    </Link>
                    <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Cart</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

