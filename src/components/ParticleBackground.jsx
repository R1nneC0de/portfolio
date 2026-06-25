import { useEffect, useRef } from 'react'

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Reduced city grid - fewer elements
    const gridSize = 120  // Increased spacing
    const citySize = 8    // Fewer nodes (was 15)
    
    class Node {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 3
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      draw(time) {
        const pulse = Math.sin(time * 0.001 + this.pulsePhase) * 0.2 + 0.5  // Slower, subtler pulse
        
        // Smaller, dimmer glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 10)
        gradient.addColorStop(0, `rgba(0, 191, 255, ${0.4 * pulse})`)
        gradient.addColorStop(0.5, `rgba(0, 191, 255, ${0.15 * pulse})`)
        gradient.addColorStop(1, 'rgba(0, 191, 255, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2)
        ctx.fill()
        
        // Dimmer core
        ctx.fillStyle = `rgba(0, 191, 255, ${0.5 * pulse})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    class Building {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.width = gridSize * 0.6
        this.height = gridSize * 0.6
        this.depth = Math.random() * 30 + 15
        this.pulseSpeed = Math.random() * 0.0005 + 0.0003
        this.pulseOffset = Math.random() * Math.PI * 2
      }

      draw(time) {
        const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.2 + 0.4  // Dimmer
        
        // Dimmer 3D side
        ctx.fillStyle = `rgba(0, 80, 120, ${0.15 * pulse})`
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x - this.depth, this.y - this.depth)
        ctx.lineTo(this.x + this.width - this.depth, this.y - this.depth)
        ctx.lineTo(this.x + this.width, this.y)
        ctx.closePath()
        ctx.fill()
        
        // Dimmer building face
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.height)
        gradient.addColorStop(0, `rgba(0, 60, 90, ${0.3 * pulse})`)
        gradient.addColorStop(1, `rgba(0, 30, 45, ${0.2 * pulse})`)
        ctx.fillStyle = gradient
        ctx.fillRect(this.x, this.y, this.width, this.height)
        
        // Subtle outline
        ctx.strokeStyle = `rgba(0, 191, 255, ${0.3 * pulse})`
        ctx.lineWidth = 0.5
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        
        // Fewer, dimmer windows
        const windowSize = 6
        const windowGap = 20
        for (let wx = this.x + 15; wx < this.x + this.width - 15; wx += windowGap) {
          for (let wy = this.y + 15; wy < this.y + this.height - 15; wy += windowGap) {
            if (Math.random() > 0.6) {  // Only 40% of windows lit
              ctx.fillStyle = `rgba(0, 191, 255, ${0.2 * pulse})`
              ctx.fillRect(wx, wy, windowSize, windowSize)
            }
          }
        }
      }
    }

    class Signal {
      constructor(start, end) {
        this.start = start
        this.end = end
        this.progress = Math.random()
        this.speed = 0.003 + Math.random() * 0.005  // Slower
        this.size = 2
      }

      update() {
        this.progress += this.speed
        if (this.progress > 1) {
          this.progress = 0
        }
      }

      draw() {
        const x = this.start.x + (this.end.x - this.start.x) * this.progress
        const y = this.start.y + (this.end.y - this.start.y) * this.progress
        
        // Shorter, dimmer trail
        for (let i = 0; i < 3; i++) {
          const trailProgress = this.progress - i * 0.03
          if (trailProgress > 0) {
            const tx = this.start.x + (this.end.x - this.start.x) * trailProgress
            const ty = this.start.y + (this.end.y - this.start.y) * trailProgress
            const alpha = (1 - i * 0.3) * 0.4
            
            ctx.fillStyle = `rgba(0, 255, 65, ${alpha})`
            ctx.beginPath()
            ctx.arc(tx, ty, this.size - i * 0.5, 0, Math.PI * 2)
            ctx.fill()
          }
        }
        
        // Dimmer glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
        gradient.addColorStop(0, 'rgba(0, 255, 65, 0.5)')
        gradient.addColorStop(0.5, 'rgba(0, 255, 65, 0.2)')
        gradient.addColorStop(1, 'rgba(0, 255, 65, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const nodes = []
    const buildings = []
    const connections = []
    const signals = []

    // Create smaller grid
    for (let i = 0; i < citySize; i++) {
      nodes[i] = []
      for (let j = 0; j < citySize; j++) {
        const x = (i - citySize / 2) * gridSize + canvas.width / 2
        const y = (j - citySize / 2) * gridSize + canvas.height / 2
        nodes[i][j] = new Node(x, y)
        
        // Fewer buildings
        if (Math.random() > 0.5 && i < citySize - 1 && j < citySize - 1) {
          buildings.push(new Building(x + 20, y + 20))
        }
      }
    }

    // Create connections with fewer signals
    for (let i = 0; i < citySize; i++) {
      for (let j = 0; j < citySize; j++) {
        if (j < citySize - 1) {
          connections.push({ start: nodes[i][j], end: nodes[i][j + 1] })
          if (Math.random() > 0.7) {  // Only 30% have signals
            signals.push(new Signal(nodes[i][j], nodes[i][j + 1]))
          }
        }
        if (i < citySize - 1) {
          connections.push({ start: nodes[i][j], end: nodes[i + 1][j] })
          if (Math.random() > 0.7) {
            signals.push(new Signal(nodes[i][j], nodes[i + 1][j]))
          }
        }
      }
    }

    let time = 0

    const animate = () => {
      time += 1
      
      // Darker background
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw buildings
      buildings.forEach(building => building.draw(time))
      
      // Draw dimmer road connections
      connections.forEach(conn => {
        const dx = mouse.x - (conn.start.x + conn.end.x) / 2
        const dy = mouse.y - (conn.start.y + conn.end.y) / 2
        const distance = Math.sqrt(dx * dx + dy * dy)
        const proximity = Math.max(0, 1 - distance / 250)
        
        // Dimmer roads
        ctx.strokeStyle = `rgba(0, 191, 255, ${0.1 + proximity * 0.15})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(conn.start.x, conn.start.y)
        ctx.lineTo(conn.end.x, conn.end.y)
        ctx.stroke()
      })
      
      // Draw nodes
      nodes.forEach(row => row.forEach(node => node.draw(time)))
      
      // Draw signals
      signals.forEach(signal => {
        signal.update()
        signal.draw()
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}

export default ParticleBackground