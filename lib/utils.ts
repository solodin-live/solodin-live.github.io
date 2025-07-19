import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Deprecated: используйте YouTubeService вместо этого
export function timestampToSeconds(timestamp: string): number {
  console.warn("timestampToSeconds is deprecated. Use YouTubeService.timestampToSeconds instead.")
  const parts = timestamp.split(":").map(Number)
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2]
  }
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1]
  }
  return 0
}

// Deprecated: используйте YouTubeService вместо этого
export function getYouTubeVideoId(url: string): string | null {
  console.warn("getYouTubeVideoId is deprecated. Use YouTubeService.getVideoId instead.")
  const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i
  const match = url.match(regExp)
  return match && match[1] ? match[1] : null
}
