"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Loader2 } from "lucide-react"
import { useSearch } from "@/hooks/use-search"
import { cn } from "@/lib/utils"
import type { SearchBarProps } from "@/types"

export default function SearchBar({
  placeholder = "Введите тикер или тему (например, SPY, нефть, ставки)",
  className,
}: SearchBarProps) {
  const { query, setQuery, isLoading, handleSubmit } = useSearch()

  return (
    <form onSubmit={handleSubmit} className={cn("flex w-full max-w-2xl mx-auto gap-2", className)}>
      <div className="flex items-center flex-grow group">
        <Search className="w-4 h-4 text-gray-400 ml-3 mr-2" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
          className="flex-grow bg-white/15 backdrop-blur-sm text-white placeholder:text-gray-300 border-white/20 focus:border-primary focus:ring-primary focus:bg-white/20 text-lg py-3 px-4"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading || !query.trim()}
        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-200 px-8 py-3 text-lg"
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Поиск"}
      </Button>
    </form>
  )
}
