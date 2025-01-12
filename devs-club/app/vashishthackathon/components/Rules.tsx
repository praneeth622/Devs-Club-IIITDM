import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Users, Calendar, Award, FileCode, Shield } from 'lucide-react';

const ruleCategories = [
  {
    title: "Eligibility & Teams",
    icon: <Users className="w-6 h-6" />,
    rules: [
      "Open to students from all institutes",
      "Teams of 2-5 members allowed",
      "One team can participate in only one track",
      "Teams can include students from any discipline"
    ]
  },
  {
    title: "Event Format",
    icon: <Calendar className="w-6 h-6" />,
    rules: [
      "24-48 hour hackathon",
      "Hall available from 9:30 AM to 6:00 PM",
      "Remote work after 6:00 PM",
      "Wi-Fi provided throughout the event"
    ]
  },
  {
    title: "Submission Guidelines",
    icon: <FileCode className="w-6 h-6" />,
    rules: [
      "Submit project repository (GitHub/ZIP)",
      "Include 2-5 minute demo video",
      "Provide detailed README file",
      "Disclose all used libraries/APIs"
    ]
  }
];

export const Rules = () => {
  return (
    <section className="py-20 relative overflow-hidden" id='Rules'>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-16 pixel-font"
        >
          Hackathon Rules
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ruleCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur group-hover:blur-xl transition-all duration-300" />
              
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <motion.li
                      key={ruleIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (ruleIndex * 0.1) }}
                      className="flex items-start gap-2 text-cyan-100/80"
                    >
                      <span className="text-cyan-400 mt-1">•</span>
                      {rule}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <a
            href="#full-rules"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
          >
            <Scroll className="w-5 h-5" />
            View Full Rules
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};