"use client";
import Navbar from '../(components)/Navbar';
import HeaderBanner from './(components)/HeaderBanner';
import StatsSection from './(components)/StatsSection';
import EventsSection from './(components)/EventsSection';
import ProjectsSection from './(components)/ProjectsSection';
import MembersSection from './(components)/MembersSection';
import ResourcesSection from './(components)/ResourcesSection';
import {Footer} from '../(components)/Footer';
import { useState } from 'react';


//Making route protected
// import withProtectedRoute from '../ProtectedRoute'; 
// remove this if you want to make route un protected


function Page() {
  const [activeSection, setActiveSection] = useState('Overview');
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const stats = { events: 15, members: 250, projects: 8 };

  const events = [
    { name: 'Web Development Workshop', date: '2024-10-15', time: '14:00' },
    { name: 'Machine Learning Seminar', date: '2024-10-20', time: '16:00' },
    { name: 'Hackathon 2024', date: '2024-11-01', time: '09:00' },
  ];

  const projects = [
    { name: 'AI Chatbot', members: 5, status: 'In Progress' },
    { name: 'Mobile App', members: 4, status: 'Planning' },
    { name: 'Web Accessibility Tool', members: 3, status: 'Completed' },
  ];

  const members = [
    { name: 'Alice Johnson', role: 'President' },
    { name: 'Bob Smith', role: 'Vice President' },
    { name: 'Charlie Brown', role: 'Tech Lead' },
    { name: 'Diana Ross', role: 'Event Coordinator' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />
      <HeaderBanner />
      <div className="container mx-auto px-14 py-8">
        <StatsSection stats={stats} />
        <EventsSection events={events} />
        <ProjectsSection projects={projects} />
        {/* <MembersSection members={members} /> */}
        <ResourcesSection isResourcesOpen={isResourcesOpen} setIsResourcesOpen={setIsResourcesOpen} />
      </div>
      <Footer />
    </div>
  );
}

export default Page;

// export default withProtectedRoute(Page); 
