import type { TickerAnalytics } from "@/types"

export class TickerAnalyticsService {
  private static mockAnalytics: Record<string, TickerAnalytics> = {
  }

  static getTickerAnalytics(ticker: string): TickerAnalytics | null {
    const key = ticker.toLowerCase()
    return this.mockAnalytics[key] || null
  }

  static generateMockAnalytics(ticker: string, totalMentions: number, lastMentioned: string): TickerAnalytics {
    return {
      ticker: ticker.toUpperCase(),
      summary: `Анализ по ${ticker} основан на ${totalMentions} упоминаниях в видео Дмитрия Солодина. Подробная аналитика будет доступна после обработки всех видео с помощью AI.`,
      sentiment: "neutral",
      keyPoints: [
        "Анализ настроений по данному активу",
        "Ключевые уровни поддержки и сопротивления",
        "Фундаментальные факторы влияния",
        "Рекомендации по управлению рисками",
      ],
      lastMentioned,
      totalMentions,
      riskLevel: "medium",
    }
  }
}
