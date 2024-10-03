import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Kontakt = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-grayscale-900 bg-opacity-75"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 container mx-auto px-4 py-16"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-grayscale-100 mb-8"
        >
          Kontakta Oss
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-grayscale-100 p-6 rounded-lg"
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
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-grayscale-100 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-grayscale-800 mb-4">Skicka ett meddelande</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-grayscale-700 mb-1">Namn</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-grayscale-300 rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block text-grayscale-700 mb-1">E-post</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-grayscale-300 rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block text-grayscale-700 mb-1">Meddelande</label>
                <textarea id="message" name="message" rows="4" className="w-full p-2 border border-grayscale-300 rounded"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-grayscale-800 hover:bg-grayscale-900 text-grayscale-100 font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Skicka
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Kontakt;