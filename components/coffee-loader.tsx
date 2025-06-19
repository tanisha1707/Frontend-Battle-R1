"use client"

import { useState, useEffect } from "react"
import { Coffee, Heart } from "lucide-react"

interface CoffeeLoaderProps {
  onComplete: () => void
}

export function CoffeeLoader({ onComplete }: CoffeeLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Auto-progress from 0 to 100%
    const startTime = Date.now()
    const duration = 4000 // 4 seconds total loading time

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)

      setProgress(newProgress)

      if (newProgress >= 100) {
        // Show completion message immediately when reaching 100%
        setShowMessage(true)

        // Auto-redirect after showing message for 2 seconds
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(() => {
            onComplete()
          }, 500) // Small delay for exit animation
        }, 2000)
      } else {
        // Continue updating progress
        requestAnimationFrame(updateProgress)
      }
    }

    // Start the progress animation
    requestAnimationFrame(updateProgress)
  }, [onComplete])

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  // Get loading message based on progress
  const getLoadingMessage = () => {
    if (progress < 25) return "Selecting premium beans..."
    if (progress < 50) return "Roasting to perfection..."
    if (progress < 75) return "Brewing your experience..."
    if (progress < 100) return "Almost ready..."
    return "Complete!"
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        isComplete ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Background with coffee gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark via-coffee-medium to-cappuccino">
        {/* Animated coffee beans floating */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-8 h-8 bg-amber-500/20 rounded-full floating animate-pulse" />
          <div className="absolute top-40 right-32 w-6 h-6 bg-caramel/30 rounded-full floating-delayed animate-pulse" />
          <div className="absolute bottom-32 left-40 w-10 h-10 bg-orange-500/15 rounded-full floating-slow animate-pulse" />
          <div className="absolute bottom-20 right-20 w-7 h-7 bg-amber-400/25 rounded-full floating animate-pulse" />
          <div className="absolute top-60 left-60 w-5 h-5 bg-caramel/20 rounded-full floating-delayed animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 text-center">
        {/* Main loader container */}
        <div className="relative mb-8">
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/30 to-caramel/30 blur-xl animate-pulse"
            style={{ width: "140px", height: "140px", margin: "-10px" }}
          />

          {/* Main circular progress */}
          <div className="relative w-32 h-32 mx-auto">
            {/* Background circle */}
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="rgba(245, 222, 179, 0.2)" strokeWidth="3" fill="none" />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#coffeeGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-100 ease-out"
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d2691e" />
                  <stop offset="50%" stopColor="#f5deb3" />
                  <stop offset="100%" stopColor="#d2691e" />
                </linearGradient>
              </defs>
            </svg>

            {/* Coffee cup icon in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Coffee className="w-12 h-12 text-amber-400 coffee-steam animate-pulse" />
                {/* Enhanced steam animation */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-6 bg-gradient-to-t from-transparent via-white/60 to-transparent rounded-full animate-pulse opacity-70" />
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 translate-x-1">
                  <div
                    className="w-1 h-8 bg-gradient-to-t from-transparent via-white/40 to-transparent rounded-full animate-pulse opacity-50"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-x-1">
                  <div
                    className="w-1 h-7 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-full animate-pulse opacity-40"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand name */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">Brew & Bean</h1>
          <p className="text-cream/80 text-lg font-medium">Premium Coffee Experience</p>
        </div>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="h-2 bg-coffee-light/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-caramel to-amber-600 rounded-full transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
        </div>

        {/* Percentage display */}
        <div className="text-3xl font-bold text-cream mb-4">{Math.floor(progress)}%</div>

        {/* Loading text */}
        <div className="text-cream/70 text-lg font-medium min-h-[28px]">{!showMessage && getLoadingMessage()}</div>

        {/* Completion message overlay */}
        {showMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="bg-gradient-to-r from-coffee-medium/95 to-cappuccino/95 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/30 shadow-2xl animate-in fade-in zoom-in duration-500">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Coffee className="w-8 h-8 text-amber-400 mr-3 coffee-steam" />
                  <Heart className="w-6 h-6 text-red-400 animate-pulse" />
                </div>
                <h2 className="text-3xl font-bold text-gradient mb-2">Let's Have a Coffee!</h2>
                <p className="text-cream/80 text-lg">Welcome to your premium coffee experience</p>
                <div className="mt-4 flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
                <div className="mt-3 text-cream/60 text-sm">Redirecting to home...</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
