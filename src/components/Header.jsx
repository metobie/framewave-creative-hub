import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Camera, Image, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-grayscale-900 shadow-md relative z-50">
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
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-grayscale-800 bg-opacity-90 absolute top-full left-0 right-0 z-50">
          <Link to="/" className="block py-2 px-4 text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center" onClick={closeMenu}>
            <Home className="w-4 h-4 mr-2" />
            Hem
          </Link>
          <Link to="/tjanster" className="block py-2 px-4 text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center" onClick={closeMenu}>
            <Camera className="w-4 h-4 mr-2" />
            Tjänster
          </Link>
          <Link to="/portfolio" className="block py-2 px-4 text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center" onClick={closeMenu}>
            <Image className="w-4 h-4 mr-2" />
            Portfolio
          </Link>
          <Link to="/kontakt" className="block py-2 px-4 text-grayscale-100 hover:text-grayscale-300 transition-colors font-sans font-medium flex items-center" onClick={closeMenu}>
            <Phone className="w-4 h-4 mr-2" />
            Kontakt
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;