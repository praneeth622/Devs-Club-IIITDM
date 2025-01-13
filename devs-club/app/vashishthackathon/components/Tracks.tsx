import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Smartphone, Globe } from 'lucide-react';

const tracks = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'AI/ML',
    description: 'Develop cutting-edge AI solutions and ML models'
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Web and Mobile Development',
    description: 'Create innovative web applications and services'
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Computer Vision',
    description: ' Creating innovative solutions using image and video data.'
  },
  {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Open Innovation',
    description: 'Push boundaries with creative tech solutions'
  }
];

export const Tracks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-purple-900" id='Tracks'>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Hackathon Tracks
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-4">{track.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
              <p className="text-cyan-100/80">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};