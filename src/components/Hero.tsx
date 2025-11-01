import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

interface HeroProps {
  className?: string;
}

const Hero = ({ className = '' }: HeroProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full mb-6 text-sm tracking-wider">
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
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-all inline-flex items-center justify-center"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
