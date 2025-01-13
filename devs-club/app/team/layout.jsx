"use client"
import React from 'react'
import Navbar from '../(components)/Navbar'
import Team from './page'
import { Footer } from '../(components)/Footer'
import  HeroSection  from './Herosection'

export default function layout() {
  return (
    <div>
        <Navbar/>
        <div className ='bg-sky-50 from-purple-100 to-indigo-100'>
        <HeroSection/>
        <Team/>
        </div>
        <Footer />
    </div>
  )
}
