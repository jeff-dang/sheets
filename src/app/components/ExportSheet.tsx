"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ExportSheet: React.FC = () => {
  return (
    <div className="bg-blue-600 text-yellow-200 min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h1
        className="text-3xl font-poppins font-bold mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Export Your Music Sheet
      </motion.h1>

      {/* Dropdown Section */}
      <motion.div
        className="w-full max-w-2xl mb-6"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <label className="block mb-2 font-lora font-medium">How would you like to save this file?</label>
        <select className="w-full px-4 py-2 rounded bg-white text-blue-600 font-lora focus:outline-none focus:ring-2 focus:ring-blue-300">
          <option value="">Select an option</option>
          <option value="pdf">PDF</option>
          <option value="png">PNG</option>
          <option value="midi">MIDI</option>
          <option value="xml">MusicXML</option>
          <option value="mp3">MP3</option>
        </select>
      </motion.div>

      {/* Export Icons Section */}
      <motion.div
        className="w-full max-w-2xl mb-6"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <label className="block mb-4 font-lora font-medium">Where do we export this to?</label>
        <div className="grid grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-blue-700 rounded flex items-center justify-center shadow-md"
            >
              <p className="text-white font-lora">Icon {index + 1}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Proceed Button */}
      <motion.button
        className="mt-6 px-6 py-3 bg-yellow-200 text-blue-600 rounded font-medium hover:bg-yellow-100 self-end mr-100"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Proceed
      </motion.button>
    </div>
  );
};

export default ExportSheet;
