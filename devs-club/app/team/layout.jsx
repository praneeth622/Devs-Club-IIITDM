"use client"
import React from 'react'
import Navbar from '../(components)/Navbar'
import Team from './page'
import { Footer } from '../(components)/Footer'

export default function layout() {
  return (
    <div>
        <Navbar/>
        <Team/>
        <Footer />
    </div>
  )
}
