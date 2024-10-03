import React from 'react';

const ServiceCard = ({ title, items, imageSrc }) => (
  <div className="bg-grayscale-200 p-6 rounded-lg overflow-hidden">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
    <h2 className="text-2xl font-semibold text-grayscale-800 mb-4">{title}</h2>
    <ul className="list-disc list-inside space-y-2 text-grayscale-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Tjanster = () => {
  const services = [
    {
      title: "Videoproduktion",
      items: ["Musikvideor", "Reklamfilmer", "Företagspresentationer", "Eventdokumentation"],
      imageSrc: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Fotografi",
      items: ["Porträttfotografering", "Produktfotografering", "Evenemangsfotografering", "Landskapsfotografering"],
      imageSrc: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-grayscale-900 mb-8">Våra Tjänster</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <p className="mt-8 text-lg text-grayscale-800">
        Oavsett ditt projekt, är vi här för att hjälpa dig att förverkliga din vision. Kontakta oss för att diskutera dina idéer och få ett skräddarsytt erbjudande.
      </p>
    </div>
  );
};

export default Tjanster;