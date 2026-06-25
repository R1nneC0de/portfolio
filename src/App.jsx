import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import Landing from './sections/Landing'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <div className="min-h-screen bg-spotify-black">
        <Navbar />
        <BackToTop />
        
        {/* Sections in correct order */}
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App