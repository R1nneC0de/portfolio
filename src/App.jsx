import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Landing from './sections/Landing'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-spotify-black">
      <Navbar />
      <BackToTop />
      
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App