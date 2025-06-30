import React from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const FindUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Inspira Interiors Hyderabad Showroom"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-8">
              Find us here
            </h2>

            <div className="space-y-6">
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
                  <h3 className="font-semibold text-gray-800 mb-1">Opening Hours</h3>
                  <p className="text-gray-600">
                    Mon - Sun: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Calendar className="text-[#E2574C] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Appointment Types</h3>
                  <p className="text-gray-600">
                    In-person consultation, Virtual meeting, Site visit, Home consultation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-[#E2574C] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Contact Number</h3>
                  <p className="text-gray-600">+91 6309123731</p>
                </div>
              </div>
            </div>

            <Link 
              to="/contact"
              className="mt-8 bg-[#E2574C] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;