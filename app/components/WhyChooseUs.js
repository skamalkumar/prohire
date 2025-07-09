import { Shield, Clock, Star, Users, Zap, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "Over 500 successful placements with 95% client satisfaction rate across diverse industries.",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Efficient recruitment process with average placement time of 2-3 weeks for most positions.",
      color: "green"
    },
    {
      icon: Star,
      title: "Industry Expertise",
      description: "Deep knowledge across IT, healthcare, finance, and manufacturing sectors.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Experienced consultants who understand your business needs and culture.",
      color: "indigo"
    },
    {
      icon: Zap,
      title: "Innovative Approach",
      description: "Leveraging latest HR technologies and data-driven insights for better outcomes.",
      color: "yellow"
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "Complete recruitment lifecycle management from sourcing to onboarding.",
      color: "red"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Understanding Requirements",
      description: "We begin by thoroughly understanding your specific needs, company culture, and role requirements."
    },
    {
      step: "02",
      title: "Candidate Sourcing",
      description: "Leveraging our extensive network and advanced sourcing techniques to find the best candidates."
    },
    {
      step: "03",
      title: "Screening & Assessment",
      description: "Comprehensive evaluation including technical skills, cultural fit, and career aspirations."
    },
    {
      step: "04",
      title: "Interview Coordination",
      description: "Seamless coordination of interviews with detailed feedback and communication."
    },
    {
      step: "05",
      title: "Offer & Onboarding",
      description: "Support throughout the offer process and ensuring smooth onboarding experience."
    }
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose ProHire HR Solution LLP?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for recruitment and HR consulting services
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-orange-300 group"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-800 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-green-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Process Section */}
          <div className="relative bg-gradient-to-br from-orange-50 to-green-50 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-5">
              <Image 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="HR recruitment process workflow"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Recruitment Process
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach that ensures we find the perfect match for your organization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-orange-300"></div>
                      <div className="w-0 h-0 border-l-4 border-l-orange-300 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to Experience the ProHire Difference?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their hiring process with our expertise.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-green-800 text-white px-8 py-4 rounded-lg hover:bg-green-900 transition-colors duration-200 font-medium shadow-lg"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}