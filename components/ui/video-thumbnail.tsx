"use client"

import { Play } from "lucide-react"
import { useVideoThumbnail } from "@/hooks/use-video-thumbnail"
import { cn } from "@/lib/utils"

interface VideoThumbnailProps {
  youtubeUrl: string
  title: string
  className?: string
  showPlayButton?: boolean
}

export default function VideoThumbnail({ youtubeUrl, title, className, showPlayButton = true }: VideoThumbnailProps) {
  const { primaryUrl, fallbackUrl, hasError, isLoading, handleError, handleLoad } = useVideoThumbnail(youtubeUrl)

  if (!primaryUrl) {
    return (
      <div
        className={cn(
          "w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center",
          className,
        )}
      >
        <Play className="w-12 h-12 text-gray-400" />
      </div>
    )
  }

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <img
        src={hasError ? fallbackUrl || primaryUrl : primaryUrl}
        alt={`Превью видео: ${title}`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        onError={handleError}
        onLoad={handleLoad}
      />

      {showPlayButton && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-200">
            <Play className="w-6 h-6 text-primary-foreground fill-current" />
          </div>
        </div>
      )}
    </div>
  )
}
