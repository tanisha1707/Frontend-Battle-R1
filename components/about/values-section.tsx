import { Leaf, Heart, Award, Users } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We are committed to environmental responsibility and sustainable sourcing practices.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every cup is crafted with love and dedication to delivering the perfect coffee experience.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on quality, from bean selection to the final brew in your cup.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections and fostering a sense of community through shared coffee experiences.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            These core values guide everything we do, from sourcing our beans to serving our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover-lift">
              <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
