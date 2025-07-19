import type { Video } from "@/types"

export const mockVideos: Video[] = [
  {
    id: "abcd1234",
    title: "Экономика РФ после войны",
    youtubeLink: "https://www.youtube.com/watch?v=OQmWfkPi5sU",
    date: "18 июля 2025",
    sections: [
      {
        timestamp: "00:02:30",
        title: "Обзор SPY",
        tickers: ["SPY"],
        description: "Подробный анализ индекса SPY и его перспектив.",
      },
      {
        timestamp: "00:10:45",
        title: "Китай и сырьевой рынок",
        tickers: ["FXI", "Нефть", "Китай"],
        description: "Влияние китайской экономики на мировые сырьевые рынки.",
      },
      {
        timestamp: "00:18:00",
        title: "Разбор Tesla",
        tickers: ["TSLA"],
        description: "Анализ акций Tesla и последние новости компании.",
      },
      {
        timestamp: "00:25:15",
        title: "Инфляция и процентные ставки",
        tickers: ["Инфляция", "Ставки"],
        description: "Обсуждение текущей инфляции и ожиданий по процентным ставкам.",
      },
    ],
  },
  {
    id: "efgh5671",
    title: "✈️СЕРЕБРО: Как заработать х10 на пирамидинге?",
    youtubeLink: "https://www.youtube.com/watch?v=nswcGlSh4Gg",
    date: "15 июля 2025",
    sections: [
      {
        timestamp: "00:01:00",
        title: "Текущая макроэкономическая ситуация",
        tickers: ["Макроэкономика"],
        description: "Обзор ключевых макроэкономических показателей.",
      },
      {
        timestamp: "00:07:20",
        title: "Золото как защитный актив",
        tickers: ["Золото"],
        description: "Почему золото остается важным активом в условиях неопределенности.",
      },
      {
        timestamp: "00:15:00",
        title: "Влияние ФРС на рынки",
        tickers: ["ФРС", "Ставки"],
        description: "Как решения Федеральной резервной системы влияют на фондовый рынок.",
      },
    ],
  },
  {
    id: "efgh5672",
    title: "Увеличиваю СТАВКУ на Золото и Серебро",
    youtubeLink: "https://www.youtube.com/watch?v=Xg5oh9FNTvU",
    date: "15 июля 2025",
    sections: [
      {
        timestamp: "00:01:00",
        title: "Текущая макроэкономическая ситуация",
        tickers: ["Макроэкономика"],
        description: "Обзор ключевых макроэкономических показателей.",
      },
      {
        timestamp: "00:07:20",
        title: "Золото как защитный актив",
        tickers: ["Золото"],
        description: "Почему золото остается важным активом в условиях неопределенности.",
      },
      {
        timestamp: "00:15:00",
        title: "Влияние ФРС на рынки",
        tickers: ["ФРС", "Ставки"],
        description: "Как решения Федеральной резервной системы влияют на фондовый рынок.",
      },
    ],
  },
  {
    id: "ijkl9012",
    title: "Когда SPX уже упадёт, Димон?!",
    youtubeLink: "https://www.youtube.com/watch?v=xm4RUymUjMY",
    date: "10 июля 2025",
    sections: [
      {
        timestamp: "00:03:00",
        title: "Рост NVIDIA",
        tickers: ["NVDA"],
        description: "Анализ стремительного роста акций NVIDIA.",
      },
      {
        timestamp: "00:12:00",
        title: "Перспективы Apple",
        tickers: ["AAPL"],
        description: "Обсуждение будущих продуктов и стратегии Apple.",
      },
      {
        timestamp: "00:20:00",
        title: "Риски в IT-секторе",
        tickers: ["IT-сектор", "Риски"],
        description: "Потенциальные риски и вызовы для технологических компаний.",
      },
    ],
  },
]
