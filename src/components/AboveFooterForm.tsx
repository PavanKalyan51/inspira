import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const AboveFooterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      await addDoc(collection(db, 'footerFormSubmissions'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      setSubmitMessage('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', message: '' });
      
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-4">
              Get in touch with our Hyderabad team
            </h2>
            <p className="text-xl text-gray-600">
              Have questions about your interior design project? Our local Hyderabad experts are here to help.
            </p>
          </div>

          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg text-sm ${
              submitMessage.includes('error') 
                ? 'bg-red-100 text-red-700 border border-red-200' 
                : 'bg-green-100 text-green-700 border border-green-200'
            }`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
                placeholder="Tell us about your project requirements..."
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#E2574C] text-white py-4 px-12 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center space-x-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                {!isSubmitting && <Send size={20} />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboveFooterForm;