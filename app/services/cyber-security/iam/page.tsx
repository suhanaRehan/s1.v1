import Link from 'next/link'
import { Lock, Check, Users, Shield } from 'lucide-react'

export const metadata = {
  title: 'Identity & Access Management (IAM) | SoftwareSphere',
  description: 'Enterprise IAM solutions with user authentication and privileged access management.',
}

export default function IAMPage() {
  const benefits = [
    'Enhanced security with multi-factor authentication',
    'Granular role-based access control',
    'Simplified compliance with regulatory requirements',
    'Reduced risk of unauthorized access',
    'Improved user experience with single sign-on',
    'Audit trails for accountability',
  ]

  const process = [
    {
      step: 1,
      title: 'Assessment',
      description: 'We analyze your current identity and access infrastructure to identify gaps and opportunities.'
    },
    {
      step: 2,
      title: 'Strategy',
      description: 'We develop a comprehensive IAM strategy aligned with your business objectives and security requirements.'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Our team deploys and configures your IAM solution with minimal disruption to operations.'
    },
    {
      step: 4,
      title: 'Support',
      description: 'Ongoing monitoring, optimization, and support to ensure your IAM solution remains effective.'
    },
  ]

  return (
    <div>
      {/* Breadcrumb & Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/services/cyber-security" className="text-blue-600 hover:underline">Cyber Security</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-600">Identity & Access Management</span>
          </div>

          <h1 className="text-4xl font-bold mt-6 mb-4">Identity & Access Management (IAM)</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Robust user authentication, role-based access controls, and privileged access management solutions designed for enterprise security.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <p className="text-gray-600 mb-6">
                Our Identity & Access Management solutions provide comprehensive security for user identities and access privileges across your organization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Users size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Multi-factor authentication and strong password policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Privileged access management for sensitive accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Single sign-on (SSO) for seamless user experience</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 h-96 flex items-center justify-center">
              <Lock size={100} className="text-blue-400 opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 items-start">
                <Check size={24} className="text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Strengthen Your Identity Security</h2>
          <p className="text-lg mb-8 opacity-90">
            Get a customized IAM assessment from our security experts.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}