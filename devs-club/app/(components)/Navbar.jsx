"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../public/assets/image.png";
import { Menu, X } from "lucide-react";
import { UserButton, useUser } from "@clerk/clerk-react";

const mobileMenuStyles = `
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-toggle {
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(59, 130, 246, 0.1);
    padding: 0.7rem;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: #4B5563;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(8px);
  }

  .dropdown-toggle:hover {
    background-color: rgba(59, 130, 246, 0.08);
    border-color: #3B82F6;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
  }

  .dropdown-menu {
    position: fixed;
    right: 1rem;
    top: 4.5rem;
    background: rgba(255, 255, 255, 0.95);
    min-width: 320px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 
                0 4px 8px rgba(59, 130, 246, 0.05);
    border-radius: 1.2rem;
    padding: 1rem;
    z-index: 1000;
    transform-origin: top right;
    border: 1px solid rgba(59, 130, 246, 0.1);
    backdrop-filter: blur(12px);
    overflow: hidden;
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1.2rem;
    margin: 0.3rem 0;
    font-weight: 500;
    color: #4B5563;
    text-align: left;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .dropdown-item:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(59, 130, 246, 0.04);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .dropdown-item:hover {
    color: #3B82F6;
    transform: translateX(4px);
  }

  .dropdown-item:hover:before {
    transform: translateX(0);
  }

  .dropdown-divider {
    height: 2px;
    margin: 1rem 0;
    background: linear-gradient(to right, 
      transparent, 
      rgba(59, 130, 246, 0.1), 
      transparent
    );
    border: none;
  }

  .user-section {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1.2rem;
    margin: 0.3rem 0;
    font-weight: 500;
    color: #4B5563;
    text-align: left;
    background-color: transparent;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .user-section:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(59, 130, 246, 0.04);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .user-section:hover {
    color: #3B82F6;
    transform: translateX(4px);
  }

  .user-section:hover:before {
    transform: translateX(0);
  }

  .user-section-label {
    display: flex;
    align-items: center;
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  const navItems = [
    { name: "About", icon: "🎯" },
    { name: "Achievements", icon: "🏆" },
    { name: "Projects", icon: "💻" },
    { name: "Open-Source", icon: "🌟" },
    { name: "Contact", icon: "📧" }
  ];

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/90 backdrop-blur-2xl shadow-lg sticky top-0 z-40 border-b border-blue-100/50">
      <style jsx global>{mobileMenuStyles}</style>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-blue-600 tracking-wide"
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Developers Club Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-blue-600">
              Developers Club
            </span>
          </Link>
        </motion.div>

          <div className="dropdown">
            <button 
              className="dropdown-toggle group"
              onClick={handleMenuToggle}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "menu"}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-blue-600 group-hover:text-blue-700"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
            
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="dropdown-menu"
                >
                  {navItems.map((item, index) => (
                    <Link 
                      key={item.name} 
                      href={`/${item.name.toLowerCase()}`}
                      onClick={handleMenuToggle}
                    >
                      <motion.button
                        className="dropdown-item"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 8 }}
                      >
                        <span className="mr-3 text-xl">{item.icon}</span>
                        {item.name}
                      </motion.button>
                    </Link>
                  ))}
                  
                  <div className="dropdown-divider" />
                  
                  {isSignedIn ? (
                    <>
                      <Link href="/dashboard" onClick={handleMenuToggle}>
                        <motion.button
                          className="dropdown-item"
                          whileHover={{ x: 8 }}
                        >
                          <span className="mr-3 text-xl">🎮</span>
                          Dashboard
                        </motion.button>
                      </Link>
                      <motion.div 
                        className="dropdown-item"
                        whileHover={{ x: 8 }}
                      >
                        <UserButton 
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: "w-8 h-8",
                              userButtonPopoverCard: "right-0"
                            }
                          }}
                        /> <div className="pl-3">Profile</div>
                      </motion.div>
                    </>
                  ) : (
                    <Link href="/dashboard" onClick={handleMenuToggle}>
                      <motion.button
                        className="dropdown-item"
                        whileHover={{ x: 8 }}
                      >
                        <span className="mr-3 text-xl">🔑</span>
                        Login
                      </motion.button>
                    </Link>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
}
