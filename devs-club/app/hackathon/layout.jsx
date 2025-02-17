"use client"
import React from 'react'
import HackathonList from './page'
import Navbar from '../(components)/Navbar';
import { Footer } from '../(components)/Footer'
import Providers from '../providers'

export default function Layout() {
  return (
    <Providers>
      <div>
        <Navbar />
        <HackathonList />
        <Footer />
      </div>
    </Providers>
  )
}
