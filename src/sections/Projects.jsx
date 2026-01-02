import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      name: 'Project One',
      description: 'A full-stack web application built with React and Node.js. Features user authentication, real-time updates, and responsive design.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/yourusername/project-one',
      icon: '🚀',
    },
    {
      name: 'Project Two',
      description: 'Machine learning model for image classification using CNNs. Achieved 95% accuracy on test dataset.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      github: 'https://github.com/yourusername/project-two',
      icon: '🤖',
    },
    {
      name: 'Project Three',
      description: 'Mobile-first e-commerce platform with payment integration and inventory management system.',
      tech: ['React Native', 'Firebase', 'Stripe API'],
      github: 'https://github.com/yourusername/project-three',
      icon: '🛒',
    },
    {
      name: 'Project Four',
      description: 'Data visualization dashboard for analyzing social media trends using D3.js and REST APIs.',
      tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project-four',
      icon: '📊',
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-spotify-darkGray py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-lilac mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative h-96"
                style={{ perspective: '1000px' }}
              >
                {/* Folder (closed state) */}
                <motion.div
                  animate={{
                    rotateX: hoveredProject === index ? 25 : 0,
                    transformOrigin: 'bottom',
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0 bg-gradient-to-br from-spotify-gray via-spotify-darkGray to-black rounded-2xl border-2 border-lilac/50 shadow-2xl cursor-pointer"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {/* Folder tab */}
                  <div className="absolute -top-4 left-12 w-32 h-8 bg-gradient-to-r from-lilac to-lilac-light rounded-t-xl shadow-lg"></div>
                  
                  {/* Folder front face */}
                  <div className="h-full flex flex-col items-center justify-center p-8">
                    <motion.div 
                      className="text-8xl mb-6"
                      animate={{ 
                        scale: hoveredProject === index ? 0.8 : 1,
                        y: hoveredProject === index ? -20 : 0 
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {project.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white text-center">{project.name}</h3>
                    <p className="text-spotify-lightGray mt-2 text-sm">Click to view details</p>
                  </div>
                </motion.div>
                
                {/* Content (revealed on hover) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    scale: hoveredProject === index ? 1 : 0.95,
                    y: hoveredProject === index ? 0 : 40,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0 bg-gradient-to-br from-spotify-black via-spotify-darkGray to-black backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between border-2 border-spotify-green/50 shadow-2xl"
                  style={{ 
                    zIndex: hoveredProject === index ? 10 : -1,
                    pointerEvents: hoveredProject === index ? 'auto' : 'none'
                  }}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-lilac mb-4">{project.name}</h3>
                    <p className="text-spotify-lightGray mb-6 text-base leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-lilac/20 text-lilac text-sm font-medium rounded-full border border-lilac/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* GitHub link */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-3 bg-spotify-green hover:bg-spotify-green/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    <FaGithub className="text-2xl" />
                    <span>View on GitHub</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects