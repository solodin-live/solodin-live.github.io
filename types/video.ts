export interface VideoSection {
  timestamp: string // "00:02:30"
  title: string
  tickers: string[]
  description?: string
}

export interface Video {
  id: string
  title: string
  youtubeLink: string
  date: string // "18 июля 2025"
  sections: VideoSection[]
}

export interface VideoSearchResult {
  videoId: string
  videoTitle: string
  videoDate: string
  youtubeLink: string
  sectionTitle: string
  timestamp: string
  description?: string
  allTickers: string[]
}
