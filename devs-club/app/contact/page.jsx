"use client"
import React, { useState } from 'react'
import { Clock, MapPin, Phone } from "lucide-react"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiSend, FiCode, FiGithub, FiLinkedin ,FiMail } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md';
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui//textarea"
import { Button } from "../../components/ui/button"
import Navbar from '../(components)/Navbar'
import { Footer } from '../(components)/Footer'
import { toast } from 'react-hot-toast'
import { Toaster } from 'react-hot-toast';
import axios from 'axios'

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
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Sending the form data to the backend API
      const response = await axios.post("/api/contact", formData);
  
      // Log the response for debugging
      console.log("API Response:", response);
  
      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      // Log the error for debugging
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  }

  const fluidVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8 relative overflow-hidden">
      <Toaster 
        position="top-right"  
        reverseOrder={false} 
      />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            initial={{ opacity: 0.2, y: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [-20, 20, -20],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.7,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.h1 
        className="text-4xl md:text-6xl py-8 pb-12 font-extrabold text-center mb-10 text-white relative z-10"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <span className="relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400">
            Get in Touch
          </span>
          <motion.span
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </span>
      </motion.h1>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-6xl mx-auto relative z-10"
        whileHover={{ scale: 1.005 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="shadow-2xl border-0 overflow-hidden backdrop-blur-sm bg-white/5 rounded-3xl relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-gradient-xy" />
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative space-y-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur-lg" />
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <motion.div 
                    variants={inputVariants} 
                    whileFocus="focus"
                    className="group"
                  >
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      required 
                      className="border-0 bg-white/10 backdrop-blur-md text-white placeholder:text-gray-300 rounded-xl p-6 focus:ring-2 focus:ring-blue-500 transition-all group-hover:bg-white/15"
                    />
                  </motion.div>
                  <motion.div 
                    variants={inputVariants} 
                    whileFocus="focus"
                    className="group"
                  >
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      required 
                      className="border-0 bg-white/10 backdrop-blur-md text-white placeholder:text-gray-300 rounded-xl p-6 focus:ring-2 focus:ring-blue-500 transition-all group-hover:bg-white/15"
                    />
                  </motion.div>
                  <motion.div 
                    variants={inputVariants} 
                    whileFocus="focus"
                    className="group"
                  >
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message" 
                      required 
                      className="border-0 bg-white/10 backdrop-blur-md text-white placeholder:text-gray-100 rounded-xl p-6 min-h-[200px] focus:ring-2 focus:ring-blue-500 transition-all group-hover:bg-white/15"
                    />
                  </motion.div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isLoading ? 'Sending...' : 'Send Message'} 
                      <FiSend className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-10 text-white"
              >
                <div className="space-y-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300 group-hover:text-blue-200 transition-colors">
                      <MapPin className="mr-3 h-6 w-6" /> Location
                    </h3>
                    <p className="text-gray-200 group-hover:text-white transition-colors">
                      IIITDM Kancheepuram, Chennai, Tamil Nadu 600127
                    </p>
                  </motion.div>

                  {/* <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300 group-hover:text-blue-200 transition-colors">
                      <Clock className="mr-3 h-6 w-6" /> Office Hours
                    </h3>
                    <p className="text-gray-200 group-hover:text-white transition-colors">
                      Monday - Friday: 9am - 6pm
                    </p>
                    <p className="text-gray-200 group-hover:text-white transition-colors">
                      Saturday: 10am - 4pm
                    </p>
                  </motion.div> */}
                </div>

                <div className="space-y-0">
                  <motion.a
                    href="https://github.com/DevClubIIITDM" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-200 p-4 rounded-xl transition-all duration-500 group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background gradient that slides in */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    
                    {/* Icon container with animations */}
                    <div className="relative z-10 bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                      <FiGithub className="text-2xl transform group-hover:rotate-12 transition-all duration-300 group-hover:scale-110" />
                    </div>
                    
                    {/* Text with slide-up animation */}
                    <div className="relative z-10 overflow-hidden">
                      <motion.span 
                        className="font-medium inline-block"
                        whileHover={{
                          color: "#60A5FA",
                          transition: { duration: 0.2 }
                        }}
                      >
                        github.com/Dev-Club-IIITDM
                        <div className="h-0.5 w-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </motion.span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/company/developersclub-iiitdm-kancheepuram/posts/?feedView=all" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-200 p-4 rounded-xl transition-all duration-500 group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background gradient that slides in */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    
                    {/* Icon container with animations */}
                    <div className="relative z-10 bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                      <FiLinkedin className="text-2xl transform group-hover:rotate-12 transition-all duration-300 group-hover:scale-110" />
                    </div>
                    
                    {/* Text with slide-up animation */}
                    <div className="relative z-10 overflow-hidden">
                      <motion.span 
                        className="font-medium inline-block"
                        whileHover={{
                          color: "#60A5FA",
                          transition: { duration: 0.2 }
                        }}
                      >
                        linkedin.com/developers-club-iiitdm
                        <div className="h-0.5 w-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </motion.span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:devclub@iiitdm.ac.in" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-200 p-4 rounded-xl transition-all duration-500 group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background gradient that slides in */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    
                    {/* Icon container with animations */}
                    <div className="relative z-10 bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                      <FiMail className="text-2xl transform group-hover:rotate-12 transition-all duration-300 group-hover:scale-110" />      
                      </div>              
                    {/* Text with slide-up animation */}
                    <div className="relative z-10 overflow-hidden">
                      <motion.span 
                        className="font-medium inline-block"
                        whileHover={{
                          color: "#60A5FA",
                          transition: { duration: 0.2 }
                        }}
                      >
                        devclub@iiitdm.ac.in
                        <div className="h-0.5 w-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </motion.span>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 C20,40 30,60 50,50 C70,40 80,60 100,50 L100,100 L0,100 Z"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            variants={fluidVariants}
            initial="initial"
            animate="animate"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <style jsx>{`
        @keyframes gradient-xy {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
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