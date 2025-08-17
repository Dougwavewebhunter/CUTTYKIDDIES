import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Shield, Lock, Award, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="text-2xl font-bold">
                  <span className="gradient-primary bg-clip-text text-transparent">Cutty Kiddies</span>
                </h3>
                <p className="text-sm text-gray-400">Where Every Kid Shines</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              South Africa's premier children's voting platform, creating safe spaces for kids to showcase their talents and win amazing prizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#register" className="block text-gray-300 hover:text-white transition-colors">Register</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#leaderboards" className="block text-gray-300 hover:text-white transition-colors">Leaderboards</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              <a href="#help" className="block text-gray-300 hover:text-white transition-colors">Help & Support</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contest Rules</a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">Categories</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Girls 0-3 years</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Girls 4-6 years</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Girls 7-10 years</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Boys 0-3 years</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Boys 4-6 years</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Boys 7-10 years</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@cuttykiddies.co.za</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">+27 123 456 789</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-red-400 mr-3" />
                <span className="text-gray-300">Cape Town, South Africa</span>
              </div>
            </div>

            {/* Security Badges */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-sm text-gray-300">GDPR Compliant</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-sm text-gray-300">SSL Encrypted</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm text-gray-300">Child Safe Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 Cutty Kiddies. All rights reserved. | Website designed by <a href="https://www.webdevpro.co.za" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">www.webdevpro.co.za</a> | Call/App: +27 81 215 5979</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Child Safety</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;