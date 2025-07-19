import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { YouTubeService } from "@/services/youtube.service"
import { ROUTES } from "@/config/constants"

interface VideoSectionProps {
  section: {
    title: string
    timestamp: string
    tickers: string[]
    description?: string[]
  }
  videoYoutubeLink: string
}

export default function VideoSection({ section, videoYoutubeLink }: VideoSectionProps) {
  return (
    <Card className="bg-card text-card-foreground shadow-xl border-0">
      <CardHeader>
        <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
        <CardDescription>
          <Link
            href={YouTubeService.getVideoUrlWithTimestamp(videoYoutubeLink, section.timestamp)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium flex items-center gap-2"
          />
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
        {section.description && (
          <ul className="list-disc list-inside space-y-1">
            {section.description.map((description, index) => (
              <li key={index} className="text-gray-600">{description}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
} 