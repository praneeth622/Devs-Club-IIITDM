import React from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

interface SponsorCardProps {
  name: string;
  logo: StaticImageData;
}

export const SponsorCard = ({ name, logo }: SponsorCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-20" />
      <div className="relative bg-gray-900/50 border border-purple-500/20 p-6 rounded-xl backdrop-blur-sm">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo.src}
          alt={name}
          className="w-32 h-32 object-contain mx-auto mb-4 filter brightness-100 hover:brightness-125 transition-all duration-300"
        />
        <h3 className="text-lg font-semibold text-white text-center">{name}</h3>
      </div>
    </motion.div>
  );
};