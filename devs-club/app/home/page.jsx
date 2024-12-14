"use client";

import React from 'react';
import Navbar from '../(components)/Navbar';
import { HeroSection } from '../(components)/Hero-section';
import { ProjectsGallery } from '../(components)/Project_gallery';
import { JoinCommunity } from '../(components)/Community';
import { Footer } from '../(components)/Footer';
import ImpactAchievements from '../(components)/Achivements';
import PlannedEvents from '../(components)/Planned_events';

export default function HomePage() {
  return (
    <div>
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
