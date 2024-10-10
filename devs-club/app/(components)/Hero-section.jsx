import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="text-center px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6 text-gray-800"
      >
        Welcome to the<br />Developers Club
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
      >
        Join us on a journey of innovation and coding excellence. Discover our projects, meet our team, and be part of our vibrant community.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link href="/achievements" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Explore Our Achievements
        </Link>
        <Link href="/about" className="text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 transition duration-300 ease-in-out flex items-center">
          About Us <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </section>
  )
}
