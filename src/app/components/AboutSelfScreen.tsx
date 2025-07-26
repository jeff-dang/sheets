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

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1, // Delay to start after the title animation finishes
        staggerChildren: 0.2, // Adjusted to match the duration of other components
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-blue-600 text-yellow-200 min-h-screen flex flex-col items-center justify-center p-8">
      {/* Title */}
      <motion.h1
        className="text-3xl font-poppins font-bold mb-4"
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {dropdownTitles.map((title, index) => (
          <motion.div key={index} className="flex flex-col items-start" variants={itemVariants}>
            <label className="block mb-2 font-lora font-medium text-left w-full max-w-[12rem] whitespace-normal break-words">
              {title}
            </label>
            <select className="w-full px-4 py-2 rounded bg-white text-blue-600 font-lora focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option value="">Select an option</option>
              {/* Add more options as needed */}
            </select>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutSelfScreen;
