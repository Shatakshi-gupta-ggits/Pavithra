"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navigation from "@/components/navigation"
import { Youtube, Linkedin, Instagram, Send, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)

      const FORMSPREE_ID = "mnngbood"
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
      href: "https://linkedin.com/in/pavithrasimon",
      color: "hover:text-blue-600",
    },
  ]

  const secondarySocialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://instagram.com/pavithrasimon",
      color: "hover:text-pink-600",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      label: "YouTube",
      href: "https://youtube.com/@pavithrasimon",
      color: "hover:text-red-600",
    },
  ]

  const consultationTypes = [
    "Career Guidance",
    "Financial Planning",
    "HR Consulting",
    "Business Strategy",
    "Brand Collaboration",
    "Other",
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text-purple">Book a Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's work together to achieve your goals. Choose from Career Guidance, Financial Planning, Business
              Strategy, or Creative Collaborations.
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
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 gradient-text-purple">Send Me a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required placeholder="John Doe" className="border-2" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="border-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" className="border-2" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="consultationType">Consultation Type *</Label>
                      <select
                        id="consultationType"
                        name="consultationType"
                        required
                        className="w-full px-3 py-2 border-2 border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a consultation type</option>
                        {consultationTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me about your goals and how I can help..."
                        rows={6}
                        className="border-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Book Consultation
                        </>
                      )}
                    </Button>
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
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 gradient-text-purple">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:Pavithracool43@gmail.com" className="text-muted-foreground hover:text-primary">
                          Pavithracool43@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Hyderabad (Primary) | Coimbatore (Secondary)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Primary Social Links */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 gradient-text-purple">Connect With Me</h3>
                  <div className="space-y-3">
                    {primarySocialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-all duration-200 ${social.color}`}
                      >
                        {social.icon}
                        <span className="font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Social Links */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 gradient-text-purple">Follow Me</h3>
                  <div className="space-y-3">
                    {secondarySocialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-all duration-200 ${social.color}`}
                      >
                        {social.icon}
                        <span className="font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-primary to-accent text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-300">✓</span>
                      <span>10+ years of HR and consulting experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-300">✓</span>
                      <span>Personalized, results-driven approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-300">✓</span>
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
