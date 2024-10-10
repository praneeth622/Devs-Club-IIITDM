import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CoreTeamMember = ({ name, role, bio, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-64 h-80 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="rest"
      whileHover="hover"
      animate={isHovered ? "hover" : "rest"}
    >
      {/* The background animation for the card */}
      <motion.div
        className="absolute inset-0 bg-primary rounded-lg"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
      />

      {/* Default non-hover state */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4" />
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white text-sm">{role}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover state */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-primary-foreground rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white text-sm">{role}</p>
            <p className="text-white text-sm mt-2 text-center">{bio}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CoreTeamMember;
