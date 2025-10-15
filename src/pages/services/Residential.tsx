import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Star } from "lucide-react";
import residentialHero from "@/assets/residential-hero.jpg";

const Residential = () => {
  const features = [
    "Custom space planning and layout design",
    "Furniture selection and procurement",
    "Color consultation and material selection",
    "Lighting design and installation",
    "Complete project management",
    "3D visualization and renderings"
  ];

  const testimonials = [
    {
      name: "Jennifer Thompson",
      content: "Living Space Dekor transformed our house into a dream home. Their attention to detail and understanding of our lifestyle was exceptional.",
      rating: 5
    },
    {
      name: "Michael Roberts",
      content: "The residential design exceeded all our expectations. Every room feels luxurious yet comfortable. Truly remarkable work!",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${residentialHero})` 
          }}
        />
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Residential Design</h1>
          <p className="text-xl md:text-2xl">Creating dream homes that reflect your unique personality and lifestyle</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Your Dream Home Awaits</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our residential design services are tailored to transform your living space into a sanctuary that perfectly balances style, comfort, and functionality. We believe that your home should be a true reflection of your personality, lifestyle, and aspirations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From initial concept to final execution, our team works closely with you to understand your needs, preferences, and vision. We combine timeless design principles with contemporary aesthetics to create spaces that not only look beautiful but also enhance your daily living experience.
            </p>

            <h3 className="text-2xl font-semibold mb-6">What We Offer</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12">Our Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden h-80">
                <img
                  src={residentialHero}
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
          <h2 className="text-4xl font-bold text-center mb-12">Client Reviews</h2>
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

export default Residential;
