import React from 'react';
import { CheckCircle, Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          
          <h1 className="text-4xl font-bold text-[#4A2C3A] mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your message has been successfully submitted. Our team will get back to you within 24 hours 
            to discuss your interior design requirements.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#4A2C3A] mb-3">
              What happens next?
            </h3>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Our design consultant will call you within 24 hours</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>We'll schedule a free consultation at your convenience</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Get a personalized design proposal for your space</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-[#E2574C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Home size={20} />
              <span>Back to Home</span>
            </Link>
            
            <a
              href="tel:+916309123731"
              className="bg-white text-[#4A2C3A] border-2 border-[#4A2C3A] px-8 py-3 rounded-lg font-semibold hover:bg-[#4A2C3A] hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Us Now</span>
            </a>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need immediate assistance? Call us at{' '}
              <a href="tel:+916309123731" className="text-[#E2574C] hover:underline">
                +91 6309123731
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;