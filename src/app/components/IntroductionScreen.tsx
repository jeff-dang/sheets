"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IntroductionScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-blue-600 text-yellow-200 min-h-screen flex flex-col items-center justify-center relative">
      {/* Top Left Title */}
      <div className="absolute top-4 left-4 text-2xl font-bold">
        Music Sheets
      </div>

      {/* Top Right Login Button */}
      <button className="absolute top-4 right-4 bg-yellow-200 text-blue-600 px-4 py-2 rounded font-medium hover:bg-yellow-100">
        Login
      </button>

      {/* Main Content */}
      <motion.div
        className="text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold mb-6">Hi! What music would you like to prepare today?</h1>
        <input
          type="text"
          placeholder="Enter your music preference"
          className="px-6 py-3 rounded-full text-blue-600 bg-blue-700 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-white border border-white"
        />
      </motion.div>

      {/* Bottom Left Text */}
      <motion.div
        className="absolute bottom-4 left-4 text-white text-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Making music accessible to you
      </motion.div>
    </div>
  );
};

export default IntroductionScreen;
