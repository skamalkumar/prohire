'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image 
              src="/ProHire New Logo without Name.png" 
              alt="ProHire HR Solution LLP Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">ProHire HR Solution</h1>
              <p className="text-sm text-gray-600">LLP</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium shadow-lg"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-800 transition-colors duration-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium text-left"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium text-left w-fit shadow-lg"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}