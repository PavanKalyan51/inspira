import React from 'react';
import { Users, Award, Home, Heart, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const stats = [
    { icon: Home, number: "1000+", label: "Homes Transformed" },
    { icon: Users, number: "50+", label: "Expert Designers" },
    { icon: Award, number: "15+", label: "Awards Won" },
    { icon: Heart, number: "98%", label: "Customer Satisfaction" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every material, every finish, every detail is carefully selected to ensure lasting beauty and durability.",
      icon: Award
    },
    {
      title: "Customer-Centric",
      description: "Your vision is our mission. We listen, understand, and translate your dreams into stunning reality with personalized attention.",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "We stay ahead of design trends and embrace new technologies to bring you the most contemporary and functional solutions.",
      icon: Users
    },
    {
      title: "Transparency",
      description: "No hidden costs, no surprises. We believe in honest communication and transparent pricing throughout your journey with us.",
      icon: Home
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#4A2C3A] leading-tight mb-6">
                About
                <span className="text-[#E2574C]"> Inspira Interiors</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are India's most trusted interior design brand, dedicated to transforming homes 
                with premium quality, expert craftsmanship, and innovative design solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to make beautiful, functional interiors accessible to everyone, 
                Inspira Interiors has grown to become a household name across major Indian cities.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Inspira Interiors"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#4A2C3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent size={48} className="text-[#E2574C] mx-auto mb-4" />
                  <div className="text-4xl font-bold text-[#E2574C] mb-2">{stat.number}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Inspira Interiors was born from a simple belief: everyone deserves a beautiful home. 
                What started as a small design studio has evolved into India's leading interior design brand, 
                serving thousands of satisfied customers across multiple cities.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a commitment to quality, innovation, and customer satisfaction. 
                Today, we continue to push boundaries in design while maintaining the personal touch 
                that makes each project unique.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From modular solutions to bespoke luxury designs, we've expanded our offerings 
                to meet every need and budget, always with the same dedication to excellence 
                that defined our early days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <IconComponent size={48} className="text-[#E2574C] mb-6" />
                  <h3 className="text-2xl font-bold text-[#4A2C3A] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team of expert designers, craftsmen, and project managers work together 
            to bring your vision to life with precision and care.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/157147${index + 2}/pexels-photo-157147${index + 2}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt="Team Member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4A2C3A] mb-2">
                    Design Expert {index + 1}
                  </h3>
                  <p className="text-gray-600">
                    Senior Interior Designer with 10+ years of experience in creating stunning spaces.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4A2C3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trusted us with their interior design dreams. 
            Let's create something beautiful together.
          </p>
          <a
            href="tel:+916309123731"
            className="bg-[#E2574C] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Start Your Project</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;