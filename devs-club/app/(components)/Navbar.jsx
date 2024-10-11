import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navbar () {
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
            src="/placeholder.svg?height=40&width=40"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl text-blue-600">GDSC</span>
        </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-6 items-center"
        >
          {['About', 'Achievements', 'Projects'].map((item, index) => (
            <motion.div
              key={item}
              className="relative group"
            >
              <Link
                href={`${item.toLowerCase()}`}
                className="text-gray-600 font-medium text-lg transition-colors duration-300 group-hover:text-blue-600"
              >
                {item}
              </Link>
              {/* Hover effect - subtle bottom border */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </motion.div>
          ))}

          {/* Login Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold transition duration-300">
              <Link href="/login">Login</Link>
            </Button>
          </motion.div>
        </motion.div>
      </nav>
    </header>
  );
};
