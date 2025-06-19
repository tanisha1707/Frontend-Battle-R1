"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Plus, Heart, Clock, Flame } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function MenuGrid() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [activeCategory, setActiveCategory] = useState("all")

  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      description: "Rich, bold shot of pure coffee perfection with crema",
      price: 3.5,
      category: "coffee",
      image: "/Menu1.jpeg",
      rating: 4.8,
      badges: ["Popular"],
      prepTime: "2 min",
      intensity: 5,
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Perfect balance of espresso, steamed milk, and velvety foam",
      price: 4.75,
      category: "coffee",
      image: "/Menu2.jpeg",
      rating: 4.9,
      badges: ["Best Seller"],
      prepTime: "3 min",
      intensity: 3,
    },
    {
      id: 3,
      name: "Latte",
      description: "Smooth espresso with steamed milk and delicate foam art",
      price: 4.5,
      category: "coffee",
      image: "/Menu3.jpeg",
      rating: 4.7,
      badges: ["Classic"],
      prepTime: "4 min",
      intensity: 2,
    },
    {
      id: 4,
      name: "Americano",
      description: "Espresso shots with hot water for a clean, bold taste",
      price: 3.75,
      category: "coffee",
      image: "/Menu4.jpeg",
      rating: 4.6,
      badges: [],
      prepTime: "2 min",
      intensity: 4,
    },
    {
      id: 5,
      name: "Mocha",
      description: "Rich chocolate and espresso with steamed milk and whipped cream",
      price: 5.25,
      category: "coffee",
      image: "/Menu5.jpg",
      rating: 4.8,
      badges: ["Sweet"],
      prepTime: "5 min",
      intensity: 3,
    },
    {
      id: 6,
      name: "Iced Coffee",
      description: "Cold brew coffee served over ice with optional milk",
      price: 4.0,
      category: "cold",
      image: "/Menu6.jpeg",
      rating: 4.5,
      badges: ["Refreshing"],
      prepTime: "1 min",
      intensity: 3,
    },
  ]

  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const categories = [
    { id: "all", name: "All Items" },
    { id: "coffee", name: "Hot Coffee" },
    { id: "cold", name: "Cold Drinks" },
    { id: "food", name: "Food" },
    { id: "pastries", name: "Pastries" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 dark:from-coffee-dark dark:via-coffee-medium/30 dark:to-cappuccino/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.id
                    ? "btn-coffee shadow-lg"
                    : "border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white hover:shadow-lg"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100}>
              <Card className="group menu-item card-enhanced hover-lift bg-white/90 dark:bg-coffee-medium/90 border-0 shadow-xl overflow-hidden backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} className="bg-amber-500 text-white font-bold shadow-lg">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-coffee-dark/90 rounded-full hover:bg-white dark:hover:bg-coffee-dark transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Heart
                      className={`h-5 w-5 transition-colors duration-300 ${
                        favorites.includes(item.id) ? "text-red-500 fill-current" : "text-gray-600 dark:text-gray-300"
                      }`}
                    />
                  </button>

                  {/* Quick Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">{item.prepTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Flame className="h-4 w-4" />
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < item.intensity ? "bg-orange-400" : "bg-gray-400"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 transition-colors duration-200 ${
                            i < Math.floor(item.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2 font-medium">({item.rating})</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Price and Add Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-amber-600">${item.price.toFixed(2)}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{item.prepTime} prep time</span>
                    </div>
                    <Button className="btn-coffee hover-lift shadow-lg group">
                      <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More Button */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-12 py-4 text-lg font-semibold rounded-full hover-lift shadow-lg"
            >
              Load More Items
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
