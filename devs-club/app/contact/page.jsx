"use client"
import React, { useState } from 'react'
import { Clock, MapPin, Phone } from "lucide-react"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiSend, FiCode, FiGithub, FiLinkedin } from 'react-icons/fi'
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui//textarea"
import { Button } from "../../components/ui/button"
import Navbar from '../(components)/Navbar'
import { Footer } from '../(components)/Footer'
import { toast } from 'react-hot-toast'

function ContactFormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Here you would typically make an API call to your backend
      // await axios.post('/api/contact', formData)
      
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-4 md:p-8">
      <motion.div
        className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
      />

      <motion.h1 
        className="text-6xl md:text-7xl py-8 pb-12 font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <FiCode className="inline-block mr-4 text-blue-600" />
        Contact Developers Club
      </motion.h1>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-6xl mx-auto relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl blur-xl opacity-20 transform -rotate-1" />
        <Card className="shadow-2xl border-0 overflow-hidden backdrop-blur-sm bg-white/90 rounded-3xl relative z-10">
          <CardContent className="p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-14">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg blur opacity-10"></div>
                <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-7">
                  <motion.div variants={inputVariants} whileFocus="focus" className="group">
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      required 
                      className="border-2 border-blue-100 focus:border-blue-500 rounded-xl p-4 transition-all duration-300 bg-white/70 backdrop-blur-sm text-lg"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus" className="group">
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      required 
                      className="border-2 border-blue-100 focus:border-blue-500 rounded-xl p-4 transition-all duration-300 bg-white/70 backdrop-blur-sm text-lg"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus" className="group">
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message" 
                      required 
                      className="border-2 border-blue-100 focus:border-blue-500 rounded-xl p-4 transition-all duration-300 min-h-[200px] bg-white/70 backdrop-blur-sm text-lg"
                    />
                  </motion.div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'} 
                    <FiSend className="ml-3 animate-pulse text-xl" />
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-10"
              >
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Connect with Us</h2>
                  <p className="text-gray-700 text-xl leading-relaxed">Join our vibrant community of developers and innovators. Let&apos;s collaborate to build the future of technology together!</p>                </div>
                
                <div className="space-y-4 py-4">
                  <motion.a
                    href="https://github.com/Devs-Club-IIITDM" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 p-4 rounded-xl hover:bg-blue-50/80 transition-all duration-300"
                    whileHover={{ x: 5, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  >
                    <FiGithub className="text-3xl" /> 
                    <span className="font-semibold text-lg">github.com/Devs-Club-IIITDM</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/developers-club-iiitdm" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 p-4 rounded-xl hover:bg-blue-50/80 transition-all duration-300"
                    whileHover={{ x: 5, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  >
                    <FiLinkedin className="text-3xl" /> 
                    <span className="font-semibold text-lg">linkedin.com/developers-club-iiitdm</span>
                  </motion.a>
                </div>

                <div className="space-y-8 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border border-blue-100 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
                      <MapPin className="mr-3 h-6 w-6" /> Location
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">IIITDM Kancheepuram, Chennai, Tamil Nadu 600127</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border border-blue-100 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
                      <Clock className="mr-3 h-6 w-6" /> Office Hours
                    </h3>
                    <p className="text-gray-700 text-lg">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-700 text-lg">Saturday: 10am - 4pm</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Navbar />
      <ContactFormComponent />
      <Footer />
    </div>
  )
}