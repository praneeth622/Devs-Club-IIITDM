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
    <div className="min-h-screen  text-foreground">
      <Navbar />
      {/* Header */}
      <section className="text-center bg-sky-50 px-4 py-20">
      <motion.h1
            className="text-4xl font-bold mb-4"
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
        className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
      >
        Join us on a journey of innovation and coding excellence. Discover our projects, meet our team, and be part of our vibrant community.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        Empowering students to learn, create, and innovate
      </motion.div>
    </section>

      {/* Main Content */}
      <main className="container mx-auto pt-12 space-y-24">
        {/* Introduction */}

        {/* Mission & Vision Section */}
        <section className="grid md:grid-cols-2 gap-12 ">
          <motion.div
            variants={slideIn("left")}
            initial="hidden"
            animate="visible"
          >
            <Card>
              <CardContent className="pt-7 pl-7 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Users className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p>
                  To provide students with the resources and opportunities to
                  enhance their technical skills and become successful
                  developers.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={slideIn("right")}
            initial="hidden"
            animate="visible"
          >
            <Card>
              <CardContent className="pt-7 pl-7 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Target className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p>
                  To create a community of passionate developers who can solve
                  real-world problems and drive innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Core Team Section */}
        <AnimatedSection>
          <motion.section variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-8 text-center">Core Team</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp}>
                <CoreTeamMember
                  name="John Doe"
                  role="Lead"
                  bio="Passionate about AI and machine learning. Loves to mentor and guide fellow students."
                  image="/placeholder.svg?height=128&width=128"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <CoreTeamMember
                  name="Jane Smith"
                  role="Technical Lead"
                  bio="Full-stack developer with a keen interest in cloud technologies and DevOps."
                  image="/placeholder.svg?height=128&width=128"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <CoreTeamMember
                  name="Alex Johnson"
                  role="Design Lead"
                  bio="UI/UX enthusiast. Believes in creating intuitive and accessible designs for all."
                  image="/placeholder.svg?height=128&width=128"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        </AnimatedSection>

        {/* Events & Achievements Section */}
        <div className="bg-sky-50 p-12">
        <AnimatedSection>
          <motion.section variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Events & Achievements
            </h2>
            <div className="max-w-2xl mx-auto">
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

        {/* Join Us Section */}
        {/* <AnimatedSection>
          <motion.section className="text-center" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6">Join Us</h2>
            <p className="mb-8 text-lg">
              Be part of our vibrant community and unlock your potential as a
              developer!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                Join GDSC <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.section>
        </AnimatedSection> */}
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
