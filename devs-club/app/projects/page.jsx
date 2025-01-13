"use client"
import ProjectsList from './(components)/ProjectsList';
import Navbar from '../(components)/Navbar'
import {Footer} from '../(components)/Footer'
import React, { useEffect, useState } from 'react'
import HeroSection from './(components)/HeroSection'
import LoadingSpinner from '../components/LoadingSpinner'
import ProjectsToggleView from './(components)/ProjectsToggleView'
import FeaturedProjects from './(components)/FeaturedProjects'



  export default function Page() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);


    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch('/api/projects');
          const result = await response.json();
          if (result.success) {
            console.log("Projects are : ", result.data)
            setProjects(result.data);
          } else {
            setError('Failed to fetch projects');
          }
          setLoading(false);
        } catch (err) {
          setError('Error fetching projects');
          setLoading(false);
        }
      };
  
      fetchProjects();
    }, []);

  return (
    <div>
    <Navbar />
    <HeroSection/>
    <div className="min-h-screen  bg-sky-50 from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <FeaturedProjects projects={projects} />
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Projects</h1>
            <ProjectsToggleView projects={projects} />
          </>
        )}
      </div>
      {/* <ProjectsList/> */}
    </div>
    <Footer />
    </div>
  );
}
