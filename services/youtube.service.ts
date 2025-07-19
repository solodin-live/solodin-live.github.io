import { YOUTUBE_CONFIG } from "@/config/constants"

export class YouTubeService {
  static getVideoId(url: string): string | null {
    const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i
    const match = url.match(regExp)
    return match && match[1] ? match[1] : null
  }

  static getThumbnailUrl(videoId: string, quality: keyof typeof YOUTUBE_CONFIG.thumbnailQualities = "high"): string {
    return `${YOUTUBE_CONFIG.baseUrl}${videoId}/${YOUTUBE_CONFIG.thumbnailQualities[quality]}`
  }

  static getVideoUrlWithTimestamp(baseUrl: string, timestamp: string): string {
    const seconds = this.timestampToSeconds(timestamp)
    return `${baseUrl}&t=${seconds}s`
  }

  private static timestampToSeconds(timestamp: string): number {
    const parts = timestamp.split(":").map(Number)
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2]
    }
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1]
    }
    return 0
  }
}
