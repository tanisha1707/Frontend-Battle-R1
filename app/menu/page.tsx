import { MenuHero } from "@/components/menu/menu-hero"
import { MenuCategories } from "@/components/menu/menu-categories"
import { MenuGrid } from "@/components/menu/menu-grid"

export default function MenuPage() {
  return (
    <div className="pt-16">
      <MenuHero />
      <MenuCategories />
      <MenuGrid />
    </div>
  )
}
