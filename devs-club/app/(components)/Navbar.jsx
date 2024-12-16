"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
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
    background-color: #f8f9fa;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;
  }

  .dropdown-toggle:hover {
    background-color: #e9ecef;
  }

  .dropdown-menu {
    position: fixed;
    right: 0;
    top: 60px;
    background-color: white;
    min-width: 250px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.375rem;
    padding: 0.5rem 0;
    z-index: 1000;
    transform-origin: top right;
    animation: dropdownAnimation 0.2s ease forwards;
  }

  @keyframes dropdownAnimation {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.75rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: all 0.2s;
  }

  .dropdown-item:hover {
    color: #1e2125;
    background-color: #f8f9fa;
  }

  .dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  const navItems = ["About", "Achievements", "Projects", "Open-Source", "Contact"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <style jsx global>{mobileMenuStyles}</style>
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo section remains the same */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-blue-600 tracking-wide"
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Developers Club Logo" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-xl text-blue-600">Developers Club</span>
          </Link>
        </motion.div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown">
          <button 
            className="dropdown-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {isMenuOpen && (
            <div className="dropdown-menu">
              {navItems.map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <button className="dropdown-item">
                    {item}
                  </button>
                </Link>
              ))}
              
              <div className="dropdown-divider" />
              
              {isSignedIn ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <button className="dropdown-item">
                      Dashboard
                    </button>
                  </Link>
                  <div className="px-6 py-2">
                    <UserButton />
                  </div>
                </>
              ) : (
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <button className="dropdown-item">
                    Login
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation remains the same */}
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
          {/* <Button
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
              <Link href="/dashboard" onClick={toggleMenu} style={{ color: 'inherit', textDecoration: 'none' }}>
                Login
              </Link>
            </Button> */}
          {/* Conditional Rendering for User Button or Login Button */}
          {isSignedIn ? (
            <div className="flex justify-content-between gap-8 text-gray-600 font-medium text-lg transition-colors duration-300 group-hover:text-blue-600">
              <motion.div className="relative group">
                <Link
                  href="/dashboard"
                  className="text-gray-600 font-medium text-lg transition-colors duration-300 group-hover:text-blue-600"
                >
                  Dashboard
                </Link>
                <motion.div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex space-x-6 items-center "
              >
                <UserButton />
              </motion.div>
            </div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-red-800"
            >
              <Button
                style={{
                  backgroundColor: "#3182ce", // blue-600
                  color: "#ffffff", // white text
                  fontWeight: "600", // font-semibold
                  borderRadius: "0.375rem",
                  width: "100%",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#9b2c2c")
                } // red-900 on hover
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#c53030")
                } // revert to red-800
                onMouseDown={(e) =>
                  (e.currentTarget.style.backgroundColor = "#742a2a")
                } // darker red on press
                onMouseUp={(e) =>
                  (e.currentTarget.style.backgroundColor = "#9b2c2c")
                }>
                <Link
                  href="/dashboard"
                  onClick={toggleMenu}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Login
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </nav>
    </header>
  );
}
