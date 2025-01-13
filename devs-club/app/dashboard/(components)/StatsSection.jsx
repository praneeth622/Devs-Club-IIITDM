import { motion } from 'framer-motion';
import { Card, CardContent } from "../../../components/ui/card";

export default function StatsSection({ stats }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const formatMembers = (count) => {
    if (count >= 70) {
      return `${count}+`;  // Append '+' to the count if it's 150 or more
    }
    return count;  // Return the count as is if it's below 150
    return `${count}+`
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
    >
      {Object.entries(stats).map(([key, value]) => (
        <motion.div
          key={key}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card>
            <CardContent className="p-6 text-center  mt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2 capitalize">{key}</h3>
              <p className="text-3xl font-bold text-blue-600">
              {formatMembers(value)}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.section>
  );
}
