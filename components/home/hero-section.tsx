"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { ParallaxContainer } from "@/components/parallax-container"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Premium Coffee Experience",
      subtitle: "Crafted with Passion",
      description:
        "Discover the finest coffee blends from around the world, expertly roasted and brewed to perfection.",
    },
    {
      title: "Artisan Coffee Roasting",
      subtitle: "From Bean to Cup",
      description: "Experience the journey of coffee from carefully selected beans to your perfect cup.",
    },
    {
      title: "Coffee Culture Redefined",
      subtitle: "More Than Just Coffee",
      description: "Join our community of coffee lovers and discover what makes great coffee truly exceptional.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

      {/* Parallax Background Elements */}
      <ParallaxContainer speed={0.2} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-amber-500/10 rounded-full blob-shape floating" />
        <div className="absolute bottom-32 right-16 w-56 h-56 bg-orange-500/8 rounded-full blob-shape floating-delayed" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-500/12 rounded-full blob-shape floating-slow" />
      </ParallaxContainer>

      <ParallaxContainer speed={0.4} className="absolute inset-0">
        <div className="absolute top-40 right-20 w-24 h-24 bg-caramel/15 rounded-full floating" />
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-cappuccino/10 rounded-full floating-delayed" />
      </ParallaxContainer>

      {/* Coffee Splash with Parallax */}
      <ParallaxContainer speed={0.1} className="absolute right-0 top-0 w-1/2 h-full opacity-20">
        <Image
          src="/heroPage.jpeg"
          alt="Coffee splash"
          fill
          className="object-cover object-left"
        />
      </ParallaxContainer>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Animated text content */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl text-amber-300 font-medium tracking-wide animate-fade-in">
              {slides[currentSlide].subtitle}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block hover-glow">{slides[currentSlide].title.split(" ")[0]}</span>
              <span className="block text-gradient coffee-steam">
                {slides[currentSlide].title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="btn-coffee px-10 py-6 text-xl font-semibold rounded-full hover-lift group shadow-2xl"
            >
              Explore Menu
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white px-10 py-6 text-xl font-semibold rounded-full hover-lift group backdrop-blur-sm"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Watch Story
            </Button>
          </div>

          {/* Enhanced Slide indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-4 rounded-full transition-all duration-500 hover:scale-110 ${
                  index === currentSlide
                    ? "bg-amber-500 w-12 shadow-lg shadow-amber-500/50"
                    : "bg-white/30 w-4 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
        <p className="text-white/70 text-sm mt-2 font-medium">Scroll Down</p>
      </div>
    </section>
  )
}
