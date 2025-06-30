import React from 'react';
import { Play } from 'lucide-react';

const VideoGallery: React.FC = () => {
  const videos = [
    {
      thumbnail: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Modern Kitchen Transformation",
      duration: "2:45",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder URL
    },
    {
      thumbnail: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Living Room Makeover",
      duration: "3:12",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      thumbnail: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Bedroom Design Process",
      duration: "2:58",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      thumbnail: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Client Testimonial",
      duration: "1:30",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      thumbnail: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Home Office Setup",
      duration: "2:20",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      thumbnail: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Dining Room Elegance",
      duration: "3:05",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-3 sm:mb-4">
            See Our Work in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our transformation stories and hear from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-full p-3 sm:p-4">
                    <Play size={24} className="text-[#E2574C] sm:hidden" />
                    <Play size={32} className="text-[#E2574C] hidden sm:block" />
                  </div>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs sm:text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#4A2C3A] group-hover:text-[#E2574C] transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;