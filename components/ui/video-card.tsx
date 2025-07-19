"use client"

import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import VideoThumbnail from "./video-thumbnail"
import { ROUTES } from "@/config/constants"
import { cn } from "@/lib/utils"
import type { VideoCardProps } from "@/types"

export default function VideoCard({ video, className }: VideoCardProps) {
  const allTickers = Array.from(new Set(video.sections.flatMap((section) => section.tickers)))

  return (
    <Card
      className={cn(
        "w-full max-w-sm bg-card text-card-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden group",
        className,
      )}
    >
      {/* Основная ссылка на YouTube */}
      <Link href={video.youtubeLink} target="_blank" rel="noopener noreferrer" className="block">
        {/* Превью видео */}
        <div className="aspect-video bg-gray-900">
          <VideoThumbnail youtubeUrl={video.youtubeLink} title={video.title} />
        </div>

        <CardHeader className="relative">
          <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {video.title}
          </CardTitle>
          <CardDescription className="text-gray-600 flex items-center gap-2">
            {video.date}
            <ExternalLink className="w-3 h-3 opacity-50" />
          </CardDescription>
        </CardHeader>
      </Link>

      {/* Теги внизу карточки */}
      <div className="px-6 pb-6">
        <div className="border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-500 mb-2 font-medium">Обсуждаемые темы:</p>
          <div className="flex flex-wrap gap-1">
            {allTickers.slice(0, 6).map((ticker) => (
              <Link
                key={ticker}
                href={ROUTES.ticker(ticker)}
                onClick={(e) => e.stopPropagation()}
                className="inline-block"
              >
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 border-gray-300 text-gray-700 text-xs py-0.5 px-2"
                >
                  {ticker}
                </Badge>
              </Link>
            ))}
            {allTickers.length > 6 && (
              <Badge variant="outline" className="border-gray-300 text-gray-500 text-xs py-0.5 px-2">
                +{allTickers.length - 6}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
