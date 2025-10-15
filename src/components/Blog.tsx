import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

const Blog = () => {
  const posts = [
    {
      title: "2024 Interior Design Trends",
      excerpt: "Discover the latest trends shaping luxury interior design this year, from sustainable materials to biophilic design.",
      image: heroImage,
      date: "March 15, 2024",
      category: "Trends"
    },
    {
      title: "Maximizing Small Spaces",
      excerpt: "Expert tips and clever solutions for making the most of compact living areas without compromising on style.",
      image: heroImage,
      date: "March 10, 2024",
      category: "Tips"
    },
    {
      title: "The Art of Color Psychology",
      excerpt: "Learn how different colors influence mood and atmosphere in your living spaces and how to choose the perfect palette.",
      image: heroImage,
      date: "March 5, 2024",
      category: "Design"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase tracking-wider text-sm">Insights & Inspiration</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Latest from Our Blog</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice, design tips, and inspiration for your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                <span className="font-medium">Read More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
