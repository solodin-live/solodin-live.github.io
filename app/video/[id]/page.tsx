import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import MainLayout from "@/components/layout/main-layout"
import PageHeader from "@/components/layout/page-header"
import { VideoService } from "@/services/video.service"
import { YouTubeService } from "@/services/youtube.service"
import { ROUTES } from "@/config/constants"
import HeroTitle from "@/components/ui/hero-title"

interface VideoPageProps {
  params: {
    id: string
  }
}

export default function VideoPage({ params }: VideoPageProps) {
  const video = VideoService.getVideoById(params.id)

  if (!video) {
    return (
      <MainLayout>
        <div className="m-20 mt-10">
          <HeroTitle />
        </div>
        <PageHeader title="Видео не найдено" />
        <p className="mt-4 text-gray-300">Пожалуйста, проверьте ID видео.</p>
        <Link href={ROUTES.home} className="mt-6">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Вернуться на главную</Button>
        </Link>
      </MainLayout>
    )
  }

  const videoId = YouTubeService.getVideoId(video.youtubeLink)

  return (
    <MainLayout>
      <div className="m-20 mt-10">
        <HeroTitle />
      </div>
      
      {videoId && (
        <div className="w-full max-w-4xl mb-8 aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="mt-10">
        <PageHeader title={video.title} />
      </div>

      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">Разделы видео</h2>
        <div className="grid gap-4">
          {video.sections.map((section, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
                <CardDescription>
                  <Link
                    href={YouTubeService.getVideoUrlWithTimestamp(video.youtubeLink, section.timestamp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    <Clock className="w-4 h-4" />
                    Таймкод: {section.timestamp}
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {section.tickers.map((ticker) => (
                    <Link key={ticker} href={ROUTES.ticker(ticker)} passHref>
                      <Badge
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 border-gray-300 text-gray-700"
                      >
                        {ticker}
                      </Badge>
                    </Link>
                  ))}
                </div>
                {section.description && <p className="text-gray-600 mb-3">{section.description}</p>}
                <Link
                  href={YouTubeService.getVideoUrlWithTimestamp(video.youtubeLink, section.timestamp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block"
                >
                  <Button variant="outline">Перейти к обсуждению</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
