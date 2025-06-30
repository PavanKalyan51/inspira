import React, { useState } from 'react';
import { Home, Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <Home size={24} className="text-[#4A2C3A]" />
              <div className="text-lg font-bold">
                <span className="bg-gradient-to-r from-[#4A2C3A] to-[#E2574C] bg-clip-text text-transparent font-bold">
                  Inspira
                </span>
                <span className="text-[#4A2C3A] ml-1 font-light">Interiors</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-[#E2574C] font-semibold' 
                  : 'text-gray-700 hover:text-[#4A2C3A]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/interiors" 
              className={`transition-colors duration-200 ${
                isActive('/interiors') 
                  ? 'text-[#E2574C] font-semibold' 
                  : 'text-gray-700 hover:text-[#4A2C3A]'
              }`}
            >
              Interiors
            </Link>
            <Link 
              to="/design-ideas" 
              className={`transition-colors duration-200 ${
                isActive('/design-ideas') 
                  ? 'text-[#E2574C] font-semibold' 
                  : 'text-gray-700 hover:text-[#4A2C3A]'
              }`}
            >
              Design Ideas
            </Link>
            <Link 
              to="/magazine" 
              className={`transition-colors duration-200 ${
                isActive('/magazine') 
                  ? 'text-[#E2574C] font-semibold' 
                  : 'text-gray-700 hover:text-[#4A2C3A]'
              }`}
            >
              Magazine
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-[#E2574C] font-semibold' 
                  : 'text-gray-700 hover:text-[#4A2C3A]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right side - CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Call Button */}
            <a 
              href="tel:+916309123731"
              className="bg-[#E2574C] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base"
            >
              <Phone size={14} className="sm:hidden" />
              <Phone size={16} className="hidden sm:block" />
              <span className="hidden xs:inline sm:hidden">Call</span>
              <span className="hidden sm:inline">CONSULT NOW</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-[#4A2C3A] hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/')
                    ? 'text-[#E2574C] bg-gray-50'
                    : 'text-gray-700 hover:text-[#4A2C3A] hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/interiors"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/interiors')
                    ? 'text-[#E2574C] bg-gray-50'
                    : 'text-gray-700 hover:text-[#4A2C3A] hover:bg-gray-50'
                }`}
              >
                Interiors
              </Link>
              <Link
                to="/design-ideas"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/design-ideas')
                    ? 'text-[#E2574C] bg-gray-50'
                    : 'text-gray-700 hover:text-[#4A2C3A] hover:bg-gray-50'
                }`}
              >
                Design Ideas
              </Link>
              <Link
                to="/magazine"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/magazine')
                    ? 'text-[#E2574C] bg-gray-50'
                    : 'text-gray-700 hover:text-[#4A2C3A] hover:bg-gray-50'
                }`}
              >
                Magazine
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/contact')
                    ? 'text-[#E2574C] bg-gray-50'
                    : 'text-gray-700 hover:text-[#4A2C3A] hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;