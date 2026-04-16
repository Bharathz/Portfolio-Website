import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../utils/constants'

export function Experience() {

  return (
    <section id="experience" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Experience & Education</h2>
            <div className="h-1 bg-gradient-to-r from-nebula to-cyan-400 rounded-full" />
          </div>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Work Experience</h3>
          <motion.div
            {...staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {WORK_EXPERIENCE.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-6 rounded-lg hover:glass transition-all border-l-4 border-nebula"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-nebula">{job.title}</h4>
                    <p className="text-gray-300">{job.company}</p>
                    <p className="text-sm text-gray-400">{job.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400 whitespace-nowrap">{job.period}</p>
                    <p className="text-xs text-gray-500">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-nebula mt-1">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Education</h3>
            <motion.div
              {...staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-dark p-6 rounded-lg border-l-4 border-cyan-400"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-lg font-bold text-cyan-400 mb-2">{edu.school}</h4>
                  <p className="text-gray-300 font-semibold mb-2">{edu.degree}</p>
                  <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-sm text-gray-400">{edu.details}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Certifications & Awards</h3>
            <motion.div
              {...staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-dark p-4 rounded-lg border-l-4 border-nebula flex items-start gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-nebula text-xl mt-1">🏆</span>
                  <div>
                    <p className="text-gray-300 font-semibold">{cert.name}</p>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
