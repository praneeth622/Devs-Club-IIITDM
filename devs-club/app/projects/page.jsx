"use client"
import ProjectsList from './(components)/ProjectsList';
import Navbar from '../(components)/Navbar'
import {Footer} from '../(components)/Footer'
import React, { useEffect, useState } from 'react'
import HeroSection from './(components)/HeroSection'
import LoadingSpinner from '../components/LoadingSpinner'

const projects = [
  {
    id: 1,
    name: "AI Assistant",
    description: "An AI-powered virtual assistant for productivity enhancement.",
    teamLead: {
      name: "Emma Watson",
      photo: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/emmawatson",
      github: "https://github.com/emmawatson"
    },
    teamMembers: [
      { name: "John Doe", linkedin: "https://linkedin.com/in/johndoe", github: "https://github.com/johndoe" },
      { name: "Jane Smith", linkedin: "https://linkedin.com/in/janesmith", github: "https://github.com/janesmith" },
    ],
    fullDescription: "Our AI Assistant project leverages cutting-edge machine learning algorithms to create a highly responsive and intuitive virtual assistant."
  },
  {
    id: 2,
    name: "EcoTrack",
    description: "A sustainability tracking app for reducing carbon footprint.",
    teamLead: {
      name: "Chris Hemsworth",
      photo: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/chrishemsworth",
      github: "https://github.com/chrishemsworth"
    },
    teamMembers: [
      { name: "Alice Johnson", linkedin: "https://linkedin.com/in/alicejohnson", github: "https://github.com/alicejohnson" },
      { name: "Bob Williams", linkedin: "https://linkedin.com/in/bobwilliams", github: "https://github.com/bobwilliams" },
    ],
    fullDescription: "EcoTrack is an innovative app that helps users monitor and reduce their carbon footprint."
  },
  {
    id: 3,
    name: "VR Learning",
    description: "Virtual reality platform for immersive educational experiences.",
    teamLead: {
      name: "Zoe Saldana",
      photo: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/zoesaldana",
      github: "https://github.com/zoesaldana"
    },
    teamMembers: [
      { name: "Mike Ross", linkedin: "https://linkedin.com/in/mikeross", github: "https://github.com/mikeross" },
      { name: "Rachel Green", linkedin: "https://linkedin.com/in/rachelgreen", github: "https://github.com/rachelgreen" },
    ],
    fullDescription: "VR Learning transforms education through immersive virtual reality experiences."
  },
  {
    id: 4,
    name: "HealthHub",
    description: "Centralized platform for managing personal health data.",
    teamLead: {
      name: "Hugh Jackman",
      photo: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/hughjackman",
      github: "https://github.com/hughjackman"
    },
    teamMembers: [
      { name: "Phoebe Buffay", linkedin: "https://linkedin.com/in/phoebebuffay", github: "https://github.com/phoebebuffay" },
      { name: "Chandler Bing", linkedin: "https://linkedin.com/in/chandlerbing", github: "https://github.com/chandlerbing" },
    ],
    fullDescription: "HealthHub is a comprehensive health management system."
  },
  {
    id: 5,
    name: "SmartCity",
    description: "IoT-based solution for efficient urban management.",
    teamLead: {
      name: "Scarlett Johansson",
      photo: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/scarlettjohansson",
      github: "https://github.com/scarlettjohansson"
    },
    teamMembers: [
      { name: "Tony Stark", linkedin: "https://linkedin.com/in/tonystark", github: "https://github.com/tonystark" },
      { name: "Pepper Potts", linkedin: "https://linkedin.com/in/pepperpotts", github: "https://github.com/pepperpotts" },
    ],
    fullDescription: "SmartCity leverages IoT technology to create an interconnected urban ecosystem."
  },
  {
    id: 6,
    name: "CyberShield",
    description: "Advanced cybersecurity solution for small businesses.",
    teamLead: {
      name: "Chadwick Boseman",
      photo: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/chadwickboseman",
      github: "https://github.com/chadwickboseman"
    },
    teamMembers: [
      { name: "Shuri", linkedin: "https://linkedin.com/in/shuri", github: "https://github.com/shuri" },
      { name: "Okoye", linkedin: "https://linkedin.com/in/okoye", github: "https://github.com/okoye" },
    ],
    fullDescription: "CyberShield provides enterprise-level cybersecurity protection tailored for small businesses."
  }
];

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
    <Navbar />
    <HeroSection/>
    <div className="min-h-screen  bg-sky-50 from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Projects</h1>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <ProjectsList projects={projects} />
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
}
