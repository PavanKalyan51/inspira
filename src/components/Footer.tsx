import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Home, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A2C3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Home size={32} className="text-[#E2574C]" />
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-white to-[#E2574C] bg-clip-text text-transparent font-bold">
                  Inspira
                </span>
                <span className="text-white ml-2 font-light">Interiors</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hyderabad's most trusted interior design brand, transforming homes with premium quality and expert craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/modular-interiors" className="hover:text-white transition-colors duration-200">Modular Interiors</Link></li>
              <li><Link to="/full-home-interiors" className="hover:text-white transition-colors duration-200">Full Home Interiors</Link></li>
              <li><Link to="/bespoke-designs" className="hover:text-white transition-colors duration-200">Bespoke Designs</Link></li>
              <li><Link to="/renovations" className="hover:text-white transition-colors duration-200">Renovations</Link></li>
              <li><Link to="/design-ideas" className="hover:text-white transition-colors duration-200">Design Consultations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link to="/magazine" className="hover:text-white transition-colors duration-200">Magazine</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><span className="text-yellow-400">Coming Soon to Bangalore!</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+916309123731" className="hover:text-white transition-colors duration-200">
                  +91 6309123731
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@inspirainteriors.in" className="hover:text-white transition-colors duration-200">
                  info@inspirainteriors.in
                </a>
              </div>
              <div>
                <p className="font-medium mb-1">WhatsApp</p>
                <a 
                  href="https://wa.me/916309123731" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Chat with us
                </a>
              </div>
              <div>
                <p className="font-medium mb-1">Address</p>
                <p className="text-sm mb-2">
                  F9WP+759, Rd Number 8<br />
                  IDPL Staff Cooperative Housing Society<br />
                  Vasanth Nagar, JNTU<br />
                  Hyderabad - 500085
                </p>
                <a
                  href="https://maps.app.goo.gl/3XstcLF6LoTTrCHk7?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2574C] hover:text-white transition-colors duration-200 text-sm"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Inspira Interiors. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Terms of Service</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;