import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Kontakt = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-grayscale-900 bg-opacity-75"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-grayscale-100 mb-8"
        >
          Kontakta Oss
        </motion.h1>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-grayscale-100 p-6 rounded-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-semibold text-grayscale-800 mb-4">Kontaktinformation</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="text-grayscale-700 mr-2" />
              <p className="text-grayscale-800">+46 73-502 46 07</p>
            </div>
            <div className="flex items-center">
              <Mail className="text-grayscale-700 mr-2" />
              <p className="text-grayscale-800">info@framewave.se</p>
            </div>
            <div className="flex items-center">
              <MapPin className="text-grayscale-700 mr-2" />
              <p className="text-grayscale-800">Kristianstad, Sverige</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Kontakt;