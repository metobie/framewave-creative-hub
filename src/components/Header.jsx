import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Camera, Image, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-grayscale-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://i.imgur.com/g8zXRwo.png" alt="Frame Wave Logo" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Hem
          </Link>
          <Link to="/tjanster" className="text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center">
            <Camera className="w-4 h-4 mr-2" />
            Tjänster
          </Link>
          <Link to="/portfolio" className="text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center">
            <Image className="w-4 h-4 mr-2" />
            Portfolio
          </Link>
          <Link to="/kontakt" className="text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Kontakt
          </Link>
        </nav>
        <button className="md:hidden text-grayscale-100" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-grayscale-800 px-4 py-2">
          <Link to="/" className="block py-2 text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Hem
          </Link>
          <Link to="/tjanster" className="block py-2 text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center">
            <Camera className="w-4 h-4 mr-2" />
            Tjänster
          </Link>
          <Link to="/portfolio" className="block py-2 text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center">
            <Image className="w-4 h-4 mr-2" />
            Portfolio
          </Link>
          <Link to="/kontakt" className="block py-2 text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Kontakt
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;