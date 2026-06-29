import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  href: string
  features?: string[]
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  features,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full border-l-4 border-blue-600 hover:border-blue-700 cursor-pointer">
        {icon && <div className="mb-4 text-blue-600">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            {features.slice(0, 2).map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
            {features.length > 2 && (
              <li className="text-blue-600 font-semibold">+{features.length - 2} more</li>
            )}
          </ul>
        )}
        
        <div className="flex items-center text-blue-600 font-semibold text-sm mt-4">
          Learn More <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  )
}