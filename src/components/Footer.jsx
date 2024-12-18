import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-6 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative lg:flex lg:justify-between lg:items-center lg:space-x-8">
          <div className="backdrop-blur-md bg-white/10 p-3 rounded-full shadow-lg mx-auto lg:mx-0 flex justify-center">
            <img
              src="/public/logo.png"
              alt="Company Logo"
              className="h-16 w-16 object-cover"
            />
          </div>

          <div className="mt-4 lg:mt-0 text-center lg:text-left">
            <h2 className="text-lg font-semibold mb-2">Contáctanos</h2>
            <SocialMedia />
          </div>
        </div>

        <div className="mt-8 lg:mt-6 lg:flex lg:justify-between lg:items-center">
          
          <div className="space-y-2 text-center lg:text-left lg:flex lg:space-y-0 lg:space-x-6">
            <a href="/about" className="block hover:underline text-gray-300 hover:text-white">
              Acerca de Nosotros
            </a>
            <a href="/faqs" className="block hover:underline text-gray-300 hover:text-white">
              Preguntas Frecuentes
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-400 lg:mt-0 text-center lg:text-right">
            &copy; {new Date().getFullYear()} Sky Navigator. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
