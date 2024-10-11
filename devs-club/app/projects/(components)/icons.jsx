import { motion } from 'framer-motion';

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default SocialIcon;
