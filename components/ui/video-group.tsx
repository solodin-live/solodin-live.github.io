"use client"

import { useState } from "react"
import VideoCard from "./video-card"
import { Button } from "./button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { type VideoGroup } from "@/services/video.service"

interface VideoGroupProps {
  group: VideoGroup
  isDefaultExpanded?: boolean
}

export default function VideoGroup({ group, isDefaultExpanded = false }: VideoGroupProps) {
  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
        <div className="flex items-center space-x-3">
          <h3 className="text-xl font-semibold text-white">
            {group.monthDisplay}
          </h3>
          <span className="text-sm text-white/60 bg-white/10 px-2 py-1 rounded">
            {group.videos.length} видео
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpansion}
          className="text-white/70 hover:text-white transition-colors"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center transition-all duration-500 ease-in-out ${
        isExpanded 
          ? 'opacity-100 max-h-[2000px] overflow-visible' 
          : 'opacity-0 max-h-0 overflow-hidden'
      }`}>
        {group.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
} 