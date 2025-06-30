import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#4A2C3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="text-yellow-400 fill-current sm:hidden" />
          ))}
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} className="text-yellow-400 fill-current hidden sm:block" />
          ))}
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Your dream home is just a click away
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trusted us with their interior design dreams. 
          Start your transformation journey today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">✓</span>
            <span className="text-sm sm:text-base">45-day delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">✓</span>
            <span className="text-sm sm:text-base">10-year warranty</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">✓</span>
            <span className="text-sm sm:text-base">Free consultation</span>
          </div>
        </div>
        
        <a
          href="tel:+916309123731"
          className="bg-[#E2574C] text-white px-8 py-3 sm:px-12 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2 sm:space-x-3"
        >
          <span>Get Started</span>
          <ArrowRight size={20} className="sm:hidden" />
          <ArrowRight size={24} className="hidden sm:block" />
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;