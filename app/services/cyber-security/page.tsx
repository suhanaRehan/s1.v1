import ServiceCard from '@/components/ServiceCard'
import { Shield, Lock, AlertTriangle, Cpu, Network, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Cyber Security Services | SoftwareSphere',
  description: 'Enterprise cybersecurity solutions including IAM, threat detection, and compliance.',
}

export default function CyberSecurityPage() {
  const services = [
    {
      title: 'Identity & Access Management (IAM)',
      description: 'Robust user authentication and privileged access management.',
      icon: <Lock size={32} />,
      href: '/services/cyber-security/iam',
      features: ['User Authentication', 'Role-Based Access Control', 'Privileged Access Management']
    },
    {
      title: 'Data Protection & Privacy',
      description: 'Encryption and compliance with global privacy regulations.',
      icon: <Shield size={32} />,
      href: '/services/cyber-security/data-protection',
      features: ['Data Encryption', 'Data Loss Prevention', 'GDPR & CCPA Compliance']
    },
    {
      title: 'Vulnerability Management',
      description: 'Continuous scanning and proactive remediation of system weaknesses.',
      icon: <AlertTriangle size={32} />,
      href: '/services/cyber-security/vulnerability-management',
      features: ['Continuous Scanning', 'Risk Assessment', 'Proactive Remediation']
    },
    {
      title: 'Managed Security Services',
      description: '24/7 security monitoring and expert incident response.',
      icon: <Zap size={32} />,
      href: '/services/cyber-security/managed-security',
      features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response']
    },
    {
      title: 'Cyber AI Solutions',
      description: 'AI and machine learning to predict and neutralize cyber threats.',
      icon: <Cpu size={32} />,
      href: '/services/cyber-security/cyber-ai',
      features: ['Threat Prediction', 'ML Detection', 'Automated Response']
    },
    {
      title: 'Infrastructure Security',
      description: 'Securing network perimeters, endpoints, and firewalls.',
      icon: <Network size={32} />,
      href: '/services/cyber-security/infrastructure-security',
      features: ['Network Security', 'Endpoint Protection', 'Firewall Management']
    },
  ]

  return (
    <div>
      {/* Breadcrumb & Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">Home</Link>
          <span className="text-gray-600 mx-2">/</span>
          <span className="text-gray-600">Cyber Security</span>

          <h1 className="text-4xl font-bold mt-6 mb-4">Cyber Security Services</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Protecting enterprise assets, ensuring compliance, and mitigating digital risks through advanced, intelligence-driven security solutions.
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

      {/* Additional Services */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Operational Technology (OT) Security</h3>
              <p className="text-gray-600">
                Safeguarding industrial control systems (ICS) and SCADA environments from cyber disruptions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Threat Detection & Response</h3>
              <p className="text-gray-600">
                Real-time security operations center (SOC) operations, threat hunting, and rapid incident mitigation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Governance, Risk & Compliance (GRC)</h3>
              <p className="text-gray-600">
                Aligning IT security with business strategy, managing compliance audits, and assessing corporate risk frameworks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Cloud Security</h3>
              <p className="text-gray-600">
                Implementing specialized guardrails, posture management, and native security controls across multi-cloud environments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Secure Access Service Edge (SASE)</h3>
              <p className="text-gray-600">
                Converging network security and WAN capabilities into a unified, cloud-delivered service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Hybrid Cloud Security</h3>
              <p className="text-gray-600">
                Delivering consistent, unified security policies across on-premises data centers and public cloud infrastructures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}