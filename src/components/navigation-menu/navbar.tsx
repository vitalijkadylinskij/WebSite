import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function NaviBar() {
    return (
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Al glasses</NavigationMenuTrigger>
                        <NavigationMenuTrigger>Meta Quest</NavigationMenuTrigger>
                        <NavigationMenuTrigger>Apps and games</NavigationMenuTrigger>
                        <NavigationMenuTrigger>Explore Meta</NavigationMenuTrigger>
                        <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
    );
}