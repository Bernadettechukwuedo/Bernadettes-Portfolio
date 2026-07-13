import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0D1117] flex items-center justify-center p-6"
    >
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-[#ffffff] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#F4F7F6] mb-4">
          Lost in space?
        </h2>
        <p className="text-[#A0A0A0] mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link 
            to="/" 
            className="px-8 py-3 bg-[#4A79E7] hover:bg-[#3359b0] text-white font-bold rounded-full transition-all duration-300"
          >
            Return Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 border border-[#4A79E7] text-[#4A79E7] hover:bg-[#4A79E7] hover:text-white font-bold rounded-full transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default NotFound;