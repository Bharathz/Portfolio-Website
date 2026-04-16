import { motion } from 'framer-motion'
import { PROJECTS } from '../utils/constants'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work showcasing my skills in full-stack development 
            and 3D web technologies.
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          {...staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-dark rounded-lg overflow-hidden group cursor-pointer h-full flex flex-col"
            >
              {/* Project Header with Icon */}
              <div className="h-40 bg-gradient-to-br from-nebula/20 to-cyan-400/20 flex items-center justify-center group-hover:from-nebula/40 group-hover:to-cyan-400/40 transition-all relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, linear: true }}
                  className="absolute inset-0 opacity-10"
                >
                  <div className="w-full h-full bg-gradient-to-r from-nebula via-transparent to-cyan-400" />
                </motion.div>
                
                {/* Project Icon */}
                <div className="text-6xl group-hover:scale-150 transition-transform relative z-10">
                  {project.image}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-nebula transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-medium rounded-full glass hover:glass-dark transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm text-nebula hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit
                  </motion.a>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm text-nebula hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border-2 border-nebula text-nebula font-semibold rounded-lg hover:bg-nebula/10 transition-all"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
