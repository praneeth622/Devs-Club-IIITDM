import { motion } from 'framer-motion';
import { Card, CardContent } from "../../../components/ui/card";

export default function EventsSection({ events }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card>
              <CardContent className="p-4  mt-4">
                <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(event.date).toLocaleDateString('en-GB')} at {event.time}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
