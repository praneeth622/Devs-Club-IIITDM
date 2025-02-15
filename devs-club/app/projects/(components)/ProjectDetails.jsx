import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react'; // Add this line to import Linkedin
import SocialIcon from './icons';

const ProjectDetails = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-2xl w-full m-4"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="p-6 dark:bg-gray-900">
          <div className="flex items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white/80">{project.teamLead.name}</h3>
              <p className="text-blue-600">Team Lead</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white/80">{project.name}</h2>
            <div className="ml-2 flex space-x-2 items-center">
                  <SocialIcon href={project.teamLead.linkedin} icon={<Linkedin size={16} />} />
                  <SocialIcon href={project.teamLead.github} icon={<Github size={16} />} />
                </div>
          </div>
          <p className="text-gray-600 mb-4 dark:text-white/80">{project.fullDescription}</p>
          <h4 className="text-lg font-semibold text-gray-800 mb-2 dark:text-white/80">Team Members:</h4>
          <ul className="space-y-2">
            {project.teamMembers.map((member, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <span className="text-gray-700 dark:text-white/80">{member.name}</span>
                <div className="flex space-x-2">
                  <SocialIcon href={member.linkedin} icon={<Linkedin size={16} />} />
                  <SocialIcon href={member.github} icon={<Github size={16} />} />
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
