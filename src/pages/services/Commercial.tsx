import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import commercialHero from "@/assets/commercial-hero.jpg";

const Commercial = () => {
  const features = [
    "Corporate office design and planning",
    "Retail space optimization",
    "Brand identity integration",
    "Ergonomic workspace solutions",
    "Sustainable design practices",
    "Technology integration"
  ];

  const testimonials = [
    {
      name: "David Martinez",
      content: "The commercial design they created for our office has significantly improved our team's productivity and morale. The space is both functional and inspiring.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      content: "Outstanding work on our retail space! The design perfectly captures our brand identity and has increased customer engagement remarkably.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${commercialHero})` 
          }}
        />
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Commercial Spaces</h1>
          <p className="text-xl md:text-2xl">Designing workspaces that inspire productivity and reflect your brand</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Transform Your Workspace</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our commercial design services focus on creating inspiring work environments that enhance productivity, foster collaboration, and reflect your company's values and brand identity. We understand that your workspace is more than just an office—it's where innovation happens.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From corporate headquarters to retail spaces, we design commercial interiors that balance aesthetics with functionality, incorporating the latest trends in workplace design while ensuring optimal use of space and resources.
            </p>

            <h3 className="text-2xl font-semibold mb-6">Our Commercial Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-white/80 uppercase tracking-wider text-sm">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Service Categories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'office-spaces',
                title: 'Office Spaces',
                description: 'Innovative office designs that enhance productivity and reflect your corporate identity.',
                image: 'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
              },
              {
                id: 'retail-design',
                title: 'Retail Design',
                description: 'Engaging retail environments that drive customer engagement and sales.',
                image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
              },
              {
                id: 'coworking-spaces',
                title: 'Co-working Spaces',
                description: 'Flexible and collaborative work environments for modern professionals.',
                image: 'https://images.unsplash.com/photo-1522071820081-009c2f7a3f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              },
              {
                id: 'corporate-lobbies',
                title: 'Corporate Lobbies',
                description: 'Impressive entryways that make a lasting first impression.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80'
              },
              {
                id: 'conference-rooms',
                title: 'Conference Rooms',
                description: 'Professional meeting spaces equipped with the latest technology.',
                image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              },
              {
                id: 'wellness-areas',
                title: 'Wellness Areas',
                description: 'Spaces that promote employee well-being and work-life balance.',
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              }
            ].map((category, index) => (
              <Link 
                key={index} 
                to={`/services/${category.id}`}
                className="relative group overflow-hidden rounded-xl h-80 md:h-96 shadow-2xl block"
              >
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 md:group-hover:bg-black/50 transition-colors duration-500"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  
                  {/* Description - always visible on mobile, hover on desktop */}
                  <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 md:group-hover:max-h-40">
                    <div className="pt-2">
                      <p className="text-gray-200 text-sm">{category.description}</p>
                      <div className="mt-4 text-white font-medium hover:underline flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile - Always show description */}
                  <div className="md:hidden mt-2">
                    <p className="text-gray-200 text-sm">{category.description}</p>
                    <div className="mt-2 text-white font-medium hover:underline flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Client Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Commercial;
