import ServiceCard from '@/components/ServiceCard'
import { Shield, Code, Brain, Cog } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Cyber Security',
      description: 'Protect your enterprise with advanced security solutions and threat detection.',
      icon: <Shield size={32} />,
      href: '/services/cyber-security',
      features: ['IAM & Access Control', 'Threat Detection', 'Compliance Management']
    },
    {
      title: 'Software Development',
      description: 'Custom web and mobile applications built with modern frameworks.',
      icon: <Code size={32} />,
      href: '/services/software-development',
      features: ['Full-Stack Development', 'Cloud-Native Solutions', 'Legacy Modernization']
    },
    {
      title: 'AI Agents & Solutions',
      description: 'Intelligent automation and machine learning tailored for your business.',
      icon: <Brain size={32} />,
      href: '/services/ai-agents',
      features: ['RPA & Automation', 'Predictive Analytics', 'GenAI Solutions']
    },
    {
      title: 'IT Solutions',
      description: 'Enterprise infrastructure and managed services for operational excellence.',
      icon: <Cog size={32} />,
      href: '/services/it-solutions',
      features: ['Cloud Migration', 'Managed Services', 'Digital Transformation']
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-gray-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise Technology Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Empower your business with cutting-edge cybersecurity, software development, AI solutions, and IT infrastructure services.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/services/cyber-security" className="btn-primary">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-secondary bg-white text-primary border-white hover:bg-gray-100">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to meet the unique needs of modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can help you achieve your technology goals.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}