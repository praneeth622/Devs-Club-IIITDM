import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Rocket } from 'lucide-react';

interface SponsorUsProps {
  formLink: string;
}

export const SponsorUs = ({ formLink }: SponsorUsProps) => {
  return (
    <div className="relative">
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, -1, 1, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur-2xl opacity-30"
      />
      <motion.a
        href={formLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative block bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 p-[2px] rounded-2xl group"
      >
        <div className="relative px-8 py-4 bg-gray-900 rounded-2xl flex items-center gap-3 text-white font-bold group-hover:bg-transparent transition-colors duration-300">
          <Rocket className="w-5 h-5" />
          <span className="relative">
            Become a Sponsor
            <motion.span
              className="absolute -right-6 top-0"
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.span>
          </span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </motion.a>
    </div>
  );
};