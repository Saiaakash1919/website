import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-[100%]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0">SIO</div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mb-4 md:mb-0">
          <a href="#about" className="hover:text-gray-400 transition">About Us</a>
          <a href="#services" className="hover:text-gray-400 transition">Services</a>
          <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} SIO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
