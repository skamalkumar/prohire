"use client";
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}