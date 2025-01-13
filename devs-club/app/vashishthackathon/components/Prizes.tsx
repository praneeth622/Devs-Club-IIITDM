import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

const prizes = [
  {
    place: '1st',
    amount: 'TBA',
    icon: <Trophy className="w-12 h-12" />,
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    place: '2nd',
    amount: 'TBA',
    icon: <Award className="w-12 h-12" />,
    color: 'from-gray-300 to-gray-500'
  },
  {
    place: '3rd',
    amount: 'TBA',
    icon: <Medal className="w-12 h-12" />,
    color: 'from-amber-600 to-amber-800'
  }
];

export const Prizes = () => {
  return (
    <section className="py-20 relative overflow-hidden" id='Prizes'>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-16 pixel-font"
        >
          Prizes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50" />
              
              <div className="relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${prize.color} flex items-center justify-center text-white`}
                >
                  {prize.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {prize.place} Place
                </h3>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center">
                  {prize.amount}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};