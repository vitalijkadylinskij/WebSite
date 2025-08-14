"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/language-switcher/language-switcher";
import Image from "next/image";
import { useTranslation } from "react-i18next";

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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

export default function MetaNavbar() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/Stack_lvl_logo.png"
                alt="СТЭКЛЭВЭЛГРУПП Logo"
                width={120}
                height={60}
                className="w-26 h-15 object-contain bg-transparent"
              />
            </Link>
        </div>

        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="bg-transperent hover:cursor-pointer">
                  {t("navigation.about")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#technologies" className="bg-transperent hover:cursor-pointer">
                  {t("navigation.technologies")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#services" className="bg-transperent hover:cursor-pointer">
                  {t("navigation.services")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="bg-transperent hover:cursor-pointer">
                  {t("navigation.contact")}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
