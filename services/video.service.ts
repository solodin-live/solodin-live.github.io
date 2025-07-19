import type { Video, VideoSearchResult } from "@/types"
import { mockVideos } from "@/data/mock-videos"

export interface VideoGroup {
  month: string // "2025-07"
  monthDisplay: string // "Июль 2025"
  videos: Video[]
}

export class VideoService {
  private static videos: Video[] = mockVideos

  static getAllVideos(): Video[] {
    return this.videos
  }

  static getVideoById(id: string): Video | null {
    return this.videos.find((video) => video.id === id) || null
  }

  static getVideosGroupedByMonth(limit: number = 100): VideoGroup[] {
    // Сортируем видео по дате (новые сначала)
    const sortedVideos = [...this.videos].sort((a, b) => {
      const dateA = this.parseDate(a.date)
      const dateB = this.parseDate(b.date)
      return dateB.getTime() - dateA.getTime()
    })

    // Берем только первые limit видео
    const limitedVideos = sortedVideos.slice(0, limit)

    // Группируем по месяцам
    const groups: { [key: string]: Video[] } = {}
    
    limitedVideos.forEach(video => {
      const date = this.parseDate(video.date)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      
      if (!groups[monthKey]) {
        groups[monthKey] = []
      }
      groups[monthKey].push(video)
    })

    // Преобразуем в массив и сортируем по месяцам (новые сначала)
    return Object.entries(groups)
      .map(([month, videos]) => ({
        month,
        monthDisplay: this.formatMonthDisplay(month),
        videos: videos.sort((a, b) => {
          const dateA = this.parseDate(a.date)
          const dateB = this.parseDate(b.date)
          return dateB.getTime() - dateA.getTime()
        })
      }))
      .sort((a, b) => b.month.localeCompare(a.month))
  }

  static getVideosByMonth(month: string, limit: number = 20): Video[] {
    const allGroups = this.getVideosGroupedByMonth()
    const group = allGroups.find(g => g.month === month)
    return group ? group.videos.slice(0, limit) : []
  }

  private static parseDate(dateStr: string): Date {
    // Парсим дату в формате "18 июля 2025"
    const months: { [key: string]: number } = {
      'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3,
      'мая': 4, 'июня': 5, 'июля': 6, 'августа': 7,
      'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
    }

    const parts = dateStr.split(' ')
    const day = parseInt(parts[0])
    const month = months[parts[1]]
    const year = parseInt(parts[2])

    return new Date(year, month, day)
  }

  private static formatMonthDisplay(monthKey: string): string {
    const [year, month] = monthKey.split('-')
    const monthNum = parseInt(month)
    
    const monthNames = [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ]

    return `${monthNames[monthNum - 1]} ${year}`
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
