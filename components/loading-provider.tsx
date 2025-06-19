"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CoffeeLoader } from "./coffee-loader"

interface LoadingProviderProps {
  children: React.ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader")

    // For development/testing, you can comment out this check to always show loader
    if (hasSeenLoader) {
      setIsLoading(false)
      setShowContent(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    // Mark that user has seen the loader
    sessionStorage.setItem("hasSeenLoader", "true")

    // Start exit animation
    setIsLoading(false)

    // Show content after exit animation
    setTimeout(() => {
      setShowContent(true)
    }, 500)
  }

  // Show loader if loading
  if (isLoading) {
    return <CoffeeLoader onComplete={handleLoadingComplete} />
  }

  // Show content with fade-in animation
  return <div className={`transition-all duration-700 ${showContent ? "opacity-100" : "opacity-0"}`}>{children}</div>
}
