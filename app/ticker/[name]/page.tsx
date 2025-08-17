import React from "react"

// Force static generation for static export
export const dynamic = 'force-static';

// Generate static params for all tickers
export async function generateStaticParams() {
  const { videosData } = await import("@/data/videos-data");
  const tickers = Array.from(
    new Set(
      videosData.flatMap((video) =>
        video.sections.flatMap((section) => section.tickers)
      )
    )
  );
  
  return tickers.map((ticker) => ({
    name: ticker,
  }));
}

import MainLayout from "@/components/layout/main-layout"
import TickerAnalyticsCard from "@/components/ui/ticker-analytics-card"
import VideoMentionsList from "@/components/ui/video-mentions-list"
import { VideoService } from "@/services/video.service"
import { TickerAnalyticsService } from "@/services/ticker-analytics.service"
import HeroTitle from "@/components/ui/hero-title"

interface TickerPageProps {
  params: {
    name: string
  }
}

export default async function TickerPage({ params }: TickerPageProps) {
  const { name } = await params;
  const tickerOrTopic = decodeURIComponent(name)
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
      <div className="m-20 mt-10">
        <HeroTitle />
      </div>

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
