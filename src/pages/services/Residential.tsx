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
                title: 'Living Room Design',
                description: 'Transform your living space with our expert design solutions that combine comfort and style.',
                image: residentialHero
              },
              {
                title: 'Kitchen Remodeling',
                description: 'Modernize your kitchen with our functional and aesthetically pleasing remodeling services.',
                image: residentialHero
              },
              {
                title: 'Bedroom Design',
                description: 'Create your perfect sanctuary with our personalized bedroom design services.',
                image: residentialHero
              },
              {
                title: 'Home Office',
                description: 'Design a productive and inspiring workspace that fits your home and work style.',
                image: residentialHero
              },
              {
                title: 'Bathroom Renovation',
                description: 'Upgrade your bathroom with our luxurious and practical renovation solutions.',
                image: residentialHero
              },
              {
                title: 'Outdoor Living',
                description: 'Extend your living space outdoors with our beautiful and functional exterior designs.',
                image: residentialHero
              }
            ].map((category, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl h-80 md:h-96 shadow-2xl">
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
                      <button 
                        className="mt-4 text-white font-medium hover:underline flex items-center gap-2"
                        onClick={() => {/* Handle expand action */}}
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                          <path d="M5 12h14"/>
                          <path d="m12 5 7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Mobile - Always show description */}
                  <div className="md:hidden mt-2">
                    <p className="text-gray-200 text-sm">{category.description}</p>
                    <button 
                      className="mt-2 text-white font-medium hover:underline flex items-center gap-2"
                      onClick={() => {/* Handle expand action */}}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
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
