"use client"

import React, { useEffect, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'

// Lazy components adapted for Next.js
const Navigation = dynamic(() => import('@/components/navigation'), { ssr: false, suspense: true })
const Testimonials = dynamic(() => import('@/components/testimonials').then(m => m.TestimonialsSection), { ssr: false, suspense: true })

// Environment handling for Next.js
const env = (process.env.NEXT_PUBLIC_APP_ENV as string) ?? 'production'

const Index = () => {
  const carouselImages = ['/cur1.webp', '/cur2.webp', '/cur3.webp']
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-amber-50">
      {/* show small env badge in development */}
      {env === 'development' && (
        <div className="fixed top-4 right-4 z-50 px-3 py-1 rounded-md text-xs font-medium bg-yellow-200 text-yellow-900 shadow">
          DEV
        </div>
      )}

      <Suspense fallback={null}>
        <Navigation />
      </Suspense>

      {/* Hero Section */}
      <section className="pt-8 min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          {/* Large Pavithra Text */}
          <div className="text-center mb-4">
            <h1 className="text-7xl lg:text-8xl xl:text-8xl font-bold text-purple-900 leading-none">
              Pavithra Simon
            </h1>
          </div>

          {/* Grid Container with Circular Background */}
          <div className="grid lg:grid-cols-2 gap-12 items-center relative mt-8 lg:mt-16">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left space-y-8">
              <div>
                <p className="text-xl mb-4 text-purple-800 leading-relaxed font-medium">
                  Career & Financial Consultations for Individuals.
                </p>
                <p className="text-xl text-purple-800 leading-relaxed font-medium">
                  HR Consultations & Brand Collaborations for Startups and Creators.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-amber-600 text-white hover:from-purple-700 hover:to-amber-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <a href="/contact">Let's Connect</a>
                </Button>
              </div>
            </div>

            {/* Right Side - Circular Background with Image and Text Boxes */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Large Circular Background */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Main Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-amber-200 rounded-full shadow-2xl"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-4 bg-white rounded-full overflow-hidden shadow-lg relative">
                  <img
                    src="/main1.png"
                    alt="Pavithra Simon"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Box 1 - Top Left */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-purple-200 max-w-40">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-900 mb-1">1.4K+</div>
                    <div className="text-xs text-purple-600 font-medium">YouTube Subscribers</div>
                  </div>
                </div>

                {/* Text Box 2 - Top Right */}
                <div className="absolute -top-4 -right-4 bg-amber-500 rounded-2xl p-4 shadow-xl border border-amber-400 max-w-40">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-1">700 +</div>
                    <div className="text-xs text-amber-100">Community Members</div>
                  </div>
                </div>

                {/* Text Box 3 - Bottom Left */}
                <div className="absolute -bottom-4 -left-4 bg-purple-600 rounded-2xl p-4 shadow-xl border border-purple-500 max-w-40">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-1">HR &</div>
                    <div className="text-xs text-purple-200">Consultant Expert</div>
                  </div>
                </div>

                {/* Text Box 4 - Bottom Right */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-amber-200 max-w-40">
                  <div className="text-center">
                    <div className="text-xl font-bold text-amber-600 mb-1">10+</div>
                    <div className="text-xs text-purple-600 font-medium">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering People & Strengthening Businesses - Carousel Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-900">
            Empowering People & Strengthening Businesses
          </h2>
          <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg">
            {carouselImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${current === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={src}
                  alt={`Carousel ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  current === i ? 'bg-amber-500 scale-125' : 'bg-purple-300'
                }`}></span>
              ))}
            </div>
          </div>
          <p className="text-lg text-purple-700 max-w-4xl mx-auto text-center mt-8">
            Driven by strategy, empathy, and impact, I blend human understanding with strategic insight to help individuals, startups, and brands grow stronger, smarter, and thrive with purpose.
          </p>
        </div>
      </section>

      {/* Testimonials Section (dynamically imported to reduce page bundle) */}
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-purple-50/50 to-amber-50/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-purple-900">
            Thrive With Purpose
          </h2>
          <blockquote className="text-2xl italic text-amber-700 mb-8 leading-relaxed">
            "We become what we think." — a belief I strongly live by.
          </blockquote>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto leading-relaxed">
            I blend human understanding with strategic insight to help individuals, startups, and brands grow stronger and smarter. From one-to-one consultations to brand collaborations, I focus on clarity, growth, and actionable outcomes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">15K+</div>
              <div className="text-purple-200 text-sm">LinkedIn fam</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">2K+</div>
              <div className="text-purple-200 text-sm">Community Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">10+</div>
              <div className="text-purple-200 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">5+</div>
              <div className="text-purple-200 text-sm">Startups Helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations to global CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Index
