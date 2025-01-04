"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../(components)/Navbar';
import { Footer } from '../(components)/Footer';
import { motion } from 'framer-motion';
import PastEventsSection from '../(components)/PastEventsSection';
import EventsSection from '../(components)/EventsSection';
import axios from 'axios';

// const dummyEvents = [
//   {
//     Event_name: "AI/ML Workshop",
//     Event_details: "A workshop on the basics of AI and Machine Learning.",
//     Project_Discription: "Introduction to AI concepts and practical applications.",
//     Event_outcome: "Participants will learn the fundamentals of AI and ML.",
//     Event_lead: "Alice Johnson",
//     Event_team: ["Alice Johnson", "Bob Smith"],
//     date: new Date("2023-12-01T10:00:00Z"),
//     Attendance: "50",
//     Event_Type: "Workshop",
//     Photos: [["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]],
//     budget: 200,
//     Resources: [["https://example.com/resource1.pdf", "https://example.com/resource2.pdf"]]
//   },
//   {
//     Event_name: "Hackathon 2023",
//     Event_details: "A 24-hour hackathon focused on building innovative solutions.",
//     Project_Discription: "Participants will work in teams to create projects.",
//     Event_outcome: "Teams will present their projects at the end of the event.",
//     Event_lead: "John Doe",
//     Event_team: ["John Doe", "Sarah Williams"],
//     date: new Date("2023-11-05T09:00:00Z"),
//     Attendance: "200",
//     Event_Type: "Hackathon",
//     Photos: [["https://example.com/hackathon1.jpg", "https://example.com/hackathon2.jpg"]],
//     budget: 500,
//     Resources: [["https://example.com/hackathon-guide.pdf"]]
//   },
//   {
//     Event_name: "Web Development Bootcamp",
//     Event_details: "An intensive bootcamp covering modern web development technologies.",
//     Project_Discription: "Learn about React, Node.js, and building full-stack applications.",
//     Event_outcome: "Participants will build a complete web application by the end of the bootcamp.",
//     Event_lead: "Emma Watson",
//     Event_team: ["Emma Watson", "Chris Hemsworth"],
//     date: new Date("2023-12-15T09:00:00Z"),
//     Attendance: "100",
//     Event_Type: "Bootcamp",
//     Photos: [["https://example.com/bootcamp1.jpg", "https://example.com/bootcamp2.jpg"]],
//     budget: 300,
//     Resources: [["https://example.com/bootcamp-resources.pdf"]]
//   },
//   {
//     Event_name: "Data Science Seminar",
//     Event_details: "A seminar on the latest trends in Data Science and AI.",
//     Project_Discription: "Insights into data analysis, machine learning, and AI applications.",
//     Event_outcome: "Participants will gain knowledge from industry experts.",
//     Event_lead: "Diana Ross",
//     Event_team: ["Diana Ross", "Charlie Brown"],
//     date: new Date("2023-11-20T14:00:00Z"),
//     Attendance: "150",
//     Event_Type: "Seminar",
//     Photos: [["https://example.com/seminar1.jpg"]],
//     budget: 250,
//     Resources: [["https://example.com/seminar-materials.pdf"]]
//   },
//   {
//     Event_name: "Mobile App Development Workshop",
//     Event_details: "A hands-on workshop on building mobile applications using Flutter.",
//     Project_Discription: "Learn to create cross-platform mobile apps.",
//     Event_outcome: "Participants will develop a simple mobile app by the end of the workshop.",
//     Event_lead: "Alice Johnson",
//     Event_team: ["Alice Johnson", "Bob Smith"],
//     date: new Date("2023-12-10T10:00:00Z"),
//     Attendance: "40",
//     Event_Type: "Workshop",
//     Photos: [["https://example.com/mobile-workshop1.jpg"]],
//     budget: 150,
//     Resources: [["https://example.com/mobile-workshop-resources.pdf"]]
//   },
//   {
//     Event_name: "Blockchain Basics",
//     Event_details: "An introductory session on blockchain technology.",
//     Project_Discription: "Understanding the fundamentals of blockchain.",
//     Event_outcome: "Participants will grasp the basic concepts of blockchain.",
//     Event_lead: "Mark Spencer",
//     Event_team: ["Mark Spencer", "Lisa Ray"],
//     date: new Date("2023-11-30T10:00:00Z"),
//     Attendance: "60",
//     Event_Type: "Workshop",
//     Photos: [["https://example.com/blockchain1.jpg"]],
//     budget: 100,
//     Resources: [["https://example.com/blockchain-resources.pdf"]]
//   },
//   {
//     Event_name: "Cybersecurity Awareness",
//     Event_details: "A seminar on the importance of cybersecurity.",
//     Project_Discription: "Learn about common cybersecurity threats.",
//     Event_outcome: "Participants will understand how to protect themselves online.",
//     Event_lead: "Nina Patel",
//     Event_team: ["Nina Patel", "Tom Hardy"],
//     date: new Date("2025-11-25T14:00:00Z"),
//     Attendance: "80",
//     Event_Type: "Seminar",
//     Photos: [["https://example.com/cybersecurity1.jpg"]],
//     budget: 120,
//     Resources: [["https://example.com/cybersecurity-resources.pdf"]]
//   }
// ];

const separateEvents = (events) => {
  const currentDate = new Date(); // Get the current date
  const pastEvents = []; // Array to hold past events
  const upcomingEvents = []; // Array to hold upcoming events

  events.forEach(event => {
    const eventDate = new Date(event.date); // Convert event date to Date object

    // Compare event date with current date
    if (eventDate < currentDate) {
      pastEvents.push(event); // Add to past events if the date is in the past
    } else {
      upcomingEvents.push(event); // Add to upcoming events if the date is today or in the future
    }
  });

  return { pastEvents, upcomingEvents }; // Return both arrays
};

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        if (response.data.success) {
          const fetchedEvents = response.data.data; // Extract the event data
          setEvents(fetchedEvents);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const { pastEvents, upcomingEvents } = separateEvents(events);
    setPastEvents(pastEvents);
    setUpcomingEvents(upcomingEvents);
  }, [events]);

  useEffect(() => {
    const { pastEvents, upcomingEvents } = separateEvents(events);
    setPastEvents(pastEvents);
    setUpcomingEvents(upcomingEvents);
  }, [events]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Events</h1>
        
        {/* Upcoming Events Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                {event.Photos && event.Photos[0] && event.Photos[0][0] ? (
    <img src={event.Photos[0][0]} alt={event.Event_name} className="w-full h-48 object-cover" />
  ) : (
    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
      <span className="text-gray-500">No Image Available</span>
    </div>
  )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{event.Event_name}</h3>
                  <p className="text-gray-600">{event.Event_details}</p>
                  <p className="text-gray-500 mt-2">Date: {new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-gray-500">Type: {event.Event_Type}</p>
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
          <PastEventsSection pastEvents={pastEvents} />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default EventsPage; 