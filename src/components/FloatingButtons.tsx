import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916309123731', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+916309123731';
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col space-y-3 sm:space-y-4">
      {/* WhatsApp Button */}
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={20} className="sm:hidden" />
        <MessageCircle size={24} className="hidden sm:block" />
      </button>

      {/* Call Button */}
      <button 
        onClick={handleCallClick}
        className="bg-[#E2574C] hover:bg-[#d14337] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        aria-label="Call us now"
      >
        <Phone size={20} className="sm:hidden" />
        <Phone size={24} className="hidden sm:block" />
      </button>
    </div>
  );
};

export default FloatingButtons;