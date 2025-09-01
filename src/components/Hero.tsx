'use client'

import { useState, useEffect } from 'react'
import { useUser, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

function SignupModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { user } = useUser()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = createClient()

      // Save email to Supabase
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email,
            user_id: user?.id || null,
            created_at: new Date().toISOString(),
          },
        ])

      if (error) {
        console.error('Error saving to waitlist:', error)
        alert('There was an error. Please try again.')
      } else {
        alert('Thank you for your interest! We\'ll be in touch soon.')
        setEmail('')
        onClose()
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started with JusticeOS</h2>
          <p className="text-gray-600">Join thousands of legal professionals using our platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Creating Account...
              </div>
            ) : (
              'Start Free Trial'
            )}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Mouse Follow Effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-2xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-10 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {i % 4 === 0 && <div className="w-16 h-16 border-2 border-blue-300 rounded-lg rotate-45"></div>}
            {i % 4 === 1 && <div className="w-12 h-12 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full"></div>}
            {i % 4 === 2 && <div className="w-20 h-3 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full"></div>}
            {i % 4 === 3 && <div className="w-8 h-8 border border-indigo-300 rounded-full"></div>}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-20">
        {/* Premium Badge */}
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg text-sm font-medium text-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Trusted by 500+ Courts Worldwide
            <div className="ml-2 flex -space-x-1">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4">
            <span className="block bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Justice
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Operating
            </span>
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              System
            </span>
          </h1>
        </div>

        {/* Premium Subtitle */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            The most advanced digital justice platform. Built for modern courts,
            designed for seamless collaboration, and engineered for unprecedented efficiency.
          </p>
        </div>

        {/* Premium CTA Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {isLoaded && user ? (
              // User is signed in
              <div className="flex items-center gap-4">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-12 h-12',
                    },
                  }}
                />
                <button
                  onClick={() => router.push('/dashboard')}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Go to Dashboard
                </button>
              </div>
            ) : (
              // User is not signed in
              <>
                <button
                  onClick={() => setIsModalOpen(true)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-3">
                    Get Started Free
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>

                <div className="flex gap-4">
                  <SignInButton mode="modal">
                    <button className="px-6 py-3 bg-white/90 hover:bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </>
            )}

            <button className="group px-10 py-5 bg-white/90 hover:bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 backdrop-blur-sm">
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H15m2 0h1a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2m2 4h1.586a1 1 0 01.707.293l.707.707A1 1 0 0014.414 15H17m2 0h1a2 2 0 002-2v-2a2 2 0 00-2-2h-3.414a1 1 0 00-.707.293l-.707.707A1 1 0 0015 11H9" />
                </svg>
                Watch Demo
              </span>
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">✨ No credit card required • 14-day free trial • Cancel anytime</p>
        </div>

        {/* Premium Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
              10,000+
            </div>
            <div className="text-gray-600 font-medium">Cases Managed Daily</div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Expert Support</div>
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto mt-3 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-gray-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm shadow-lg">
          <div className="w-1.5 h-4 bg-gray-600 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>

      {/* Signup Modal */}
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


    </section>
  )
}
