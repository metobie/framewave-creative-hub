import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Camera, Image, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-framewave-darkblue shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://i.imgur.com/05v2X8s.jpeg" alt="Frame Wave Logo" className="h-10 w-auto" />
          <span className="ml-2 text-2xl font-bold text-white font-heading">Frame Wave</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-framewave-paleblue transition-colors font-sans font-medium flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Hem
          </Link>
          <Link to="/tjanster" className="text-white hover:text-framewave-paleblue transition-colors font-sans font-medium flex items-center">
            <Camera className="w-4 h-4 mr-2" />
            Tjänster
          </Link>
          <Link to="/portfolio" className="text-white hover:text-framewave-paleblue transition-colors font-sans font-medium flex items-center">
            <Image className="w-4 h-4 mr-2" />
            Portfolio
          </Link>
          <Link to="/kontakt" className="text-white hover:text-framewave-paleblue transition-colors font-sans font-medium flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Kontakt
          </Link>
        </nav>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-framewave-blue px-4 py-2">
          <Link to="/" className="block py-2 text-white hover:text-framewave-paleblue transition-colors font-sans font-medium flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Hem
          </Link>
          <Link to="/tjanster" className="block py-2 text-white hover:text-framewave-paleblue transition-colors font-sans font-medium flex items-center">
            <Camera className="w-4 h-4 mr-2" />
            Tjänster
          </Link>
          <Link to="/portfolio" className="block py-2 text-white hover:text-framewave-paleblue transition-colors font-sans font-medium flex items-center">
            <Image className="w-4 h-4 mr-2" />
            Portfolio
          </Link>
          <Link to="/kontakt" className="block py-2 text-white hover:text-framewave-paleblue transition-colors font-sans font-medium flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Kontakt
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;