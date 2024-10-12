import { motion } from 'framer-motion';
import { Card, CardContent } from "../../../components/ui/card";

export default function MembersSection({ members }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Team Members</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-48"
          >
            <Card>
              <CardContent className="p-4 text-center  mt-5">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <div className="text-sm text-gray-600">{member.role}</div>  
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
