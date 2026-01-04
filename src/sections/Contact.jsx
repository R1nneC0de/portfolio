import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_kan76xr'
  const TEMPLATE_ID = 'template_r7qerwy'
  const PUBLIC_KEY = 'oWF47aK1m3Y5Wv9Y9'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      console.error('Email send failed:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+1 (123) 456-7890', link: 'tel:+11234567890' },
    { icon: <FaGithub />, label: 'GitHub', value: 'github.com/yourusername', link: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/yourusername', link: 'https://linkedin.com/in/yourusername' },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-lilac mb-12 text-center">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-spotify-lightGray mb-8 leading-relaxed">
                Feel free to reach out! Whether you have a question, want to collaborate, 
                or just want to say hi, I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-spotify-lightGray hover:text-lilac transition-colors duration-300 group"
                  >
                    <div className="text-3xl text-lilac group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-spotify-lightGray/70">{item.label}</p>
                      <p className="text-lg font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-spotify-darkGray border-2 border-spotify-gray focus:border-lilac rounded-lg text-white placeholder-spotify-lightGray/50 outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-spotify-darkGray border-2 border-spotify-gray focus:border-lilac rounded-lg text-white placeholder-spotify-lightGray/50 outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-spotify-darkGray border-2 border-spotify-gray focus:border-lilac rounded-lg text-white placeholder-spotify-lightGray/50 outline-none transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.95 }}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all duration-300 ${
                    status === 'sending' 
                      ? 'bg-spotify-gray cursor-not-allowed' 
                      : status === 'success'
                      ? 'bg-spotify-green'
                      : status === 'error'
                      ? 'bg-red-600'
                      : 'bg-gradient-to-r from-lilac to-spotify-green hover:shadow-lg'
                  }`}
                >
                  {status === 'sending' ? 'Sending...' : 
                   status === 'success' ? '✓ Message Sent!' : 
                   status === 'error' ? '✗ Failed to Send' :
                   'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact