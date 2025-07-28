'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="bg-gradient-to-br from-orange-100 to-orange-200 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Your Trusted Partner in 
                  <span className="text-green-800"> HR Excellence</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  ProHire HR Solution LLP specializes in recruitment and HR consulting services, 
                  helping businesses find the right talent and optimize their human resources.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-green-800 text-white px-8 py-4 rounded-lg hover:bg-green-900 transition-all duration-200 flex items-center justify-center space-x-2 group font-medium shadow-lg"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={scrollToServices}
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200 font-medium shadow-lg"
                >
                  Our Services
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Expert Recruitment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">HR Consulting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Talent Management</span>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="lg:pl-8">
              <div className="relative">
                {/* Main Hero Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Professional business meeting - HR consulting"
                    width={800}
                    height={600}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-800">95%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">50+</div>
                          <div className="text-xs text-gray-600">Placements</div>
                        </div>
                        <div>
                          <div className="text-1xl font-bold text-green-700">Established In 2025</div>
                          {/* <div className="text-xs text-gray-600">Established In 2025</div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-300 rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}