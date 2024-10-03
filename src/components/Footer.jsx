import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-grayscale-900 text-grayscale-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center md:justify-start">
            <img src="https://i.imgur.com/lDDsyFo.png" alt="Frame Wave Logo" className="h-12 w-auto" />
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Kontakta oss</h3>
            <p>Telefon: +46 73-502 46 07</p>
            <p>E-post: hej@framewave.se</p>
            <p>Kristianstad, Sverige</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy; 2024 Frame Wave. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;