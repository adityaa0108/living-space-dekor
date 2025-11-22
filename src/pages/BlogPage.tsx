import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-main.jpg";
import aboutBanner from "@/assets/about-banner.jpg";

const BlogPage = () => {
  const posts = [
    {
      id: 'design-trends-2024',
      title: "2024 Interior Design Trends",
      excerpt: "Discover the latest trends shaping luxury interior design this year, from sustainable materials to biophilic design.",
      image: heroImage,
      date: "2024-03-15",
      readTime: 5,
      author: "Living Space Team",
      authorImage: "/logo/logo.png",
      category: "Trends",
      tags: ["Trends", "Design", "2024"]
    },
    {
      id: 'small-spaces',
      title: "Maximizing Small Spaces",
      excerpt: "Expert tips and clever solutions for making the most of compact living areas without compromising on style.",
      image: heroImage,
      date: "2024-03-10",
      readTime: 4,
      author: "Living Space Team",
      authorImage: "/logo/logo.png",
      category: "Tips",
      tags: ["Tips", "Small Spaces", "Organization"]
    },
    {
      id: 'color-psychology',
      title: "The Art of Color Psychology",
      excerpt: "Learn how different colors influence mood and atmosphere in your living spaces and how to choose the perfect palette.",
      image: heroImage,
      date: "2024-03-05",
      readTime: 6,
      author: "Living Space Team",
      authorImage: "/logo/logo.png",
      category: "Design",
      tags: ["Design", "Color Theory", "Interior"]
    },
    {
      id: 'sustainable-homes',
      title: "Sustainable Home Design",
      excerpt: "Eco-friendly materials and energy-efficient solutions for a greener home that doesn't sacrifice style.",
      image: heroImage,
      date: "2024-02-28",
      readTime: 7,
      author: "Living Space Team",
      authorImage: "/logo/logo.png",
      category: "Sustainability",
      tags: ["Sustainability", "Eco-Friendly", "Green Living"]
    },
    {
      id: 'luxury-budget',
      title: "Luxury on a Budget",
      excerpt: "How to achieve a high-end look without the high-end price tag with these smart design choices.",
      image: heroImage,
      date: "2024-02-20",
      readTime: 5,
      author: "Living Space Team",
      authorImage: "/logo/logo.png",
      category: "Tips",
      tags: ["Tips", "Budget", "Luxury"]
    },
    {
      id: 'smart-homes',
      title: "The Future of Smart Homes",
      excerpt: "Exploring the latest in home automation and how it's changing the way we live and interact with our spaces.",
      image: heroImage,
      date: "2024-02-15",
      readTime: 8,
      author: "Living Space Team",
      authorImage: "/logo/logo.png",
      category: "Technology",
      tags: ["Technology", "Smart Home", "Automation"]
    }
  ];

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Categories are no longer used since we removed the filter

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutBanner})`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Latest from Our Blog</h1>
          <p className="text-xl md:text-2xl">Expert advice, design tips, and inspiration for your next project</p>
        </div>
      </section>

      {/* Blog Posts */}
      <main className="flex-grow pt-24 pb-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Category filter removed as requested */}
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-600">
                      {post.author}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
