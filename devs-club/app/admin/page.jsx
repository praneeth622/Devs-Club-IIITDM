"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../(components)/Navbar'
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { Footer } from '../(components)/Footer'
import AdminPage from "./(components)/AdminPage"

export default function AdminDashboard() {
  const { user, isSignedIn, isLoaded } = useUser();
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
      } catch (error) {
        console.error("Error fetching allowed emails:", error);
      }
    }
    fetchAllowedEmails();
  }, []);

  // useEffect(() => {
  //   if (isLoaded && (!isSignedIn || !allowedEmails.includes(user?.emailAddresses[0]?.emailAddress) || 'CS22B1014@iiitdm.ac.in')) {
  //     router.push('/unauthorized');
  //   }
  // }, [isLoaded, isSignedIn, allowedEmails, user]);

  // Show a loading state until `useUser` is fully loaded
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
        <Navbar/>
        <AdminPage />
        <Footer/>
    </div>
  )
}

export function Unauthorized() {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <button onClick={() => router.push('/')}>Go Back to Home</button>
    </div>
  );
}