import { motion } from 'framer-motion'
import { NAV_ITEMS } from '../utils/constants'
import { useEffect, useState } from 'react'

export function Navigation() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold bg-gradient-to-r from-nebula to-cyan-400 bg-clip-text text-transparent cursor-pointer"
          >
            Bharath Thangam
          </motion.div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label.toLowerCase())}
                whileHover={{ color: '#8b5cf6' }}
                className={`text-sm font-medium transition-colors ${
                  active === item.label.toLowerCase()
                    ? 'text-nebula'
                    : 'text-gray-300'
                }`}
              >
                {item.label}
                {active === item.label.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="h-1 bg-nebula rounded-full mt-1"
                  />
                )}
              </motion.a>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-nebula to-cyan-400 text-white font-medium text-sm hover:shadow-lg hover:shadow-nebula/50 transition-all"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
