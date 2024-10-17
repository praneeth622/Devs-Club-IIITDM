"use client"
import React from 'react'
import Navbar from '../(components)/Navbar'
import { Footer } from '../(components)/Footer'
import AdminPage from "./(components)/AdminPage"

export default function AdminDashboard() {
  return (
    <div>
        <Navbar/>
        <AdminPage />
        <Footer/>
    </div>
  )
}
