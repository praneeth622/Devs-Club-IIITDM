"use client";
import Navbar from '../(components)/Navbar';
import HeaderBanner from './(components)/HeaderBanner';
import StatsSection from './(components)/StatsSection';
import EventsSection from './(components)/EventsSection';
import ProjectsSection from './(components)/ProjectsSection';
import MembersSection from './(components)/MembersSection';
import ResourcesSection from './(components)/ResourcesSection';
import PastEventsSection from './(components)/PastEventsSection';
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
    {
      name: 'Web Development Workshop',
      date: '2024-10-15',
      time: '14:00',
      venue: 'Computer Lab 1',
      capacity: 50,
      description: 'Join us for an intensive workshop on modern web development. Learn about React, Next.js, and building responsive web applications. Bring your laptop and come ready to code!',
      registrationLink: 'https://forms.google.com/webdev-workshop'
    },
    {
      name: 'Machine Learning Seminar',
      date: '2024-10-20',
      time: '16:00',
      venue: 'Seminar Hall',
      capacity: 100,
      description: 'Explore the fundamentals of Machine Learning with industry experts. Topics include neural networks, deep learning, and practical applications in today\'s tech landscape.',
      registrationLink: 'https://forms.google.com/ml-seminar'
    },
    {
      name: 'Hackathon 2024',
      date: '2024-11-01',
      time: '09:00',
      venue: 'Main Auditorium',
      capacity: 200,
      description: '24-hour coding competition focused on building innovative solutions for real-world problems. Form teams of up to 4 members and compete for exciting prizes!',
      registrationLink: 'https://forms.google.com/hackathon-2024'
    },
  ];

  const projects = [
    {
      title: "Project Alpha",
      teamLeader: "John Doe",
      description: "A cutting-edge web application for managing team workflows and improving productivity. This project aims to streamline communication and task management across various departments.",
      members: ["John Doe", "Jane Smith", "Mike Johnson"],
      status: "active",
      startDate: "2023-01-15",
      githubLink: "https://github.com/example/project-alpha",
      driveLink: "https://drive.google.com/example-alpha"
    },
    {
      title: "Project Beta",
      teamLeader: "Sarah Williams",
      description: "An innovative mobile app for tracking personal fitness goals and connecting with trainers. This app uses AI to provide personalized workout and nutrition plans.",
      members: ["Sarah Williams", "Mike Johnson", "Jane Smith"],
      status: "completed",
      startDate: "2022-09-01",
      githubLink: "https://github.com/example/project-beta"
    },
    {
      title: "Project Gamma",
      teamLeader: "Jane Smith",
      description: "A machine learning platform for analyzing and predicting market trends in real-time. This project leverages big data and advanced algorithms to provide actionable insights for businesses.",
      members: ["Jane Smith", "John Doe", "Sarah Williams"],
      status: "on-hold",
      startDate: "2023-03-10",
      driveLink: "https://drive.google.com/example-gamma"
    },
    {
      title: "Project Delta",
      teamLeader: "Mike Johnson",
      description: "An e-learning platform that adapts to individual learning styles and paces. This project uses advanced analytics to personalize the educational experience for each user.",
      members: ["Mike Johnson", "John Doe", "Sarah Williams"],
      status: "active",
      startDate: "2023-05-01",
      githubLink: "https://github.com/example/project-delta",
      driveLink: "https://drive.google.com/example-delta"
    }
  ]
  

  const members = [
    { name: 'Alice Johnson', role: 'President' },
    { name: 'Bob Smith', role: 'Vice President' },
    { name: 'Charlie Brown', role: 'Tech Lead' },
    { name: 'Diana Ross', role: 'Event Coordinator' },
  ];

  const pastEvents = [
    {
      name: 'Introduction to Open Source',
      date: '2023-09-15',
      time: '15:00',
      attendees: 75,
      summary: 'A successful workshop introducing students to open source contributions and Git basics.'
    },
    {
      name: 'AI/ML Bootcamp',
      date: '2023-10-20',
      time: '14:00',
      attendees: 120,
      summary: 'Three-day intensive bootcamp covering machine learning fundamentals and practical applications.'
    },
    {
      name: 'Hackathon 2023',
      date: '2023-11-05',
      time: '09:00',
      attendees: 200,
      summary: '24-hour coding competition with projects focusing on sustainable technology solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />
      <HeaderBanner />
      <div className="container mx-auto px-14 py-8">
        <StatsSection stats={stats} />
        <EventsSection events={events} />
        <PastEventsSection pastEvents={pastEvents} />
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
