"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import { motion } from "framer-motion"

const Blog = () => {
  useEffect(() => {
    // Load Iframely script for LinkedIn embeds
    if ((window as any).iframely) {
      ;(window as any).iframely.load && (window as any).iframely.load()
      return
    }

    const script = document.createElement("script")
    script.src = "https://iframely.net/embed.js"
    script.async = true
    script.onload = () => {
      setTimeout(() => {
        ;(window as any).iframely && (window as any).iframely.load && (window as any).iframely.load()
      }, 200)
    }
    document.body.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 gradient-text-purple">Blogs & Highlights</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore featured stories and recent updates from Pavithra Simon — leadership, growth, and inspiration.
            </p>
          </motion.div>

          {/* Featured Post Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="w-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7304562838159663105?collapsed=1"
                height="650"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="Featured LinkedIn Post"
                className="w-full h-[650px] rounded-2xl"
              ></iframe>
            </div>
          </motion.section>

          {/* Smaller Posts Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-8 text-center gradient-text-purple">More Posts</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Post 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7304562838159663105?compact=1"
                  height="400"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn Post 1"
                  className="w-full h-[400px]"
                ></iframe>
              </motion.div>

              {/* Post 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7289728773932052480?compact=1"
                  height="400"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn Post 2"
                  className="w-full h-[400px]"
                ></iframe>
              </motion.div>

              {/* Post 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7289728773932052480?compact=1"
                  height="400"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn Post 3"
                  className="w-full h-[400px]"
                ></iframe>
              </motion.div>
            </div>
          </section>

          {/* More Posts Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold mb-8 text-center gradient-text-purple">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <iframe
                    src={`https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:730456283815966310${index}?compact=1`}
                    height="400"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={`LinkedIn Post ${index + 3}`}
                    className="w-full h-[400px]"
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

export default Blog
