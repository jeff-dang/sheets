"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutSelfScreen: React.FC = () => {
  const dropdownTitles = [
    "Where are you in your learning journey?",
    "What instruments are you interested in?",
    "What mediums are you interested in?",
    "What's your connection with music?",
    "What music styles are you interested in?",
    "What tools are you interested in?",
  ];

  return (
    <div className="bg-blue-600 text-yellow-200 min-h-screen flex flex-col items-center justify-center p-8">
      {/* Title */}
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Tell Us More About Yourself
      </motion.h1>

      {/* Dropdown Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {dropdownTitles.map((title, index) => (
          <div key={index} className="flex flex-col items-start">
            <label className="mb-2 font-medium text-left w-full max-w-[12rem] whitespace-normal break-words">
              {title}
            </label>
            <select className="px-4 py-2 rounded bg-white text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full">
              <option value="">Select an option</option>
              {/* Add more options as needed */}
            </select>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutSelfScreen;
