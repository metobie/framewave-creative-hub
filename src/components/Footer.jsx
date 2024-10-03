import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-grayscale-900 text-grayscale-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-6">
          <img src="https://i.imgur.com/lDDsyFo.png" alt="Frame Wave Logo" className="h-12 w-auto mb-4" />
          <h3 className="text-xl font-bold">Kontakta oss</h3>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <p>Telefon: +46 73-502 46 07</p>
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