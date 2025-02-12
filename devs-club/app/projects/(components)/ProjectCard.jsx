import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ project, onHover, onClick }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-[400px] border border-gray-200 dark:bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={onHover}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-blue-800/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-8 h-full flex flex-col relative z-10">
        <div className="mb-auto">
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-3 dark:text-white/80">
            {project.name}
          </h2>
          <p className="text-gray-700 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80">
            {project.description}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-white/90 transition-colors duration-300 dark:text-white/80">
                Team Lead
              </p>
              <p className="text-sm text-gray-600 group-hover:text-white/70 transition-colors duration-300 dark:text-white/80">
                {project.teamLead.name}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4">
          <motion.button
            className="text-blue-700 group-hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
