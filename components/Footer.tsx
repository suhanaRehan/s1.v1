import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">SoftwareSphere</h3>
            <p className="text-gray-400 text-sm">
              Enterprise technology solutions for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/cyber-security" className="hover:text-accent">Cyber Security</Link></li>
              <li><Link href="/services/software-development" className="hover:text-accent">Software Development</Link></li>
              <li><Link href="/services/ai-agents" className="hover:text-accent">AI Agents</Link></li>
              <li><Link href="/services/it-solutions" className="hover:text-accent">IT Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-accent">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <Phone size={16} className="mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="mt-0.5" />
                <span>info@softwaresphere.com</span>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 SoftwareSphere. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-accent">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}