import Link from "next/link"
import { BookOpen, GraduationCap, DollarSign, TrendingUp } from "lucide-react"
import { FaDiscord, FaTelegram } from "react-icons/fa"

interface ResourceItem {
  title: string
  description: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const resources: ResourceItem[] = [
  {
    title: "Блог Дмитрия Солодина",
    description: "Эксклюзивный контент на Boosty",
    url: "https://boosty.to/solodin",
    icon: BookOpen,
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Discord сервер",
    description: "Сообщество инвесторов",
    url: "https://dsolodin.ru/discord",
    icon: FaDiscord,
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Телеграм-Канал",
    description: "Актуальные новости и аналитика",
    url: "https://t.me/goodtraders",
    icon: FaTelegram,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "ТехпрокачкаЭкспресс",
    description: "Обновлённый интенсив по тех. анализу",
    url: "https://dsolodin.ru/techpro",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Курс по Опционам",
    description: "Профессиональная торговля опционами",
    url: "https://dsolodin.ru/options",
    icon: GraduationCap,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "ФинПрокачка",
    description: "Интенсив по инвестициям",
    url: "https://dsolodin.ru/finpro",
    icon: DollarSign,
    color: "from-yellow-500 to-orange-600"
  }
]

export default function AuthorResources() {
  return (
    <section className="w-full max-w-6xl mb-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-white">Дополнительные ресурсы от Дмитрия Солодина</h2>
        <p className="text-gray-300 text-sm">Эксклюзивные материалы для профессионального развития</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource, index) => {
          const IconComponent = resource.icon
          return (
            <Link
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 group-hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${resource.color} flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-white font-semibold text-sm truncate">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
} 