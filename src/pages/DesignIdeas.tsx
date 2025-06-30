import React, { useState } from 'react';
import { ArrowRight, Heart, Share2, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignIdeas: React.FC = () => {
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

  const designCategories = [
    {
      title: "Living Room Ideas",
      description: "Create a welcoming space for family and friends",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      ideas: 12,
      link: "/contact"
    },
    {
      title: "Kitchen Designs",
      description: "Modern and functional kitchen solutions",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
      ideas: 18,
      link: "/contact"
    },
    {
      title: "Bedroom Inspirations",
      description: "Peaceful retreats for rest and relaxation",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600",
      ideas: 15,
      link: "/contact"
    },
    {
      title: "Bathroom Makeovers",
      description: "Spa-like experiences in your own home",
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=600",
      ideas: 10,
      link: "/contact"
    },
    {
      title: "Home Office Setup",
      description: "Productive workspaces that inspire creativity",
      image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600",
      ideas: 8,
      link: "/contact"
    },
    {
      title: "Dining Room Elegance",
      description: "Sophisticated spaces for memorable meals",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600",
      ideas: 14,
      link: "/contact"
    }
  ];

  const featuredIdeas = [
    {
      title: "Minimalist Living Room with Natural Light",
      category: "Living Room",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 234,
      description: "Clean lines and natural materials create a serene living space"
    },
    {
      title: "Modern Kitchen with Island Design",
      category: "Kitchen",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 189,
      description: "Functional island design maximizes storage and workspace"
    },
    {
      title: "Cozy Bedroom with Warm Textures",
      category: "Bedroom",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 156,
      description: "Layered textures and warm colors create a comfortable retreat"
    }
  ];

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
            Design
            <span className="text-[#E2574C]"> Ideas</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover inspiring interior design ideas and trends to transform your home. 
            From modern minimalism to classic elegance, find the perfect style for your space.
          </p>
          <Link 
            to="/contact"
            className="bg-[#E2574C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-block"
          >
            Get Design Consultation
          </Link>
        </div>
      </section>

      {/* Design Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designCategories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-[#4A2C3A]">
                    {category.ideas} ideas
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4A2C3A] mb-3 group-hover:text-[#E2574C] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <Link
                    to={category.link}
                    className="flex items-center text-[#E2574C] group-hover:text-[#d14337] transition-colors duration-300"
                  >
                    <span className="font-semibold">Explore Ideas</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ideas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Featured Design Ideas
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredIdeas.map((idea, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#E2574C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {idea.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4A2C3A] mb-3">
                    {idea.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {idea.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-[#E2574C] transition-colors duration-200">
                        <Heart size={18} />
                        <span>{idea.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-[#E2574C] transition-colors duration-200">
                        <Share2 size={18} />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Consultation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-4">
                Get Design Consultation
              </h2>
              <p className="text-xl text-gray-600">
                Love what you see? Let our expert designers bring these ideas to life in your home.
              </p>
            </div>

            <form onSubmit={handleSubmit} data-netlify="true" name="design-consultation" method="POST">
              <input type="hidden" name="form-name" value="design-consultation" />
              
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
                    id="whatsapp-design"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.checked})}
                    className="w-4 h-4 text-[#E2574C] border-gray-300 rounded focus:ring-[#E2574C]"
                  />
                  <label htmlFor="whatsapp-design" className="text-sm text-gray-600">
                    Send updates on WhatsApp
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#E2574C] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Submit</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our expert designers and start your interior design journey today.
          </p>
          <a
            href="tel:+916309123731"
            className="bg-[#E2574C] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Get Design Consultation</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DesignIdeas;