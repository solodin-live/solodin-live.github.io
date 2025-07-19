import type { Video, VideoSearchResult } from "@/types"
import { mockVideos } from "@/data/mock-videos"

export class VideoService {
  private static videos: Video[] = mockVideos

  static getAllVideos(): Video[] {
    return this.videos
  }

  static getVideoById(id: string): Video | null {
    return this.videos.find((video) => video.id === id) || null
  }

  static searchByTicker(tickerOrTopic: string): VideoSearchResult[] {
    const searchTerm = tickerOrTopic.toLowerCase()

    return this.videos.flatMap((video) =>
      video.sections
        .filter((section) => section.tickers.some((ticker) => ticker.toLowerCase() === searchTerm))
        .map((section) => ({
          videoId: video.id,
          videoTitle: video.title,
          videoDate: video.date,
          youtubeLink: video.youtubeLink,
          sectionTitle: section.title,
          timestamp: section.timestamp,
          description: section.description,
          allTickers: section.tickers,
        })),
    )
  }

  static getAllTickers(): string[] {
    const allTickers = this.videos.flatMap((video) => video.sections.flatMap((section) => section.tickers))
    return Array.from(new Set(allTickers))
  }
}
