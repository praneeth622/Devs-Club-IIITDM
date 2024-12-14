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

function ContactFormComponent(){
    const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  }
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
        <motion.h1 
          className="text-4xl md:text-5xl py-4 pb-8 font-bold text-center mb-8 text-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <FiCode className="inline-block mr-2" />
          Contact Developers Club
        </motion.h1>
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
    <Card className="shadow-lg border-blue-500 border-t-4 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <Input placeholder="Your Name" required className="border-blue-500" />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <Input type="email" placeholder="Your Email" required className="border-blue-500" />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <Textarea placeholder="Your Message" required className="border-blue-500 min-h-[150px]" />
                  </motion.div>
                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    {isSubmitted ? 'Message Sent!' : 'Send Message'} <FiSend className="ml-2" />
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Connect with Us</h2>
                <p className="text-black">Join our community of developers and take your coding skills to the next level!</p>
                <div className="space-y-2">
                  <motion.a
                    href="#" 
                    className="flex items-center space-x-2 text-black hover:text-blue-500 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiGithub /> <span>github.com/developersclub</span>
                  </motion.a>
                  <motion.a
                    href="#" 
                    className="flex items-center space-x-2 text-black hover:text-blue-500 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiLinkedin /> <span>linkedin.com/company/developersclub</span>
                  </motion.a>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-blue-500">Location</h3>
                  <p className="text-black">123 Code Avenue, Tech City, 54321</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-500">Office Hours</h3>
                  <p className="text-black">Monday - Friday: 9am - 6pm</p>
                  <p className="text-black">Saturday: 10am - 4pm</p>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
        </motion.div>
        </div>
  )
}

export default function Component() {
  return (
    <div>
      <Navbar />
      <ContactFormComponent />
      <Footer />
    </div>
  )
}