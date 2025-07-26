"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MusicSheetGeneration: React.FC = () => {
  return (
    <div className="bg-blue-600 text-yellow-200 min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Music Sheet Generation
      </motion.h1>
      <motion.p
        className="text-lg mb-6 text-center max-w-2xl"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        This is a placeholder page for generating music sheets. You can add more functionality here in the future.
      </motion.p>
      <motion.button
        className="px-6 py-3 bg-yellow-200 text-blue-600 rounded font-medium hover:bg-yellow-100"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Generate Music Sheet
      </motion.button>
    </div>
  );
};

export default MusicSheetGeneration;
