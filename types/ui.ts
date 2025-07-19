import type { Video } from "./video"

export interface SearchBarProps {
  placeholder?: string
  className?: string
}

export interface VideoCardProps {
  video: Video
  className?: string
}

export interface PopularTickersProps {
  tickers?: string[]
  className?: string
}
