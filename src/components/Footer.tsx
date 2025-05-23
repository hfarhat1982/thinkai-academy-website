import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex items-center">
                <Brain className="h-6 w-6 text-blue-400 absolute" />
                <Sparkles className="h-8 w-8 text-purple-400 opacity-75" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">ThinkAI Academy</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Des formations en Intelligence Artificielle pour tous les niveaux, 
              du débutant à l'expert.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Nos formations</h3>
            <ul className="space-y-2">
              <li><Link to="/formations-courtes" className="text-gray-400 hover:text-white transition duration-300">Comparatif de Formation</Link></li>
              <li><Link to="/parcours-qualiopi" className="text-gray-400 hover:text-white transition duration-300">Nos Parcours IA</Link></li>
              <li><Link to="/outils-ia" className="text-gray-400 hover:text-white transition duration-300">Outils IA & Tendances</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><Link to="/qualiopi" className="text-gray-400 hover:text-white transition duration-300">Certification Qualiopi</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">CGV</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:contact@thinkai-academy.fr" className="text-gray-400 hover:text-white transition duration-300">contact@thinkai-academy.fr</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">75008 Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ThinkAI Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;