import type React from "react"
import MainNavbar from "@/components/navigation-menu/navbar";
import Footer from "@/components/footer/footer";

interface HomepageLayoutProps {
  children: React.ReactNode
}

export default function HomePageLayout({ children }: HomepageLayoutProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-white
                 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <MainNavbar />
      {children}
      <Footer />
    </div>
  )
}
