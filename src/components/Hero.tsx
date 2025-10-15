import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="inline-block px-6 py-2 glass rounded-full text-primary-foreground mb-6 text-sm tracking-wider">
          PREMIUM INTERIOR DESIGN
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
          Where Luxury <br />Meets Lifestyle
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto animate-slide-up">
          Transform your spaces into timeless masterpieces with bespoke design excellence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link
            to="/portfolio"
            className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary-dark transition-all inline-flex items-center justify-center gap-2 group"
          >
            View Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 glass rounded-full text-primary-foreground hover:bg-white/20 transition-all inline-flex items-center justify-center"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
