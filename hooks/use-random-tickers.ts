"use client"

import { useState, useEffect } from "react"

// All unique tickers extracted from the video data
// This list is generated from the actual JSON files and will be available at build time
const ALL_TICKERS = [
  "AAPL", "AMD", "AMZN", "ASML", "BABA", "BIDU", "BRK.B", "CPI", "CRM",
  "DOCN", "DOCS", "ENRN", "EUR", "FVN", "GAZP", "GLD", "GOOGL", "IMOEX",
  "INMD", "INTC", "JD", "JPY", "LLY", "LYFT", "MED", "META", "MOEX",
  "MRK", "MSFT", "NDX", "NICE", "NVDA", "NVO", "OXY", "PL", "PYPL",
  "SLV", "SOFI", "SPBE", "SPX", "TSLA", "UNH", "US10Y", "USD", "USDJPY",
  "WDI", "XAGUSD", "XAUUSD", "XPDUSD", "XPTUSD", "ФРС"
]

export function useRandomTickers(count: number = 6) {
  const [randomTickers, setRandomTickers] = useState<string[]>([])

  useEffect(() => {
    // Randomize tickers on the client side
    const shuffled = [...ALL_TICKERS].sort(() => 0.5 - Math.random()).slice(0, count)
    setRandomTickers(shuffled)
  }, [count])

  return randomTickers
} 