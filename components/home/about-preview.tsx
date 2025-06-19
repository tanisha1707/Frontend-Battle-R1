import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Users, Coffee, Leaf } from "lucide-react"

export function AboutPreview() {
  const stats = [
    { icon: Coffee, value: "50K+", label: "Cups Served Daily" },
    { icon: Users, value: "10K+", label: "Happy Customers" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Leaf, value: "100%", label: "Organic Beans" },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Founded in 2020 with a passion for exceptional coffee, Brew & Bean has grown from a small local roastery
                to a beloved coffee destination. We source our beans directly from farmers, ensuring fair trade and
                sustainable practices.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Every cup tells a story of dedication, craftsmanship, and the pursuit of the perfect brew. Join us on
                this journey of flavor and discovery.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg glass-effect">
                  <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Learn More About Us
            </Button>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden blob-shape">
                  <Image src="/our story 1.webp" alt="Coffee beans" fill className="object-cover" />
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden blob-shape">
                  <Image
                    src="/our story 2.jpeg"
                    alt="Coffee brewing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-32 rounded-2xl overflow-hidden blob-shape">
                  <Image
                    src="/our story 2.jpeg"
                    alt="Barista at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden blob-shape">
                  <Image
                    src="/our story 1.webp"
                    alt="Coffee shop interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500/20 rounded-full floating" />
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500/20 rounded-full floating"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
