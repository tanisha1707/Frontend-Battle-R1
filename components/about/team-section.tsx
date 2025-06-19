import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & Head Roaster",
      image: "/founder1.webp",
      bio: "With 15 years of experience in coffee roasting, Alex brings passion and expertise to every blend.",
    },
    {
      name: "Sarah Chen",
      role: "Head Barista",
      image: "/founder3.webp",
      bio: "Sarah is a certified Q Grader and coffee competition champion, ensuring every cup meets our high standards.",
    },
    {
      name: "Marcus Johnson",
      role: "Sourcing Manager",
      image: "/founder1.webp",
      bio: "Marcus travels the world to build relationships with coffee farmers and source the finest beans.",
    },
    {
      name: "Emma Wilson",
      role: "Community Manager",
      image: "/founder3.webp",
      bio: "Emma creates connections within our coffee community and organizes events that bring people together.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Behind every great cup of coffee is a passionate team dedicated to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="group hover-lift bg-white dark:bg-gray-700 border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
