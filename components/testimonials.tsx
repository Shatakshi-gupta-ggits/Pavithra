"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useRef } from "react"

// Discriminated union types for testimonials to satisfy TypeScript
type LinkedInTestimonial = {
  type: "linkedin"
  src: string
  title: string
}

type TextTestimonial = {
  type: "text"
  content: {
    name: string
    position: string
    service: string
    rating: string
    date: string
    text: string
  }
}

type Testimonial = LinkedInTestimonial | TextTestimonial

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const TESTIMONIALS: Testimonial[] = [
    // LinkedIn embeds
{
      type: "text", 
      content: {
        name: "Shreya Gupta",
        position: "PGDM Student at ISBR (2024-2026) | Placement Ambassador | Finance & Business",
        service: "Resume Review", 
        rating: "4.8",
        date: "November 3, 2025",
        text: "I am an PGDM student currently preparing for my placements and career development, Pavithra mam has given me the most valuable guidance to this aspect, she helped understand my strengths, and made me a roadmap, she also helped me with resume building which is a very important aspect towards placements process! She has been an amazing guiding factor, I recommend Pavithra mam to every student who is struggling to find a career goal and inside aspects of it!"
      }
    }  ,  {
      type: "text",
      content: {
        name: "Ashley Victor",
        position: "Service Consultant @ Insight Global | Customer Support Email/Chat Support",
        service: "Resume Writing",
        rating: "5.0",
        date: "November 4, 2025",
        text: "This is my first project with Pavithra and it was great experience for working with her. Sometimes I used to forget about the project but Pavithra is the first to text me about the Resume updates. She delivers the work on time. Her professional experience and she took my inputs as well to frame the resume. I would definitely recommend her. She patiently did all the updates which I had made her to do in the resume."
      }
    },
      {
  type: "text",
  content: {
    name: "Kavinda De Silva",
    position: "Expert in Sales, Marketing, and Client Relations | Dedicated to Driving Innovation and Growth",
    service: "Professional Collaboration",
    rating: "5.0",
    date: "October 6, 2025",
    text: "Working with Pavithra Simon is a truly uplifting experience. She has an incredible ability to make complex decisions feel effortless, all while making everyone around her feel valued, supported, and inspired. Her professionalism is unmatched, yet her warmth and genuine care shine through in everything she does. Any startup would not just benefit from her expertise, they would genuinely enjoy every moment of working with her. Pavithra is one of those rare professionals who leaves a lasting positive impact on everyone she collaborates with."
  }
},
    {
      type: "linkedin", 
      src: "https://www.linkedin.com/in/pavithra-simon-%E2%9C%8D%F0%9F%8F%BC-906059180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

      title: "LinkedIn Testimonial 2"
    }
  ]

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth
      const maxScrollLeft = scrollWidth - clientWidth
      
      if (container.scrollLeft >= maxScrollLeft - 10) {
        // If at end, scroll to start
        container.scrollTo({ left: 0, behavior: 'smooth' })
        setCurrentIndex(0)
      } else {
        // Scroll to next card
        const nextIndex = currentIndex + 1
        const scrollPosition = nextIndex * (container.clientWidth + 32) // 32px gap
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
        setCurrentIndex(nextIndex)
      }
    }
  }

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const prevIndex = currentIndex - 1
      
      if (prevIndex < 0) {
        // If at start, scroll to end
        const scrollWidth = container.scrollWidth
        const clientWidth = container.clientWidth
        container.scrollTo({ left: scrollWidth - clientWidth, behavior: 'smooth' })
        setCurrentIndex(TESTIMONIALS.length - 1)
      } else {
        // Scroll to previous card
        const scrollPosition = prevIndex * (container.clientWidth + 32)
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
        setCurrentIndex(prevIndex)
      }
    }
  }

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

        {/* Scrollable Testimonials Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid with Horizontal Scroll */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden gap-8 py-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white h-full">
                  <CardContent className="p-0 h-full">
                      {testimonial.type === "linkedin" ? (
                        <iframe
                          // keep the ?compact=1 query param if present — LinkedIn may rely on it
                          src={testimonial.src}
                          height="400"
                          width="100%"
                          frameBorder="0"
                          allowFullScreen
                          title={testimonial.title}
                          className="w-full h-[400px] rounded-2xl"
                        />
                      ) : (
                      <div className="p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="font-bold text-lg text-gray-900">{testimonial.content.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{testimonial.content.position}</p>
                        </div>

                        {/* Service & Rating */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-purple-700">
                            {testimonial.content.service}
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-yellow-600">
                              {testimonial.content.rating}
                            </span>
                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>

                        {/* Date */}
                        <p className="text-xs text-gray-500 mb-4">{testimonial.content.date}</p>

                        {/* Testimonial Text */}
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {testimonial.content.text}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current
                  const scrollPosition = index * (container.clientWidth + 32)
                  container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
                  setCurrentIndex(index)
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
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