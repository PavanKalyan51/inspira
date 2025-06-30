import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Phone, Star, RefreshCw, Hammer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Renovations: React.FC = () => {
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

  const renovationServices = [
    "Space Optimization & Reconfiguration",
    "Modern Updates & Upgrades",
    "Structural Modifications",
    "Electrical & Plumbing Updates",
    "Flooring & Wall Treatments",
    "Kitchen & Bathroom Renovations",
    "Storage Solutions",
    "Value Addition Services"
  ];

  const renovationTypes = [
    {
      title: "Kitchen Renovation",
      description: "Transform your old kitchen into a modern, functional space",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      timeline: "2-3 weeks",
      features: ["New Cabinets", "Countertop Upgrade", "Modern Appliances", "Lighting Update"]
    },
    {
      title: "Bathroom Makeover",
      description: "Create a spa-like bathroom with modern fixtures and finishes",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
      timeline: "2-3 weeks",
      features: ["Modern Fixtures", "Tile Upgrade", "Storage Solutions", "Lighting Design"]
    },
    {
      title: "Living Room Refresh",
      description: "Update your living space with modern design and functionality",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600",
      timeline: "1-2 weeks",
      features: ["Wall Treatments", "Flooring Update", "Furniture Refresh", "Lighting Design"]
    },
    {
      title: "Bedroom Renovation",
      description: "Create a peaceful retreat with updated design and storage",
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=600",
      timeline: "1-2 weeks",
      features: ["Wardrobe Update", "Flooring Refresh", "Wall Design", "Lighting Upgrade"]
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
              <div className="flex items-center space-x-3 mb-4">
                <RefreshCw className="text-[#E2574C]" size={32} />
                <span className="text-[#E2574C] font-semibold text-lg">Renovation Experts</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#4A2C3A] leading-tight mb-6">
                Home
                <span className="text-[#E2574C]"> Renovations</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Refresh and modernize your existing space with our expert renovation services. 
                Transform your home without the hassle of starting from scratch.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Quick turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Minimal disruption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Value addition</span>
                </div>
              </div>
              <a
                href="tel:+916309123731"
                className="bg-[#E2574C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Get Renovation Quote</span>
              </a>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Home Renovations"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Renovation Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {renovationServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Hammer className="text-[#E2574C] flex-shrink-0" size={20} />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Popular Renovation Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {renovationTypes.map((renovation, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img
                  src={renovation.image}
                  alt={renovation.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#4A2C3A]">
                      {renovation.title}
                    </h3>
                    <span className="bg-[#E2574C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {renovation.timeline}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {renovation.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {renovation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="text-[#E2574C] hover:text-[#d14337] font-semibold flex items-center space-x-1 transition-colors duration-200"
                  >
                    <span>View Before & After</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Our Renovation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Evaluating your current space and requirements" },
              { step: "02", title: "Planning", desc: "Creating renovation plan and timeline" },
              { step: "03", title: "Execution", desc: "Professional renovation with minimal disruption" },
              { step: "04", title: "Completion", desc: "Final inspection and handover" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#E2574C] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[#4A2C3A] mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Before & After Transformations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={`https://images.pexels.com/photos/157146${index + 0}/pexels-photo-157146${index + 0}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                      alt="Before"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={`https://images.pexels.com/photos/157146${index + 2}/pexels-photo-157146${index + 2}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                      alt="After"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#E2574C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4A2C3A] mb-2">
                    Kitchen Renovation Project {index + 1}
                  </h3>
                  <p className="text-gray-600">
                    Complete transformation with modern cabinets, countertops, and lighting.
                  </p>
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
              <RefreshCw className="text-[#E2574C] mx-auto mb-4" size={48} />
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-4">
                Get Your Renovation Quote
              </h2>
              <p className="text-xl text-gray-600">
                Schedule a free assessment and get a detailed renovation quote for your space.
              </p>
            </div>

            <form onSubmit={handleSubmit} data-netlify="true" name="renovation-consultation" method="POST">
              <input type="hidden" name="form-name" value="renovation-consultation" />
              
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
                    id="whatsapp-renovation"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.checked})}
                    className="w-4 h-4 text-[#E2574C] border-gray-300 rounded focus:ring-[#E2574C]"
                  />
                  <label htmlFor="whatsapp-renovation" className="text-sm text-gray-600">
                    Send updates on WhatsApp
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#E2574C] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Get Free Assessment</span>
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
            Renovation Success Stories
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
                  "Our kitchen renovation was completed on time and within budget. The team was professional 
                  and the quality of work was excellent."
                </p>
                <div className="font-semibold text-[#4A2C3A]">
                  Satisfied Customer {index + 1}
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

export default Renovations;