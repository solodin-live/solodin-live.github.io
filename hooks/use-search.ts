"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/config/constants"

export function useSearch() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSearch = useCallback(
    async (searchQuery?: string) => {
      const searchTerm = searchQuery || query
      if (!searchTerm.trim()) return

      setIsLoading(true)
      try {
        router.push(ROUTES.ticker(searchTerm.trim()))
      } finally {
        setIsLoading(false)
      }
    },
    [query, router],
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      handleSearch()
    },
    [handleSearch],
  )

  return {
    query,
    setQuery,
    isLoading,
    handleSearch,
    handleSubmit,
  }
}
