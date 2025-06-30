import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Phone, Star, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FullHomeInteriors: React.FC = () => {
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

  const services = [
    "Complete Design & Planning",
    "3D Visualization & Walkthroughs",
    "Project Management",
    "Quality Material Selection",
    "Professional Installation",
    "Timely Delivery (45-60 days)",
    "Post-Installation Support",
    "10-Year Warranty"
  ];

  const rooms = [
    {
      title: "Living Room Design",
      description: "Create a welcoming space that reflects your personality",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Master Bedroom Suite",
      description: "Luxurious and comfortable bedroom designs with storage",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Modern Kitchen",
      description: "Functional and stylish kitchen designs for modern living",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Dining Area",
      description: "Elegant dining spaces for memorable family meals",
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Home Office",
      description: "Productive workspace designs for work from home",
      image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Kids Room",
      description: "Fun and functional spaces for children to grow and play",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                Full Home
                <span className="text-[#E2574C]"> Interiors</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Complete transformation of your entire home with end-to-end design and execution services. 
                From concept to completion, we handle every detail of your dream home.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">45-60 day delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">10-year warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">3D visualization included</span>
                </div>
              </div>
              <a
                href="tel:+916309123731"
                className="bg-[#E2574C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Schedule Home Visit</span>
              </a>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Full Home Interiors"
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
            Complete Home Interior Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Home className="text-[#E2574C] flex-shrink-0" size={20} />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room-wise Design Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Room-wise Interior Design
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4A2C3A] mb-3">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {room.description}
                  </p>
                  <Link
                    to="/contact"
                    className="text-[#E2574C] hover:text-[#d14337] font-semibold flex items-center space-x-1 transition-colors duration-200"
                  >
                    <span>View Designs</span>
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
            Our Design Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your needs and preferences" },
              { step: "02", title: "Design", desc: "Creating 3D designs and material selection" },
              { step: "03", title: "Execution", desc: "Professional installation and project management" },
              { step: "04", title: "Handover", desc: "Final inspection and project completion" }
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

      {/* Consultation Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-4">
                Get Your Full Home Interior Quote
              </h2>
              <p className="text-xl text-gray-600">
                Schedule a free home visit and consultation with our interior design experts.
              </p>
            </div>

            <form onSubmit={handleSubmit} data-netlify="true" name="full-home-interior-consultation" method="POST">
              <input type="hidden" name="form-name" value="full-home-interior-consultation" />
              
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
                    id="whatsapp-fullhome"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.checked})}
                    className="w-4 h-4 text-[#E2574C] border-gray-300 rounded focus:ring-[#E2574C]"
                  />
                  <label htmlFor="whatsapp-fullhome" className="text-sm text-gray-600">
                    Send updates on WhatsApp
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#E2574C] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Schedule Home Visit</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Happy Homeowners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Inspira Interiors transformed our entire home beautifully. The team was professional, 
                  and the quality of work exceeded our expectations."
                </p>
                <div className="font-semibold text-[#4A2C3A]">
                  Happy Customer {index + 1}
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

export default FullHomeInteriors;