"use client"

import Navbar from 'app/(components)/Navbar'
import {Footer} from '../(components)/Footer'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <div className="h-screen flex justify-center align-center">
            Project page
        </div>
        <Footer />
    </div>
  )
}
