import { motion } from 'framer-motion';
import { Card, CardContent } from "../../../components/ui/card";

export default function ProjectsSection({ projects }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ongoing Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card>
              <CardContent className="p-4  mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">{project.name}</h3>
                <p className="text-sm text-gray-600">Members: {project.members}</p>
                <p className="text-sm text-gray-600">Status: {project.status}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
