import type React from "react"
import StarfieldBackground from "./starfield-background"
import { cn } from "@/lib/utils"

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <main
      className={cn(
        "relative flex flex-col items-center p-4 md:p-8 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden",
        className,
      )}
    >
      <StarfieldBackground />
      <div className="relative z-10 flex flex-col items-center w-full">{children}</div>
    </main>
  )
}
