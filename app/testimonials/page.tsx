"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "Pavithra is a strategic and people-first leader. Her HR insights created measurable impact for our team.",
      author: "Featured Recommendation",
      role: "Senior HR Manager",
      company: "Tech Startup",
    },
    {
      quote: "Her guidance on career and growth planning was practical, clear, and confidence-building.",
      author: "Client Testimonial",
      role: "Marketing Professional",
      company: "E-commerce Company",
    },
    {
      quote: "Exceptional collaborator—blends empathy with execution to deliver results.",
      author: "Business Partner",
      role: "Operations Director",
      company: "Financial Services",
    },
    {
      quote: "Working with Pavithra transformed how we approach talent management and employee engagement.",
      author: "CEO Recommendation",
      role: "Chief Executive Officer",
      company: "Growing Enterprise",
    },
    {
      quote: "Her strategic insights and people-focused approach helped us build a thriving company culture.",
      author: "Founder Testimonial",
      role: "Startup Founder",
      company: "SaaS Company",
    },
    {
      quote: "Pavithra's expertise in HR transformation was instrumental in scaling our organization effectively.",
      author: "Leadership Team",
      role: "COO",
      company: "Mid-sized Business",
    },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text-purple">Testimonials</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Selected recommendations and feedback from clients, colleagues, and business partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="text-4xl text-accent mb-4">"</div>
                    <p className="italic text-muted-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* LinkedIn Embeds Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text-purple">Live LinkedIn Recommendations</h2>
            <p className="text-center text-muted-foreground mb-8">
              View my latest recommendations directly from LinkedIn
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7304562838159663105?compact=1"
                  height="400"
                  width="100%"
                  frameBorder={0}
                  title="LinkedIn Recommendation 1"
                  className="w-full"
                ></iframe>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7289728773932052480?compact=1"
                  height="400"
                  width="100%"
                  frameBorder={0}
                  title="LinkedIn Recommendation 2"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary to-accent text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
                <p className="text-xl mb-8 opacity-90">Join the growing list of satisfied clients and partners.</p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsPage
