'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logo from '../../public/assets/image.png'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = ['About', 'Achievements', 'Projects']

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-blue-600 tracking-wide"
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="GDSC Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-blue-600">GDSC</span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-6 items-center"
        >
          {navItems.map((item) => (
            <motion.div key={item} className="relative group">
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-gray-600 font-medium text-lg transition-colors duration-300 group-hover:text-blue-600"
              >
                {item}
              </Link>
              <motion.div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Button
              style={{
                backgroundColor: '#3182ce', // blue-600
                color: '#ffffff', // white text
                fontWeight: '600', // font-semibold
                borderRadius: '0.375rem', // rounded
                width: '100%', // w-full
                transition: 'background-color 0.3s ease', // transition duration-300
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2b6cb0')} // blue-700 on hover
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3182ce')} // revert to blue-600
            >
              <Link href="/login" onClick={toggleMenu} style={{ color: 'inherit', textDecoration: 'none' }}>
                Login
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-4">
                {/* Close button */}
                <div className="flex justify-end pb-6">
                  <Button variant="ghost" size="icon" onClick={toggleMenu}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="block text-gray-600 font-medium pb-4 text-lg transition-colors duration-300 hover:text-blue-600"
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <Button className="bg-red-600 !important text-white hover:bg-blue-700 font-semibold rounded transition duration-300 w-full">
                  <Link href="/login" onClick={toggleMenu}>
                    Login
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
