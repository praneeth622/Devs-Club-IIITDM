"use client"
import { Footer } from '../(components)/Footer'
import Navbar from '../(components)/Navbar'
import TeamMemberList from './(components)/TeamMemberList'

const teamMembers = [
  {
    name: "Praneeth Devarasetty",
    role: "Lead Developer",
    description: "John leads the development team with expertise in React, Node.js, and cloud technologies.",
    photo: "/assets/CS22B1014.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  },
  {
    name: "Surya Srirama Murthy",
    role: "UI/UX Designer",
    description: "Jane is responsible for creating the user interface and experience, focusing on user-centered design principles.",
    photo: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/janesmith",
    github: "https://github.com/janesmith",
  },
  {
    name: "Dharshan Karthikeya ",
    role: "Frontend Developer",
    description: "Mike specializes in creating responsive and accessible web interfaces using modern frontend technologies.",
    photo: "",
    linkedin: "https://linkedin.com/in/mikejohnson",
    github: "https://github.com/mikejohnson",
  },
  {
    name: "Chaitayna Reddy",
    role: "Backend Developer",
    description: "Emily is an expert in server-side programming, database management, and API development.",
    photo: "/assets/CS22B1052.jpg",
    linkedin: "https://linkedin.com/in/emilybrown",
    github: "https://github.com/emilybrown",
  }
]



export default function WebTeamCredits() {
  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-white text-black">
      <div className="py-12 text-center bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4 animate-fade-in-down">
          Meet Our Web Team
        </h1>
        <p className="text-xl max-w-2xl mx-auto animate-fade-in">
          Our talented team of developers and designers work together to create amazing web experiences.
        </p>
      </div>
      <div className="py-16">
        <TeamMemberList members={teamMembers} />
      </div>
      
    </div>
    <Footer />
    </div>
  )
}

