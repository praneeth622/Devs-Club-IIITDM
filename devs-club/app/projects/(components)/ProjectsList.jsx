'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Dialog, DialogContent } from '../../../components/ui/dialog';
import { Calendar, Github, FileText } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/card';

const statusColors = {
  active: 'bg-green-500',
  completed: 'bg-blue-500',
  'on-hold': 'bg-yellow-500',
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const result = await response.json();
        if (result.success) {
          setProjects(result.data);
        } else {
          setError('Failed to fetch projects');
        }
      } catch (err) {
        setError('Error fetching projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            <Card className="cursor-pointer bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className={`${statusColors[project.status]} text-white mb-3 inline-flex`}>
                    <Badge>{project.status}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{project.startDate}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-[550px] bg-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <div className={`${statusColors[selectedProject.status]} text-white inline-flex`}>
                    <Badge>{selectedProject.status}</Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Team Leader</h3>
                    <p>{selectedProject.teamLeader}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Start Date</h3>
                    <p>{selectedProject.startDate}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Team Members</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.members.map((member, index) => (
                      <Badge key={index} className="bg-gray-400 rounded hover:bg-gray-300">
                        {member}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  {selectedProject.githubLink && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.githubLink, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repo
                    </Button>
                  )}
                  {selectedProject.driveLink && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.driveLink, '_blank')}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Drive Link
                    </Button>
                  )}
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
