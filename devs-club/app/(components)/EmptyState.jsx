import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function EmptyState({ message, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm ${className}`}
    >
      <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
      <p className="text-gray-600 text-center text-lg">{message}</p>
    </motion.div>
  );
}