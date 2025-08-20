import * as React from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/language-switcher/language-switcher";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-switcher/mode-switcher";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            "bg-transparent",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function MainNavbar() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm
                       dark:border-gray-700 dark:bg-gray-900/80 transition-colors duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Lighte Logo"
              width={120}
              height={60}
              className="w-26 h-15 object-contain bg-transparent block dark:hidden"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/images/logo_for_dark_mode.svg"
              alt="Dark Logo"
              width={120}
              height={60}
              className="w-26 h-15 object-contain bg-transparent hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="hover:cursor-pointer text-gray-700 dark:text-gray-200 hover:text-primary"
                >
                  {t("navigation.about")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#technologies"
                  className="hover:cursor-pointer text-gray-700 dark:text-gray-200 hover:text-primary"
                >
                  {t("navigation.technologies")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#services"
                  className="hover:cursor-pointer text-gray-700 dark:text-gray-200 hover:text-primary"
                >
                  {t("navigation.services")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="hover:cursor-pointer text-gray-700 dark:text-gray-200 hover:text-primary"
                >
                  {t("navigation.contact")}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

