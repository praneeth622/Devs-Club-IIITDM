import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const FeaturedProjects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const featuredProjects = projects.filter(project => project.featured === 1);
  const cardsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + cardsPerPage;
      return nextIndex >= featuredProjects.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - cardsPerPage;
      return nextIndex < 0 ? featuredProjects.length - cardsPerPage : nextIndex;
    });
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = 0; i < cardsPerPage; i++) {
      const index = (currentIndex + i) % featuredProjects.length;
      if (!visibleProjects.includes(featuredProjects[index])) {
        visibleProjects.push(featuredProjects[index]);
      }
    }
    return visibleProjects;
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  if (featuredProjects.length === 0) return null;

  return (
    <div className="relative w-full max-w-7xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-white/80">Featured Projects</h2>
      
      <div className="relative h-[400px] overflow-hidden">
        {/* Carousel */}
        <div className="h-full w-full flex gap-4 px-6">
          {getVisibleProjects().map((project, idx) => (
            <motion.div
              key={`${currentIndex}-${idx}`}
              className="flex-1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                project={project}
                onHover={() => setHoveredIndex(idx)}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all dark:bg-gray-600"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all dark:bg-gray-600"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.ceil(featuredProjects.length / cardsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerPage)}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(currentIndex / cardsPerPage) === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeaturedProjects; 