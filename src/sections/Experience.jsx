import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

function Experience() {
  const experiences = [
    {
      title: 'Data Engineering Intern',
      company: 'Sysco / Techwave',
      location: 'Houston, TX',
      period: 'June 2025 – August 2025',
      description: [
        'Engineered a reusable data migration engine in Python for Sysco’s ERP-to-Workday transition, applying object-oriented design patterns and enterprise ETL practices that cut future project timelines by 30%',
        'Developed validation scripts that raised record-match precision to 97%, enforcing data consistency between legacy and modern systems through rigorous test coverage and defensive error handling',
      ],
    },
    {
      title: 'STEM Tutor',
      company: 'Georgia State University',
      location: 'Atlanta, GA',
      period: 'August 2025 – December 2025',
      description: [
        'Led tutoring for Calculus I/II, Linear Algebra, and Probability & Statistics, supporting 15+ students weekly',
        'Drove a 30% increase in average student grades by translating complex technical concepts into clear, accessible explanations',
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-lilac mb-12 text-center">Work Experience</h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-lilac via-spotify-green to-lilac"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left ml-auto'} w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center border-4 border-spotify-black">
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                </div>
                
                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-spotify-darkGray p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-lilac-light mb-1">{exp.company}</h4>
                  <p className="text-sm text-spotify-lightGray/70 mb-1">{exp.location}</p>
                  <p className="text-sm text-spotify-lightGray mb-4">{exp.period}</p>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-spotify-lightGray text-sm leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience