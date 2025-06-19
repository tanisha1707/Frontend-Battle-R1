import Image from "next/image"
import { Calendar, MapPin, Award } from "lucide-react"

export function OurStory() {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started as a small roastery with a big dream",
      icon: Calendar,
    },
    {
      year: "2021",
      title: "First Location",
      description: "Opened our flagship store in downtown",
      icon: MapPin,
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Won Best Coffee Shop of the Year",
      icon: Award,
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From humble beginnings to becoming a beloved coffee destination, our story is one of passion, dedication,
            and the pursuit of the perfect cup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                It all started in 2020 when our founder, a passionate coffee enthusiast, decided to turn their love for
                exceptional coffee into a mission to share that passion with the world.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We began by sourcing the finest beans directly from farmers, building relationships based on trust,
                quality, and fair trade practices. Our commitment to sustainability and ethical sourcing remains at the
                heart of everything we do.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Today, we're proud to serve thousands of coffee lovers daily, each cup crafted with the same attention
                to detail and passion that started it all.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/ourjourney.jpeg"
                  alt="Coffee roasting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-2xl overflow-hidden">
                <Image src="/ourjourney.jpeg" alt="Coffee beans" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-32 rounded-2xl overflow-hidden">
                <Image src="/ourjourney.jpeg" alt="Barista" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/ourjourney.jpeg" alt="Coffee shop" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <milestone.icon className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
