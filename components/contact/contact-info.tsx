import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Coffee Street", "Bean City, BC 12345"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@brewandbean.com", "catering@brewandbean.com"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon-Fri: 7:00 AM - 9:00 PM", "Sat-Sun: 8:00 AM - 10:00 PM"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-400">Multiple ways to reach us. We're here to help!</p>
        </div>

        <div className="space-y-8">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover-lift"
            >
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                {item.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 dark:text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center hover:bg-amber-200 dark:hover:bg-amber-900/40 transition-colors"
            >
              <Facebook className="h-6 w-6 text-amber-600" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center hover:bg-amber-200 dark:hover:bg-amber-900/40 transition-colors"
            >
              <Instagram className="h-6 w-6 text-amber-600" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center hover:bg-amber-200 dark:hover:bg-amber-900/40 transition-colors"
            >
              <Twitter className="h-6 w-6 text-amber-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
