import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: false
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
      // Redirect to thank you page
      window.location.href = '/thank-you';
    })
    .catch((error) => {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#4A2C3A] leading-tight mb-4 sm:mb-6">
              Discover best interior designers in 
              <span className="text-[#E2574C]"> Hyderabad</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Transform your space with Hyderabad's most trusted interior design brand. 
              Get personalized designs, premium materials, and expert craftsmanship from Inspira Interiors.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">45-day delivery guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">10-year warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">Free consultation</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="order-1 lg:order-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#4A2C3A] mb-4 sm:mb-6">Schedule Your Visit</h3>
            <form onSubmit={handleSubmit} name="schedule-visit" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="schedule-visit" />
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200 text-base"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200 text-base"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="whatsapp"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.checked})}
                    className="w-4 h-4 text-[#E2574C] border-gray-300 rounded focus:ring-[#E2574C]"
                  />
                  <label htmlFor="whatsapp" className="text-sm text-gray-600">
                    Send updates on WhatsApp
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E2574C] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center justify-center space-x-2 text-base"
                >
                  <span>Next</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;