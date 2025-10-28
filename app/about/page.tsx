"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import { Award, Users, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to delivering exceptional results in every engagement.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "People-First",
      description: "Believing that success starts with empowered, valued individuals.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth",
      description: "Focused on continuous learning and sustainable development.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "Building trust through transparency and ethical practices.",
    },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Section */}
          <AnimatedCard delay={0.2}>
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Side - Circular Image */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative">
                      <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200 to-amber-200 shadow-2xl" />
                        <div className="absolute inset-4 bg-white rounded-full overflow-hidden shadow-lg">
                          <img src="/main1.png" alt="Pavithra Simon" className="w-full h-full object-cover" />
                        </div>

                        <motion.div
                          className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Side - About Content */}
                  <div className="space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-bold gradient-text-purple">About Me</h1>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I'm <span className="font-semibold text-primary">Pavithra Simon</span>, an HR professional and
                      consultant with over <span className="font-semibold">10+ years</span> of experience helping
                      individuals and organizations reach their full potential.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      My journey spans strategic HR transformation, talent management, leadership development, and
                      building people-first cultures that drive sustainable growth. I believe that when people thrive,
                      businesses succeed.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Today, I offer personalized consultations for career planning, financial guidance, HR strategy,
                      and brand collaborations—helping you navigate challenges with clarity and confidence.
                    </p>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        <Link href="/contact">Book a Consultation</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link href="/services">View Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>

          {/* Core Values Section */}
          <AnimatedCard delay={0.4}>
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text-purple">Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Experience Highlights */}
          <AnimatedCard delay={0.6}>
            <Card className="mt-16 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 gradient-text-purple text-center">Experience Highlights</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Professional Journey</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>10+ years in HR transformation and talent management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Led HRIS implementations and process improvements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Designed training programs for leadership development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Built high-performing teams across diverse industries</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Community Impact</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>15K+ LinkedIn members in professional network</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>2K+ members in Tamil Connect Hyderabad community</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Regular speaker at HR and leadership events</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Mentor to emerging professionals and startups</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>
      </div>
    </div>
  )
}

export default About
