import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Cloud, Code, Book, Settings } from 'lucide-react';
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export default function ResourcesSection({ isResourcesOpen, setIsResourcesOpen }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Resources & Tools</h2>
      <Card>
        <CardContent className="p-0 ">
          <motion.div
            initial={false}
            animate={{ height: isResourcesOpen ? 'auto' : '48px' }}
            className="overflow-hidden"
          >
            <Button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="w-full justify-between rounded-none"
              variant="ghost"
            >
              <span>{isResourcesOpen ? 'Hide Resources' : 'Show Resources'}</span>
              <motion.div
                animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            </Button>
            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {[
                    { name: 'Google Cloud', icon: Cloud },
                    { name: 'GitHub', icon: Code },
                    { name: 'Documentation', icon: Book },
                    { name: 'Settings', icon: Settings },
                  ].map((resource, index) => (
                    <motion.a
                      key={resource.name}
                      href="#"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <resource.icon className="w-8 h-8 text-blue-500 mb-2" />
                      <span className="text-sm font-medium text-gray-700">{resource.name}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
