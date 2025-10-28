"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Briefcase, Users, TrendingUp, DollarSign, Target, Lightbulb, Award, Heart } from "lucide-react"

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

  const services = [
    {
      category: "For Individuals",
      icon: <Users className="w-8 h-8" />,
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
        },
      ],
    },
    {
      category: "For Startups & Businesses",
      icon: <Target className="w-8 h-8" />,
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
        },
        {
          title: "Business Strategy",
          icon: <TrendingUp className="w-6 h-6" />,
          description: "Scale your business with strategic insights and operational excellence.",
          features: [
            "Organizational structure design",
            "Process optimization and efficiency",
            "Change management consulting",
            "Leadership development programs",
            "Culture transformation initiatives",
          ],
        },
      ],
    },
    {
      category: "For Creators & Brands",
      icon: <Lightbulb className="w-8 h-8" />,
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
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 gradient-text-purple">Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                  className={`sticky top-24 z-40 py-4 px-6 rounded-xl mb-8 transition-all duration-300 ${
                    activeSection === sectionIndex
                      ? "bg-gradient-to-r from-primary to-accent shadow-2xl"
                      : "bg-white/80 backdrop-blur-sm shadow-lg"
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-3 h-12 rounded-full ${
                        activeSection === sectionIndex
                          ? "bg-gradient-to-b from-amber-400 to-amber-200"
                          : "bg-gradient-to-b from-primary to-accent"
                      }`}
                      animate={activeSection === sectionIndex ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                      transition={{
                        duration: 2,
                        repeat: activeSection === sectionIndex ? Number.POSITIVE_INFINITY : 0,
                      }}
                    />
                    <div
                      className={`w-12 h-12 rounded-full ${
                        activeSection === sectionIndex ? "bg-white/20" : "bg-primary/10"
                      } flex items-center justify-center ${
                        activeSection === sectionIndex ? "text-white" : "text-primary"
                      }`}
                    >
                      {section.icon}
                    </div>
                    <h2
                      className={`text-3xl font-bold ${activeSection === sectionIndex ? "text-white" : "text-primary"}`}
                    >
                      {section.category}
                    </h2>
                  </div>
                </motion.div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((service, serviceIndex) => (
                  <AnimatedSection key={serviceIndex} delay={0.1 * serviceIndex}>
                    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">What's Included:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start text-muted-foreground">
                                <span className="text-accent mr-2">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <AnimatedSection delay={0.4}>
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary to-accent text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Book a consultation today and take the first step toward your goals.
                </p>
                <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default Services
