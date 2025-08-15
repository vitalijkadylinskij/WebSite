"use client"
import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/footer/footer";
import Image from "next/image";
import LanguageSwitcher from "@/components/language-switcher/language-switcher";

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
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-8">
            <Image
              src="/images/Stack_lvl_logo.png"
              alt="СТЭКЛЭВЭЛГРУПП Logo"
              width={120}
              height={60}
              className="w-26 h-15 object-contain bg-transparent"
              style={{ width: 'auto', height: 'auto' }}
            />
            <Link href={backButtonHref} className="flex items-center gap-10 space-x-2 text-gray-500 hover:text-gray-900">
              <div className="flex items-center">
                {showBackButton && <ArrowLeft className="h-4 w-4" />}
                <span className="pl-1">{backButtonText}</span>
              </div>
            </Link>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>
      {children}
      <Footer />
    </div>
  )
}
