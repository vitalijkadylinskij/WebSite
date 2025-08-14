"use client"

import type React from "react"
import MainNavbar from "@/components/navigation-menu/navbar";
import Footer from "@/components/footer/footer";

interface HomepageLayoutProps {
  children: React.ReactNode
}

export default function HomepageLayout({ children }: HomepageLayoutProps) {

  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      {children}
      <Footer />
    </div>
  )
}
