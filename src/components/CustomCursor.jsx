import { useEffect, useState } from 'react'

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let trailId = 0

    const updateMousePosition = (e) => {
      setIsVisible(true)
      const newPos = { x: e.clientX, y: e.clientY }
      setMousePosition(newPos)
      
      const newTrailPoint = { ...newPos, id: trailId++, timestamp: Date.now() }
      setTrail((prevTrail) => [...prevTrail.slice(-8), newTrailPoint])
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      setTrail(prev => prev.filter(point => now - point.timestamp < 500))
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none rounded-full"
          style={{
            left: point.x - 3,
            top: point.y - 3,
            width: '6px',
            height: '6px',
            background: `rgba(0, 191, 255, ${(index + 1) / trail.length * 0.7})`,
            opacity: (index + 1) / trail.length,
            transition: 'opacity 0.3s ease-out',
            zIndex: 99998,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transition: 'transform 0.1s ease-out',
          transform: `scale(${isClicking ? 0.8 : 1})`,
          zIndex: 99999,
        }}
      >
        {/* Outer ring */}
        <div
          className="w-8 h-8 border-2 rounded-full transition-all duration-200"
          style={{
            borderColor: isClicking ? '#00ff41' : '#00bfff',
            transform: `scale(${isClicking ? 1.5 : 1})`,
            boxShadow: isClicking ? '0 0 20px #00ff41' : '0 0 10px #00bfff',
          }}
        />
        
        {/* Inner dot */}
        <div
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full transition-all duration-200"
          style={{
            backgroundColor: isClicking ? '#00ff41' : '#00bfff',
            transform: `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1})`,
            boxShadow: isClicking ? '0 0 10px #00ff41' : '0 0 5px #00bfff',
          }}
        />
      </div>
    </>
  )
}

export default CustomCursor