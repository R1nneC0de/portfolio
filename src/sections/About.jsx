import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaFileAlt } from 'react-icons/fa'

function About() {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/R1nneC0de', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/SKYashas30', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:sreeyash007@gmail.com', label: 'Email' },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-spotify-darkGray py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-lilac mb-8 text-center">About Me</h2>
          
          <div className="bg-spotify-gray/50 rounded-lg p-8 backdrop-blur-sm">
            <p className="text-lg text-spotify-lightGray leading-relaxed mb-6">
              I'm a Computer Science student at Georgia State University (3.92 GPA, graduating May 2026),
              passionate about building reliable systems at the intersection of full-stack development and
              AI/ML. As a Data Engineering Intern at Sysco / Techwave, I built a reusable Python data
              migration engine for an ERP-to-Workday transition, cutting future project timelines by 30%.
            </p>

            <p className="text-lg text-spotify-lightGray leading-relaxed mb-6">
              My toolkit spans backend frameworks like Spring Boot, FastAPI, and Node.js/Express; React,
              Next.js, and Flutter on the frontend; and distributed-systems building blocks such as message
              queues (BullMQ), Redis, caching, and rate limiting. I work day to day with PostgreSQL, Docker,
              and cloud platforms (AWS, GCP), and enjoy turning complex problems into clean, type-safe solutions.
            </p>

            <p className="text-lg text-spotify-lightGray leading-relaxed mb-8">
              When I'm not coding, I'm exploring new developments in AI/ML, shipping side projects that push
              my technical boundaries, or tutoring students in Calculus, Linear Algebra, and Statistics at
              Georgia State University.
            </p>
            
            {/* Resume Buttons */}
            <div className="flex gap-4 justify-center mb-8 flex-wrap">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-lilac hover:bg-lilac-light text-white font-semibold rounded-lg transition-all duration-300"
              >
                <FaFileAlt />
                View Resume
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Sree_Yashas_Kuchi_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border-2 border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-4xl text-spotify-lightGray hover:text-lilac transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About