'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '../(components)/Navbar'
import { Footer } from '../(components)/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { CalendarDays, MapPin, Clock } from 'lucide-react'

const separateEvents = (events) => {
  const currentDate = new Date()
  return events.reduce(
    (acc, event) => {
      const eventDate = new Date(event.date)
      if (eventDate < currentDate) {
        acc.pastEvents.push(event)
      } else {
        acc.upcomingEvents.push(event)
      }
      return acc
    },
    { pastEvents: [], upcomingEvents: [] }
  )
}

const EventCard = ({ event, isPastEvent, onViewDetails }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col h-full"
  >
    {isPastEvent && (
      <div className="relative h-48">
        {event.Photos && event.Photos[0] && event.Photos[0][0] ? (
          <img src={event.Photos[0][0]} alt={event.Event_name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">No Image Available</span>
          </div>
        )}
      </div>
    )}
    <div className="p-6 flex flex-col flex-grow">
      <div className="mb-2 flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800">{event.Event_name}</h3>
        <span className="px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded">
          {event.Event_Type}
        </span>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{event.Event_details}</p>
      <div className="flex items-center text-gray-500 mb-2">
        <CalendarDays className="w-4 h-4 mr-2" />
        <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
      </div>
      <div className="flex items-center text-gray-500 mb-4">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{event.location || 'Location TBA'}</span>
      </div>
      <button 
        onClick={() => onViewDetails(event)}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        View Details
      </button>
    </div>
  </motion.div>
)

const EventDetailsDialog = ({ event, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{event.Event_name}</h2>
      <p className="text-gray-700 mb-2"><strong>Details:</strong> {event.Event_details}</p>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {event.Event_description}</p>
      <p className="text-gray-700 mb-2"><strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      <p className="text-gray-700 mb-2"><strong>Resources:</strong> {event.resources ? event.resources.join(', ') : 'No resources available'}</p>
      <div className="flex justify-end mt-4">
        <button onClick={onClose} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Close
        </button>
      </div>
    </div>
  </div>
)

const EventsPage = () => {
  const [events, setEvents] = useState([])
  const [activeTab, setActiveTab] = useState('upcoming')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('/api/events')
        if (response.data.success) {
          setEvents(response.data.data)
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const { pastEvents, upcomingEvents } = separateEvents(events)

  const handleViewDetails = (event) => {
    setSelectedEvent(event)
  }

  const closeDialog = () => {
    setSelectedEvent(null)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl font-extrabold text-gray-800 mb-4"
          >
            Discover Our Events
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join us for exciting gatherings, workshops, and celebrations. There's always something happening!
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event, index) => (
                <EventCard key={index} event={event} isPastEvent={activeTab === 'past'} onViewDetails={handleViewDetails} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* No Events Message */}
        {!isLoading && (activeTab === 'upcoming' ? upcomingEvents : pastEvents).length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            No {activeTab} events at the moment. Check back soon!
          </motion.p>
        )}
      </motion.div>
      <Footer />

      {/* Dialog for Event Details */}
      {selectedEvent && <EventDetailsDialog event={selectedEvent} onClose={closeDialog} />}
    </div>
  )
}

export default EventsPage

