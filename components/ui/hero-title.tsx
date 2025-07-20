"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function HeroTitle() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Link href="/">
      <div className="relative mb-10">
        {/* Светящийся фон */}
        <div className="absolute inset-0 blur-3xl opacity-30">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/50 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-1/4 w-24 h-24 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Основной заголовок */}
        <div className="flex items-center justify-center">
          <span className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-center tracking-tight transition-all duration-1000">
            ⛹🏼‍♂️
          </span>
          <span className="text-2xl md:text-4xl lg:text-4xl font-extrabold text-center tracking-tight transition-all duration-1000">
            СОЛОДИН
          </span>
          <span className="text-2xl md:text-4xl lg:text-4xl font-extrabold text-center tracking-tight transition-all duration-1000">
            <span className="text-white bg-red-600 rounded-lg px-4 py-2">LIVE</span>
          </span>
        </div>

        {/* Подсветка снизу */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
      </div>
    </Link>
  )
}
