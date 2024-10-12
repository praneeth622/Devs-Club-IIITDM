// components/ProtectedRoute.js
"use client"; // For App Router in Next.js

import { useAuth } from "@clerk/nextjs";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoute = (WrappedComponent) => {
  return function ProtectedPage(props) {
    const { isLoaded, isSignedIn } = useAuth(); 
    const router = useRouter();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      if (isLoaded) {
        if (!isSignedIn) {
          router.push("/login"); // Redirect to login if not signed in
        } else {
          setLoading(false); // Stop loading when signed in
        }
      }
    }, [isLoaded, isSignedIn, router]);

    if (loading || !isLoaded) {
      return (
        <div className="flex justify-center items-center h-screen bg-white">
          <LoaderIcon className="w-16 h-16 text-blue-500 animate-spin" />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;
