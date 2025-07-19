"use client"

import { useState } from "react"
import VideoGroup from "./video-group"
import { VideoService } from "@/services/video.service"
import { Button } from "./button"

interface VideoGroupsProps {
  initialLimit?: number
}

export default function VideoGroups({ initialLimit = 5 }: VideoGroupsProps) {
  const [displayLimit, setDisplayLimit] = useState(initialLimit)
  
  const videoGroups = VideoService.getVideosGroupedByMonth(displayLimit)
  const totalVideos = VideoService.getAllVideos().length

  const loadMoreVideos = () => {
    setDisplayLimit(prev => prev + initialLimit)
  }

  return (
    <div className="space-y-8">
      {videoGroups.map((group, index) => (
        <VideoGroup 
          key={group.month} 
          group={group} 
          isDefaultExpanded={index === 0}
        />
      ))}

      {displayLimit < totalVideos && (
        <div className="flex justify-center pt-8">
          <Button
            onClick={loadMoreVideos}
            variant="outline"
            className="text-black border-black/20 hover:bg-black/10 transition-colors"
          >
            Загрузить еще {Math.min(50, totalVideos - displayLimit)} видео
          </Button>
        </div>
      )}
    </div>
  )
} 