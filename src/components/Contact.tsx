import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }
  
  return (
    <section id="contact" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {[
            {
              icon: Mail,
              title: "Email",
              value: "bharath8101999@gmail.com",
              link: "mailto:bharath8101999@gmail.com",
            },
            {
              icon: MessageSquare,
              title: "Whatsapp",
              value: "+91 9443485048",
              link: "#",
            },
            {
              icon: Send,
              title: "LinkedIn",
              value: "bharaththangam",
              link: "https://www.linkedin.com/in/bharaththangam/",
            },
          ].map((contact, i) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-dark p-6 rounded-lg text-center hover:glass transition-all"
              >
                <Icon className="w-8 h-8 text-nebula mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{contact.title}</h3>
                <p className="text-nebula text-sm hover:text-cyan-400 transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </div>
        
        {/* Contact Form */}
        <motion.form
          {...fadeInUp}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-dark p-8 rounded-lg max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-nebula transition-colors"
              />
            </motion.div>
            
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-nebula transition-colors"
              />
            </motion.div>
          </div>
          
          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-nebula transition-colors resize-none"
            />
          </motion.div>
          
          {/* Submit Button */}
          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              submitted
                ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                : 'bg-gradient-to-r from-nebula to-cyan-400 text-white hover:shadow-lg hover:shadow-nebula/50'
            }`}
          >
            {submitted ? (
              <>
                <span>✓</span>
                Message Sent!
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>© 2024 Your Name. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
