import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const ProjectsList = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
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

export default ProjectsList;
