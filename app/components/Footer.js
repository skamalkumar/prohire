'use client'

import { Users, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Executive Search',
    'Talent Acquisition',
    'HR Consulting',
    'Recruitment Process Outsourcing',
    'Industry Expertise',
    'HR Technology'
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Hero Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image 
          src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Professional business team - ProHire HR Solution"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Dream Team?
            </h3>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Let ProHire HR Solution LLP help you find the perfect talent for your organization
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/ProHire New Logo without Name.png" 
                  alt="ProHire HR Solution LLP Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <div>
                  <h3 className="text-xl font-bold">ProHire HR Solution</h3>
                  <p className="text-gray-400 text-sm">LLP</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in recruitment and HR consulting, dedicated to connecting talent with opportunity and driving organizational success.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                 <MapPin className="h-5 w-5 text-orange-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Indore, Madhya Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                 <Phone className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-gray-400">+91 8370029986</p>
                    <p className="text-gray-400">+91 8878100511</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                 <Mail className="h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-gray-400">hr@prohirehr.online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 ProHire HR Solution LLP. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}