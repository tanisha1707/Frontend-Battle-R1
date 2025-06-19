import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coffee, Users, Truck, GraduationCap, Calendar, Gift } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Coffee,
      title: "Custom Roasting",
      description: "Personalized coffee blends roasted to your exact specifications and preferences.",
      features: ["Single origin options", "Custom blend creation", "Roast level selection", "Packaging options"],
    },
    {
      icon: Users,
      title: "Corporate Catering",
      description: "Professional coffee service for your office meetings, conferences, and events.",
      features: ["On-site barista service", "Equipment rental", "Bulk coffee supply", "Custom branding"],
    },
    {
      icon: Truck,
      title: "Mobile Coffee Cart",
      description: "Bring the coffee shop experience directly to your location with our mobile service.",
      features: ["Event coverage", "Flexible scheduling", "Full beverage menu", "Professional setup"],
    },
    {
      icon: GraduationCap,
      title: "Coffee Education",
      description: "Learn the art of coffee making with our comprehensive training programs.",
      features: ["Barista training", "Home brewing classes", "Cupping sessions", "Coffee appreciation"],
    },
    {
      icon: Calendar,
      title: "Private Events",
      description: "Host your special occasions in our cozy space with personalized service.",
      features: ["Venue rental", "Custom menus", "Event planning", "Audio/visual setup"],
    },
    {
      icon: Gift,
      title: "Corporate Gifts",
      description: "Impress clients and employees with premium coffee gift packages.",
      features: ["Custom packaging", "Bulk discounts", "Seasonal selections", "Branded merchandise"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive coffee solutions tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover-lift bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-amber-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
