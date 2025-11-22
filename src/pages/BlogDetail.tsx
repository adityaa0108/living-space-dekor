import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-main.jpg";

// Sample blog posts data - should match the one in BlogPage.tsx
const blogPosts = [
  {
    id: 'design-trends-2024',
    title: "2024 Interior Design Trends",
    excerpt: "Discover the latest trends shaping luxury interior design this year, from sustainable materials to biophilic design.",
    content: `
      <p>As we move further into 2024, interior design continues to evolve with exciting new trends that blend functionality, sustainability, and personal expression. Here are the key trends shaping spaces this year:</p>
      <h3>1. Sustainable Materials</h3>
      <p>Eco-friendly materials like bamboo, cork, and reclaimed wood are becoming staples in modern interiors. These materials not only reduce environmental impact but also add natural warmth and texture to spaces.</p>
      <h3>2. Biophilic Design</h3>
      <p>The connection to nature remains strong with indoor plants, natural light, and organic forms dominating design schemes. Living walls and large windows that blur the line between indoors and outdoors are particularly popular.</p>
    `,
    image: heroImage,
    date: "2024-03-15",
    readTime: 5,
    author: "Living Space Team",
    authorImage: "/logo/logo.png",
    category: "Trends",
    tags: ["Trends", "Design", "2024"]
  },
  // Add other posts with similar structure
  {
    id: 'small-spaces',
    title: "Maximizing Small Spaces",
    excerpt: "Expert tips and clever solutions for making the most of compact living areas without compromising on style.",
    content: `
      <p>Living in a small space doesn't mean you have to compromise on style or functionality. Here are our top tips for maximizing your compact living areas:</p>
      <h3>1. Multi-functional Furniture</h3>
      <p>Invest in pieces that serve multiple purposes, like a sofa bed or an ottoman with storage. Wall-mounted desks and fold-down tables are also great space-savers.</p>
      <h3>2. Smart Storage Solutions</h3>
      <p>Utilize vertical space with floor-to-ceiling shelving and consider under-bed storage. Look for furniture with built-in storage to minimize clutter.</p>
    `,
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
    content: `
      <p>Colors have a profound impact on our emotions and behaviors. Understanding color psychology can help you create the perfect atmosphere in each room of your home.</p>
      <h3>1. Calming Blues and Greens</h3>
      <p>These cool tones are perfect for bedrooms and bathrooms where relaxation is key. They can lower heart rate and reduce stress.</p>
      <h3>2. Energizing Yellows and Oranges</h3>
      <p>Warm colors like yellow and orange can stimulate conversation and appetite, making them ideal for dining rooms and kitchens.</p>
    `,
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
    content: `
      <p>Creating a sustainable home doesn't mean compromising on style or comfort. Here are some key elements of sustainable home design:</p>
      <h3>1. Eco-friendly Materials</h3>
      <p>Incorporate materials like bamboo flooring, recycled glass countertops, and low-VOC paints to reduce environmental impact while maintaining aesthetic appeal.</p>
      <h3>2. Energy Efficiency</h3>
      <p>Consider installing solar panels, energy-efficient windows, and proper insulation to reduce energy consumption and lower utility bills.</p>
    `,
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
    content: `
      <p>Creating a luxurious space doesn't have to break the bank. Here's how to get that high-end look for less:</p>
      <h3>1. Strategic Splurges</h3>
      <p>Invest in a few key pieces that make a statement, like a quality sofa or an eye-catching light fixture, and save on other items.</p>
      <h3>2. DIY and Upcycling</h3>
      <p>Transform thrift store finds with a fresh coat of paint or reupholstery to create unique, high-end looking pieces for less.</p>
    `,
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
    content: `
      <p>Smart home technology is revolutionizing the way we interact with our living spaces. Here's what's new in home automation:</p>
      <h3>1. Voice-Controlled Everything</h3>
      <p>From lighting to thermostats, voice assistants are making it easier than ever to control your home environment with simple voice commands.</p>
      <h3>2. Energy Management</h3>
      <p>Smart systems can now learn your habits and adjust settings to optimize energy usage, saving you money while being environmentally friendly.</p>
    `,
    image: heroImage,
    date: "2024-02-15",
    readTime: 8,
    author: "Living Space Team",
    authorImage: "/logo/logo.png",
    category: "Technology",
    tags: ["Technology", "Smart Home", "Automation"]
  }
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              ← Back to all posts
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Blog Header */}
      <header className="bg-gray-50 pt-32 pb-16">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all posts
          </button>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center mr-6">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center mr-6">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min read
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto rounded-lg mb-8"
            />
            
            <div className="mt-12 prose prose-lg max-w-4xl mx-auto">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div>
                <h4 className="text-lg font-medium">{post.author}</h4>
                <p className="text-gray-500">Author</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
