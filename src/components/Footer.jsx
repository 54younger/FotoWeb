
import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com/avokado.foto/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-avocado-end transition-colors">
            <Instagram size={24} />
          </a>
          <a href="mailto:avokado.fotografi@gmail.com" className="text-gray-500 hover:text-avocado-end transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Avokado foto. All rights reserved.
        </p>
        <p className="text-xs mt-1">Capturing moments with a fresh perspective.</p>
      </div>
    </footer>
  );
};

export default Footer;
