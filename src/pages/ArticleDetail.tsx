import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { id } = useParams();

  // Sample article data - in a real app, this would come from an API
  const article = {
    title: "2024 Interior Design Trends: What's Hot This Year",
    content: `
      <p>The world of interior design is constantly evolving, and 2024 brings exciting new trends that blend sustainability, technology, and timeless elegance. As we move forward, homeowners are increasingly seeking spaces that not only look beautiful but also reflect their values and lifestyle choices.</p>

      <h2>Sustainable Materials Take Center Stage</h2>
      <p>One of the most significant trends this year is the emphasis on sustainable and eco-friendly materials. From reclaimed wood to recycled metals, designers are finding innovative ways to create stunning interiors while minimizing environmental impact. Bamboo flooring, cork walls, and furniture made from recycled plastics are becoming increasingly popular choices.</p>

      <h2>Bold Color Palettes</h2>
      <p>Gone are the days of playing it safe with neutral tones. 2024 is all about embracing bold, vibrant colors that make a statement. Deep emerald greens, rich terracotta oranges, and dramatic navy blues are taking center stage in living rooms and bedrooms alike. These colors are often paired with natural materials to create a balanced, sophisticated look.</p>

      <h2>Curved and Organic Shapes</h2>
      <p>Furniture and architectural elements with curved, organic shapes are having a major moment. From rounded sofas to arched doorways, these soft forms create a sense of flow and movement in interior spaces. This trend reflects our desire for comfort and tranquility in our homes.</p>

      <h2>Smart Home Integration</h2>
      <p>Technology continues to play an increasingly important role in interior design. Smart lighting systems, automated window treatments, and integrated sound systems are being seamlessly incorporated into design schemes. The key is making technology invisible while maximizing its functionality.</p>

      <h2>Maximalist Approach</h2>
      <p>While minimalism has dominated for years, 2024 sees a shift towards maximalism – but with intention. This isn't about cluttering spaces, but rather about layering textures, patterns, and colors in thoughtful ways. The result is rich, personalized spaces that tell a story.</p>

      <h2>Biophilic Design Elements</h2>
      <p>The connection between indoor and outdoor spaces continues to strengthen. Living walls, indoor gardens, and natural light optimization are key elements of biophilic design. These features not only enhance aesthetics but also improve air quality and overall well-being.</p>

      <p>As we embrace these trends, remember that the best interior design is one that reflects your personal style and meets your functional needs. Whether you choose to incorporate all of these trends or just a few elements that speak to you, the key is creating a space that feels authentically yours.</p>
    `,
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Trends",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const relatedArticles = [
    {
      title: "Small Space, Big Style: Maximizing Your Compact Home",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Tips & Tricks"
    },
    {
      title: "Sustainable Interior Design: Eco-Friendly Choices",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Sustainability"
    },
    {
      title: "The Psychology of Color in Interior Design",
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Design Psychology"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/magazine"
            className="inline-flex items-center space-x-2 text-[#E2574C] hover:text-[#d14337] transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Magazine</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="bg-[#E2574C] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-[#4A2C3A] mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 mb-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200">
              <Heart size={18} />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              fontSize: '18px',
              lineHeight: '1.8'
            }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#4A2C3A] mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get expert advice from our interior design team in Hyderabad.
          </p>
          <a
            href="tel:+916309123731"
            className="bg-[#E2574C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d14337] transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Schedule Consultation</span>
          </a>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A2C3A] mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle, index) => (
              <Link
                key={index}
                to={`/article/${index + 2}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={relatedArticle.image}
                  alt={relatedArticle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-[#E2574C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {relatedArticle.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4A2C3A] hover:text-[#E2574C] transition-colors duration-300">
                    {relatedArticle.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;