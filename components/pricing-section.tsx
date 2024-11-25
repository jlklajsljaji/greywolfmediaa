import { Check } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function PricingSection() {
  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading">
            Our Business Solution Package
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to establish and grow your online presence
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-800">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="flex flex-col sm:flex-row justify-between items-baseline">
              <div>
                <h3 className="text-3xl font-semibold text-purple-400">Complete Business Package</h3>
                <p className="mt-2 text-gray-400">All-in-one solution for your business needs</p>
              </div>
              <p className="text-5xl font-extrabold mt-4 sm:mt-0">
                <span className="text-pink-500">$1,599</span>
              </p>
            </div>
          </div>
          <div className="px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
            <ul className="mt-8 space-y-4 grid sm:grid-cols-2 gap-x-8">
              <PricingItem>Website creation</PricingItem>
              <PricingItem>Social media account setup</PricingItem>
              <PricingItem>1 year hosting included</PricingItem>
              <PricingItem>Google Business listing</PricingItem>
              <PricingItem>Custom domain email</PricingItem>
              <PricingItem>1 year free support</PricingItem>
            </ul>
            <div className="mt-10">
              <Button className="w-full text-lg py-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-200" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <Check className="h-6 w-6 text-green-400" />
      </div>
      <p className="ml-3 text-base text-gray-300">{children}</p>
    </li>
  )
}

