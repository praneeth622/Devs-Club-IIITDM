import React from 'react';
import { motion } from 'framer-motion';

interface TimeUnitProps {
  value: number;
  label: string;
}

export const TimeUnit = ({ value, label }: TimeUnitProps) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="flex flex-col items-center p-4"
  >
    <motion.div
      key={value}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-4xl font-bold text-white bg-gradient-to-b from-purple-500 to-purple-700 px-6 py-4 rounded-lg shadow-lg"
    >
      {value.toString().padStart(2, '0')}
    </motion.div>
    <span className="text-cyan-300 mt-2 text-sm uppercase tracking-wider">{label}</span>
  </motion.div>
);