"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Image and animated shapes */}
      <motion.div 
        className="md:w-1/2 bg-gradient-to-br from-purple-600 to-indigo-800 p-8 flex flex-col justify-center items-center relative overflow-hidden"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
Developers Club        </motion.h1>
        <motion.p 
          className="text-xl text-purple-200 mb-8 text-center max-w-md relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Join our community of passionate developers and innovators
        </motion.p>
        <Image
          src="/assets/image.png"
          alt="GDSC Illustration"
          width={400}
          height={400}
          className="rounded-lg shadow-2xl relative z-10"
        />
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {/* Right side - Login form */}
      <motion.div 
        className="md:w-1/2 bg-white p-8 flex flex-col justify-center items-center"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <SignIn
            appearance={{
              elements: {
                card: 'bg-white shadow-none',
                headerTitle: 'text-3xl font-bold text-gray-800 mb-2',
                headerSubtitle: 'text-lg text-gray-600 mb-6',
                formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200',
                formFieldInput: 'border-gray-300 focus:ring-purple-500 focus:border-purple-500',
                footerActionLink: 'text-purple-600 hover:text-purple-700',
                dividerLine: 'bg-gray-200',
                dividerText: 'text-gray-500',
                socialButtonsBlockButton: 'border-gray-300 hover:bg-gray-50 transition-colors duration-200',
                socialButtonsBlockButtonText: 'text-gray-600',
                formFieldLabel: 'text-gray-700',
              },
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LoginPage