"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ROUTES } from "@/config/constants"
import { cn } from "@/lib/utils"
import { useRandomTickers } from "@/hooks/use-random-tickers"
import type { PopularTickersProps } from "@/types"

export default function PopularTickers({ className }: PopularTickersProps) {
  const randomTickers = useRandomTickers(6)

  // Show loading state while tickers are being randomized
  if (randomTickers.length === 0) {
    return (
      <div className={cn("hidden md:flex flex-wrap justify-center gap-3 mt-8", className)}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="px-4 py-2 text-base font-medium bg-white/10 backdrop-blur-sm text-white border-white/20 animate-pulse"
            style={{ width: '80px', height: '40px' }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={cn("hidden md:flex flex-wrap justify-center gap-3 mt-8", className)}>
      {randomTickers.map((ticker) => (
        <Link key={ticker} href={ROUTES.ticker(ticker)} passHref>
          <Badge
            variant="secondary"
            className="cursor-pointer px-4 py-2 text-base font-medium bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
          >
            {ticker}
          </Badge>
        </Link>
      ))}
    </div>
  )
}
