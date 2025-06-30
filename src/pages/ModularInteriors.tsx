import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Phone, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModularInteriors: React.FC = () => {
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

  const features = [
    "Quick Installation (15-30 days)",
    "Cost Effective Solutions",
    "Fully Customizable Designs",
    "10-Year Warranty",
    "Premium Quality Materials",
    "Space Optimization",
    "Modern Hardware & Fittings",
    "Professional Installation"
  ];

  const modules = [
    {
      title: "Modular Kitchen",
      description: "Smart kitchen solutions with premium finishes and optimal storage",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Starting from ₹1,50,000"
    },
    {
      title: "Modular Wardrobes",
      description: "Organized storage solutions with sliding doors and accessories",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Starting from ₹80,000"
    },
    {
      title: "TV Units & Entertainment",
      description: "Stylish entertainment centers with cable management",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Starting from ₹45,000"
    },
    {
      title: "Study Tables & Storage",
      description: "Productive workspace solutions for home offices",
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Starting from ₹35,000"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/interiors"
            className="inline-flex items-center space-x-2 text-[#E2574C] hover:text-[#d14337] transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Interiors</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#4A2C3A] leading-tight mb-6">
                Modular
                <span className="text-[#E2574C]"> Interiors</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Smart, space-efficient solutions for modern living. Our modular interiors combine 
                functionality with style, offering quick installation and complete customization.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">15-30 day delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">10-year warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Free design consultation</span>
                </div>
              </div>
              <a
                href="tel:+916309123731"
                className="bg-[#E2574C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Schedule Free Consultation</span>
              </a>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modular Interiors"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Why Choose Modular Interiors?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Our Modular Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#4A2C3A] mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#E2574C] font-bold text-lg">{module.price}</span>
                    <Link
                      to="/contact"
                      className="bg-[#E2574C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-4">
                Get Your Modular Interior Quote
              </h2>
              <p className="text-xl text-gray-600">
                Schedule a free consultation with our modular interior experts in Hyderabad.
              </p>
            </div>

            <form onSubmit={handleSubmit} data-netlify="true" name="modular-interior-consultation" method="POST">
              <input type="hidden" name="form-name" value="modular-interior-consultation" />
              
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
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="whatsapp-modular"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.checked})}
                    className="w-4 h-4 text-[#E2574C] border-gray-300 rounded focus:ring-[#E2574C]"
                  />
                  <label htmlFor="whatsapp-modular" className="text-sm text-gray-600">
                    Send updates on WhatsApp
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#E2574C] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent modular kitchen design and installation. The team was professional 
                  and completed the work within the promised timeline."
                </p>
                <div className="font-semibold text-[#4A2C3A]">
                  Customer {index + 1}
                </div>
                <div className="text-sm text-gray-500">Hyderabad</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModularInteriors;