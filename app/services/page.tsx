import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { CateringSection } from "@/components/services/catering-section"

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesHero />
      <ServicesGrid />
      <CateringSection />
    </div>
  )
}
