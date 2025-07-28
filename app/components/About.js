import { Award, Target, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Successful Placements",
      color: "blue"
    },
    {
      icon: Award,
      number: "95%",
      label: "Client Satisfaction",
      color: "green"
    },
    {
      icon: Target,
      number: "30+",
      label: "Partner Companies",
      color: "purple"
    },
    {
      icon: TrendingUp,
      // number: "5+",
      label: "Established in 2025",
      color: "indigo"
    }
  ]

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every recruitment and consulting engagement, delivering exceptional results."
    },
    {
      title: "Integrity",
      description: "Our business is built on trust, transparency, and ethical practices in all our interactions."
    },
    {
      title: "Innovation",
      description: "We embrace innovative approaches and technologies to stay ahead in the evolving HR landscape."
    },
    {
      title: "Partnership",
      description: "We build long-term partnerships with our clients, understanding their unique needs and culture."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About ProHire HR Solution LLP
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in recruitment and HR consulting, dedicated to connecting talent with opportunity
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Building Bridges Between Talent and Success
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ProHire HR Solution LLP is a leading recruitment and HR consulting firm with a proven track record 
                of helping organizations find the right talent and optimize their human resources. Our expertise 
                spans across various industries and job functions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to transform the recruitment landscape, we combine deep industry knowledge 
                with innovative approaches to deliver exceptional results. Our team of experienced consultants 
                understands the unique challenges faced by modern businesses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that the right talent is the foundation of every successful organization. Our 
                comprehensive approach ensures that we not only find candidates with the right skills but 
                also those who align with your company culture and values.
              </p>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              {/* About Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="HR team collaboration and consulting"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h4>
                <p className="text-gray-600">
                  To empower organizations with exceptional talent and strategic HR solutions that drive 
                  sustainable growth and success.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h4>
                <p className="text-gray-600">
                  To be the most trusted and innovative HR partner, transforming how organizations 
                  attract, develop, and retain top talent.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-800" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-l-4 hover:border-l-orange-400">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}