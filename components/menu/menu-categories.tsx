"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Coffee, Sandwich, Cookie, Snowflake } from "lucide-react"

export function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState("coffee")

  const categories = [
    { id: "coffee", name: "Hot Coffee", icon: Coffee },
    { id: "cold", name: "Cold Drinks", icon: Snowflake },
    { id: "food", name: "Food", icon: Sandwich },
    { id: "pastries", name: "Pastries", icon: Cookie },
  ]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full ${
                activeCategory === category.id
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
              }`}
            >
              <category.icon className="h-5 w-5 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
