export interface TickerAnalytics {
  ticker: string
  summary: string
  sentiment: "positive" | "negative" | "neutral"
  keyPoints: string[]
  lastMentioned: string
  totalMentions: number
  priceTarget?: string
  riskLevel: "low" | "medium" | "high"
}
