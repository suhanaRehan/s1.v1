import ServiceCard from '@/components/ServiceCard'
import { Code, Layers, Zap, GitBranch, Database, TestTube2 } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Software Development Services | SoftwareSphere',
  description: 'Custom software development, modernization, and cloud-native solutions.',
}

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Web applications, mobile apps, and high-performance backend systems.',
      icon: <Code size={32} />,
      href: '/services/software-development/custom-software',
      features: ['Web Applications', 'Mobile Apps', 'Backend Systems']
    },
    {
      title: 'Full-Stack Development',
      description: 'Comprehensive frontend, backend, and database architectural design.',
      icon: <Layers size={32} />,
      href: '/services/software-development/full-stack',
      features: ['Frontend & Backend', 'API Development', 'Database Design']
    },
    {
      title: 'Legacy System Modernization',
      description: 'Migrate and modernize legacy systems to contemporary technology stacks.',
      icon: <Zap size={32} />,
      href: '/services/software-development/legacy-modernization',
      features: ['Code Migration', 'Architecture Redesign', 'Technical Debt Reduction']
    },
    {
      title: 'Cloud-Native Development',
      description: 'Containerization, serverless architectures, and Infrastructure as Code.',
      icon: <GitBranch size={32} />,
      href: '/services/software-development/cloud-native',
      features: ['Containerization', 'Serverless Apps', 'Infrastructure as Code']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated pipelines for continuous integration and deployment.',
      icon: <Database size={32} />,
      href: '/services/software-development/devops',
      features: ['CI/CD Pipelines', 'Infrastructure Automation', 'Deployment Optimization']
    },
    {
      title: 'QA & Testing',
      description: 'Comprehensive automated testing, performance testing, and security testing.',
      icon: <TestTube2 size={32} />,
      href: '/services/software-development/qa-testing',
      features: ['Automated Testing', 'Performance Testing', 'Security Testing']
    },
  ]

  return (
    <div>
      {/* Breadcrumb & Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">Home</Link>
          <span className="text-gray-600 mx-2">/</span>
          <span className="text-gray-600">Software Development</span>

          <h1 className="text-4xl font-bold mt-6 mb-4">Software Development Services</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            End-to-end engineering capabilities utilizing modern frameworks, agile practices, and cloud-native architectures.
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

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Development Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Agile Methodology</h3>
              <p className="text-gray-600">
                We follow agile practices to deliver incremental value, adapt to changes, and maintain flexibility throughout the development lifecycle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Modern Tech Stack</h3>
              <p className="text-gray-600">
                Leveraging the latest frameworks, languages, and tools to build scalable, maintainable, and secure applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous testing protocols ensure your software is reliable, performs well, and meets the highest security standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}