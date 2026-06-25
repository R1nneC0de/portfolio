import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      name: 'SwiftPaws',
      description: 'Containerized backend exposing 28+ REST endpoints with JWT role-based access control, rate limiting, and a WebSocket real-time dashboard, applying microservices and SOA principles (101/101 passing tests). Features an on-premises facial-recognition check-in service (InsightFace, 512-dim embeddings, cosine similarity) with sub-2s check-in and zero external API dependencies, plus AES-128-CBC (Fernet) biometric encryption and GDPR-compliant self-deletion.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'WebSockets', 'JWT', 'Flutter'],
      github: 'https://github.com/ridasyeda66/SwiftPaws',
      icon: '🐾',
      date: 'Jan – May 2026'
    },
    {
      name: 'SpotandtracK',
      description: 'Full-stack monitoring platform that diffs Spotify playlist snapshots to detect track availability changes, using a BullMQ + Redis job queue with scheduled sweeps, exponential backoff, and automatic rate-limit handling. Implements Spotify OAuth 2.0 with AES-256-GCM token encryption and a distributed-lock refresh flow that prevents race conditions across concurrent jobs, with end-to-end type safety across the stack.',
      tech: ['Next.js', 'Node.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'BullMQ', 'Redis', 'OAuth 2.0'],
      github: 'https://github.com/R1nneC0de/SpotandtracK',
      icon: '🎵',
      date: 'Feb 2026'
    },
    {
      name: 'MoneySpeaks',
      description: 'Real-time scam-detection system that transcribes live calls and classifies risk through a multi-stage streaming pipeline with under 2s end-to-end latency. Integrates AI-vs-human voice detection (wav2vec2) and behavioral analysis via Gemini, improving detection confidence by 35% and cutting false negatives by 28% with WebRTC VAD timing signals.',
      tech: ['Python', 'FastAPI', 'React', 'WebSockets', 'wav2vec2', 'Gemini', 'WebRTC VAD'],
      github: 'https://github.com/R1nneC0de/MoneySpeaks',
      icon: '🛡️',
      date: 'Mar 2026'
    },
    {
      name: 'CityTrotter',
      description: 'Urban-planning web tool delivering instant impact analysis across 7 domains (zoning, traffic, transit, schools, infrastructure, economics), backed by geospatial queries on PostGIS. Integrates Mapbox visualization and Gemini-generated feasibility reports, reducing preliminary study time by 60% and returning full analyses in 5–10 seconds.',
      tech: ['React', 'Vite', 'FastAPI', 'PostgreSQL/PostGIS', 'Mapbox GL', 'Gemini'],
      github: 'https://github.com/R1nneC0de/CityTrotter',
      icon: '🏙️',
      date: 'Nov 2025'
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      className="text-7xl mb-4"
                      animate={{ 
                        scale: hoveredProject === index ? 0.8 : 1,
                        y: hoveredProject === index ? -20 : 0 
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {project.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white text-center mb-2">{project.name}</h3>
                    <p className="text-spotify-lightGray text-sm">{project.date}</p>
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
                  className="absolute inset-0 bg-gradient-to-br from-spotify-black via-spotify-darkGray to-black backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between border-2 border-spotify-green/50 shadow-2xl overflow-y-auto"
                  style={{ 
                    zIndex: hoveredProject === index ? 10 : -1,
                    pointerEvents: hoveredProject === index ? 'auto' : 'none'
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-lilac mb-3">{project.name}</h3>
                    <p className="text-spotify-lightGray mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-lilac/20 text-lilac text-xs font-medium rounded-full border border-lilac/40"
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
                    <FaGithub className="text-xl" />
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