import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import heroMain from "@/assets/hero-main.jpg";
import residentialHero from "@/assets/residential-hero.jpg";
import commercialHero from "@/assets/commercial-hero.jpg";
import hospitalityHero from "@/assets/hospitality-hero.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Luxury Penthouse",
      category: "residential",
      image: heroMain,
      description: "Modern minimalist design with panoramic city views"
    },
    {
      title: "Elegant Master Suite",
      category: "residential",
      image: residentialHero,
      description: "Sophisticated bedroom design with warm tones"
    },
    {
      title: "Corporate Headquarters",
      category: "commercial",
      image: commercialHero,
      description: "Contemporary office space designed for productivity"
    },
    {
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      image: hospitalityHero,
      description: "Welcoming luxury hospitality design"
    },
    {
      title: "Modern Living Space",
      category: "residential",
      image: heroMain,
      description: "Open-concept design with natural lighting"
    },
    {
      title: "Executive Office Suite",
      category: "commercial",
      image: commercialHero,
      description: "Premium commercial interior design"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl md:text-2xl">A Showcase of Excellence in Design</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-foreground hover:bg-primary/20"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("residential")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "residential" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-foreground hover:bg-primary/20"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter("commercial")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "commercial" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-foreground hover:bg-primary/20"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter("hospitality")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "hospitality" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-foreground hover:bg-primary/20"
              }`}
            >
              Hospitality
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl h-96 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
