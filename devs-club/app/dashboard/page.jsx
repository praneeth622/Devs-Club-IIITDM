"use client";
import { useState, useEffect, Suspense, lazy } from 'react';
import axios from 'axios';
import Navbar from '../(components)/Navbar';
import LoadingSpinner from '../(components)/LoadingSpinner';

// Lazy load components
const HeaderBanner = lazy(() => import('./(components)/HeaderBanner'));
const StatsSection = lazy(() => import('./(components)/StatsSection'));
const EventsSection = lazy(() => import('./(components)/EventsSection'));
const ProjectsSection = lazy(() => import('./(components)/ProjectsSection'));
const MembersSection = lazy(() => import('./(components)/MembersSection'));
const ResourcesSection = lazy(() => import('./(components)/ResourcesSection'));
const PastEventsSection = lazy(() => import('./(components)/PastEventsSection'));
const Footer = lazy(() => import('../(components)/Footer').then(mod => ({ default: mod.Footer })));

function Page() {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [eventsLength, setEventsLength] = useState(10);
  const [projectsLength, setProjectsLength] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [eventsResponse, projectsResponse] = await Promise.all([
          axios.get('/api/events'),
          fetch('/api/projects').then(res => res.json())
        ]);

        if (eventsResponse.data.success) {
          const currentDate = new Date();
          const allEvents = eventsResponse.data.data;
          setEventsLength(allEvents.length);
          setEvents(allEvents.filter(event => new Date(event.date) >= currentDate));
          setPastEvents(allEvents.filter(event => new Date(event.date) < currentDate));
        }

        if (projectsResponse.success) {
          setProjectsLength(projectsResponse.data.length);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const stats = { events: eventsLength, members: 90, projects: projectsLength };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <HeaderBanner />
      </Suspense>
      <div className="container mx-auto px-4 sm:px-6 lg:px-14 py-8">
        <Suspense fallback={<LoadingSpinner />}>
          <StatsSection stats={stats} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <EventsSection events={events} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <PastEventsSection pastEvents={pastEvents} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <ResourcesSection 
            isResourcesOpen={isResourcesOpen} 
            setIsResourcesOpen={setIsResourcesOpen} 
          />
        </Suspense>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Page;
