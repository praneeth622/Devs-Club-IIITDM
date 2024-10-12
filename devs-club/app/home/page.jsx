"use client";

import React from 'react'
import  Navbar  from '../(components)/Navbar'
import { HeroSection } from '../(components)/Hero-section'
import { MeetOurTeam } from '../(components)/Meet_team'
import { ProjectsGallery } from '../(components)/Project_gallery'
import { JoinCommunity } from '../(components)/Community'
import { Footer } from '../(components)/Footer'
import ImpactAchievements from '../(components)/Achivements';
import PlannedEvents from '../(components)/Planned_events';

export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MeetOurTeam/>
      <ImpactAchievements />
      <ProjectsGallery/>
      <PlannedEvents />
      <JoinCommunity/>
      <Footer/>
    </div>
  )
}
