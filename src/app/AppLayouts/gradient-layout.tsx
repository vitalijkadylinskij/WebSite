import type React from "react"

interface GradientLayoutProps {
  children: React.ReactNode
}

export default function GradientLayout({ children }: GradientLayoutProps) {

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {children}
    </div>
  )
}