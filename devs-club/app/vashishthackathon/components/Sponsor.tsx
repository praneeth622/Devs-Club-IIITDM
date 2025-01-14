import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SponsorUs } from './sponsor/SponsorUs';
import { Clock } from 'lucide-react';
import { SponsorCard } from './sponsor/SponsorCard';
import CodeChef from './images/CodeChef.jpg'
import contentstack from './images/contentstack.png'
import cigniti from './images/cigniti.png'
import Unstop from './images/unstop.png'
import APTOS from './images/APTOS.png'
import Devfolio from './images/Devfolio.png'
import OSSEB from './images/OSSEB.png'
import lightcast from './images/lightcast.jpg'
import sriaalaya from './images/sriaalaya.jpg'

const previousSponsors = [
    {
      name: 'APTOS',
      logo: APTOS
    },
    {
      name: 'Cigniti',
      logo: cigniti
    },
    {
      name: 'Content Stack',
      logo: contentstack
    },
    {
      name: 'Unstop',
      logo: Unstop
    },
    {
      name: 'Code Chef',
      logo: CodeChef
    },
    {
      name: 'Devfolio',
      logo: Devfolio
    },
    {
      name: 'OSSEB',
      logo: OSSEB
    },
    {
      name: 'Light Cast',
      logo: lightcast
    },
    {
      name: 'Sri Aalaya Infra PVT LTD',
      logo: sriaalaya
    },
  ];
  
  export const Sponsors = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
    return (
      <section className="py-20 relative overflow-hidden" id="sponsors">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900" />
        <motion.div 
          className="absolute inset-0"
          style={{ y, opacity }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
  
        <div className="container mx-auto px-6 relative">
          {/* Previous Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 pixel-font">
              Previous Sponsors
            </h2>
            <p className="text-cyan-100 text-lg max-w-2xl mx-auto mb-12">
              We&apos;re grateful for the support of these amazing organizations in our previous edition
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {previousSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SponsorCard {...{ name: sponsor.name, logo: sponsor.logo }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
  
          {/* Current Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl pt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 pixel-font">
              Vashisht 2.0 Sponsors
            </h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl" />
              <div className="relative bg-gray-900/50 border border-purple-500/20 p-8 rounded-xl backdrop-blur-sm">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                <p className="text-cyan-100/80">
                  Exciting partnerships are in the works! Stay tuned for announcements.
                </p>
              </div>
            </motion.div>
          </motion.div>
  
          {/* Sponsor CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block mb-8 px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                Become Part of Something Great
              </span>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h3>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
              Partner with Vashisht 2.0 to connect with exceptional talent and support the future of technology.
            </p>
            
            <SponsorUs formLink="https://drive.google.com/file/d/1hCyjw9lAhXQ1goZjaChml92OBfsKkCvS/" />
          </motion.div>
        </div>
      </section>
    );
  };
