import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Star } from "lucide-react";
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

      {/* Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden h-80">
                <img
                  src={hospitalityHero}
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
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
