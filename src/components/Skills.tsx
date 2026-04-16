import { motion } from 'framer-motion'
import { SKILLS } from '../utils/constants'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { Suspense } from 'react'
import { Scene } from './3D/Scene'
import { SkillsOrbit } from './3D/SkillsOrbit'

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I work with modern tools and technologies to build fast, scalable, and beautiful web applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - 3D Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 h-96 rounded-lg glass-dark overflow-hidden"
          >
            <Suspense fallback={null}>
              <Scene cameraPosition={[0, 0, 20]}>
                <SkillsOrbit skillCount={SKILLS.length} />
              </Scene>
            </Suspense>
          </motion.div>
          
          {/* Right - Skills Grid */}
          <motion.div
            {...staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-dark p-6 rounded-lg text-center hover:glass transition-all cursor-pointer group"
                >
                  {/* Icon */}
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                  
                  {/* Skill Bar */}
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-nebula to-cyan-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
