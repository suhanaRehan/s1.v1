import ServiceCard from '@/components/ServiceCard'
import { Brain, Zap, BarChart3, MessageSquare, Cpu } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'AI Agents & Intelligent Solutions | SoftwareSphere',
  description: 'Autonomous AI agents, machine learning, and generative AI solutions for enterprise.',
}

export default function AIAgentsPage() {
  const services = [
    {
      title: 'Intelligent Automation',
      description: 'RPA, workflow automation, and conversational AI/chatbots for business process optimization.',
      icon: <Zap size={32} />,
      href: '/services/ai-agents/intelligent-automation',
      features: ['Robotic Process Automation', 'Workflow Automation', 'Chatbots & Conversational AI']
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Predictive analytics, recommendation engines, and NLP for data-driven insights.',
      icon: <BarChart3 size={32} />,
      href: '/services/ai-agents/machine-learning',
      features: ['Predictive Analytics', 'Recommendation Engines', 'Natural Language Processing']
    },
    {
      title: 'AI Agent Development',
      description: 'Autonomous decision-making agents and intelligent document processing systems.',
      icon: <Brain size={32} />,
      href: '/services/ai-agents/ai-agent-development',
      features: ['Autonomous Agents', 'Multi-Agent Systems', 'Document Processing']
    },
    {
      title: 'GenAI Solutions',
      description: 'Custom LLM integration, document summarization, and automated code generation.',
      icon: <MessageSquare size={32} />,
      href: '/services/ai-agents/genai-solutions',
      features: ['LLM Integration', 'Document Summarization', 'Code Generation']
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analytics for enterprise applications.',
      icon: <Cpu size={32} />,
      href: '/services/ai-agents/computer-vision',
      features: ['Image Recognition', 'Object Detection', 'Visual Analytics']
    },
    {
      title: 'Data Engineering for AI',
      description: 'Scalable data pipelines, data labeling, and MLOps infrastructure.',
      icon: <Cpu size={32} />,
      href: '/services/ai-agents/data-engineering',
      features: ['Data Pipelines', 'Data Labeling', 'MLOps Infrastructure']
    },
  ]

  return (
    <div>
      {/* Breadcrumb & Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">Home</Link>
          <span className="text-gray-600 mx-2">/</span>
          <span className="text-gray-600">AI Agents & Solutions</span>

          <h1 className="text-4xl font-bold mt-6 mb-4">AI Agents & Intelligent Solutions</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Empowering the enterprise with autonomous intelligence, predictive insights, and generative AI capabilities.
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

      {/* AI Transformation */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Transform Your Business with AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Increased Efficiency</h3>
              <p className="text-gray-600">
                Automate repetitive tasks, reduce manual effort, and accelerate business processes with intelligent automation solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                Leverage predictive analytics and machine learning to gain actionable insights and make informed strategic decisions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Enhanced Customer Experience</h3>
              <p className="text-gray-600">
                Deploy AI-powered chatbots and recommendation engines to provide personalized, responsive customer interactions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Cost Reduction</h3>
              <p className="text-gray-600">
                Optimize operations, minimize errors, and reduce operational costs through intelligent automation and process optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}