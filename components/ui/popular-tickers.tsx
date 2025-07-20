import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { POPULAR_TICKERS, ROUTES } from "@/config/constants"
import { cn } from "@/lib/utils"
import type { PopularTickersProps } from "@/types"

export default function PopularTickers({ tickers = POPULAR_TICKERS, className }: PopularTickersProps) {
  return (
    <div className={cn("hidden md:flex flex-wrap justify-center gap-3 mt-8", className)}>
      {tickers.map((ticker) => (
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
