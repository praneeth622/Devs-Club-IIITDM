import React from 'react';
import { motion } from 'framer-motion';

interface SponsorTierProps {
  tier: 'gold' | 'silver' | 'bronze';
  sponsors: Array<{ name: string; logo: string }>;
}

const tierConfig = {
  gold: {
    gradient: 'from-yellow-300 via-yellow-400 to-yellow-500',
    shadow: 'shadow-yellow-400/20',
    size: 'w-40 h-40'
  },
  silver: {
    gradient: 'from-gray-300 via-gray-400 to-gray-500',
    shadow: 'shadow-gray-400/20',
    size: 'w-32 h-32'
  },
  bronze: {
    gradient: 'from-amber-600 via-amber-700 to-amber-800',
    shadow: 'shadow-amber-400/20',
    size: 'w-28 h-28'
  }
};

export const SponsorTier = ({ tier, sponsors }: SponsorTierProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <motion.h3 
        className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${tierConfig[tier].gradient} text-center mb-8 uppercase tracking-wider`}
      >
        {tier} Sponsors
      </motion.h3>
      
      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            transition={{ delay: index * 0.1 }}
            className={`relative group ${tierConfig[tier].size}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${tierConfig[tier].gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
            <div className={`relative h-full bg-gray-900/80 backdrop-blur-sm border border-${tier === 'gold' ? 'yellow' : tier === 'silver' ? 'gray' : 'amber'}-500/30 rounded-2xl p-4 flex items-center justify-center ${tierConfig[tier].shadow} hover:shadow-2xl transition-shadow duration-300`}>
              <motion.img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-full object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};