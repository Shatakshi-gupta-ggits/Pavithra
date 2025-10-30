"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navigation from "@/components/navigation"
import { Youtube, Linkedin, Instagram, Send, Mail, MapPin, Phone, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    career: false,
    financial: false,
    collaboration: false
  })
  const { toast } = useToast()

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)

      // Transform array fields to readable comma-separated values
      const transformArrayField = (key: string) => {
        const values = formData.getAll(key).map(String).filter(Boolean)
        if (values.length) {
          formData.delete(key)
          const normalized = key.endsWith('[]') ? key.slice(0, -2) : key
          formData.set(normalized, values.join(', '))
        }
      }

      ;[
        'persona[]',
        'consultation_types[]',
        'career_fields[]',
        'financial_options[]',
        'collab_options[]',
      ].forEach(transformArrayField)

      // Build a concise, human-readable summary
      const name = (formData.get('name') as string) || ''
      const email = (formData.get('email') as string) || ''
      const phone = (formData.get('phone') as string) || ''
      const persona = (formData.get('persona') as string) || ''
      const types = (formData.get('consultation_types') as string) || ''
      const career = (formData.get('career_fields') as string) || ''
      const financial = (formData.get('financial_options') as string) || ''
      const collab = (formData.get('collab_options') as string) || ''
      const message = (formData.get('message') as string) || ''

      const summary = [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        persona ? `Persona: ${persona}` : null,
        types ? `Consultation Types: ${types}` : null,
        career ? `Career Fields: ${career}` : null,
        financial ? `Financial Options: ${financial}` : null,
        collab ? `Collaboration Options: ${collab}` : null,
        message ? `Message: ${message}` : null,
      ].filter(Boolean).join('\n')

      formData.set('summary', summary)
      formData.set('_subject', `New Consultation Request — ${name || 'Unknown'}`)

      const FORMSPREE_ID = "mblpoepv"
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "Consultation Booked Successfully!",
          description: "Thank you for your interest. I'll get back to you within 24 hours.",
        })
        form.reset()
        setExpandedSections({
          career: false,
          financial: false,
          collaboration: false
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact me directly at Pavithracool43@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const primarySocialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pavithra-simon-%E2%9C%8D%F0%9F%8F%BC-906059180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-600",
    },
  ]

  const secondarySocialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/pavithra_.simon?igsh=cmQ2ZHEyMGFicHhz&utm_source=qr",
      color: "hover:text-pink-600",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      label: "YouTube",
      href: "https://youtube.com/@pavithrasimonhr?feature=shared",
      color: "hover:text-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Book a Consultation
            </h1>
            <p className="text-lg text-purple-700/80 max-w-2xl mx-auto leading-relaxed">
              Let's work together to achieve your goals. Choose from Career Guidance, Financial Planning, or Creative Collaborations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Send Me a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-purple-800 font-medium">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          required 
                          placeholder="Your name" 
                          className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-purple-800 font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="email@example.com"
                          className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-purple-800 font-medium">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="+91 1234567890" 
                        className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                      />
                    </div>

                    {/* You are a: */}
                    <div className="space-y-2">
                      <Label className="text-purple-800 font-medium">You are a:</Label>
                      <div className="grid sm:grid-cols-3 gap-2">
                        {['student', 'working_professional', 'entrepreneur'].map((value) => (
                          <label key={value} className="flex items-center gap-2 p-2 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer">
                            <input 
                              type="checkbox" 
                              name="persona[]" 
                              value={value} 
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                            />
                            <span className="text-purple-700 capitalize">
                              {value === 'working_professional' ? 'Working Professional' : 
                               value === 'entrepreneur' ? 'Entrepreneur / Business Owner' : 
                               value}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Consultation Types */}
                    <div className="space-y-3">
                      <Label className="text-purple-800 font-medium">Select Your Consultation Type:</Label>

                      {/* Career Consultation */}
                      <div className="border-2 border-purple-200 rounded-lg transition-all duration-300 hover:border-purple-300">
                        <button
                          type="button"
                          onClick={() => toggleSection('career')}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <label className="flex items-center gap-2 font-medium text-purple-700 cursor-pointer">
                            <input 
                              type="checkbox" 
                              name="consultation_types[]" 
                              value="career" 
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                            />
                            Career Consultation
                          </label>
                          {expandedSections.career ? <ChevronUp className="w-5 h-5 text-purple-500" /> : <ChevronDown className="w-5 h-5 text-purple-500" />}
                        </button>
                        
                        <AnimatePresence>
                          {expandedSections.career && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 space-y-3">
                                <div className="text-sm text-purple-600 font-medium">Fields / Mentorship Areas:</div>
                                <div className="grid sm:grid-cols-2 gap-2">
                                  {[
                                    'Data Analyst','Business Analyst','Product Management','Product Design','Business Development',
                                    'Cyber Security','Software Development','GenAI','Project Management','HR','Digital Marketing',
                                  ].map((val) => (
                                    <label key={val} className="flex items-center gap-2 p-2 rounded hover:bg-purple-50 transition-colors cursor-pointer">
                                      <input 
                                        type="checkbox" 
                                        name="career_fields[]" 
                                        value={val} 
                                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                                      />
                                      <span className="text-purple-700 text-sm">{val}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Financial Consultation */}
                      <div className="border-2 border-purple-200 rounded-lg transition-all duration-300 hover:border-purple-300">
                        <button
                          type="button"
                          onClick={() => toggleSection('financial')}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <label className="flex items-center gap-2 font-medium text-purple-700 cursor-pointer">
                            <input 
                              type="checkbox" 
                              name="consultation_types[]" 
                              value="financial" 
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                            />
                            Financial Consultation
                          </label>
                          {expandedSections.financial ? <ChevronUp className="w-5 h-5 text-purple-500" /> : <ChevronDown className="w-5 h-5 text-purple-500" />}
                        </button>
                        
                        <AnimatePresence>
                          {expandedSections.financial && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4">
                                <div className="grid sm:grid-cols-2 gap-2">
                                  {[
                                    'Financial Goal Setting','Budgeting & Savings','Investment Planning','Salary & Growth Strategy',
                                  ].map((val) => (
                                    <label key={val} className="flex items-center gap-2 p-2 rounded hover:bg-purple-50 transition-colors cursor-pointer">
                                      <input 
                                        type="checkbox" 
                                        name="financial_options[]" 
                                        value={val} 
                                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                                      />
                                      <span className="text-purple-700 text-sm">{val}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Collaboration / Partnership */}
                      <div className="border-2 border-purple-200 rounded-lg transition-all duration-300 hover:border-purple-300">
                        <button
                          type="button"
                          onClick={() => toggleSection('collaboration')}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <label className="flex items-center gap-2 font-medium text-purple-700 cursor-pointer">
                            <input 
                              type="checkbox" 
                              name="consultation_types[]" 
                              value="collaboration" 
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                            />
                            Collaboration / Partnership
                          </label>
                          {expandedSections.collaboration ? <ChevronUp className="w-5 h-5 text-purple-500" /> : <ChevronDown className="w-5 h-5 text-purple-500" />}
                        </button>
                        
                        <AnimatePresence>
                          {expandedSections.collaboration && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4">
                                <div className="grid sm:grid-cols-2 gap-2">
                                  {[
                                    'Brand Partnerships','Workshops, Seminars & Events','Sponsored Collaborations','Podcasts / Social Media Posts / Brand Representation',
                                  ].map((val) => (
                                    <label key={val} className="flex items-center gap-2 p-2 rounded hover:bg-purple-50 transition-colors cursor-pointer">
                                      <input 
                                        type="checkbox" 
                                        name="collab_options[]" 
                                        value={val} 
                                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                                      />
                                      <span className="text-purple-700 text-sm">{val}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-purple-800 font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me about your goals and how I can help..."
                        rows={4}
                        className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-purple-600/80 text-center mt-2">
                      Once submitted, I'll personally review your details and get back to you for the next step.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium text-purple-800">Email</p>
                        <a href="mailto:Pavithracool43@gmail.com" className="text-purple-600 hover:text-purple-800 transition-colors">
                          Pavithracool43@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium text-purple-800">Location</p>
                        <p className="text-purple-600">Hyderabad (Primary) | Colombo (Secondary)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium text-purple-800">Response Time</p>
                        <p className="text-purple-600">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Primary Social Links */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Connect With Me
                  </h3>
                  <div className="space-y-3">
                    {primarySocialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-all duration-200 border border-transparent hover:border-purple-200 ${social.color}`}
                      >
                        {social.icon}
                        <span className="font-medium text-purple-800">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Social Links */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Follow Me
                  </h3>
                  <div className="space-y-3">
                    {secondarySocialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-all duration-200 border border-transparent hover:border-purple-200 ${social.color}`}
                      >
                        {social.icon}
                        <span className="font-medium text-purple-800">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-200">✓</span>
                      <span>10+ years of HR and consulting experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-200">✓</span>
                      <span>Personalized, results-driven approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-200">✓</span>
                      <span>Proven track record of client success</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact