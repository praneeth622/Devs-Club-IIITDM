import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const TimelineEvent = ({ title, date, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="relative pl-8 pb-8 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary/60 to-primary/20" />
      
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-white shadow-md" />
      
      {/* Content container */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h4 className="text-xl font-bold text-gray-900 tracking-tight">
            {title}
          </h4>
          <div className="flex items-center text-primary/80 text-sm font-medium">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Bottom decoration line */}
        <div className="absolute bottom-0 left-8 right-4 h-[1px] bg-gradient-to-r from-primary/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default TimelineEvent;