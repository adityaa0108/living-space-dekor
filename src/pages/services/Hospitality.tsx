import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hospitalityHero from "@/assets/hospitality-hero.jpg";

const Hospitality = () => {
  const features = [
    "Hotel and resort design",
    "Restaurant and bar interiors",
    "Guest experience optimization",
    "Luxury boutique design",
    "Spa and wellness spaces",
    "Complete FF&E procurement"
  ];

  const testimonials = [
    {
      name: "Amanda Foster",
      content: "Our hotel's redesign exceeded all expectations. The elegant yet practical design has received countless compliments from guests. Truly world-class work!",
      rating: 5
    },
    {
      name: "Robert Williams",
      content: "The restaurant design they created has become the talk of the town. The ambiance is perfect and has significantly enhanced our customer experience.",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hospitalityHero})` 
          }}
        />
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hospitality Design</h1>
          <p className="text-xl md:text-2xl">Creating memorable experiences through exceptional interior design</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Elevate Guest Experiences</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our hospitality design services are dedicated to creating spaces that leave lasting impressions on your guests. We understand that in the hospitality industry, design is not just about aesthetics—it's about creating experiences that guests remember and return for.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From luxury hotels to intimate boutique establishments, we design interiors that capture the essence of your brand while ensuring comfort, functionality, and visual appeal. Our approach combines timeless elegance with contemporary innovation to create spaces that stand out in the competitive hospitality market.
            </p>

            <h3 className="text-2xl font-semibold mb-6">Hospitality Solutions</h3>
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
                id: 'hotel-design',
                title: 'Hotel Design',
                description: 'Luxurious and functional hotel spaces that create memorable guest experiences.',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              },
              {
                id: 'restaurant-bars',
                title: 'Restaurant & Bars',
                description: 'Atmospheric dining spaces that complement your culinary vision and brand.',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              },
              {
                id: 'resort-spas',
                title: 'Resort & Spas',
                description: 'Tranquil retreats designed for relaxation and rejuvenation.',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              },
              {
                id: 'lobby-reception',
                title: 'Lobby & Reception',
                description: 'Grand entrances that make a powerful first impression on your guests.',
                image: 'https://images.unsplash.com/photo-1566669437683-9d0a9c675de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              },
              {
                id: 'event-spaces',
                title: 'Event Spaces',
                description: 'Versatile venues perfect for hosting memorable events and gatherings.',
                image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
              },
              {
                id: 'wellness-centers',
                title: 'Wellness Centers',
                description: 'Serene environments dedicated to health, wellness, and self-care.',
                image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
                  <div className="overflow-hidden transition-all duration-500 max-h-0 md:group-hover:max-h-40">
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
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
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

export default Hospitality;
