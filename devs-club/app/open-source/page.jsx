"use client";

import { useEffect, useState } from "react";
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
  const [projects, setProjects] = useState([]);

  // const projects = [
  //   { id: 1, name: "CodeCollab", stars: 1200, prs: 150, contributors: 45,link:"https://github.com/praneeth622/Devs-Club-IIITDM" },
  //   { id: 2, name: "DevToolkit", stars: 800, prs: 100, contributors: 30 ,link:"https://github.com/praneeth622/Devs-Club-IIITDM"},
  //   { id: 3, name: "AICodeAssist", stars: 1500, prs: 200, contributors: 60 ,link:"https://github.com/praneeth622/Devs-Club-IIITDM"},
  // ];

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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/getProjects");
        const result = await response.json();
        setProjects(result.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:bg-gradient-to-br dark:from-slate-800 dark:via-gray-800 dark:to-slate-800"> 
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" />

        <div className="relative z-10 container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto backdrop-blur-sm bg-slate-900/30 p-8 rounded-2xl border border-white/5"
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Open Source
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-300 to-purple-200 animate-gradient font-extrabold">
                Contributions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Join our thriving community of developers and make meaningful
              contributions to projects that matter. Your code can change the
              world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="https://github.com/praneeth622/Devs-Club-IIITDM"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FiGithub className="text-xl" /> Explore Our GitHub
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-[100px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-blue-950/50"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 dark:bg-gray-800 dark:text-white/80 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Contribution Guide */}
          <Card className="mb-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-900 dark:text-white/80">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-3xl font-bold text-blue-900 dark:text-white/80">
                How to Contribute
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 ">
              <ol className="list-decimal list-inside space-y-4 text-gray-700 ">
                {[
                  `Fork the repository : "https://github.com/praneeth622/Devs-Club-IIITDM"`,
                  "Clone your fork to your local machine using: git clone https://github.com/praneeth622/Devs-Club-IIITDM.git.",
                  "Create a new branch for your feature or bug fix using: git checkout -b your-branch-name",
                  "Make your changes",
                  `Make your changes and commit them with meaningful commit messages: git commit -m "Your commit message"`,
                  "Push your changes to your fork using: git push origin your-branch-name.",
                  "Open a pull request to the original repository, describing your changes clearly.",
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-2 text-lg "
                  >
                    <span className="text-gray-900 inline-flex justify-center dark:text-white/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {step}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 dark:bg-gray-800">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900">
                Featured Projects
              </h2>
              <div className="flex gap-2">
                {["Featured", "All Projects"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 dark:bg-gray-700 dark:text-white/80 ${
                      activeTab === tab.toLowerCase()
                        ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg"
                        : "bg-white/50 text-gray-600 hover:bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 dark:bg-gray-800">
              {projects?.length > 0 ? (
                projects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0">
                      <CardHeader className="border-b border-gray-100 p-4 sm:p-6">
                        <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
                          <FiCode className="text-blue-700" />
                          {project.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-gray-600">
                          <div className="flex flex-col items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                            <FiStar className="text-yellow-500 text-xl sm:text-2xl mb-1" />
                            <span className="text-sm sm:text-base font-semibold">
                              {project.stars}
                            </span>
                            <span className="text-xs text-gray-500">Stars</span>
                          </div>
                          <div className="flex flex-col items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                            <FiGitPullRequest className="text-green-500 text-xl sm:text-2xl mb-1" />
                            <span className="text-sm sm:text-base font-semibold">
                              {project.prs}
                            </span>
                            <span className="text-xs text-gray-500">PRs</span>
                          </div>
                          <div className="flex flex-col items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                            <FiUsers className="text-blue-500 text-xl sm:text-2xl mb-1" />
                            <span className="text-sm sm:text-base font-semibold">
                              {project.contributors}
                            </span>
                            <span className="text-xs text-gray-500">Contributors</span>
                          </div>
                        </div>
                        <Link
                          target="_blank"
                          href={`${project.link}`}
                          className="block w-full py-2.5 sm:py-3 text-center text-white bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg hover:from-blue-800 hover:to-blue-950 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base font-medium"
                        >
                          View Project
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500 text-center col-span-full">No projects available.</p>
              )}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-20 text-center relative overflow-hidden px-4 sm:px-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 opacity-90 rounded-2xl" />
            <div className="relative z-10 p-6 sm:p-16 backdrop-blur-sm">
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white tracking-tight"
              >
                Contribute to Open Source
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-base sm:text-xl mb-8 sm:mb-10 text-blue-50 max-w-2xl mx-auto leading-relaxed px-4"
              >
                Join our thriving developer community and help build innovative
                solutions that make a difference.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex justify-center"
              >
                <Link
                  target="_blank"
                  href="https://github.com/praneeth622/Devs-Club-IIITDM"
                  className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 bg-white text-blue-800 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-lg gap-2 dark:bg-gray-800 dark:text-white/80"
                >
                  <FiGithub className="w-5 h-5 dark:text-white/80" />
                  Start Contributing
                </Link>
              </motion.div>
              
              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function OpenSource() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Navbar />
      <OpenSourcePage />
      <Footer />
    </div>
  );
}
