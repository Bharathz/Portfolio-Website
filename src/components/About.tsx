import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations'
import { DEVELOPER_INTRO, DEVELOPER_EMAIL, DEVELOPER_PHONE, AWARDS, CERTIFICATIONS } from '../utils/constants'

export function About() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me</h2>
            <div className="h-1 bg-gradient-to-r from-nebula to-cyan-400 rounded-full" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Picture */}
          <motion.div
            {...slideInLeft}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-nebula to-cyan-400 rounded-2xl blur-2xl opacity-20" />
              {!imageError ? (
                <img
                  src="/profile.jpeg"
                  alt="Bharath Thangam"
                  onError={() => setImageError(true)}
                  className="relative rounded-2xl w-80 h-96 object-cover border-2 border-nebula/30 shadow-2xl"
                />
              ) : (
                <div className="relative w-80 h-96 rounded-2xl border-2 border-nebula/30 shadow-2xl bg-gradient-to-br from-nebula/20 to-cyan-400/20 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-gray-400 text-sm text-center px-4">Add your profile picture to /public/profile.jpg</p>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            {...slideInRight}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction */}
            <motion.div
              className="glass-dark p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {DEVELOPER_INTRO}
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
              <div className="space-y-2 text-gray-300">
                <a href={`mailto:${DEVELOPER_EMAIL}`} className="flex items-center gap-2 hover:text-nebula transition-colors">
                  <span className="text-nebula">📧</span>
                  <span>{DEVELOPER_EMAIL}</span>
                </a>
                <div className="flex items-center gap-2">
                  <span className="text-nebula">📱</span>
                  <span>{DEVELOPER_PHONE}</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Certifications</h3>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-nebula mt-1">✓</span>
                    <div>
                      <div className="font-medium">{cert.name}</div>
                      <div className="text-sm text-gray-400">{cert.issuer}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Awards & Recognition</h3>
              <div className="flex flex-wrap gap-3">
                {AWARDS.map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-dark px-4 py-2 rounded-full text-nebula text-sm font-medium"
                  >
                    {award.title} ({award.date})
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
