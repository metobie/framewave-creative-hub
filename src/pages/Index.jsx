import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
          crossOrigin="anonymous"
        >
          <source src="https://i.imgur.com/vy8lJhG.mp4" type="video/mp4" />
          Din webbläsare stöder inte video-taggen.
        </video>
        <div className="z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Frame Wave
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Fånga ögonblick, skapa känslor
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/kontakt"
              className="bg-framewave-blue hover:bg-framewave-darkblue text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Boka nu
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-framewave-paleblue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-framewave-darkblue">
            Våra tjänster
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-framewave-blue">Musikvideor</h3>
              <p>Skapa visuellt slående musikvideor som fångar essensen i din musik.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-framewave-blue">Reklamfilmer</h3>
              <p>Producera övertygande reklamfilmer som engagerar din målgrupp och ökar varumärkeskännedomen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-framewave-blue">Fotosessioner</h3>
              <p>Fånga ögonblick och skapa minnen med våra professionella fotosessioner.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-framewave-darkblue">
            Varför välja Frame Wave?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-framewave-blue">Ung och erfaren</h3>
              <p>Vi kombinerar ungdomlig energi med gedigen erfarenhet för att skapa unika och innovativa projekt.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-framewave-blue">Personlig touch</h3>
              <p>Varje projekt är unikt, och vi lägger stor vikt vid att förstå dina visioner och mål.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-framewave-blue">Moderna tekniker</h3>
              <p>Vi använder de senaste teknikerna och utrustningen för att leverera högkvalitativt innehåll.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-framewave-blue">Kreativitet utan gränser</h3>
              <p>Vår passion för kreativitet driver oss att tänka utanför boxen och skapa något extraordinärt.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-framewave-lightblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Redo att skapa något fantastiskt?</h2>
          <Link
            to="/kontakt"
            className="bg-white text-framewave-darkblue hover:bg-framewave-paleblue font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Kontakta oss idag
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;