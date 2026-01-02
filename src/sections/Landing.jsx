import { motion } from 'framer-motion'

function Landing() {
  return (
    <section id="landing" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-spotify-black via-spotify-darkGray to-lilac-dark/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-lilac-light via-lilac to-spotify-green bg-clip-text text-transparent">
              SKYashas
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-spotify-lightGray mb-8"
          >
            Computer Science Student | Full Stack Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-lilac hover:bg-lilac-light text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-lilac rounded-full flex justify-center">
          <div className="w-1 h-3 bg-lilac rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Landing