import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Star } from "lucide-react";
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

      {/* Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden h-80">
                <img
                  src={commercialHero}
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
