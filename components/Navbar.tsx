'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: 'Cyber Security', href: '/services/cyber-security' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'AI Agents', href: '/services/ai-agents' },
    { name: 'IT Solutions', href: '/services/it-solutions' },
  ]

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-lg">SS</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">SoftwareSphere</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-accent transition">Home</Link>
          
          {/* Services Dropdown */}
          <div className="group relative">
            <button className="hover:text-accent transition">Services</button>
            <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-accent first:rounded-t-lg last:rounded-b-lg"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="hover:text-accent transition">Contact</Link>
          <Link href="/auth/login" className="btn-primary">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 space-y-3">
          <Link href="/" className="block hover:text-accent transition">Home</Link>
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block hover:text-accent transition ml-4"
            >
              {service.name}
            </Link>
          ))}
          <Link href="/contact" className="block hover:text-accent transition">Contact</Link>
          <Link href="/auth/login" className="block btn-primary text-center">Login</Link>
        </div>
      )}
    </nav>
  )
}