import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      await addDoc(collection(db, 'heroFormSubmissions'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      setSubmitMessage('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', whatsapp: false });
      
      // Redirect to thank you page after a short delay
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Banner Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Discover Hyderabad's Most
                <span className="text-[#E2574C] block"> Luxurious Interiors</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-gray-100">
                Bespoke Designs Crafted for You
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                Transform your space with Hyderabad's most trusted interior design brand. 
                Get personalized designs, premium materials, and expert craftsmanship from Inspira Interiors.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-gray-200 text-sm sm:text-base">45-day delivery guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-gray-200 text-sm sm:text-base">10-year warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-gray-200 text-sm sm:text-base">Free consultation</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="order-1 lg:order-2 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-white border-opacity-20">
              <h3 className="text-xl sm:text-2xl font-bold text-[#4A2C3A] mb-4 sm:mb-6">Schedule Your Visit</h3>
              
              {submitMessage && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${
                  submitMessage.includes('error') 
                    ? 'bg-red-100 text-red-700 border border-red-200' 
                    : 'bg-green-100 text-green-700 border border-green-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                    <label htmlFor="whatsapp" className="text-sm text-gray-600">
                      Send updates on WhatsApp
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E2574C] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center justify-center space-x-2 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Next'}</span>
                    {!isSubmitting && <ArrowRight size={20} />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;