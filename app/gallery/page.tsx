import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <GalleryHero />
      <GalleryGrid />
    </div>
  )
}
