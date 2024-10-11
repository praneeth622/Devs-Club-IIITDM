import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const ProjectsList = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} onClick={() => setSelectedProject(project)}>
          <ProjectCard project={project} />
        </div>
      ))}
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
