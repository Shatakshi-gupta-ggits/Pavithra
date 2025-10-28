"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export const TestimonialsSection = () => {
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
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text-purple">What Clients Say</h2>
          <p className="text-lg text-muted-foreground">Trusted by professionals and organizations worldwide</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  )
}
