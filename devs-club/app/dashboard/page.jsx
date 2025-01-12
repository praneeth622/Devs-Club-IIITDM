"use client";
import Navbar from '../(components)/Navbar';
import HeaderBanner from './(components)/HeaderBanner';
import StatsSection from './(components)/StatsSection';
import EventsSection from './(components)/EventsSection';
import ProjectsSection from './(components)/ProjectsSection';
import MembersSection from './(components)/MembersSection';
import ResourcesSection from './(components)/ResourcesSection';
import PastEventsSection from './(components)/PastEventsSection';
import { Footer } from '../(components)/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Page() {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [eventsLength, Seteventslength] = useState(10)
  const [projectsLength, Setprojectslength] = useState(5)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        // console.log("response ",response);
        if (response.data.success) {
          Seteventslength(response.data.data.length)
          const currentDate = new Date();
          const upcomingEvents = response.data.data.filter(event => new Date(event.date) >= currentDate);
          const pastEvents = response.data.data.filter(event => new Date(event.date) < currentDate);
          // console.log("upcomingEvents", upcomingEvents)
          // console.log("pastEvents", pastEvents)
          setEvents(upcomingEvents);
          setPastEvents(pastEvents);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const result = await response.json();
        
        if (result.success) {
          // console.log("Projects fetched successfully",result.data)
          Setprojectslength(result.data.length);
          // console.log('LENGTH',result.data.length)
        } else {
          setError("Failed to fetch projects");
          toast.error("Failed to fetch projects");
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Error fetching projects");
        toast.error("Error fetching projects");
      } 
    };
  
    fetchProjects();
  }, []);

  const stats = { events: eventsLength, members: 90, projects: projectsLength };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />
      <HeaderBanner />
      <div className="container mx-auto px-14 py-8">
        <StatsSection stats={stats} />
        <EventsSection events={events} />
        <PastEventsSection pastEvents={pastEvents} />
        <ProjectsSection />
        {/* <MembersSection members={members} /> */}
        <ResourcesSection isResourcesOpen={isResourcesOpen} setIsResourcesOpen={setIsResourcesOpen} />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
