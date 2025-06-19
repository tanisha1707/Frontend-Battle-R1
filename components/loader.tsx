"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-coffee-dark via-coffee-medium to-cappuccino">
      <div className="text-center">
        <div className="loader mb-8">
          <div className="coffee-cup"></div>
        </div>
        <div className="loading-text">Brewing Excellence...</div>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-caramel rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-caramel rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-caramel rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}
