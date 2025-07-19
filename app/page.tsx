import SearchBar from "@/components/ui/search-bar"
import PopularTickers from "@/components/ui/popular-tickers"
import VideoGroups from "@/components/ui/video-groups"
import HeroTitle from "@/components/ui/hero-title"
import MainLayout from "@/components/layout/main-layout"
import AuthorResources from "@/components/ui/author-resources"

export default function HomePage() {
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

      <AuthorResources />

      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">Видео по месяцам</h2>
        <VideoGroups initialLimit={5} />
      </section>
    </MainLayout>
  )
}
