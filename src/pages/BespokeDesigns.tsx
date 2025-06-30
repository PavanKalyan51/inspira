import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Phone, Star, Crown, Palette, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BespokeDesigns: React.FC = () => {
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

  const luxuryFeatures = [
    "One-of-a-kind Custom Designs",
    "Premium Imported Materials",
    "Handcrafted Furniture & Fittings",
    "Personal Design Consultant",
    "Unlimited Design Revisions",
    "White-glove Installation Service",
    "Lifetime Design Support",
    "Exclusive Vinciago Collection"
  ];

  const bespokeServices = [
    {
      title: "Luxury Living Spaces",
      description: "Opulent living rooms with custom furniture and premium finishes",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Custom Sofas & Seating", "Imported Marble & Stone", "Designer Lighting", "Art Curation"]
    },
    {
      title: "Master Suite Design",
      description: "Luxurious bedroom suites with walk-in closets and spa bathrooms",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Custom Wardrobes", "Premium Bedding", "Spa Bathrooms", "Private Lounges"]
    },
    {
      title: "Gourmet Kitchens",
      description: "Chef-quality kitchens with premium appliances and custom cabinetry",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Premium Appliances", "Custom Cabinetry", "Natural Stone Counters", "Wine Storage"]
    },
    {
      title: "Home Offices & Libraries",
      description: "Sophisticated workspaces with custom built-ins and luxury finishes",
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Custom Built-ins", "Premium Wood Finishes", "Integrated Technology", "Reading Nooks"]
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
                <Crown className="text-[#E2574C]" size={32} />
                <span className="text-[#E2574C] font-semibold text-lg">Vinciago Collection</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#4A2C3A] leading-tight mb-6">
                Bespoke
                <span className="text-[#E2574C]"> Luxury Designs</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Luxury custom designs tailored specifically to your taste and lifestyle preferences. 
                Our Vinciago collection represents the pinnacle of bespoke interior design.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">100% Custom Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Premium Materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Personal Design Consultant</span>
                </div>
              </div>
              <a
                href="tel:+916309123731"
                className="bg-[#E2574C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Book Luxury Consultation</span>
              </a>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bespoke Luxury Designs"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features Section */}
      <section className="py-16 bg-[#4A2C3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            The Vinciago Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {luxuryFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white bg-opacity-10 rounded-lg">
                <Crown className="text-[#E2574C] flex-shrink-0" size={20} />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Luxury Design Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {bespokeServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#4A2C3A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Palette className="text-[#E2574C]" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="text-[#E2574C] hover:text-[#d14337] font-semibold flex items-center space-x-1 transition-colors duration-200"
                  >
                    <span>View Portfolio</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Our Bespoke Design Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your lifestyle and preferences" },
              { step: "02", title: "Concept", desc: "Creating initial design concepts and mood boards" },
              { step: "03", title: "Design", desc: "Detailed 3D designs and material selection" },
              { step: "04", title: "Craft", desc: "Handcrafting custom furniture and elements" },
              { step: "05", title: "Install", desc: "White-glove installation and styling" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#E2574C] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-[#4A2C3A] mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#E2574C]">
            <div className="text-center mb-8">
              <Crown className="text-[#E2574C] mx-auto mb-4" size={48} />
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-4">
                Schedule Your Luxury Consultation
              </h2>
              <p className="text-xl text-gray-600">
                Experience the Vinciago difference with a personalized design consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} data-netlify="true" name="bespoke-design-consultation" method="POST">
              <input type="hidden" name="form-name" value="bespoke-design-consultation" />
              
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
                    id="whatsapp-bespoke"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.checked})}
                    className="w-4 h-4 text-[#E2574C] border-gray-300 rounded focus:ring-[#E2574C]"
                  />
                  <label htmlFor="whatsapp-bespoke" className="text-sm text-gray-600">
                    Send updates on WhatsApp
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#E2574C] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center space-x-2"
                >
                  <Crown size={20} />
                  <span>Book Luxury Consultation</span>
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
            Luxury Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  "The Vinciago collection exceeded all our expectations. Every detail was crafted to perfection, 
                  and the personal attention from the design team was exceptional. Our home is now a true masterpiece."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#E2574C] rounded-full flex items-center justify-center">
                    <Crown className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#4A2C3A]">
                      Luxury Client {index + 1}
                    </div>
                    <div className="text-sm text-gray-500">Banjara Hills, Hyderabad</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BespokeDesigns;