"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import {
  ChevronRight,
  Award,
  Users,
  TrendingUp,
  Star,
  Code,
  Brain,
  Trophy,
} from "lucide-react";
import Navbar from "../(components)/Navbar";
import { Footer } from "../(components)/Footer";
import HeroSection from "./(components)/Herosection";
import { useEffect, useState } from "react";

const achievements = [
  {
    title: "Git and Github Session",
    description: "A session to equip members with Git and GitHub skills for effective collaboration on projects.",
    icon: <Award className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Mastering Deep Learning",
    description: "Insights into deep learning models and industrial expectations, led by AMD senior.",
    icon: <Brain className="w-8 h-8 text-green-500" />
  },
  {
    title: "Python and Introduction to AI/ML",
    description: "Mastering Python with hands-on AI and Machine Learning projects for real-world applications..",
    icon: <Star className="w-8 h-8 text-yellow-500" />
  },
  {
    title: "Vashisht Hackathon",
    description: "Massive hackathon with 1100+ participants, focusing on innovative tech solutions.",
    icon: <Users className="w-8 h-8 text-purple-500" />
  },
  {
    title: "Crafting Scalable Backends with Convex",
    description: "Built a fantasy game with Convex, leveraging its scalable backend.",
    icon: <TrendingUp className="w-8 h-8 text-red-500" />
  },
  {
    title: "Intro to Deep Learning",
    description: "Hands-on session on deep learning model development by the core team.",
    icon: <Code className="w-8 h-8 text-indigo-500" />
  }
];
const benefits = [
  {
    title: "Skill Development",
    description: "Practical learning with cutting-edge technologies.",
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Networking",
    description: "Build connections with peers and industry leaders.",
    icon: <Users className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Career Advancement",
    description: "Strengthen resume and develop leadership skills.",
    icon: <Star className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Recognition",
    description: "Showcase talent at industry events.",
    icon: <Award className="w-8 h-8 text-purple-500" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

// Internal component, not exported
function AchievementsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 py-16 px-4 md:px-0">
      <motion.h1
        className="text-5xl font-bold text-center mb-16 text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        Developers Club Achievements
      </motion.h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Journey of Excellence
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.length > 0 ? (
              achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                    {achievement.icon}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No achievements available yet.
              </p>
            )}
          </div>
        </motion.section>

        <motion.section
          className="bg-white rounded-xl p-8 mb-20 shadow-lg mx-4 sm:mx-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Join Developers Club?
          </h2>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start p-4 bg-blue-50 rounded-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="flex-shrink-0 mr-4 bg-white rounded-full p-3 shadow-md">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="px-4 sm:px-8"
        >
          <h2 className="text-3xl font-semibold mb-12 text-center">
            <span className="relative">
              Spotlight Achievement
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
            </span>
          </h2>
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-shadow duration-300 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white/10 p-4 rounded-full mr-4">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 text-transparent bg-clip-text">
                  Vashisht Hackathon
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-blue-50">
                  Our largest event to date, bringing together over 1,100
                  participants to create innovative tech solutions. This hackathon
                  showcased the incredible talent and creativity within our
                  community.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-400">1,100+</div>
                    <div className="text-sm text-blue-100">Participants</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-400">48hrs</div>
                    <div className="text-sm text-blue-100">Duration</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-400">250+</div>
                    <div className="text-sm text-blue-100">Projects</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-400">₹2L+</div>
                    <div className="text-sm text-blue-100">Prize Pool</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/dashboard">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
            >
              Join Developers Club Today!
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
}
