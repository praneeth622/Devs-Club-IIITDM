import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">&copy; 2024 Developers Club. All rights reserved.</p>
          <div className="flex space-x-4">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <motion.div
                  className="w-6 h-6 bg-gray-300 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
