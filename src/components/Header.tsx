import React, { useState } from 'react';
import { Menu, X, Star, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="gradient-primary bg-clip-text text-transparent">Cutty Kiddies</span>
              </h1>
              <p className="text-xs text-gray-500">Kids Voting Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Home
            </a>
            <a href="#register" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Register
            </a>
            <a href="#login" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Login
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#leaderboards" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Leaderboards
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Contact
            </a>
            <a href="#help" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Help
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Safe & Secure</span>
            <button className="gradient-primary text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Vote Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Home
            </a>
            <a href="#register" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Register
            </a>
            <a href="#login" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Login
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#leaderboards" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Leaderboards
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Contact
            </a>
            <a href="#help" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Help
            </a>
            <button className="w-full gradient-primary text-white py-3 rounded-full font-semibold">
              Vote Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;