import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code2, Cpu, Terminal } from 'lucide-react'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Animated Code Symbols */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              y: [-10, 10, -10],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.7,
            }}
            className="absolute hidden md:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {[<Code2 />, <Terminal />, <Cpu />][i % 3]}
          </motion.div>
        ))}

        {/* Glowing Grid */}
        <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 gap-4 opacity-20">
          {Array.from({ length: 96 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.05,
              }}
              className="w-1 h-1 bg-blue-400 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Glowing Title */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
            className="relative mb-8"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              Welcome to the
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
                Developers Club
              </span>
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          </motion.div>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Join us on a journey of innovation and coding excellence. Discover our projects, 
            meet our team, and be part of our vibrant community dedicated to pushing the boundaries 
            of technology.
          </motion.p>

          {/* Creative Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/achievements" 
              className="group relative inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700"
            >
              <span className="relative z-10 font-medium text-base">
                Explore Our Achievements
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            
            <Link 
              href="/about" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 w-full md:w-auto bg-transparent border-2 border-blue-400 rounded-full hover:border-purple-400 text-white transition-colors duration-300"
            >
              <span className="relative font-bold">About Us</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Creative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-blue-900/30"
          ></path>
        </svg>
      </div>
    </section>
  )
}