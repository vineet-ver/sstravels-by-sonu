import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, ChevronRight, Smartphone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              Providing premium taxi services with comfort, reliability, and punctuality since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">C/59A, Block-C Ashok Vihar, Phase III Extension, Gurugram-122001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-yellow-500 mr-3 flex-shrink-0" />
                <a href="tel:+918882586447" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  +91 888-258-6447
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-yellow-500 mr-3 flex-shrink-0" />
                <a href="mailto:shuklamrsk682@gmail.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  shuklamrsk682@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">24/7 - Always at your service</span>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Download Our App</h3>
            <p className="text-gray-400 mb-4">
              Get our mobile app for faster bookings, real-time tracking, and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors w-fit">
                <Smartphone size={20} className="mr-3" />
                App Store
              </a>
              <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors w-fit">
                <Smartphone size={20} className="mr-3" />
                Google Play
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SSTravels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;