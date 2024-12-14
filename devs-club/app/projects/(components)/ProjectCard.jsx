import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onHover, onClick }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-[400px] border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={onHover}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-8 h-full flex flex-col relative z-10">
        <div className="mb-auto">
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-3">
            {project.name}
          </h2>
          <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
            {project.description}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center space-x-4">
            <img
              src={project.teamLead.photo}
              alt={project.teamLead.name}
              className="w-10 h-10 rounded-full border-2 border-white/20"
            />
            <div>
              <p className="text-sm font-medium text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                Team Lead
              </p>
              <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                {project.teamLead.name}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4">
          <motion.button
            className="text-purple-600 group-hover:text-white transition-colors duration-300"
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
