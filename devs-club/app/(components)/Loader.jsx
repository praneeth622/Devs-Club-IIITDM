// Loader.js
import React from 'react';
import { Loader as LoaderIcon } from 'lucide-react';

export default function Loader (){
  return (
    <div className="flex justify-center items-center ">
      <LoaderIcon className="w-8 h-8 text-blue-500 animate-spin" />
    </div>
  );
};

