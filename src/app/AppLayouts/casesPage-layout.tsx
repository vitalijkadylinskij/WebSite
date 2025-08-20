import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/footer/footer";
import Image from "next/image";
import LanguageSwitcher from "@/components/language-switcher/language-switcher";
import { ModeToggle } from "@/components/mode-switcher/mode-switcher";

interface CasesPageLayoutProps {
  children: React.ReactNode
  backButtonText?: string
  backButtonHref?: string
  showBackButton?: boolean
}

export default function CasesPageLayout({
                                          children,
                                          backButtonText,
                                          backButtonHref = "/",
                                          showBackButton = false,
                                        }: CasesPageLayoutProps) {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-colors duration-500">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-8">
            <Image
              src="/images/logo.png"
              alt="СТЭКЛЭВЭЛГРУПП Logo"
              width={120}
              height={60}
              className="w-26 h-15 object-contain bg-transparent block dark:hidden"
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src="/images/logo_for_dark_mode.svg"
              alt="Dark Logo"
              width={120}
              height={60}
              className="w-26 h-15 object-contain bg-transparent hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            />
            {showBackButton && (
              <Link
                href={backButtonHref}
                className="flex items-center gap-10 space-x-2 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <div className="flex items-center">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="pl-1">{backButtonText}</span>
                </div>
              </Link>
            )}
          </div>
          <div className="flex items-center space-x-8">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </div>
      </nav>
      <main className="transition-colors duration-500">
        {children}
      </main>
      <Footer />
    </div>
  )
}

