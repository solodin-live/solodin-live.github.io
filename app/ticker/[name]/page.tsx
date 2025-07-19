"use client"

import React from "react"
import MainLayout from "@/components/layout/main-layout"
import PageHeader from "@/components/layout/page-header"
import TickerAnalyticsCard from "@/components/ui/ticker-analytics-card"
import VideoMentionsList from "@/components/ui/video-mentions-list"
import { VideoService } from "@/services/video.service"
import { TickerAnalyticsService } from "@/services/ticker-analytics.service"

interface TickerPageProps {
  params: Promise<{
    name: string
  }>
}

export default function TickerPage({ params }: TickerPageProps) {
  const resolvedParams = React.use(params)
  const tickerOrTopic = decodeURIComponent(resolvedParams.name)
  const relevantSections = VideoService.searchByTicker(tickerOrTopic)

  // Получаем аналитику (реальную или мок)
  let analytics = TickerAnalyticsService.getTickerAnalytics(tickerOrTopic)

  if (!analytics && relevantSections.length > 0) {
    // Генерируем мок-аналитику если нет готовой
    const lastMention = relevantSections[0]?.videoDate || "Неизвестно"
    analytics = TickerAnalyticsService.generateMockAnalytics(tickerOrTopic, relevantSections.length, lastMention)
  }

  return (
    <MainLayout>
      <PageHeader title={tickerOrTopic.toUpperCase()} subtitle="Аналитика и упоминания в видео Дмитрия Солодина" />

      <div className="w-full max-w-6xl space-y-12">
        {/* Аналитическая сводка */}
        {analytics && (
          <section>
            <TickerAnalyticsCard analytics={analytics} />
          </section>
        )}

        {/* Список видео с упоминаниями */}
        <section>
          <VideoMentionsList mentions={relevantSections} currentTicker={tickerOrTopic} />
        </section>
      </div>
    </MainLayout>
  )
}
