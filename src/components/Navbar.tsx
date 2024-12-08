import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ShoppingCart } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-brown-600 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-brown-600 transition-colors">About</Link>
            <Link to="/shop" className="hover:text-brown-600 transition-colors">Shop</Link>
            <a 
              href="https://www.instagram.com/Caldwell.lcco/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brown-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Link to="/cart" className="hover:text-brown-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;