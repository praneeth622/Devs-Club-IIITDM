import { motion } from "framer-motion";

const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-6 h-6 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4"
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`${sizes[size]} rounded-full border-blue-500 border-t-transparent`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;