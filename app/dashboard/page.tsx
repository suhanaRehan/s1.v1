'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, User, Settings, FileText } from 'lucide-react'
import { supabase, Inquiry } from '@/lib/supabase'

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<{ name: string; email: string; company: string } | null>(null)
  const [inquiries, setInquiries] = useState<Inquiry[]>([])

  useEffect(() => {
    document.title = 'Dashboard | SoftwareSphere'

    const load = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser()

      if (!authUser) {
        router.push('/auth/login')
        return
      }

      setUser({
        name: authUser.user_metadata?.name ?? authUser.email ?? 'User',
        email: authUser.email ?? '',
        company: authUser.user_metadata?.company ?? '',
      })

      const { data: inquiryRows } = await supabase
        .from('inquiries')
        .select('*')
        .eq('user_id', authUser.id)
        .order('created_at', { ascending: false })

      setInquiries(inquiryRows ?? [])
      setLoading(false)
    }

    load()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading dashboard...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              {/* User Profile */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {user.name.charAt(0)}
                </div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.company}</p>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <Link href="/dashboard/profile" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 py-2">
                  <User size={20} />
                  <span>My Profile</span>
                </Link>
                <Link href="/dashboard/settings" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 py-2">
                  <Settings size={20} />
                  <span>Settings</span>
                </Link>
                <button className="w-full flex items-center gap-3 text-gray-700 hover:text-blue-600 py-2">
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow p-8 mb-6">
              <h1 className="text-4xl font-bold mb-2">Welcome, {user.name}! 👋</h1>
              <p className="text-blue-100">
                Here's what's happening with your service inquiries.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600 text-sm mb-2">Total Inquiries</p>
                <p className="text-3xl font-bold text-gray-900">{inquiries.length}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600 text-sm mb-2">In Progress</p>
                <p className="text-3xl font-bold text-blue-600">
                  {inquiries.filter(i => i.status === 'in-progress').length}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600 text-sm mb-2">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {inquiries.filter(i => i.status === 'pending').length}
                </p>
              </div>
            </div>

            {/* Inquiries */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Your Inquiries</h2>
                  <Link href="/contact" className="text-blue-600 hover:underline text-sm font-semibold">
                    New Inquiry
                  </Link>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {inquiries.map((inquiry) => (
                  <div key={inquiry.id} className="px-6 py-4 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{inquiry.service}</h3>
                        <p className="text-sm text-gray-600 mt-1">{inquiry.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{inquiry.date}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          inquiry.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {inquiry.status === 'pending' ? 'Pending' : 'In Progress'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {inquiries.length === 0 && (
                <div className="px-6 py-12 text-center">
                  <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600">No inquiries yet</p>
                  <Link href="/contact" className="text-blue-600 hover:underline text-sm font-semibold mt-2 inline-block">
                    Create your first inquiry
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}