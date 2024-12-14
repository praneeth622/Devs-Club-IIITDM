"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiCode,
  FiStar,
  FiGitPullRequest,
  FiUsers,
} from "react-icons/fi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Navbar from "../(components)/Navbar";
import { Footer } from "../(components)/Footer";

function OpenSourcePage() {
  const [activeTab, setActiveTab] = useState("featured");

  const projects = [
    { id: 1, name: "CodeCollab", stars: 1200, prs: 150, contributors: 45 },
    { id: 2, name: "DevToolkit", stars: 800, prs: 100, contributors: 30 },
    { id: 3, name: "AICodeAssist", stars: 1500, prs: 200, contributors: 60 },
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

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-500">
          <FiCode className="inline-block mr-2" />
          Open Source Contributions
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-black mb-4">
            Join our community in building amazing open-source projects. Your
            contributions can make a difference!
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            <Link
              href="https://github.com/developersclub"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
            >
              <FiGithub className="mr-2" /> Visit Our GitHub
            </Link>
          </Button>
        </motion.div>

        <Card className="shadow-lg border-blue-500 border-t-4 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-500">
              How to Contribute
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-black">
              <motion.li variants={itemVariants}>
                Fork the repository you&apos;re interested in
              </motion.li>
              <motion.li variants={itemVariants}>
                Clone your fork to your local machine
              </motion.li>
              <motion.li variants={itemVariants}>
                Create a new branch for your feature or bug fix
              </motion.li>
              <motion.li variants={itemVariants}>
                Make your changes and commit them
              </motion.li>
              <motion.li variants={itemVariants}>
                Push your changes to your fork
              </motion.li>
              <motion.li variants={itemVariants}>
                Open a pull request to the original repository
              </motion.li>
            </ol>
          </CardContent>
        </Card>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Our Projects
          </h2>
          <div className="flex space-x-4 mb-4">
            <div
              onClick={() => setActiveTab("featured")}
              className={`cursor-pointer rounded-md px-4 py-2 transition-colors duration-300 ${
                activeTab === "featured"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-blue-500 hover:bg-blue-100"
              }`}
            >
              Featured
            </div>
            <div
              onClick={() => setActiveTab("all")}
              className={`cursor-pointer rounded-md px-4 py-2 transition-colors duration-300 ${
                activeTab === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-blue-500 hover:bg-blue-100"
              }`}
            >
              All Projects
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-500">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-black">
                    <span className="flex items-center">
                      <FiStar className="mr-1 text-yellow-400" />{" "}
                      {project.stars}
                    </span>
                    <span className="flex items-center">
                      <FiGitPullRequest className="mr-1 text-green-500" />{" "}
                      {project.prs}
                    </span>
                    <span className="flex items-center">
                      <FiUsers className="mr-1 text-blue-500" />{" "}
                      {project.contributors}
                    </span>
                  </div>
                  {/* <Button
                    asChild
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white"
                  > */}
                  <Link
                    href={`https://github.com/developersclub/${project.name}`}
                    className=" w-full mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
                  >
                    View Project
                  </Link>
                  {/* </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Ready to Start?
          </h2>
          <p className="text-black mb-6">
            Dive into our open-source projects and make your mark in the
            developer community!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
          >
            Get in Touch
          </Link>
          {/* </Button> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
export default function OpenSource() {
  return (
    <div>
      <Navbar />
      <OpenSourcePage />
      <Footer />
    </div>
  );
}
