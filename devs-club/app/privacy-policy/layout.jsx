"use client"
import React from 'react'
import Navbar from '../(components)/Navbar'
import PrivacyPolicy from './page'
import { Footer } from '../(components)/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  )
}
