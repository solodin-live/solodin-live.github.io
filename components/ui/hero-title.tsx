"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface HeroTitleProps {
  children: React.ReactNode
  className?: string
}

export default function HeroTitle({ children, className }: HeroTitleProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative mb-20">
      {/* Светящийся фон */}
      <div className="absolute inset-0 blur-3xl opacity-30">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/50 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-1/4 w-24 h-24 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Основной заголовок */}
      <h1
        className={cn(
          "relative text-4xl md:text-6xl lg:text-7xl font-extrabold text-center tracking-tight transition-all duration-1000",
          "drop-shadow-2xl",
          "bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        {children}
      </h1>

      {/* Подсветка снизу */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
    </div>
  )
}
