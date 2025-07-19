import SearchBar from "@/components/ui/search-bar"
import PopularTickers from "@/components/ui/popular-tickers"
import VideoCard from "@/components/ui/video-card"
import HeroTitle from "@/components/ui/hero-title"
import MainLayout from "@/components/layout/main-layout"
import { VideoService } from "@/services/video.service"

export default function HomePage() {
  const videos = VideoService.getAllVideos()

  return (
    <MainLayout>
      <div>
        <HeroTitle>🏀 solodin.live</HeroTitle>
      </div>
      
      <section className="w-full max-w-4xl mb-20">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
          <SearchBar />
          <PopularTickers />
        </div>
      </section>

      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">Последние добавленные видео</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
