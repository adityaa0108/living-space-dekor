import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMain from "@/assets/hero-main.jpg";
import residentialHero from "@/assets/residential-hero.jpg";
import commercialHero from "@/assets/commercial-hero.jpg";
import hospitalityHero from "@/assets/hospitality-hero.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const projects = [
    {
      title: "Modern Kitchen Remodel",
      category: "residential",
      image: "/photos/res/kitchen/1.jpg",
      description: "Contemporary kitchen design with premium finishes"
    },
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

  // Handle touch events for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance for a swipe to trigger navigation
    
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe left - go to next
        navigateProject('next');
      } else {
        // Swipe right - go to previous
        navigateProject('prev');
      }
    }
    
    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProjectIndex !== null) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedProjectIndex]);


  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    if (selectedProjectIndex === null) return;
    
    const totalProjects = filteredProjects.length;
    if (direction === 'prev') {
      setSelectedProjectIndex((prev) => (prev === 0 ? totalProjects - 1 : (prev || 0) - 1));
    } else {
      setSelectedProjectIndex((prev) => (prev === totalProjects - 1 ? 0 : (prev || 0) + 1));
    }
  };

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
      <section className="py-8 sm:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group">
                <div 
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/5] sm:aspect-[3/4] w-full cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Mobile - Only show image */}
                  <div className="md:hidden absolute inset-0" />
                  
                  {/* Desktop - Hover effect with content at bottom */}
                  <div className="hidden md:block absolute inset-0 group-hover:bg-black/30 transition-colors duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      {selectedProjectIndex !== null && (
          <div 
          ref={modalRef}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-0 sm:p-4 overflow-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-1 right-1 sm:top-2 sm:right-2 text-white hover:text-gray-300 transition-colors z-50 p-1.5 bg-black/70 rounded-full touch-manipulation shadow-lg"
            aria-label="Close modal"
            style={{
              WebkitTapHighlightColor: 'transparent',
              WebkitTouchCallout: 'none'
            }}
          >
            <X size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div 
            className="relative w-full h-full max-w-6xl flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Buttons - Desktop */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateProject('prev');
              }}
              className="hidden sm:block absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors z-10 shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            {/* Main Content */}
            <div className="w-full h-full flex flex-col items-center justify-center p-2">
              <div className="relative w-full flex items-start pt-12 sm:pt-16 justify-center p-2">
                <div className="max-w-[80vw] max-h-[70vh] flex items-center justify-center">
                  <img
                    src={filteredProjects[selectedProjectIndex].image}
                    alt={filteredProjects[selectedProjectIndex].title}
                    className="max-w-full max-h-[65vh] object-contain"
                  style={{ touchAction: 'pan-y' }}
                />
                
                </div>
                {/* Mobile Navigation Buttons */}
                <div className="sm:hidden absolute inset-0 flex items-center justify-between px-2 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProject('prev');
                    }}
                    className="bg-black/50 text-white p-3 rounded-full"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProject('next');
                    }}
                    className="bg-black/50 text-white p-3 rounded-full"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Caption */}
              <div className="w-full max-w-3xl mt-4 sm:mt-6 text-center">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-2xl font-bold line-clamp-1">
                    {filteredProjects[selectedProjectIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 mt-1 line-clamp-2 sm:line-clamp-3">
                    {filteredProjects[selectedProjectIndex].description}
                  </p>
                  <p className="text-xs sm:text-sm text-white/60 mt-2">
                    {selectedProjectIndex + 1} / {filteredProjects.length}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons - Desktop */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateProject('next');
              }}
              className="hidden sm:block absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors z-10 shadow-md"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
