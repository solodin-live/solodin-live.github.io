"use client"

import { useState, useCallback } from "react"
import { YouTubeService } from "@/services/youtube.service"

export function useVideoThumbnail(youtubeUrl: string) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const videoId = YouTubeService.getVideoId(youtubeUrl)

  const primaryUrl = videoId ? YouTubeService.getThumbnailUrl(videoId, "maxres") : null
  const fallbackUrl = videoId ? YouTubeService.getThumbnailUrl(videoId, "high") : null

  const handleError = useCallback(() => {
    setHasError(true)
    setIsLoading(false)
  }, [])

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  return {
    videoId,
    primaryUrl,
    fallbackUrl,
    hasError,
    isLoading,
    handleError,
    handleLoad,
  }
}
