"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Users, Briefcase, ArrowRight, Sparkles, Star } from "lucide-react"

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      category: "For Startups & Creators",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-700 to-amber-500",
      bgGradient: "from-purple-50/80 to-amber-50/80",
      items: [
        {
          title: "Career Services",
          icon: <Briefcase className="w-6 h-6" />,
          description:
            "Expert HR-focused career consulting to help you grow confidently in your professional journey.",
          features: [
            "Resume and LinkedIn profile optimization (for HR roles)",
            "HR interview preparation and coaching",
            "HR career path planning and goal setting",
            "Recommended HR certifications and skill-building roadmap",
            "Guidance on job search strategies for HR positions",
          ],
          popular: true,
          images: ["/ser1.jpg", "/ser2.jpg", "/ser3.jpg", "/ser4.jpg"],
        },
      ],
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-25 via-white to-amber-25">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <Navigation />

      <div className="relative pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-200"
              >
                <Sparkles className="w-4 h-4" />
                Empowering Your HR Journey
              </motion.div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
                Career Services
              </h1>
              <p className="text-xl text-purple-700/80 max-w-3xl mx-auto leading-relaxed">
                Tailored HR-focused consulting designed to help professionals refine their profiles, strengthen
                interviews, and accelerate their career growth.
              </p>
            </div>
          </AnimatedSection>

          {/* Service Card */}
          <AnimatedSection delay={0.2}>
            <Card className="border border-purple-100/50 shadow-xl relative overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-amber-50 opacity-60" />
              {services[0].items[0].popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                </div>
              )}

              <CardContent className="p-10 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-700 to-amber-500 flex items-center justify-center text-white shadow-lg"
                  >
                    {services[0].items[0].icon}
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-purple-900">{services[0].items[0].title}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-sm text-purple-600 ml-1">5.0</span>
                    </div>
                  </div>
                </div>

                <p className="text-purple-700/80 mb-8 leading-relaxed">{services[0].items[0].description}</p>

                {/* Image Gallery Section */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { staggerChildren: 0.2, duration: 0.5 },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {services[0].items[0].images.map((src, i) => (
                    <motion.div
                      key={i}
                      className="relative overflow-hidden rounded-2xl shadow-md group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={src}
                        alt={`Career Services ${i + 1}`}
                        className="object-cover w-full h-40 md:h-48 lg:h-52 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-800 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-700 to-amber-500" />
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {services[0].items[0].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-purple-700 group"
                      >
                        <span className="mr-3 text-lg bg-gradient-to-r from-purple-700 to-amber-500 bg-clip-text text-transparent font-bold">
                          ✓
                        </span>
                        <span className="flex-1">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <motion.div
                  className="mt-8 pt-6 border-t border-purple-100/50"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-700 to-amber-500 hover:shadow-lg hover:scale-105 transition-all duration-300 text-white border-0 shadow-md"
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default Services
