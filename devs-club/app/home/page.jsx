"use client";

import React, { useEffect } from 'react';
import Navbar from '../(components)/Navbar';
import { HeroSection } from '../(components)/Hero-section';
import { ProjectsGallery } from '../(components)/Project_gallery';
import { JoinCommunity } from '../(components)/Community';
import { Footer } from '../(components)/Footer';
import ImpactAchievements from '../(components)/Achivements';
import PlannedEvents from '../(components)/Planned_events';
import { useUser } from '@clerk/nextjs';
import { useTheme } from 'next-themes';

export default function HomePage() {
  const { user, isLoaded } = useUser(); // Get current user and loaded state

  const { theme, setTheme } = useTheme(); // Get current theme and set theme function

  useEffect(() => {
    if (isLoaded && user) {
      // Check if the user is signed in and perform the organization check
      checkAndAddToOrganization(user.id);
    }
  }, [isLoaded, user]);
  const checkAndAddToOrganization = async (userId) => {
    try {
      // Call the API to add the user to the organization
      const response = await fetch('/api/webhooks/user-signed-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add user to organization');
      }
  
      console.log('User added to "core" organization');
    } catch (error) {
      console.error('Error adding user to organization:', error);
    }
  };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar/>
      <HeroSection/>
      <ImpactAchievements />
      <ProjectsGallery/>
      <PlannedEvents />
      <JoinCommunity/>
      <Footer/>
    </div>
  );
}
