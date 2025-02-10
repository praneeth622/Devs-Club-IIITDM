import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Zap } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Prize Pool ₹26,500',
      description: 'Compete for exciting prizes and recognition'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Offline Hackthon',
      description: 'Connect with fellow developers and innovators'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '32 Hours',
      description: 'Non-stop coding and creation'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-blue-900" id='About'>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About The Event</h2>
          <p className="text-cyan-100 text-lg">
            Join us for an epic 32-hour hackathon where creativity meets technology. 
            Build innovative solutions, compete with the best, and push the boundaries 
            of what&apos;s possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block p-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl text-white mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-cyan-100/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};