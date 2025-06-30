import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OneStopShopSection: React.FC = () => {
  const services = [
    {
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Modular Interiors",
      description: "Smart, space-efficient solutions for modern living",
      link: "/modular-interiors"
    },
    {
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Full Home Interiors",
      description: "Complete transformation of your entire home",
      link: "/full-home-interiors"
    },
    {
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Bespoke (Vinciago)",
      description: "Luxury custom designs tailored to your taste",
      link: "/bespoke-designs"
    },
    {
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Renovations",
      description: "Refresh and modernize your existing space",
      link: "/renovations"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-3 sm:mb-4">
            Your one-stop shop for all things interiors
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we handle every aspect of your interior design journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#4A2C3A] mb-2 sm:mb-3 group-hover:text-[#E2574C] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <div className="flex items-center text-[#E2574C] group-hover:text-[#d14337] transition-colors duration-300">
                  <span className="font-semibold text-sm sm:text-base">Learn More</span>
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300 sm:hidden" />
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300 hidden sm:block" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneStopShopSection;