import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Smartphone, Download, Star, Gift } from "lucide-react"

export function AppDownload() {
  return (
    <section className="py-20 coffee-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500/10 rounded-full blob-shape floating" />
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-orange-500/10 rounded-full blob-shape floating"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get Our <span className="text-amber-300">Mobile App</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Order ahead, earn rewards, and never wait in line again. Download the Brew & Bean app and enjoy
                exclusive perks and personalized recommendations.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Order Ahead</h3>
                  <p className="text-gray-300">Skip the line and pick up your order when it's ready</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Earn Rewards</h3>
                  <p className="text-gray-300">Get points with every purchase and unlock exclusive rewards</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Gift className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Exclusive Offers</h3>
                  <p className="text-gray-300">Access app-only deals and seasonal promotions</p>
                </div>
              </div>
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl hover-lift">
                <Download className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>

              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl hover-lift">
                <Download className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative">
            <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                <Image
                  src="/Mobileapp.jpeg"
                  alt="Brew & Bean Mobile App"
                  fill
                  className="object-cover"
                />
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent" />
              </div>
            </div>

            {/* Floating elements around phone */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400/30 rounded-full floating coffee-steam" />
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400/30 rounded-full floating"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
