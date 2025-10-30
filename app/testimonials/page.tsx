"use client"

import Navigation from "@/components/navigation"
import { motion } from "framer-motion"

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tamil Connect Hyderabad Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-12 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-white via-purple-50 to-pink-50"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-20 bg-[url('/tch-carousel-1.jpg')] bg-cover bg-center"></div>

            {/* Overlay content */}
            <div className="relative z-10 px-6 md:px-12 py-16 text-center">
              {/* Logo */}
              <div className="flex justify-center mb-10">
                <div className="w-28 h-28 bg-white/70 backdrop-blur-sm rounded-full overflow-hidden shadow-lg border border-purple-200">
                  <img src="/tch.jpg" alt="Tamil Connect Hyderabad" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                Tamil Connect Hyderabad
              </h2>

              {/* Description */}
              <div className="max-w-4xl mx-auto text-muted-foreground space-y-5 leading-relaxed">
                <p>
                  Founded in <strong className="text-purple-600">February 2025</strong> by Pavitra Simon, Tamil Connect Hyderabad
                  was envisioned as a platform to unite the vibrant Tamil community living in the city. What began with five
                  passionate members — Pavitra Simon, Naren, Sanjay, Nandini, and Vignesh — has now grown into a thriving network
                  of over <strong className="text-purple-600">2,000 Tamilians</strong>, including 700+ active members.
                </p>
                <p>
                  We host <strong>exclusive networking events, cultural meetups,</strong> and <strong>sports tournaments</strong>,
                  building a space where Tamil professionals, families, and students can connect, collaborate, and celebrate
                  their shared roots.
                </p>
                <p>
                  Our mission is to make every Tamilian in Hyderabad feel at home — fostering friendship, culture, and
                  collaboration beyond boundaries.
                </p>
              </div>

              {/* Image Grid */}
              <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {[
                  "/tch-carousel-1.jpg",
                  "/tch-carousel-2.jpg",
                  "/tch-carousel-3.jpg",
                  "/tch-carousel-4.jpg",
                  "/tch-carousel-5.jpg",
                  "/tch-carousel-6.jpg",
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={src}
                      alt={`TCH Event ${i + 1}`}
                      className="object-cover w-full h-56 md:h-64 hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/posts/pavithra-simon-906059180_the-last-eve-was-like-i-cant-ask-anything-activity-7383464622655336448-od0u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg hover:brightness-110 transition-all duration-300"
                >
                  Join Us on LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/tamilconnect_hyderabad?igsh=OWJ6dDlkOGZ4aGpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-pink-400 text-pink-600 font-medium bg-white hover:bg-pink-50 transition-all duration-300 shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm4.5 6a3 3 0 100 6 3 3 0 000-6zm5.25-2.25h.008v.008h-.008V6.75z"
                    />
                  </svg>
                  Connect on Instagram
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsPage
