'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function Unauthorized() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div 
        className={`text-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <AlertCircle className="w-16 h-16 text-blue-700 mb-6 mx-auto" />
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Access Denied
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, but you don't have permission to access this page.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-700 rounded transition duration-300 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Return to Home
        </Link>
      </div>
      <p className="mt-12 text-sm text-gray-500">
        If you believe this is an error, please contact the administrator.
      </p>
    </div>
  )
}

