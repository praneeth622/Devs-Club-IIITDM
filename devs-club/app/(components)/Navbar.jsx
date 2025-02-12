import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { UserButton, useUser } from "@clerk/clerk-react";
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../public/assets/image.png";
import { Button } from "../../components/ui/button";
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import ThemeToggle from '../../components/ui/ThemeToggle';

const navItems = [
  { name: "About", icon: "🎯" },
  { name: "Achievements", icon: "🏆" },
  { name: "Events", icon: "📅" },
  { name: "Projects", icon: "💻" },
  { name: "Team", icon: "👩‍💻" },
  { name: "Open-Source", icon: "🌟" },
  { name: "Contact", icon: "📧" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-md sticky z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <Image
                src={logo}
                alt="Developers Club Logo"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <span className="font-semibold text-xl text-gray-800 dark:text-white">
              Developers Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link 
                  href={`/${item.name.toLowerCase()}`}
                  className="px-3 py-2 rounded-full text-base font-medium text-gray-900 dark:text-gray-100 transition-all duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            <ThemeToggle />

            {/* Desktop Auth Section */}
            {isSignedIn ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button 
                    className="px-6 py-2 rounded-full text-base font-medium text-gray-900 transition-all duration-300 ease-in-out hover:bg-blue-200 hover:text-blue-600"
                  >
                    Dashboard
                  </Button>
                </Link>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9",
                      userButtonAvatarBox: "w-9 h-9",
                      userButtonTrigger: "focus:shadow-none",
                      userButtonPopoverCard: "right-0 mt-2 shadow-lg"
                    }
                  }}
                />
              </div>
            ) : (
              <Link href="/dashboard">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white 
                            px-6 py-2 rounded-lg font-medium
                            transition-all duration-300
                            hover:from-blue-700 hover:to-blue-900
                            shadow-md hover:shadow-xl
                            border border-blue-400/20">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {isSignedIn && (
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                    userButtonAvatarBox: "w-8 h-8",
                    userButtonTrigger: "focus:shadow-none",
                    userButtonPopoverCard: "right-0 mt-2 shadow-lg"
                  }
                }}
              />
            )}
            <button 
              className="rounded-xl border border-gray-300 p-2 dark:bg-gray-800"
              onClick={handleMenuToggle}
              aria-label="Menu"
            >
              {isMenuOpen ? 
                <X className="h-6 w-6 text-blue-600 dark:text-blue-400" /> : 
                <Menu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              }
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 top-16 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 dark:border-gray-700 rounded-2xl shadow-lg z-50"
              >
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={`/${item.name.toLowerCase()}`}
                    onClick={handleMenuToggle}
                  >
                    <div className="flex items-center p-3 hover:bg-blue-100 transition duration-200 rounded-lg dark:hover:bg-gray-800 transition duration-200 rounded-lg dark:text-gray-100">
                      <span className="mr-2 text-xl">{item.icon}</span>
                      {item.name}
                    </div>
                  </Link>
                ))}

                <div className="flex items-center p-3 hover:bg-blue-100 dark:hover:bg-gray-800 transition duration-200 rounded-lg">
                  <span className="mr-2 text-xl">🎨</span>
                  <ThemeToggle />
                </div>

                {!isSignedIn && (
                  <Link href="/sign-in" onClick={handleMenuToggle}>
                    <div className="flex items-center p-3 hover:bg-blue-100 transition duration-200 rounded-lg dark:hover:bg-gray-800 transition duration-200 rounded-lg dark:text-gray-100">
                      <span className="mr-2 text-xl">🔑</span>
                      Login
                    </div>
                  </Link>
                )}
                {isSignedIn && (
                  <Link href="/dashboard" onClick={handleMenuToggle}>
                    <div className="flex items-center p-3 hover:bg-blue-100 transition duration-200 rounded-lg dark:hover:bg-gray-800 transition duration-200 rounded-lg dark:text-gray-100">
                      <span className="mr-2 text-xl">📂</span>
                      Dashboard
                    </div>
                  </Link>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;