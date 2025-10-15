import { Link } from "react-router-dom";
import { Home, Building2, Hotel, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Our client's needs and sensibilities are pivotal to our dream home creations. We combine uniqueness in style with practical functionality.",
      path: "/services/residential",
      number: "01"
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Transform your workspace into an inspiring environment that enhances productivity and reflects your brand identity.",
      path: "/services/commercial",
      number: "02"
    },
    {
      icon: Hotel,
      title: "Hospitality Design",
      description: "Create memorable experiences with sophisticated interiors that captivate guests and elevate your hospitality brand.",
      path: "/services/hospitality",
      number: "03"
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
              className="group bg-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <span className="absolute -top-4 -left-4 text-6xl font-bold text-muted/20">
                  {service.number}
                </span>
                <service.icon className="w-12 h-12 text-primary relative z-10" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                <span className="font-medium">Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
