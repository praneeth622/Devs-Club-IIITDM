"use client"
import React from 'react'
import Navbar from '../(components)/Navbar'
import Team from './page'
import { Footer } from '../(components)/Footer'
import HeroSection from '../team/(components)/HeroSection'

export default function layout() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Team/>
        <Footer />
    </div>
  )
}
