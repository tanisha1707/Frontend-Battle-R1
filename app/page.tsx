import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { AboutPreview } from "@/components/home/about-preview"
import { AppDownload } from "@/components/home/app-download"
import { Testimonials } from "@/components/home/testimonials"

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedProducts />
      <AboutPreview />
      <Testimonials />
      <AppDownload />
    </div>
  )
}
