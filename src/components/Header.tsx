import React, { useState, useEffect } from 'react';
import { MenuIcon, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappNumber = "+918882586447";
    const message = "Hello, I would like to book a taxi.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-yellow-500 font-medium transition-colors">
            Home
          </Link>
          <Link to="/services/taxis" className="text-gray-800 hover:text-yellow-500 font-medium transition-colors">
            Services
          </Link>
          <a href="/#fleet" className="text-gray-800 hover:text-yellow-500 font-medium transition-colors">
            Our Fleet
          </a>
          <a href="/#about" className="text-gray-800 hover:text-yellow-500 font-medium transition-colors">
            About Us
          </a>
          <a href="/#testimonials" className="text-gray-800 hover:text-yellow-500 font-medium transition-colors">
            Testimonials
          </a>
          <a href="/#contact" className="text-gray-800 hover:text-yellow-500 font-medium transition-colors">
            Contact
          </a>
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-600 transition-colors"
          >
            <Phone size={18} className="mr-2" />
            +91 888-258-6447
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/"
              className="text-gray-800 hover:text-yellow-500 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services/taxis"
              className="text-gray-800 hover:text-yellow-500 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <a 
              href="/#fleet" 
              className="text-gray-800 hover:text-yellow-500 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Fleet
            </a>
            <a 
              href="/#about" 
              className="text-gray-800 hover:text-yellow-500 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a 
              href="/#testimonials" 
              className="text-gray-800 hover:text-yellow-500 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="/#contact" 
              className="text-gray-800 hover:text-yellow-500 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-600 transition-colors w-fit"
            >
              <Phone size={18} className="mr-2" />
              +91 888-258-6447
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;