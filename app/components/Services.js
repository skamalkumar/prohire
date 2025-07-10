import { Search, Users, TrendingUp, Settings, Target, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "Find top-tier executives and senior leadership talent for your organization with our comprehensive search process.",
      features: ["C-level recruitment", "Board positions", "Senior management", "Succession planning"],
      color: "blue"
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions for all levels, from entry-level to mid-management positions.",
      features: ["Full-cycle recruitment", "Candidate screening", "Interview coordination", "Offer negotiation"],
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "HR Consulting",
      description: "Strategic HR advisory services to optimize your human resources and organizational effectiveness.",
      features: ["HR strategy", "Policy development", "Performance management", "Organizational design"],
      color: "purple"
    },
    {
      icon: Settings,
      title: "Recruitment Process Outsourcing",
      description: "Complete outsourcing of your recruitment function with dedicated teams and processes.",
      features: ["Dedicated RPO team", "Scalable solutions", "Cost optimization", "Process improvement"],
      color: "indigo"
    },
    {
      icon: Target,
      title: "Industry Expertise",
      description: "Specialized recruitment services across various industries with deep sector knowledge.",
      features: ["IT & Technology", "Healthcare", "Finance", "Manufacturing"],
      color: "red"
    },
    {
      icon: Zap,
      title: "HR Technology",
      description: "Leverage cutting-edge HR technology solutions to streamline your recruitment and HR processes.",
      features: ["ATS implementation", "HR analytics", "Digital transformation", "Process automation"],
      color: "yellow"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {"Comprehensive HR solutions tailored to meet your organization's unique needs and drive success"}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-orange-300 group"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-800 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-green-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <Image 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Professional HR services and consulting"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Ready to Transform Your Hiring Process?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                {"Let our expert team help you find the perfect talent and optimize your HR operations. Contact us today for a free consultation."}
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
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
