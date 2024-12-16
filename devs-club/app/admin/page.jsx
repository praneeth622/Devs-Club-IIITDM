"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../(components)/Navbar'
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { Footer } from '../(components)/Footer'
import AdminPage from "./(components)/AdminPage"
import { AiOutlineLoading } from 'react-icons/ai'

export default function AdminDashboard() {
  const { user, isSignedIn, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [allowedEmails, setAllowedEmails] = useState([]);

  // const allowedEmails = [
  //   'CS22B1014@iiitdm.ac.in',
  //   'admin2@example.com',
  //   'manager@example.com',
  // ];

  useEffect(() => {
    async function fetchAllowedEmails() {
      try {
        const response = await axios.get('/api/admin');
        const emails = response.data.data.map((admin) => admin.email);
        setAllowedEmails(emails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching allowed emails:", error);
        setLoading(false);
      }
    }
    fetchAllowedEmails();
  }, []);

  useEffect(() => {
    if (isLoaded && (!isSignedIn || !allowedEmails.includes(user?.emailAddresses[0]?.emailAddress) || 'CS22B1014@iiitdm.ac.in')) {
      <Unauthorized />
    }
  }, [isLoaded, isSignedIn, allowedEmails, user]);

  // Show a loading state until `useUser` is fully loaded
  if (loading || !isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen flex-col space-y-4">
        <AiOutlineLoading className="animate-spin text-blue-600" size={40} />
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div>
        <Navbar/>
        <AdminPage />
        <Footer/>
    </div>
  )
}

function Unauthorized() {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <button onClick={() => router.push('/')}>Go Back to Home</button>
    </div>
  );
}