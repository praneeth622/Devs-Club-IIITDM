import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavLink = ({ onClick, children }: NavLinkProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative text-cyan-100 hover:text-white transition-colors group px-4 py-2"
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"
      />
    </motion.button>
  );
};