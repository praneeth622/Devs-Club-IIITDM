'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Briefcase } from 'lucide-react';

const achievements = [
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    count: 1000,
    title: 'Student Participation',
    description: 'Students engaged in various activities throughout the year',
  },
  {
    icon: <Award className="w-12 h-12 text-blue-500" />,
    count: 250,
    title: 'Certifications Earned',
    description: 'Certifications earned through Google Cloud and GenAI Study Jams',
  },
  {
    icon: <Briefcase className="w-12 h-12 text-blue-500" />,
    count: 5,
    title: 'Projects Completed',
    description: 'Major projects completed by the students with the help of GDSC',
  },
];

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function ImpactAchievements() {
  const achievementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    }, options);

    const currentRef = achievementRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="py-16 px-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Impact & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={achievementRef}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-card text-card-foreground rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="mb-4 inline-block"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
              >
                {achievement.icon}
              </motion.div>
              <motion.h3
                className="text-5xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              >
                <Counter end={achievement.count} duration={2000} />
                {achievement.count ? '+' : null}
              </motion.h3>
              <motion.h4
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                {achievement.title}
              </motion.h4>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                {achievement.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
