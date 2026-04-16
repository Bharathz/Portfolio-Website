import { motion } from 'framer-motion'
import { DEVELOPER_NAME, DEVELOPER_ROLE, SKILLS } from '../utils/constants'
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations'
import { Suspense } from 'react'
import { Scene } from './3D/Scene'
import { FloatingPlanet } from './3D/FloatingPlanet'

interface TypingTextProps {
  text: string
  delay?: number
}

function TypingText({ text, delay = 0 }: TypingTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * 0.03,
            duration: 0.3,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function Hero() {
  const skillNames = SKILLS.map(s => s.name).slice(0, 5)
  const skillText = skillNames.join(' • ')
  
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 w-full h-full">
        <Suspense fallback={null}>
          <Scene>
            <FloatingPlanet size={3} color="#8b5cf6" position={[-5, 2, 0]} />
            <FloatingPlanet size={1.5} color="#06b6d4" position={[6, -1, -2]} />
          </Scene>
        </Suspense>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            {...slideInLeft}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold text-nebula uppercase tracking-widest"
            >
              ✨ Welcome to my portfolio
            </motion.div>
            
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <TypingText text={DEVELOPER_NAME} delay={0.3} />
              </h1>
              <h2 className="text-2xl md:text-3xl text-nebula-light font-semibold">
                <TypingText text={DEVELOPER_ROLE} delay={0.5} />
              </h2>
            </div>
            
            {/* Description */}
            <motion.p
              {...fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-300 max-w-xl leading-relaxed"
            >
              Building scalable applications with React, Node.js, and AWS. 
              Passionate about creating immersive digital experiences and solving complex problems.
            </motion.p>
            
            {/* Animated Skills List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="py-4 border-l-2 border-nebula pl-4"
            >
              <p className="text-sm text-nebula font-mono animate-pulse">
                {skillText}
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              {...fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-nebula to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-center"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-nebula text-nebula font-semibold rounded-lg hover:bg-nebula/10 transition-all text-center"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Side - 3D Placeholder Text */}
          <motion.div
            {...slideInRight}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center relative h-96"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-gray-400 text-sm">Scroll to explore</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-nebula text-xl z-10"
      >
        ↓
      </motion.div>
    </section>
  )
}
