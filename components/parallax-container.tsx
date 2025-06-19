"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ParallaxContainerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxContainer({ children, speed = 0.5, className = "" }: ParallaxContainerProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const scrolled = window.pageYOffset
      const parallax = scrolled * speed
      elementRef.current.style.transform = `translateY(${parallax}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} className={`parallax-element ${className}`}>
      {children}
    </div>
  )
}
