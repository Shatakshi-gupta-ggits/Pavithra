"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { TestimonialsSection } from "@/components/testimonials"
import { motion } from "framer-motion"

const Index = () => {
  const carouselImages = ["/cur1.webp", "/cur2.webp", "/cur3.webp"]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const stats = [
    { value: "15K+", label: "LinkedIn Members", color: "from-purple-500 to-purple-700" },
    { value: "2K+", label: "TCH Community", color: "from-amber-500 to-amber-700" },
    { value: "6+", label: "Startups", color: "from-purple-600 to-pink-600" },
    { value: "10+", label: "Years Experience", color: "from-amber-600 to-orange-600" },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl font-bold gradient-text-purple mb-8"
            >
              Pavithra Simon
            </motion.h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-xl text-primary font-medium">Career & Financial Consultations for Individuals.</p>
                <p className="text-xl text-primary font-medium">
                  HR Consultations & Brand Collaborations for Startups and Creators.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Link href="/contact">Let's Connect</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/blog">View Blogs</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-amber-300 rounded-full blur-3xl opacity-30" />
                <img src="/main1.png" alt="Pavithra Simon" className="relative rounded-full w-full shadow-2xl" />
                <div className="absolute -top-4 -right-4 grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      className={`bg-gradient-to-br ${stat.color} text-white p-4 rounded-xl shadow-lg text-center`}
                    >
                      <div className="font-bold text-2xl">{stat.value}</div>
                      <div className="text-xs">{stat.label}</div>
                      {stat.sublabel && <div className="text-xs">{stat.sublabel}</div>}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text-purple">
              Empowering People & Strengthening Businesses
            </h2>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl mb-8">
              {carouselImages.map((img, index) => (
                <img
                  key={index}
                  src={img || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Driven by strategy, empathy, and impact, I blend human understanding with strategic insight to help
              individuals, startups, and brands grow stronger, smarter, and thrive with purpose.
            </p>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  )
}

export default Index
