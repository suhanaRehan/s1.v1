import ServiceCard from '@/components/ServiceCard'
import { Cloud, Server, BarChart3, Zap, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'IT Solutions & Managed Services | SoftwareSphere',
  description: 'Enterprise IT infrastructure, cloud migration, and digital transformation services.',
}

export default function ITSolutionsPage() {
  const services = [
    {
      title: 'IT Infrastructure',
      description: 'Cloud migration, data center virtualization, and hybrid IT architecture design.',
      icon: <Cloud size={32} />,
      href: '/services/it-solutions/infrastructure',
      features: ['Cloud Migration', 'Virtualization', 'Hybrid Architecture']
    },
    {
      title: 'Managed Services',
      description: 'Comprehensive MCaaS, MSS, 24/7 help desk, and real-time monitoring.',
      icon: <Server size={32} />,
      href: '/services/it-solutions/managed-services',
      features: ['Managed Cloud Services', 'Help Desk Support', 'Infrastructure Monitoring']
    },
    {
      title: 'Enterprise Solutions',
      description: 'ERP, CRM, warehouse automation, and business intelligence dashboards.',
      icon: <BarChart3 size={32} />,
      href: '/services/it-solutions/enterprise-solutions',
      features: ['ERP Implementation', 'CRM Solutions', 'Business Intelligence']
    },
    {
      title: 'Digital Transformation',
      description: 'Technology strategy consulting, modernization roadmaps, and change management.',
      icon: <Zap size={32} />,
      href: '/services/it-solutions/digital-transformation',
      features: ['Technology Strategy', 'Modernization Planning', 'Change Management']
    },
    {
      title: 'IT Operations',
      description: 'System administration, backup, disaster recovery, and capacity planning.',
      icon: <Users size={32} />,
      href: '/services/it-solutions/it-operations',
      features: ['System Administration', 'Disaster Recovery', 'Performance Optimization']
    },
    {
      title: 'Network Design & Optimization',
      description: 'Advanced network architecture for performance, security, and scalability.',
      icon: <Cloud size={32} />,
      href: '/services/it-solutions/network-design',
      features: ['Network Architecture', 'Performance Optimization', 'Security Design']
    },
  ]

  return (
    <div>
      {/* Breadcrumb & Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">Home</Link>
          <span className="text-gray-600 mx-2">/</span>
          <span className="text-gray-600">IT Solutions</span>

          <h1 className="text-4xl font-bold mt-6 mb-4">IT Solutions & Managed Services</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Ensuring operational excellence, business continuity, and seamless digital transformation across your enterprise infrastructure.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">24/7 Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Gold Support</h3>
              <p className="text-gray-600 mb-4">
                Priority support with response times under 1 hour.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ 24/7 availability</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Priority ticket routing</li>
                <li>✓ Quarterly business reviews</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow border-t-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-4">Platinum Support</h3>
              <p className="text-gray-600 mb-4">
                Critical support with response times under 30 minutes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ 24/7/365 availability</li>
                <li>✓ Dedicated support team</li>
                <li>✓ Proactive monitoring</li>
                <li>✓ Monthly strategic reviews</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Premium Support</h3>
              <p className="text-gray-600 mb-4">
                Standard support with response times under 4 hours.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Business hours coverage</li>
                <li>✓ Ticketing system</li>
                <li>✓ Monthly reporting</li>
                <li>✓ Email & phone support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}