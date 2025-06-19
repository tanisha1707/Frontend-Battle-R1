import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-gradient">Brew & Bean</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                We're more than just a coffee shop. We're a community of passionate coffee lovers dedicated to bringing
                you the finest coffee experience, one cup at a time.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden blob-shape">
              <Image
                src="/aboutpage.jpeg"
                alt="Coffee shop interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-500/20 rounded-full floating" />
            <div
              className="absolute -top-6 -right-6 w-16 h-16 bg-orange-500/20 rounded-full floating"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
