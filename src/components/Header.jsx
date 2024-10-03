import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Camera, Image, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { to: "/", text: "Hem", icon: <Home className="w-4 h-4 mr-2" /> },
    { to: "/tjanster", text: "Tjänster", icon: <Camera className="w-4 h-4 mr-2" /> },
    { to: "/portfolio", text: "Portfolio", icon: <Image className="w-4 h-4 mr-2" /> },
    { to: "/kontakt", text: "Kontakt", icon: <Phone className="w-4 h-4 mr-2" /> },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://i.imgur.com/05v2X8s.jpeg" alt="Frame Wave Logo" className="h-10 w-auto" />
          <span className="ml-2 text-2xl font-bold text-framewave-darkblue">Frame Wave</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center text-framewave-blue hover:text-framewave-darkblue transition-colors"
            >
              {item.icon}
              {item.text}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center py-2 text-framewave-blue hover:text-framewave-darkblue transition-colors"
            >
              {item.icon}
              {item.text}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;