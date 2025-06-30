import React from 'react';
import { Phone } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916309123731', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+916309123731';
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col">
      {/* WhatsApp Button */}
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
        style={{ 
          width: '60px', 
          height: '60px',
          borderRadius: '8px 0 0 0'
        }}
        aria-label="Contact us on WhatsApp"
      >
        <img 
          src="/—Pngtree—whatsapp icon whatsapp logo whatsapp_3584845.png" 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </button>

      {/* Call Button */}
      <button 
        onClick={handleCallClick}
        className="bg-[#E2574C] hover:bg-[#d14337] text-white transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
        style={{ 
          width: '60px', 
          height: '60px'
        }}
        aria-label="Call us now"
      >
        <Phone size={24} />
      </button>
    </div>
  );
};

export default FloatingButtons;