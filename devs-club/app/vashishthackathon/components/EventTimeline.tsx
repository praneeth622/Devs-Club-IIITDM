import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Code, Trophy, Flag } from 'lucide-react';

const events = [
  { 
    icon: <Flag />,
    time: '10:00 AM',
    day: 'Day 1',
    title: 'Opening Ceremony',
    description: 'Kickoff and team formation'
  },
  {
    icon: <Code />,
    time: '12:00 PM',
    day: 'Day 1',
    title: 'Hacking Begins',
    description: 'Start your engines!'
  },
  {
    icon: <Clock />,
    time: '10:00 AM',
    day: 'Day 2',
    title: 'Submission',
    description: 'Project submissions due'
  },
  {
    icon: <Trophy />,
    time: '2:00 PM',
    day: 'Day 2',
    title: 'Winners Announced',
    description: 'Awards ceremony'
  }
];

export const EventTimeline = () => {
  return (
    <section className="py-20 relative overflow-hidden" id='Timeline'>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-16 pixel-font"
        >
          Event Timeline
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500" />

          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20"
                >
                  <div className="text-cyan-400 mb-2">{event.time}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-cyan-100/80">{event.description}</p>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white z-10"
              >
                {event.icon}
              </motion.div>

              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};