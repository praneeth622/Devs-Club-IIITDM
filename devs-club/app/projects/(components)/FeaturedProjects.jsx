import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const FeaturedProjects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const featuredProjects = projects.filter(project => project.featured === 1);

  // Move hooks before any conditional returns
  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth <= 640 ? 1 : 3);
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  // Memoize slide functions to prevent unnecessary recreations
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + cardsPerPage;
      return nextIndex >= featuredProjects.length ? 0 : nextIndex;
    });
  }, [cardsPerPage, featuredProjects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - cardsPerPage;
      return nextIndex < 0 ? Math.max(featuredProjects.length - cardsPerPage, 0) : nextIndex;
    });
  }, [cardsPerPage, featuredProjects.length]);

  // Auto-advance timer with proper dependencies
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]); // Include nextSlide as dependency

  const getVisibleProjects = useCallback(() => {
    const visibleProjects = [];
    for (let i = 0; i < cardsPerPage; i++) {
      const index = (currentIndex + i) % featuredProjects.length;
      if (!visibleProjects.includes(featuredProjects[index])) {
        visibleProjects.push(featuredProjects[index]);
      }
    }
    return visibleProjects;
  }, [currentIndex, cardsPerPage, featuredProjects]);

  if (featuredProjects.length === 0) return null;

  return (
    <div className="relative w-full max-w-7xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Projects</h2>

      <div className="relative h-[400px] overflow-hidden">
        <div className="h-full w-full flex gap-4 px-6">
          {getVisibleProjects().map((project, idx) => (
            <motion.div
              key={`${project.id}-${idx}`}
              className="flex-1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                project={project}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
              />
            </motion.div>
          ))}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

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