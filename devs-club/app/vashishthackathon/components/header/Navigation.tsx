import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "About", label: "About" },
  { id: "Tracks", label: "Tracks" },
  { id: "Timeline", label: "Timeline" },
  { id: "Rules", label: "Rules" },
  { id: "Prizes", label: "Prizes" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white"
      >
        {isOpen ? <X /> : <Menu />}
      </motion.button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.label}`}
            className="text-cyan-100 hover:text-cyan-400"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-0 w-48 py-2 mt-2 bg-gray-900/95 backdrop-blur-lg rounded-lg border border-purple-500/20 md:hidden"
          >
            {links.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                whileHover={{ x: 5 }}
                className="block w-full px-4 py-2 text-left text-cyan-100 hover:text-white hover:bg-purple-500/10"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
