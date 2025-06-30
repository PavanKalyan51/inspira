import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create form data for Netlify
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataToSend as any).toString()
    })
    .then(() => {
      // Close modal and redirect to thank you page
      onClose();
      window.location.href = '/thank-you';
    })
    .catch((error) => {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#4A2C3A] mb-2">
            Get Your Free Quote
          </h3>
          <p className="text-gray-600">
            Transform your space with our expert interior designers
          </p>
        </div>

        <form onSubmit={handleSubmit} name="free-quote" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="free-quote" />
          
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
              placeholder="Phone Number"
              required
            />

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={(e) => setFormData({...formData, pincode: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
              placeholder="Pincode"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#E2574C] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200"
            >
              Get Free Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;