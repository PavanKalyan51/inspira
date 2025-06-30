import React from 'react';
import { ArrowRight, CheckCircle, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Interiors: React.FC = () => {
  const interiorTypes = [
    {
      title: "Modular Interiors",
      description: "Smart, space-efficient solutions for modern living with pre-designed modules that can be customized to your needs.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Quick Installation", "Cost Effective", "Customizable", "Warranty Included"],
      link: "/modular-interiors"
    },
    {
      title: "Full Home Interiors",
      description: "Complete transformation of your entire home with end-to-end design and execution services.",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Complete Design", "Project Management", "Quality Materials", "Timely Delivery"],
      link: "/full-home-interiors"
    },
    {
      title: "Bespoke Designs",
      description: "Luxury custom designs tailored specifically to your taste and lifestyle preferences.",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Custom Design", "Premium Materials", "Unique Solutions", "Personal Consultation"],
      link: "/bespoke-designs"
    },
    {
      title: "Renovations",
      description: "Refresh and modernize your existing space with our expert renovation services.",
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Space Optimization", "Modern Updates", "Structural Changes", "Value Addition"],
      link: "/renovations"
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
            Interior Design
            <span className="text-[#E2574C]"> Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From modular kitchens to complete home makeovers, we offer comprehensive interior design solutions 
            that transform your space into a reflection of your personality and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916309123731"
              className="bg-[#E2574C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Schedule Free Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interior Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {interiorTypes.map((interior, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={interior.image}
                    alt={interior.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-6">
                    {interior.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {interior.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {interior.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={interior.link}
                    className="bg-[#E2574C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our expert designers and start your interior design journey today.
          </p>
          <a
            href="tel:+916309123731"
            className="bg-[#E2574C] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Schedule Free Consultation</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Interiors;