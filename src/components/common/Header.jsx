import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-[#ececec] h-[110px] w-full">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/images/img_logo_with_name_png_1.png" 
              alt="Sona Travel & Tours Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-[#5f5f5f] text-xl font-semibold">
            Home
          </Link>
          <Link to="/bookings" className="text-[#5f5f5f] text-xl font-semibold">
            Bokings
          </Link>
          <Link to="/live-track" className="text-[#5f5f5f] text-xl font-semibold">
            Live Track
          </Link>
          <Link to="/faqs" className="text-[#5f5f5f] text-xl font-semibold">
            FAQs
          </Link>
          <Link to="/contact" className="text-[#5f5f5f] text-xl font-semibold">
            Contact Us
          </Link>
          <img 
            src="/images/img_hicon_linear_down_2_gray_700.svg" 
            alt="Down Arrow" 
            className="w-6 h-6"
          />
        </nav>

        <div className="hidden md:block">
          <Button 
            variant="primary" 
            className="bg-[#0a639d] rounded-xl h-[60px] px-4 flex items-center"
          >
            <img 
              src="/images/img_hicon_outline_profile_1.svg" 
              alt="Profile Icon" 
              className="w-6 h-6 mr-2"
            />
            <span className="text-xl font-bold">Sign Up</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-[#5f5f5f] text-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/bookings" 
              className="text-[#5f5f5f] text-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Bokings
            </Link>
            <Link 
              to="/live-track" 
              className="text-[#5f5f5f] text-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Live Track
            </Link>
            <Link 
              to="/faqs" 
              className="text-[#5f5f5f] text-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              to="/contact" 
              className="text-[#5f5f5f] text-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              variant="primary" 
              className="bg-[#0a639d] rounded-xl h-[60px] w-full flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <img 
                src="/images/img_hicon_outline_profile_1.svg" 
                alt="Profile Icon" 
                className="w-6 h-6 mr-2"
              />
              <span className="text-xl font-bold">Sign Up</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;