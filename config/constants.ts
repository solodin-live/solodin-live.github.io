export const SITE_CONFIG = {
  name: "solodin.live",
  title: "solodin.live",
  description: "Фан-проект по видео Дмитрия Солодина: находите тикеры и темы, обсуждаемые на его YouTube-канале, и открывайте новые идеи.",
  url: "https://solodin.live",
  author: "Дмитрий Солодин",
  keywords: ["фондовый рынок", "аналитика", "тикеры", "инвестиции", "трейдинг"],
} as const

export const POPULAR_TICKERS = ["SPY", "TSLA", "GLD", "Инфляция", "Нефть", "AAPL", "NVDA"] as const

export const YOUTUBE_CONFIG = {
  thumbnailQualities: {
    maxres: "maxresdefault.jpg",
    high: "hqdefault.jpg",
    medium: "mqdefault.jpg",
    standard: "sddefault.jpg",
  },
  baseUrl: "https://img.youtube.com/vi/",
} as const

export const ROUTES = {
  home: "/",
  ticker: (name: string) => `/ticker/${encodeURIComponent(name)}`,
  video: (id: string) => `/video/${id}`,
} as const
