"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SamplePreview: React.FC = () => {
  return (
    <div className="bg-blue-600 text-yellow-200 min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h1
        className="text-3xl font-poppins font-bold mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Check out this sample:
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Preview Section */}
        <div className="flex-1 bg-blue-700 p-6 rounded shadow-md">
          <p className="text-lg text-center">[Page Preview Placeholder]</p>
        </div>

        {/* Textbox Section */}
        <div className="flex-1 flex flex-col items-start">
          <label className="block mb-2 font-lora font-medium">Is there anything you'd like to change?</label>
          <textarea
            className="w-full px-4 py-2 rounded bg-white text-blue-600 font-lora focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your feedback here..."
          ></textarea>
        </div>
      </motion.div>
    </div>
  );
};

export default SamplePreview;
