"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Latte art",
      category: "coffee",
      title: "Perfect Latte Art",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=400",
      alt: "Coffee shop interior",
      category: "interior",
      title: "Cozy Interior",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Coffee beans",
      category: "beans",
      title: "Premium Beans",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=500&width=600",
      alt: "Barista working",
      category: "people",
      title: "Expert Baristas",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=500",
      alt: "Espresso shot",
      category: "coffee",
      title: "Perfect Espresso",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=500",
      alt: "Coffee roasting",
      category: "process",
      title: "Roasting Process",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pastries display",
      category: "food",
      title: "Fresh Pastries",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=500&width=400",
      alt: "Coffee equipment",
      category: "equipment",
      title: "Professional Equipment",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Cappuccino",
      category: "coffee",
      title: "Classic Cappuccino",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=600&width=600",
      alt: "Coffee shop atmosphere",
      category: "interior",
      title: "Warm Atmosphere",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=500",
      alt: "Cold brew",
      category: "coffee",
      title: "Cold Brew Perfection",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=500&width=500",
      alt: "Coffee tasting",
      category: "people",
      title: "Coffee Tasting",
    },
  ]

  const categories = [
    { id: "all", name: "All" },
    { id: "coffee", name: "Coffee" },
    { id: "interior", name: "Interior" },
    { id: "people", name: "People" },
    { id: "process", name: "Process" },
    { id: "food", name: "Food" },
    { id: "equipment", name: "Equipment" },
    { id: "beans", name: "Beans" },
  ]

  const filteredImages = filter === "all" ? images : images.filter((image) => image.category === filter)

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full ${
                filter === category.id
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
