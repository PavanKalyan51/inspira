import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExperienceCentreSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const cards = [
    {
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Get a feel of our products",
      description: "Touch, feel, and experience our premium materials and finishes firsthand"
    },
    {
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Stunning styles for every room",
      description: "Explore diverse design styles from modern minimalist to classic elegance"
    },
    {
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Material and finish options",
      description: "Choose from hundreds of materials, colors, and finishes for your perfect space"
    },
    {
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Expert design consultation",
      description: "Get personalized advice from our experienced interior design professionals"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-3 sm:mb-4">
            Why visit our Experience Centre?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in our world of design and discover endless possibilities for your space
          </p>
        </div>

        <div className="relative">
          {/* Desktop scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft size={24} className="text-[#4A2C3A]" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight size={24} className="text-[#4A2C3A]" />
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 sm:space-x-6 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 snap-start"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#4A2C3A] mb-2 sm:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicators */}
          <div className="flex justify-center mt-4 sm:hidden space-x-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCentreSection;