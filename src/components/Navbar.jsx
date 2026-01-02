import { useState, useEffect } from 'react'
import { FaBriefcase, FaCode, FaEnvelope, FaUser, FaHome } from 'react-icons/fa'

function Navbar() {
  const [activeSection, setActiveSection] = useState('landing')

  const navItems = [
    { id: 'landing', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'projects', label: 'Projects', icon: <FaCode /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is in viewport (with some offset for navbar)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-spotify-darkGray/95 backdrop-blur-sm z-50 border-b border-spotify-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold text-lilac">YS</span>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-lilac border-b-2 border-lilac' 
                    : 'text-spotify-lightGray hover:text-white hover:bg-spotify-gray'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar