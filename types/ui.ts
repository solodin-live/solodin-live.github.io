import type { Video } from "./path/to/video" // Assuming Video is declared in another file, you need to import it

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
