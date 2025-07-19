"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Clock, Play, Calendar, Tag } from "lucide-react"
import VideoThumbnail from "./video-thumbnail"
import { YouTubeService } from "@/services/youtube.service"
import { ROUTES } from "@/config/constants"
import type { VideoSearchResult } from "@/types"

interface VideoMentionCardProps {
  mention: VideoSearchResult
  currentTicker: string
  index: number
}

export default function VideoMentionCard({ mention, currentTicker, index }: VideoMentionCardProps) {
  return (
    <Card
      key={index}
      className="group relative bg-gradient-to-br from-card to-card/95 text-card-foreground shadow-lg border border-border/50 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30"
    >
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative md:flex">
        {/* Превью видео слева */}
        <div className="md:w-80 md:flex-shrink-0">
          <Link
            href={YouTubeService.getVideoUrlWithTimestamp(mention.youtubeLink, mention.timestamp)}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group/thumbnail"
          >
            <div className="relative aspect-video bg-gray-900 overflow-hidden">
              <VideoThumbnail youtubeUrl={mention.youtubeLink} title={mention.videoTitle} />
              
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumbnail:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <Play className="w-6 h-6 text-gray-900 fill-current" />
                </div>
              </div>

              {/* Таймкод */}
              <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium">
                <Clock className="w-3 h-3" />
                {mention.timestamp}
              </div>
            </div>
          </Link>
        </div>

        {/* Контент справа */}
        <div className="flex-1 flex flex-col">
          <Link
            href={YouTubeService.getVideoUrlWithTimestamp(mention.youtubeLink, mention.timestamp)}
            target="_blank"
            rel="noopener noreferrer"
            className="block flex-1"
          >
            <CardHeader className="relative pb-4">
              {/* External link indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg">
                  <ExternalLink className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Video title */}
              <CardTitle className="group-hover:text-primary transition-colors duration-200 pr-16 line-clamp-2 text-lg leading-tight">
                {mention.videoTitle}
              </CardTitle>

              {/* Video date */}
              <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{mention.videoDate}</span>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {mention.description && (
                <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                  {mention.description}
                </p>
              )}
            </CardContent>
          </Link>
        </div>
      </div>
    </Card>
  )
} 