import { Link } from "react-router-dom";
import { Home, Building2, Hotel, ArrowRight } from "lucide-react";
import residentialHero from "@/assets/residential-hero.jpg";
import commercialHero from "@/assets/commercial-hero.jpg";
import hospitalityHero from "@/assets/hospitality-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Our client's needs and sensibilities are pivotal to our dream home creations. We combine uniqueness in style with practical functionality.",
      path: "/services/residential",
      image: residentialHero
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Transform your workspace into an inspiring environment that enhances productivity and reflects your brand identity.",
      path: "/services/commercial",
      image: commercialHero
    },
    {
      icon: Hotel,
      title: "Hospitality Design",
      description: "Create memorable experiences with sophisticated interiors that captivate guests and elevate your hospitality brand.",
      path: "/services/hospitality",
      image: hospitalityHero
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to residential, commercial, and hospitality spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group bg-card rounded-2xl p-8 overflow-hidden relative
                md:hover:shadow-xl md:hover:-translate-y-2 transition-all duration-300"
            >
              {/* Hover Image Overlay - Only on non-touch devices */}
              <div className="absolute inset-0 w-full h-full opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <service.icon className="w-12 h-12 text-primary md:group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 md:group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 md:group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary md:group-hover:text-white md:group-hover:gap-2 transition-all">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-5 h-5 md:group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
