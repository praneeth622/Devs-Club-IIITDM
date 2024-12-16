"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import logo from "../../public/assets/image.png";
import { Menu, X } from "lucide-react";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [SignedIn, setSignedIn] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { isSignedIn } = useUser();
  const navItems = ["About", "Achievements", "Projects","Open-Source","Contact"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-2"
        >
          {navItems.map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-blue-600 h-9 px-3">
                <span>{item}</span>
              </button>
            </Link>
          ))}

          {isSignedIn ? (
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 px-3">
                  <svg
                    className="text-cyan-500"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                  Dashboard
                </button>
              </Link>
              <div className="ml-2">
                <UserButton />
              </div>
            </div>
          ) : (
            <Link href="/dashboard">
              <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 px-3">
                <svg
                  className="text-cyan-500"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                </svg>
                Login
              </button>
            </Link>
          )}
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                {isSignedIn ? (
                  <div>
                    <Link
                      href={"/dashboard"}
                      className="block text-gray-600 font-medium pb-4 text-lg transition-colors duration-300 hover:text-blue-600"
                      onClick={toggleMenu}
                    >
                      Dashboard
                    </Link>
                    <UserButton />
                  </div>
                ) : (
                  <div>
                    <Button className="bg-red-600 text-white hover:bg-blue-700 font-semibold rounded transition duration-300 w-full">
                      <Link href="/dashboard" onClick={toggleMenu}>
                        Login
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
