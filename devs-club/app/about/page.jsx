"use client";
import AnimatedSection from "./(components)/AnimatedSection";
import CoreTeamMember from "./(components)/CoreTeamMember";
import TimelineEvent from "./(components)/TimelineEvent";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Users,
  Target,
  Calendar,
  ArrowRight,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "app/(components)/Navbar";
import Link from "next/link";
import { Footer } from "app/(components)/Footer";

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
    <div className="min-h-screen text-foreground bg-gray-50">
      <Navbar />
      {/* Header */}
      <section className="text-center bg-sky-50 px-6 py-24 lg:py-32">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Google Developer Student Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Join us on a journey of innovation and coding excellence. Discover our
          projects, meet our team, and be part of our vibrant community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          Empowering students to learn, create, and innovate
        </motion.div>
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
                  whileHover={{ scale: 1.04}}
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
                  whileHover={{ scale: 1.04}}
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
                  whileHover={{ scale: 1.04}}
                  whileTap={{ scale: 0.95 }}
                >
                  <Activity className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-3xl font-bold">Core Activities of GDSC</h3>
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

        {/* Core Team Section */}
        <CoreTeamMember />

        {/* Events & Achievements Section */}
        <div className="bg-sky-50 py-20">
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
