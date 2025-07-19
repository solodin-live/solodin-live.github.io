"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Clock, Play } from "lucide-react"
import VideoThumbnail from "./video-thumbnail"
import { YouTubeService } from "@/services/youtube.service"
import { ROUTES } from "@/config/constants"
import type { VideoSearchResult } from "@/types"

interface VideoMentionsListProps {
  mentions: VideoSearchResult[]
  currentTicker: string
  className?: string
}

export default function VideoMentionsList({ mentions, currentTicker, className }: VideoMentionsListProps) {
  if (mentions.length === 0) {
    return (
      <div className="text-center py-12">
        <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">Упоминания не найдены</h3>
        <p className="text-gray-500">Пока нет видео с упоминаниями этого тикера</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
        <Play className="w-6 h-6" />
        Видео с упоминаниями ({mentions.length})
      </h2>

      <div className="grid gap-6">
        {mentions.map((mention, index) => (
          <Card
            key={index}
            className="bg-card text-card-foreground shadow-xl border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="md:flex">
              {/* Превью видео слева */}
              <div className="md:w-80 md:flex-shrink-0">
                <Link
                  href={YouTubeService.getVideoUrlWithTimestamp(mention.youtubeLink, mention.timestamp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-video bg-gray-900">
                    <VideoThumbnail youtubeUrl={mention.youtubeLink} title={mention.videoTitle} />

                    {/* Таймкод */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {mention.timestamp}
                    </div>
                  </div>
                </Link>
              </div>

              {/* Контент справа */}
              <div className="flex-1">
                <Link
                  href={YouTubeService.getVideoUrlWithTimestamp(mention.youtubeLink, mention.timestamp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <CardHeader className="relative">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2">
                        <ExternalLink className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>

                    <CardTitle className="group-hover:text-primary transition-colors duration-200 pr-12 line-clamp-2">
                      {mention.videoTitle}
                      <span className="text-sm font-normal text-gray-500 ml-2">({mention.videoDate})</span>
                    </CardTitle>
                    <CardDescription className="text-lg font-medium mt-2 text-primary flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {mention.sectionTitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {mention.description && <p className="text-gray-600 mb-4 line-clamp-2">{mention.description}</p>}
                  </CardContent>
                </Link>

                {/* Теги внизу карточки */}
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium">Связанные темы:</p>
                    <div className="flex flex-wrap gap-1">
                      {mention.allTickers.map((ticker) => (
                        <Link
                          key={ticker}
                          href={ROUTES.ticker(ticker)}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block"
                        >
                          <Badge
                            variant={ticker.toLowerCase() === currentTicker.toLowerCase() ? "default" : "outline"}
                            className={`cursor-pointer transition-all duration-200 text-xs py-0.5 px-2 ${
                              ticker.toLowerCase() === currentTicker.toLowerCase()
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-primary hover:text-primary-foreground hover:border-primary border-gray-300 text-gray-700"
                            }`}
                          >
                            {ticker}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
