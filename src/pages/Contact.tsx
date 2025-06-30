import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-[#E2574C] hover:text-[#d14337] transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#4A2C3A] leading-tight mb-6">
            Contact
            <span className="text-[#E2574C]"> Us</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get in touch with Inspira Interiors in Hyderabad. We're here to help transform 
            your space with our expert interior design services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-[#4A2C3A] mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-[#E2574C] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <a 
                      href="tel:+916309123731"
                      className="text-gray-600 hover:text-[#E2574C] transition-colors duration-200"
                    >
                      +91 6309123731
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-[#E2574C] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a 
                      href="mailto:info@inspirainteriors.in"
                      className="text-gray-600 hover:text-[#E2574C] transition-colors duration-200"
                    >
                      info@inspirainteriors.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#E2574C] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600 mb-2">
                      F9WP+759, Rd Number 8,<br />
                      IDPL Staff Cooperative Housing Society,<br />
                      Vasanth Nagar, JNTU<br />
                      Hyderabad, Telangana 500085
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      <strong>Landmark:</strong> Near JNTU Metro Station
                    </p>
                    <a
                      href="https://maps.app.goo.gl/3XstcLF6LoTTrCHk7?g_st=ac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-[#E2574C] hover:text-[#d14337] transition-colors duration-200 font-semibold"
                    >
                      <MapPin size={16} />
                      <span>View on Google Maps</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-[#E2574C] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Sunday: 10:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="text-[#E2574C] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/916309123731"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#E2574C] transition-colors duration-200"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold text-[#4A2C3A] mb-2">Coming Soon to Bangalore!</h3>
                <p className="text-gray-600">
                  We're expanding to Bangalore soon. Stay tuned for updates on our new location.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#4A2C3A] mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} name="contact-form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact-form" />
                <input type="hidden" name="bot-field" />
                
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2574C] focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E2574C] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A2C3A] mb-8 text-center">
            Find Us Here
          </h2>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-2">Near JNTU Metro Station</p>
              <p className="text-gray-500 mb-4">Vasanth Nagar, JNTU, Hyderabad</p>
              <a
                href="https://maps.app.goo.gl/3XstcLF6LoTTrCHk7?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E2574C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <MapPin size={16} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#4A2C3A] mb-8">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916309123731"
              className="bg-[#E2574C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/916309123731"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;