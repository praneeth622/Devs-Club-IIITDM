import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onHover, onClick }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };
    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-lg overflow-hidden cursor-pointer h-[400px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHover}
      onClick={onClick}
    >
      {/* Mouse-following background effect */}
      <div
        className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)",
        }}
      />
      <div className="p-6 h-full flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
        {/* Displaying project description */}
        <p className="text-purple-100 mb-4 flex-grow overflow-auto">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
