"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The best coffee experience I've ever had! The Ethiopian Yirgacheffe is absolutely divine. The staff is knowledgeable and passionate about their craft.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Local Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Brew & Bean has become my daily ritual. The consistency in quality and the warm atmosphere make it the perfect place to start my day.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Food Blogger",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As someone who reviews coffee shops professionally, I can confidently say Brew & Bean sets the gold standard. Exceptional beans, expert brewing, perfect ambiance.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what coffee lovers are saying about their Brew & Bean experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="h-12 w-12 text-amber-500 mx-auto mb-6" />

              <div className="mb-8">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentTestimonial].rating ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-amber-500 w-8" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
