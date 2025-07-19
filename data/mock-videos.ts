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
    date: "12 июля 2025",
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
  {
    id: "mnop3456",
    title: "Анализ рынка: Июнь 2025",
    youtubeLink: "https://www.youtube.com/watch?v=example6",
    date: "28 июня 2025",
    sections: [
      {
        timestamp: "00:02:00",
        title: "Обзор рынка за месяц",
        tickers: ["SPY", "QQQ"],
        description: "Итоги торгов за июнь 2025 года.",
      },
      {
        timestamp: "00:10:00",
        title: "Технологический сектор",
        tickers: ["XLK", "NVDA", "AAPL"],
        description: "Анализ технологических акций.",
      },
    ],
  },
  {
    id: "qrst7890",
    title: "Майский обзор: Что ждет рынок?",
    youtubeLink: "https://www.youtube.com/watch?v=example7",
    date: "25 мая 2025",
    sections: [
      {
        timestamp: "00:01:30",
        title: "Майские тренды",
        tickers: ["SPY", "DIA"],
        description: "Анализ майских трендов на рынке.",
      },
      {
        timestamp: "00:08:00",
        title: "Сырьевые товары",
        tickers: ["Нефть", "Золото", "Серебро"],
        description: "Обзор сырьевых рынков.",
      },
    ],
  },
  {
    id: "uvwx1234",
    title: "Апрельские итоги",
    youtubeLink: "https://www.youtube.com/watch?v=example8",
    date: "30 апреля 2025",
    sections: [
      {
        timestamp: "00:02:15",
        title: "Итоги апреля",
        tickers: ["SPY", "QQQ", "IWM"],
        description: "Подведение итогов апреля 2025.",
      },
    ],
  },
  {
    id: "yzab5678",
    title: "Мартовский разбор",
    youtubeLink: "https://www.youtube.com/watch?v=example9",
    date: "15 марта 2025",
    sections: [
      {
        timestamp: "00:01:45",
        title: "Мартовские события",
        tickers: ["SPY", "TLT"],
        description: "Ключевые события марта 2025.",
      },
    ],
  },
  {
    id: "cdef9012",
    title: "Февральский анализ",
    youtubeLink: "https://www.youtube.com/watch?v=example10",
    date: "28 февраля 2025",
    sections: [
      {
        timestamp: "00:02:30",
        title: "Февральские тренды",
        tickers: ["SPY", "GLD"],
        description: "Анализ февральских трендов.",
      },
    ],
  },
  {
    id: "ghij3456",
    title: "Январский старт",
    youtubeLink: "https://www.youtube.com/watch?v=example11",
    date: "10 января 2025",
    sections: [
      {
        timestamp: "00:01:20",
        title: "Начало года",
        tickers: ["SPY", "QQQ"],
        description: "Анализ начала 2025 года.",
      },
    ],
  },
]
