import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, title: 'Musikvideo - "Sommardrömmar"', type: 'Video', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 2, title: 'Produktfotografering - Eco Fashion', type: 'Foto', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 3, title: 'Reklamfilm - "Framtidens Teknik"', type: 'Video', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 4, title: 'Porträttserie - "Stadens Hjältar"', type: 'Foto', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 5, title: 'Eventdokumentation - Kristianstad Kulturnatt', type: 'Video & Foto', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 6, title: 'Naturfilm - "Skånska Pärlor"', type: 'Video', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-grayscale-900 mb-8"
      >
        Vår Portfolio
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-grayscale-100 rounded-lg shadow-md overflow-hidden"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-grayscale-800 mb-2">{item.title}</h3>
              <p className="text-grayscale-600">{item.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;