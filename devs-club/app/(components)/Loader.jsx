// Loader.js
import React from 'react';
import { Loader as LoaderIcon } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <LoaderIcon className="w-16 h-16 text-blue-500 animate-spin" />
    </div>
  );
};

export default Loader; // Ensure this line is present
