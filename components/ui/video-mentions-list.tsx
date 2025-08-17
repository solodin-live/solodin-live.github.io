"use client"

import { Play } from "lucide-react"
import VideoMentionCard from "./video-mention-card"
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

  const sortedMentions = mentions.sort((a, b) => {
    return a.videoDate > b.videoDate ? -1 : 1;
  });

  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
        <Play className="w-6 h-6" />
        Видео с упоминаниями ({mentions.length})
      </h2>

      <div className="grid gap-6">
        {sortedMentions.map((mention, index) => (
          <VideoMentionCard
            key={index}
            mention={mention}
            currentTicker={currentTicker}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
