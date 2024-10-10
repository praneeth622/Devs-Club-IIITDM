import { motion } from "framer-motion";

const TimelineEvent = ({ title, date, description }) => {
  return (
    <motion.div className="p-4 border-l-4 border-green-500">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-sm text-muted mb-2">{date}</p>
      <p>{description}</p>
    </motion.div>
  );
};

export default TimelineEvent;
