import Link from 'next/link'
import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-600"
        >
          Developers Club
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-4"
        >
          {['About', 'Achievements', 'Projects', 'Join Us'].map((item) => (
            <Link key={item} href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              {item}
            </Link>
          ))}
        </motion.div>
      </nav>
    </header>
  )
}
