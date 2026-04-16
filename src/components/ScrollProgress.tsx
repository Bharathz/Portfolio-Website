import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrollTop = window.scrollY
      const scrollPercent = (scrollTop / documentHeight) * 100
      setProgress(scrollPercent)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-nebula to-cyan-400 z-40 origin-left"
      style={{ scaleX: progress / 100 }}
      transition={{ scaleX: { type: 'spring', stiffness: 300, damping: 60 } }}
    />
  )
}
