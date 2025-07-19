import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus, AlertTriangle, Target, Calendar, BarChart3 } from "lucide-react"
import type { TickerAnalytics } from "@/types"
import { cn } from "@/lib/utils"

interface TickerAnalyticsCardProps {
  analytics: TickerAnalytics
  className?: string
}

export default function TickerAnalyticsCard({ analytics, className }: TickerAnalyticsCardProps) {
  const getSentimentIcon = () => {
    switch (analytics.sentiment) {
      case "positive":
        return <TrendingUp className="w-5 h-5 text-green-500" />
      case "negative":
        return <TrendingDown className="w-5 h-5 text-red-500" />
      default:
        return <Minus className="w-5 h-5 text-yellow-500" />
    }
  }

  const getSentimentColor = () => {
    switch (analytics.sentiment) {
      case "positive":
        return "text-green-600 bg-green-50 border-green-200"
      case "negative":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
    }
  }

  const getRiskColor = () => {
    switch (analytics.riskLevel) {
      case "low":
        return "text-green-600 bg-green-50 border-green-200"
      case "high":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
    }
  }

  const getSentimentText = () => {
    switch (analytics.sentiment) {
      case "positive":
        return "Позитивный"
      case "negative":
        return "Негативный"
      default:
        return "Нейтральный"
    }
  }

  const getRiskText = () => {
    switch (analytics.riskLevel) {
      case "low":
        return "Низкий"
      case "high":
        return "Высокий"
      default:
        return "Средний"
    }
  }

  return (
    <Card className={cn("bg-card text-card-foreground shadow-xl border-0", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Аналитическая сводка по {analytics.ticker}
          </CardTitle>
          <div className="flex items-center gap-2">
            {getSentimentIcon()}
            <Badge variant="outline" className={getSentimentColor()}>
              {getSentimentText()}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-base">
          Основано на {analytics.totalMentions} упоминаниях в видео
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Краткая сводка */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Общий обзор</h3>
          <p className="text-gray-600 leading-relaxed">{analytics.summary}</p>
        </div>

        {/* Ключевые моменты */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Ключевые моменты</h3>
          <ul className="space-y-2">
            {analytics.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Метрики */}
        <div className="flex justify-between items-start pt-4 border-t border-gray-200">
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Последнее упоминание</p>
              <p className="font-medium text-gray-900">{analytics.lastMentioned}</p>
            </div>
          </div>

          {analytics.priceTarget && (
            <div className="flex items-start gap-2">
              <Target className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Целевая цена</p>
                <p className="font-medium text-gray-900">{analytics.priceTarget}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
