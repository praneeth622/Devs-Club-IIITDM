import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Developer Club | IIITDM Kancheepuram",
  description: "Join the Developer Club at IIITDM Kancheepuram: Engage in workshops, hackathons, and networking opportunities to enhance your coding skills and connect with tech enthusiasts in a vibrant community.",
};



export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics/>
    </html>
    </ClerkProvider>
  );
}
