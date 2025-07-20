import type { TickerAnalytics } from "@/types"

export class TickerAnalyticsService {
  // Мок данные для аналитики тикеров
  private static mockAnalytics: Record<string, TickerAnalytics> = {
    spx: {
      ticker: "SPX",
      summary:
        "S&P 500 ETF показывает стабильный рост на фоне позитивных макроэкономических данных. Дмитрий отмечает потенциал для дальнейшего роста, но предупреждает о возможной коррекции в краткосрочной перспективе.",
      sentiment: "positive",
      keyPoints: [
        "Сильные корпоративные отчеты поддерживают индекс",
        "ФРС может замедлить темп повышения ставок",
        "Технический анализ показывает пробой ключевого уровня сопротивления",
        "Возможна коррекция до уровня $420-425",
      ],
      lastMentioned: "18 июля 2025",
      totalMentions: 15,
      priceTarget: "$450-460",
      riskLevel: "medium",
    },
    tsla: {
      ticker: "TSLA",
      summary:
        "Tesla демонстрирует волатильность на фоне новостей о производстве и автономном вождении. Солодин видит долгосрочный потенциал, но отмечает высокие риски в краткосрочной перспективе.",
      sentiment: "neutral",
      keyPoints: [
        "Рост производства в Китае превышает ожидания",
        "Развитие технологий автономного вождения",
        "Высокая волатильность из-за твитов Маска",
        "Конкуренция в сфере электромобилей усиливается",
      ],
      lastMentioned: "18 июля 2025",
      totalMentions: 8,
      priceTarget: "$280-320",
      riskLevel: "high",
    },
    gold: {
      ticker: "GLD",
      summary:
        "Золото остается привлекательным защитным активом в условиях геополитической нестабильности и инфляционных рисков. Дмитрий рекомендует держать 5-10% портфеля в золоте.",
      sentiment: "positive",
      keyPoints: [
        "Центральные банки продолжают покупки золота",
        "Геополитические риски поддерживают цену",
        "Доллар может ослабнуть в среднесрочной перспективе",
        "Технический анализ показывает формирование восходящего тренда",
      ],
      lastMentioned: "15 июля 2025",
      totalMentions: 12,
      priceTarget: "$2100-2200",
      riskLevel: "low",
    },
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
