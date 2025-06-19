"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Coffee } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-enhanced navbar-scrolled" : "navbar-enhanced"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Coffee className="h-10 w-10 text-amber-500 group-hover:rotate-12 transition-all duration-500 coffee-steam" />
            </div>
            <span className="text-2xl font-bold text-gradient">Brew & Bean</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-amber-400 ${
                  pathname === item.href ? "text-amber-400 active" : "text-gray-300 hover:text-amber-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-white hover:bg-amber-500/20 hover:text-amber-400 transition-all duration-300 hover:scale-110"
            >
              {theme === "light" ? <Sun className="h-6 w-6 text-white" /> : <Moon className="h-6 w-6 text-white" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-amber-500/20 hover:text-amber-400 transition-all duration-300 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 glass-effect border-t border-amber-500/20 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 stagger-item ${
                    pathname === item.href
                      ? "text-amber-400 bg-amber-500/10"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
