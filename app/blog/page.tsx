"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import { motion } from "framer-motion"

const BLOG_LINKS = [
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7304674876001333248?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7380199804968218624?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7380863778055368704?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7379145184309268480?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7288601030261456896?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7377747658192596992?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7198587722809163776?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7206327995198840832?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7383464622655336448?compact=1",
]

const Blog = () => {
  useEffect(() => {
    // Load Iframely for LinkedIn embeds
    if ((window as any).iframely) {
      (window as any).iframely.load && (window as any).iframely.load()
      return
    }

    const script = document.createElement("script")
    script.src = "https://iframely.net/embed.js"
    script.async = true
    script.onload = () => {
      setTimeout(() => {
        (window as any).iframely &&
          (window as any).iframely.load &&
          (window as any).iframely.load()
      }, 200)
    }
    document.body.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-amber-50">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-500 bg-clip-text text-transparent animate-gold-glow">
              Blogs & Highlights
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore featured stories and updates from Pavithra Simon — leadership, growth, and inspiration.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="w-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <iframe
                src={BLOG_LINKS[0].replace("?compact=1", "")}
                height="650"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="Featured LinkedIn Post"
                className="w-full h-[650px] rounded-2xl"
              ></iframe>
            </div>
          </motion.section>

          {/* Smaller Posts */}
          <section>
            <h2 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-500 bg-clip-text text-transparent animate-gold-glow">
              More Posts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_LINKS.slice(1, 4).map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <iframe
                    src={link}
                    height="400"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={`LinkedIn Post ${i + 1}`}
                    className="w-full h-[400px]"
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recent Articles Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold mb-8 text-center gradient-text-purple">
              Recent Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_LINKS.slice(4).map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <iframe
                    src={link}
                    height="400"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={`LinkedIn Post ${index + 4}`}
                    className="w-full h-[400px]"
                  ></iframe>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://www.linkedin.com/posts/pavithra-simon-906059180_the-last-eve-was-like-i-cant-ask-anything-activity-7383464622655336448-od0u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-yellow-500 text-white font-medium hover:brightness-110 transition shadow-lg animate-gold-glow-btn"
              >
                Join Us on LinkedIn
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

export default Blog
