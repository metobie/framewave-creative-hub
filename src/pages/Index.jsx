import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-framewave-darkblue to-framewave-blue">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
          crossOrigin="anonymous"
        >
          <source src="https://i.imgur.com/vy8lJhG.mp4" type="video/mp4" />
          Din webbläsare stöder inte video-taggen.
        </video>
      </section>

      <section className="py-20 bg-gradient-to-r from-framewave-blue to-framewave-lightblue">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          >
            Vår passion är din vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-framewave-darkblue">Musikvideor</h3>
              <p className="text-framewave-blue">Förvandla din musik till visuella mästerverk som fångar själen i dina toner.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-framewave-darkblue">Reklamfilmer</h3>
              <p className="text-framewave-blue">Skapa berättelser som inte bara säljer, utan också berör och inspirerar din publik.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-framewave-darkblue">Fotosessioner</h3>
              <p className="text-framewave-blue">Fånga ögonblick som talar tusen ord och skapar minnen för livet.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-framewave-lightblue to-framewave-paleblue">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-framewave-darkblue"
          >
            Varför välja Frame Wave?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-framewave-blue">Kreativitet utan gränser</h3>
              <p className="text-framewave-mediumblue">Vi tänker utanför boxen för att skapa något extraordinärt som speglar din unika vision.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-framewave-blue">Passion för perfektion</h3>
              <p className="text-framewave-mediumblue">Varje projekt är en möjlighet att överträffa förväntningar och skapa något minnesvärt.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-framewave-blue">Personlig touch</h3>
              <p className="text-framewave-mediumblue">Vi lyssnar, förstår och omsätter dina idéer till visuella mästerverk som berör.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-framewave-blue">Ung energi, gedigen erfarenhet</h3>
              <p className="text-framewave-mediumblue">Vi kombinerar ungdomlig kreativitet med professionell expertis för att leverera enastående resultat.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-framewave-paleblue to-framewave-lightblue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-framewave-darkblue"
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
              className="bg-framewave-darkblue text-white hover:bg-framewave-blue font-bold py-3 px-8 rounded-full transition-colors duration-300 text-xl inline-block"
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
