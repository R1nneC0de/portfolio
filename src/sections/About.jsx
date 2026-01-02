import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function About() {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/R1nneC0de', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/skyashas30', label: 'LinkedIn' },
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
              I'm a Computer Science student passionate about building innovative solutions 
              and learning new technologies. I love turning ideas into reality through code, 
              whether it's developing full-stack applications, exploring AI/ML, or creating 
              interactive web experiences.
            </p>
            
            <p className="text-lg text-spotify-lightGray leading-relaxed mb-8">
              When I'm not coding, you can find me exploring the latest tech trends, 
              contributing to open-source projects, or working on personal projects that 
              push my boundaries and expand my skill set.
            </p>
            
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