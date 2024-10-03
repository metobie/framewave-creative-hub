import React from 'react';

const Tjanster = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-grayscale-900 mb-8">Våra Tjänster</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-grayscale-200 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-grayscale-800 mb-4">Videoproduktion</h2>
          <ul className="list-disc list-inside space-y-2 text-grayscale-700">
            <li>Musikvideor</li>
            <li>Reklamfilmer</li>
            <li>Företagspresentationer</li>
            <li>Eventdokumentation</li>
          </ul>
        </div>
        <div className="bg-grayscale-200 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-grayscale-800 mb-4">Fotografi</h2>
          <ul className="list-disc list-inside space-y-2 text-grayscale-700">
            <li>Porträttfotografering</li>
            <li>Produktfotografering</li>
            <li>Evenemangsfotografering</li>
            <li>Landskapsfotografering</li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-lg text-grayscale-800">
        Oavsett ditt projekt, är vi här för att hjälpa dig att förverkliga din vision. Kontakta oss för att diskutera dina idéer och få ett skräddarsytt erbjudande.
      </p>
    </div>
  );
};

export default Tjanster;