"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Briefcase, Users, DollarSign, Target, Lightbulb, Award, Heart, ArrowRight, Sparkles, Star } from "lucide-react"

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
  const [activeSection, setActiveSection] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      category: "For Individuals",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50/80 to-pink-50/80",
      items: [
        {
          title: "Career Consultations",
          icon: <Briefcase className="w-6 h-6" />,
          description: "Navigate career transitions, job searches, and professional growth with personalized guidance.",
          features: [
            "Resume and LinkedIn profile optimization",
            "Interview preparation and coaching",
            "Career path planning and goal setting",
            "Skill development recommendations",
            "Salary negotiation strategies",
          ],
          popular: true,
        },
        {
          title: "Financial Planning",
          icon: <DollarSign className="w-6 h-6" />,
          description: "Build a secure financial future with strategic planning and smart money management.",
          features: [
            "Personal budget creation and analysis",
            "Investment strategy consultation",
            "Retirement planning guidance",
            "Debt management solutions",
            "Financial goal setting and tracking",
          ],
          popular: false,
        },
      ],
    },
    {
      category: "For Startups & Businesses",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-purple-700 to-indigo-600",
      bgGradient: "from-purple-50/80 to-indigo-50/80",
      items: [
        {
          title: "HR Consulting",
          icon: <Award className="w-6 h-6" />,
          description: "Transform your HR function with strategic solutions that drive business growth.",
          features: [
            "HR strategy development and implementation",
            "Recruitment and talent acquisition",
            "Performance management systems",
            "Employee engagement programs",
            "HR compliance and policy development",
          ],
          popular: true,
        },
      ],
    },
    {
      category: "For Creators & Brands",
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: "from-pink-600 to-purple-600",
      bgGradient: "from-pink-50/80 to-purple-50/80",
      items: [
        {
          title: "Brand Collaborations",
          icon: <Heart className="w-6 h-6" />,
          description: "Create meaningful partnerships that amplify your brand and reach.",
          features: [
            "Collaboration strategy and planning",
            "Content partnership opportunities",
            "Brand alignment and positioning",
            "Campaign development and execution",
            "Influencer partnership management",
          ],
          popular: false,
        },
        {
          title: "Creative Consulting",
          icon: <Lightbulb className="w-6 h-6" />,
          description: "Bring your creative vision to life with strategic guidance and support.",
          features: [
            "Content strategy development",
            "Personal branding and positioning",
            "Audience growth strategies",
            "Monetization planning",
            "Creative project management",
          ],
          popular: true,
        },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-section") || "0")
            setActiveSection(index)
          }
        })
      },
      { threshold: 0.3 },
    )

    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-25 via-white to-pink-25">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-10"></div>
      </div>

      <Navigation />

      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Transform Your Journey
              </motion.div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Services & Expertise
              </h1>
              <p className="text-xl text-purple-700/80 max-w-3xl mx-auto leading-relaxed">
                Comprehensive consulting services designed to help you grow, succeed, and thrive— whether you're an
                individual, startup, or established brand.
              </p>
            </div>
          </AnimatedSection>

          {/* Services Sections */}
          {services.map((section, sectionIndex) => (
            <div key={sectionIndex} data-section={sectionIndex} className="mb-20">
              <AnimatedSection delay={0.2}>
                <motion.div
                  className={`sticky top-24 z-40 py-6 px-8 rounded-2xl mb-8 transition-all duration-500 backdrop-blur-sm ${
                    activeSection === sectionIndex
                      ? `bg-gradient-to-r ${section.gradient} shadow-2xl shadow-purple-500/25 border-0`
                      : "bg-white/70 shadow-lg border border-purple-100/50"
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-3 h-16 rounded-full ${
                        activeSection === sectionIndex
                          ? "bg-gradient-to-b from-white/40 to-white/20"
                          : `bg-gradient-to-b ${section.gradient}`
                      }`}
                      animate={activeSection === sectionIndex ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                      transition={{
                        duration: 2,
                        repeat: activeSection === sectionIndex ? Number.POSITIVE_INFINITY : 0,
                      }}
                    />
                    <div
                      className={`w-14 h-14 rounded-2xl ${
                        activeSection === sectionIndex ? "bg-white/20" : `bg-gradient-to-r ${section.gradient}`
                      } flex items-center justify-center ${
                        activeSection === sectionIndex ? "text-white" : "text-white"
                      } shadow-lg backdrop-blur-sm`}
                    >
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2
                        className={`text-3xl font-bold ${
                          activeSection === sectionIndex ? "text-white" : "text-purple-900"
                        }`}
                      >
                        {section.category}
                      </h2>
                      <p className={`mt-1 ${activeSection === sectionIndex ? "text-purple-100" : "text-purple-600"}`}>
                        {section.items.length} specialized service{section.items.length > 1 ? "s" : ""}
                      </p>
                    </div>
                    {activeSection === sectionIndex && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="text-white"
                      >
                        <Sparkles className="w-6 h-6" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((service, serviceIndex) => (
                  <AnimatedSection key={serviceIndex} delay={0.1 * serviceIndex}>
                    <motion.div
                      onMouseEnter={() => setHoveredCard(serviceIndex + sectionIndex * 10)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Card
                        className={`h-full border border-purple-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform relative overflow-hidden backdrop-blur-sm ${
                          hoveredCard === serviceIndex + sectionIndex * 10 ? "-translate-y-2 shadow-xl" : ""
                        }`}
                      >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-60`} />

                        {/* Popular Badge */}
                        {service.popular && (
                          <div className="absolute top-4 right-4 z-10">
                            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                              <Star className="w-3 h-3 fill-current" />
                              Popular
                            </div>
                          </div>
                        )}

                        {/* Hover Effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 transition-opacity duration-500`}
                          animate={{ opacity: hoveredCard === serviceIndex + sectionIndex * 10 ? 0.03 : 0 }}
                        />

                        <CardContent className="p-8 relative z-10">
                          <div className="flex items-center gap-4 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${section.gradient} flex items-center justify-center text-white shadow-lg`}
                            >
                              {service.icon}
                            </motion.div>
                            <div>
                              <h3 className="text-2xl font-bold text-purple-900">{service.title}</h3>
                              <div className="flex items-center gap-1 mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                ))}
                                <span className="text-sm text-purple-600 ml-1">5.0</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-purple-700/80 mb-6 leading-relaxed">{service.description}</p>

                          <div className="space-y-4">
                            <h4 className="font-semibold text-purple-800 flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradient}`} />
                              What's Included:
                            </h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.1 }}
                                  className="flex items-start text-purple-700 group"
                                >
                                  <span
                                    className={`mr-3 text-lg group-hover:scale-110 transition-transform bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent font-bold`}
                                  >
                                    ✓
                                  </span>
                                  <span className="flex-1">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <motion.div
                            className="mt-6 pt-6 border-t border-purple-100/50"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Button
                              asChild
                              className={`w-full bg-gradient-to-r ${section.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white border-0 shadow-md`}
                            >
                              <Link href="/contact" className="flex items-center justify-center gap-2">
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <AnimatedSection delay={0.4}>
            <Card className="border-0 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600" />
              <div className="absolute inset-0 bg-black/10" />
              
              <CardContent className="p-12 text-center relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20"
                >
                  <Sparkles className="w-4 h-4" />
                  Limited Time Offer
                </motion.div>
                
                <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Journey?</h2>
                <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto leading-relaxed">
                  Book a consultation today and take the first step toward achieving your goals with personalized guidance and expert support.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold border-0"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Book a Consultation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Link href="/about" className="flex items-center gap-2">
                      Learn More
                      <Users className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                
                <motion.p 
                  className="text-purple-200 mt-6 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  ⚡ Get your first consultation absolutely free
                </motion.p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default Services