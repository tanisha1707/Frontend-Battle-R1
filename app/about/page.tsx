import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <TeamSection />
    </div>
  )
}
