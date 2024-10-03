import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="bg-grayscale-900">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <img 
              src="https://i.imgur.com/g8zXRwo.png" 
              alt="Frame Wave Logo" 
              className="mx-auto h-36 md:h-48"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-grayscale-200 mb-8"
          >
            Skapa känslor genom bild
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/kontakt"
              className="bg-grayscale-100 text-grayscale-900 hover:bg-grayscale-200 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-xl inline-block"
            >
              Kontakta oss
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-grayscale-100 w-12 h-12 animate-bounce" />
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-r from-grayscale-800 to-grayscale-700">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-grayscale-100 font-heading"
          >
            Vår passion är din vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-grayscale-100 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-grayscale-900 font-heading">Professionell Videoproduktion</h3>
              <p className="text-grayscale-800 font-sans">Från koncept till färdig produkt, vi skapar högkvalitativa videor som fångar din vision och engagerar din målgrupp.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-grayscale-100 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-grayscale-900 font-heading">Kreativ Fotografering</h3>
              <p className="text-grayscale-800 font-sans">Vi levererar skarpa, uttrycksfulla bilder som berättar din historia och framhäver ditt varumärke på ett unikt sätt.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-grayscale-100 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-grayscale-900 font-heading">Skräddarsydda Lösningar</h3>
              <p className="text-grayscale-800 font-sans">Vi anpassar våra tjänster efter dina specifika behov, oavsett om det gäller företagspresentationer, event eller marknadsföringskampanjer.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-grayscale-700 to-grayscale-600">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-grayscale-100 font-heading"
          >
            Varför välja Frame Wave?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-grayscale-100 p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-grayscale-800 font-heading">Kreativitet utan gränser</h3>
              <p className="text-grayscale-700 font-sans">Vi tänker utanför boxen för att skapa något extraordinärt som speglar din unika vision.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-grayscale-100 p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-grayscale-800 font-heading">Passion för perfektion</h3>
              <p className="text-grayscale-700 font-sans">Varje projekt är en möjlighet att överträffa förväntningar och skapa något minnesvärt.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-grayscale-100 p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-grayscale-800 font-heading">Personlig touch</h3>
              <p className="text-grayscale-700 font-sans">Vi lyssnar, förstår och omsätter dina idéer till visuella mästerverk som berör.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-grayscale-100 p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-grayscale-800 font-heading">Ung energi, gedigen erfarenhet</h3>
              <p className="text-grayscale-700 font-sans">Vi kombinerar ungdomlig kreativitet med professionell expertis för att leverera enastående resultat.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-grayscale-600 to-grayscale-700 text-grayscale-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-grayscale-100 font-heading"
          >
            Redo att skapa magi tillsammans?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/kontakt"
              className="bg-grayscale-900 text-grayscale-100 hover:bg-grayscale-800 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-xl inline-block font-sans"
            >
              Låt oss börja vår resa
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;