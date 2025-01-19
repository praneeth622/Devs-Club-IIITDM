import localFont from "next/font/local";
import { Providers } from "./providers";
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
  title: 'Developer Club | IIITDM Kancheepuram',
  description: 'Developer Club at IIITDM Kancheepuram. Engage in workshops, hackathons, and networking opportunities to enhance your coding skills and connect with tech enthusiasts in a vibrant community.',
  openGraph: {
    title: 'Developer Club | IIITDM Kancheepuram',
    description: 'Developer Club at IIITDM Kancheepuram. Engage in workshops, hackathons, and networking opportunities to enhance your coding skills and connect with tech enthusiasts in a vibrant community.',
    url: 'https://devclub.iiitdm.ac.in',
    images: [
      {
        url: '/assets/image.png',
        width: 1200,
        height: 630,
        alt: 'Developer Club IIITDM Logo'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@devclubiiitdm',
    creator: '@devclubiiitdm'
  },
  icons: {
    icon: '/assets/image.png',
    shortcut: '/assets/image.png',
    apple: '/assets/image.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Create the JSON-LD data outside the component
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Developer Club IIITDM",
  "url": "https://devclub.iiitdm.ac.in",
  "logo": "/assets/image.png",
  "sameAs": [
    "https://twitter.com/devclubiiitdm",
    "https://github.com/devs-club",
    "https://linkedin.com/company/devs-club-iiitdm"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "devclub@iiitdm.ac.in",
    "contactType": "customer support"
  }
};

export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
    <head>
          {/* SEO Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content="Developer Club, Devs Club, Computer, IIITDM Kancheepuram, coding, programming, tech community, workshops, hackathons, Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram" />
          
          {/* Open Graph Tags */}
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:site_name" content={metadata.openGraph.siteName} />
          <meta property="og:locale" content={metadata.openGraph.locale} />
          <meta property="og:type" content={metadata.openGraph.type} />
          <meta property="og:image" content={metadata.openGraph.images[0].url} />
          <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
          <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
          <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
          
          {/* Twitter Card Tags */}
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="twitter:site" content={metadata.twitter.site} />
          <meta name="twitter:creator" content={metadata.twitter.creator} />
          <meta name="twitter:title" content={metadata.openGraph.title} />
          <meta name="twitter:description" content={metadata.openGraph.description} />
          <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
          
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          
          {/* Favicon */}
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/image.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/image.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/image.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        {children}
        </Providers>
      </body>
      <Analytics/>
    </html>
    </ClerkProvider>
  );
}
