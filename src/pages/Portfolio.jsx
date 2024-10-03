import React from 'react';

const Portfolio = () => {
  // Detta är bara exempel-data. I en riktig implementation skulle detta hämtas från en backend eller CMS.
  const portfolioItems = [
    { id: 1, title: 'Musikvideo - "Sommardrömmar"', type: 'Video', image: 'https://picsum.photos/seed/1/400/300' },
    { id: 2, title: 'Produktfotografering - Eco Fashion', type: 'Foto', image: 'https://picsum.photos/seed/2/400/300' },
    { id: 3, title: 'Reklamfilm - "Framtidens Teknik"', type: 'Video', image: 'https://picsum.photos/seed/3/400/300' },
    { id: 4, title: 'Porträttserie - "Stadens Hjältar"', type: 'Foto', image: 'https://picsum.photos/seed/4/400/300' },
    { id: 5, title: 'Eventdokumentation - Kristianstad Kulturnatt', type: 'Video & Foto', image: 'https://picsum.photos/seed/5/400/300' },
    { id: 6, title: 'Naturfilm - "Skånska Pärlor"', type: 'Video', image: 'https://picsum.photos/seed/6/400/300' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-grayscale-900 mb-8">Vår Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-grayscale-100 rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-grayscale-800 mb-2">{item.title}</h3>
              <p className="text-grayscale-600">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;