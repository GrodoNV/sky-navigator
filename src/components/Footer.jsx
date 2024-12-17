import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Sky Navigator. Todos los derechos reservados.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-blue-400">Facebook</a>
          <a href="#" className="mx-2 hover:text-blue-400">Twitter</a>
          <a href="#" className="mx-2 hover:text-blue-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

