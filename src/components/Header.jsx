import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://i.imgur.com/05v2X8s.jpeg" alt="Frame Wave Logo" className="h-10 w-auto" />
          <span className="ml-2 text-2xl font-bold text-framewave-darkblue">Frame Wave</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-framewave-blue hover:text-framewave-darkblue transition-colors">Hem</Link>
          <Link to="/tjanster" className="text-framewave-blue hover:text-framewave-darkblue transition-colors">Tjänster</Link>
          <Link to="/portfolio" className="text-framewave-blue hover:text-framewave-darkblue transition-colors">Portfolio</Link>
          <Link to="/kontakt" className="text-framewave-blue hover:text-framewave-darkblue transition-colors">Kontakt</Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2">
          <Link to="/" className="block py-2 text-framewave-blue hover:text-framewave-darkblue transition-colors">Hem</Link>
          <Link to="/tjanster" className="block py-2 text-framewave-blue hover:text-framewave-darkblue transition-colors">Tjänster</Link>
          <Link to="/portfolio" className="block py-2 text-framewave-blue hover:text-framewave-darkblue transition-colors">Portfolio</Link>
          <Link to="/kontakt" className="block py-2 text-framewave-blue hover:text-framewave-darkblue transition-colors">Kontakt</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;