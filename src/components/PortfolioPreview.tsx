import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import residentialHero from "@/assets/residential-hero.jpg";
import commercialHero from "@/assets/commercial-hero.jpg";
import hospitalityHero from "@/assets/hospitality-hero.jpg";

const PortfolioPreview = () => {
  const projects = [
    {
      title: "Luxury Penthouse",
      category: "Residential",
      image: heroMain,
    },
    {
      title: "Elegant Master Suite",
      category: "Residential",
      image: residentialHero,
    },
    {
      title: "Corporate Office",
      category: "Commercial",
      image: commercialHero,
    },
    {
      title: "Hotel Lobby",
      category: "Hospitality",
      image: hospitalityHero,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase tracking-wider text-sm">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautifully designed spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-secondary text-sm mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-all group"
          >
            View Full Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
