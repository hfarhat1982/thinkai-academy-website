import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Parcours IA', path: '/parcours-qualiopi' },
    { name: 'Outils IA & Tendances', path: '/outils-ia' },
    { name: 'Qualiopi & Engagements', path: '/qualiopi' },
    { name: 'Comparatif de Formation', path: '/formations-courtes' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <div className="relative flex items-center">
                <Brain className="h-8 w-8 text-blue-400 absolute transform group-hover:scale-105 transition-all duration-300" />
                <Sparkles className="h-10 w-10 text-purple-400 opacity-75 animate-pulse group-hover:text-purple-300 transition-colors duration-300" />
                <div className="absolute -inset-1 bg-white rounded-full blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ThinkAI Academy
                </span>
                <span className="text-xs text-blue-200 tracking-wider">Excellence en Formation IA</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-all duration-300"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;