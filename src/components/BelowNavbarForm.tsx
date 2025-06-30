import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BelowNavbarForm: React.FC = () => {
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
    <section className="bg-[#4A2C3A] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#4A2C3A] mb-3 sm:mb-4">
                Request Consultation
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Get expert advice from our Hyderabad design team. Schedule your free consultation today.
              </p>
            </div>
            <form onSubmit={handleSubmit} name="request-consultation" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="request-consultation" />
              
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="whatsapp-consultation"
                      name="whatsapp"
                      checked={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.checked})}
                      className="w-4 h-4 text-[#E2574C] border-gray-300 rounded focus:ring-[#E2574C]"
                    />
                    <label htmlFor="whatsapp-consultation" className="text-xs sm:text-sm text-gray-600">
                      Send updates on WhatsApp
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#E2574C] text-white py-2 px-4 sm:py-3 sm:px-6 lg:px-8 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Submit</span>
                    <ArrowRight size={16} className="sm:hidden" />
                    <ArrowRight size={20} className="hidden sm:block" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelowNavbarForm;