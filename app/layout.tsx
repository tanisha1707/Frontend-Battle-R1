import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LoadingProvider } from "@/components/loading-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brew & Bean - Premium Coffee Experience",
  description: "Discover the finest coffee blends and premium coffee experience at Brew & Bean",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <LoadingProvider>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
