import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Magazine: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ["All", "Trends", "Tips & Tricks", "Sustainability", "Design Psychology", "Technology", "Lighting", "Featured"];

  const articles = [
    {
      title: "2024 Interior Design Trends: What's Hot This Year",
      excerpt: "Discover the latest trends shaping interior design in 2024, from sustainable materials to bold color palettes.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Trends",
      readTime: "5 min read",
      featured: true,
      id: 1
    },
    {
      title: "Small Space, Big Style: Maximizing Your Compact Home",
      excerpt: "Learn expert tips and tricks for making the most of small spaces without compromising on style or functionality.",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Tips & Tricks",
      readTime: "7 min read",
      id: 2
    },
    {
      title: "Sustainable Interior Design: Eco-Friendly Choices for Your Home",
      excerpt: "Explore how to create beautiful interiors while being mindful of the environment with sustainable design choices.",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Emma Davis",
      date: "March 10, 2024",
      category: "Sustainability",
      readTime: "6 min read",
      id: 3
    },
    {
      title: "The Psychology of Color in Interior Design",
      excerpt: "Understanding how different colors affect mood and atmosphere can help you create the perfect ambiance in your home.",
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr. Lisa Park",
      date: "March 8, 2024",
      category: "Design Psychology",
      readTime: "8 min read",
      id: 4
    },
    {
      title: "Smart Home Integration: Technology Meets Design",
      excerpt: "Learn how to seamlessly integrate smart home technology into your interior design without compromising aesthetics.",
      image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Alex Rodriguez",
      date: "March 5, 2024",
      category: "Technology",
      readTime: "6 min read",
      id: 5
    },
    {
      title: "Lighting Design: Creating Ambiance in Every Room",
      excerpt: "Master the art of lighting design to transform your home's atmosphere and highlight your favorite design elements.",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Jennifer Kim",
      date: "March 3, 2024",
      category: "Lighting",
      readTime: "5 min read",
      id: 6
    },
    {
      title: "Minimalist Living: Less is More in Modern Homes",
      excerpt: "Discover how minimalist design principles can create peaceful, functional spaces that enhance your daily life.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Anna Williams",
      date: "March 1, 2024",
      category: "Trends",
      readTime: "4 min read",
      id: 7
    },
    {
      title: "Luxury Interior Design: Creating Opulent Spaces",
      excerpt: "Explore the world of luxury interior design and learn how to create sophisticated, high-end spaces in your home.",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Robert Chen",
      date: "February 28, 2024",
      category: "Featured",
      readTime: "6 min read",
      featured: false,
      id: 8
    }
  ];

  const getFilteredArticles = () => {
    if (activeCategory === 'All') {
      return articles;
    } else if (activeCategory === 'Featured') {
      return articles.filter(article => article.featured || article.category === 'Featured');
    } else {
      return articles.filter(article => article.category === activeCategory);
    }
  };

  const filteredArticles = getFilteredArticles();
  const featuredArticle = articles.find(article => article.featured);

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
            <span className="text-[#E2574C]"> Magazine</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest interior design trends, expert tips, and inspiring stories 
            from the world of home decoration and design.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  activeCategory === category 
                    ? 'bg-[#E2574C] text-white' 
                    : 'bg-white text-gray-700 hover:bg-[#E2574C] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article - Only show when "All" or "Featured" is selected */}
      {featuredArticle && (activeCategory === 'All' || activeCategory === 'Featured') && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#E2574C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">{featuredArticle.category}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-6">
                  {featuredArticle.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-6 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Link
                  to={`/article/${featuredArticle.id}`}
                  className="bg-[#E2574C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <span>Read Article</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div>
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-12 text-center">
            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No articles found in this category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 bg-[#E2574C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#d14337] transition-colors duration-200"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles
                .filter(article => !(article.featured && activeCategory === 'All'))
                .map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#E2574C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </div>
                    {article.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#4A2C3A] mb-3 hover:text-[#E2574C] transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User size={14} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <Link
                      to={`/article/${article.id}`}
                      className="text-[#E2574C] hover:text-[#d14337] font-semibold flex items-center space-x-1 transition-colors duration-200"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C3A] mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert advice from our interior design team in Hyderabad and bring these ideas to life.
          </p>
          <a
            href="tel:+916309123731"
            className="bg-[#E2574C] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Schedule Consultation</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Magazine;