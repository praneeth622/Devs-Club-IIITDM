import React from 'react'
import { Clock, MapPin, Phone } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 relative group">
          <div className="absolute inset-0 bg-sky-200 transform transition-transform duration-300 ease-in-out group-hover:scale-105"></div>
          <div className="relative z-10 p-6 transition-transform duration-300 ease-in-out transform group-hover:scale-95">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Laptop on a desk with plants and coffee"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 transition-all duration-300 ease-in-out transform hover:translate-x-2">
            Contact Us
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <Clock className="text-sky-500" size={24} />
              <div>
                <h3 className="font-semibold text-gray-700">Office Hours</h3>
                <p className="text-gray-600">Monday-Friday, 9:00 am to 6:00 pm</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <Phone className="text-sky-500" size={24} />
              <div>
                <h3 className="font-semibold text-gray-700">Get In Touch</h3>
                <p className="text-gray-600">+1-555-123-4567</p>
                <p className="text-gray-600">+1-555-765-4321</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <MapPin className="text-sky-500" size={24} />
              <div>
                <h3 className="font-semibold text-gray-700">Office Address</h3>
                <p className="text-gray-600">123 Tech Lane, Innovation City, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}