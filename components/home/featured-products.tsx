"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart, Heart, Zap, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([])

  const products = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe",
      description: "Bright, floral notes with citrus undertones",
      price: 24.99,
      rating: 4.8,
      image: "/FT1.jpeg",
      badge: "Best Seller",
      badgeColor: "bg-red-500",
    },
    {
      id: 2,
      name: "Colombian Supremo",
      description: "Rich, full-bodied with chocolate notes",
      price: 22.99,
      rating: 4.7,
      image: "/FT2.jpeg",
      badge: "Premium",
      badgeColor: "bg-purple-500",
    },
    {
      id: 3,
      name: "Brazilian Santos",
      description: "Smooth, nutty flavor with low acidity",
      price: 19.99,
      rating: 4.6,
      image: "/FT3.jpeg",
      badge: "Popular",
      badgeColor: "bg-blue-500",
    },
    {
      id: 4,
      name: "Jamaican Blue",
      description: "Mild, sweet flavor with perfect balance",
      price: 49.99,
      rating: 4.9,
      image: "/FT4.jpeg",
      badge: "Exclusive",
      badgeColor: "bg-amber-500",
    },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-amber-50/30 to-orange-50/20 dark:from-coffee-dark dark:via-coffee-medium/50 dark:to-cappuccino/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="text-gradient">Coffee</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of premium coffee beans from the world's finest growing regions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 100}>
              <Card className="group card-enhanced hover-lift bg-white/80 dark:bg-coffee-medium/80 border-0 shadow-xl overflow-hidden backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <span
                      className={`${product.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-coffee-dark/90 rounded-full hover:bg-white dark:hover:bg-coffee-dark transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Heart
                      className={`h-5 w-5 transition-colors duration-300 ${
                        favorites.includes(product.id)
                          ? "text-red-500 fill-current"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button size="sm" className="btn-coffee shadow-lg">
                      <Zap className="h-4 w-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 transition-colors duration-200 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2 font-medium">
                      ({product.rating})
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-amber-600">${product.price}</span>
                    <Button size="sm" className="btn-coffee hover-lift">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-16">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full hover-lift shadow-lg"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
