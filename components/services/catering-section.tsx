import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function CateringSection() {
  const cateringFeatures = [
    "Professional barista service",
    "Premium coffee and espresso drinks",
    "Fresh pastries and light bites",
    "Custom menu planning",
    "Full setup and cleanup",
    "Flexible package options",
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Event <span className="text-gradient">Catering</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Make your next event memorable with our professional coffee catering service. From intimate gatherings
                to large corporate events, we bring the coffee shop experience directly to you.
              </p>
            </div>

            <div className="space-y-4">
              {cateringFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Get Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
              >
                View Packages
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/services1.jpeg"
                    alt="Catering setup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <Image
                    src="/services2.webp"
                    alt="Coffee service"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <Image src="/services3.jpg" alt="Event coffee" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/services4.webp"
                    alt="Corporate event"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

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
