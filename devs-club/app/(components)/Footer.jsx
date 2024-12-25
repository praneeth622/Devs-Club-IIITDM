import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-semibold mb-4">Developers Club</h3>
          <p className="text-gray-400 max-w-lg mx-auto">
            Empowering coders, creators, and innovators to build the future. Join our community and grow with us.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <Link href="#">
            <Instagram className="text-white hover:text-blue-500 transition-colors duration-300" size={24} />
          </Link>
          <Link href="#">
            <Linkedin className="text-white hover:text-blue-600 transition-colors duration-300" size={24} />
          </Link>
          <Link href="https://github.com/DevClubIIITDM" target='_blank'>
            <Github className="text-white hover:text-gray-400 transition-colors duration-300" size={24} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-gray-400 text-sm"
        >
          <div>&copy; {new Date().getFullYear()} Developers Club. All rights reserved.</div>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-300">
              Contact Us
            </Link>
          </div>
          <div className="mt-4 ">
            <span>Made with ❤️ by </span>
            <Link 
              href="/web-team" 
              className="hover:text-white transition-colors underline duration-300"
            >
              Web Team Developers Club
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
