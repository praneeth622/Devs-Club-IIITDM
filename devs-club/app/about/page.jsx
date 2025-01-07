"use client";
import AnimatedSection from "./(components)/AnimatedSection";
import CoreTeamMember from "./(components)/CoreTeamMember";
import TimelineEvent from "./(components)/TimelineEvent";
import { Button } from "../../components/ui/button";
import {
  ChevronRight,
  Users,
  Target,
  Calendar,
  ArrowRight,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import Navbar from "../(components)/Navbar";
import Link from "next/link";
import { Footer } from "../(components)/Footer";
import HeroSection from './(components)/HeroSection'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideIn = (direction) => ({
  hidden: { x: direction === "left" ? -100 : 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
});

export default function GDSCAboutPage() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />

      {/* Header Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        {/* Adjusted Gradient Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto backdrop-blur-sm bg-slate-900/30 p-8 rounded-2xl border border-white/5"
          >
            {/* Glowing Title */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut"
              }}
              className="relative mb-8"
            >
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
                About
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-300 to-purple-200 animate-gradient font-extrabold pb-4">
                  Developers Club
                </span>
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg"
            >
              Join us on a journey of innovation and coding excellence. Discover our projects,
              meet our team, and be part of our vibrant community dedicated to pushing the boundaries
              of technology.
            </motion.p>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <div className="flex items-center gap-2 text-gray-100 backdrop-blur-md bg-white/10 px-8 py-4 rounded-full border border-white/20 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-500/20" />
                <span className="font-medium">Empowering students to learn, create, and innovate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-blue-950/50"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-16 space-y-24">
        {/* Mission & Vision Section */}
        <section className="grid md:grid-cols-2 gap-12 px-8">
          <motion.div
            variants={slideIn("left")}
            initial="hidden"
            animate="visible"
          >
            <Card className="shadow-lg rounded-lg pt-10 ">
              <CardContent className="py-10 px-8 space-y-6">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-14 h-14 text-primary" />
                </motion.div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
                <p className="text-gray-600">
                  To inspire and enable students to become world-class
                  developers by providing access to learning resources,
                  mentorship, and real-world projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={slideIn("right")}
            initial="hidden"
            animate="visible"
          >
            <Card className="shadow-lg rounded-lg pt-10">
              <CardContent className="py-10 px-8 space-y-6">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Target className="w-14 h-14 text-primary" />
                </motion.div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
                <p className="text-gray-600">
                  To inspire and enable students to become world-class
                  developers by providing access to learning resources,
                  mentorship, and real-world projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={slideIn("up")}
            initial="hidden"
            animate="visible"
            className="md:col-span-2"
          >
            <Card className="shadow-lg rounded-lg pt-10">
              <CardContent className="py-10 px-8 space-y-6">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Activity className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-3xl font-bold">Core Activities of Developers Club</h3>
                <h4 className="text-xl font-semibold text-gray-700">
                  What We Do
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                  <ul className="space-y-3 list-disc pl-6">
                    <li>
                      Workshops: Learn Google Cloud, ML, web dev, and more.
                    </li>
                    <li>Hackathons: Build innovative solutions in teams.</li>
                    <li>Projects: Work on real-world projects, collaborate with
                      teams.</li>
                  </ul>
                  <ul className="space-y-3 list-disc pl-6">
                    <li>Study Jams: Learn Google tech, earn certifications.</li>
                    <li>Guest Talks: Hear from industry experts and alumni.</li>
                  </ul>
                </div>
                {/* <div className="text-gray-600 pt-4">
                  <p>
                    Projects: Work on real-world projects, collaborate with
                    teams.
                  </p>
                </div> */}
              </CardContent>
            </Card>
          </motion.div>
        </section>


        {/* Events & Achievements Section */}
        <div className="bg-sky-50 w-full py-20 pr-6 ">
          <AnimatedSection>
            <motion.section variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-12 text-center">
                Events & Achievements
              </h2>
              <div className="max-w-3xl mx-auto">
                <TimelineEvent
                  title="Android Study Jam"
                  date="March 15, 2024"
                  description="A series of hands-on workshops to learn Android app development using Kotlin."
                />
                <TimelineEvent
                  title="Hackathon 2023"
                  date="November 5-7, 2023"
                  description="Our annual hackathon where students built innovative solutions for local community problems."
                />
                <TimelineEvent
                  title="Cloud Study Jam"
                  date="September 20, 2023"
                  description="An intensive workshop on Google Cloud Platform, covering core services and best practices."
                />
              </div>
            </motion.section>
          </AnimatedSection>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
