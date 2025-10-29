"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export const TestimonialsSection = () => {
  const LINKEDIN_EMBEDS = [
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7380199804968218624?compact=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7377747658192596992?compact=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7380863778055368704?compact=1",
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-600 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground">
            Real recommendations and featured highlights directly from LinkedIn.
          </p>
        </motion.div>

        {/* Embedded LinkedIn Recommendations */}
        <div className="grid md:grid-cols-3 gap-8">
          {LINKEDIN_EMBEDS.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white">
                <CardContent className="p-0">
                  <iframe
                    src={src.replace("?compact=1", "")}
                    height="400"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={`LinkedIn Testimonial ${index + 1}`}
                    className="w-full h-[400px] rounded-2xl"
                  ></iframe>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.linkedin.com/in/pavithra-simon-906059180/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-700 to-yellow-500 text-white font-medium shadow-lg hover:brightness-110 transition-all duration-300"
          >
            View More on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
