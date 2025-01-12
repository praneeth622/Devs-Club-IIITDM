import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500"
        />
        <div className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50" />
      </div>
      <motion.h2
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute mt-24 text-2xl text-white pixel-font"
      >
        LOADING...
      </motion.h2>
    </motion.div>
  );
};