import { useRef, useState, useEffect } from 'react';
import { Award, Target, Heart, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutBanner from "@/assets/about-banner.jpg";
import founderImage from "@/assets/founder.jpg";
// import BrandsMarquee from "@/components/BrandsMarquee";

// const brands = [
//   { name: "Ekkaa", logo: "/logo/logo.png" },
//   { name: "Gaur's Builder", logo: "/logo/logo.png" },
//   { name: "Design Hub", logo: "/logo/logo.png" },
//   { name: "Elite Interiors", logo: "/logo/logo.png" },
//   { name: "Urban Living", logo: "/logo/logo.png" },
//   { name: "Modern Spaces", logo: "/logo/logo.png" },
//   { name: "Luxe Design", logo: "/logo/logo.png" },
//   { name: "Creative Homes", logo: "/logo/logo.png" },
// ];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutBanner})`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl">Crafting Timeless Spaces Since 2009</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Living Space Dekor was founded with a singular vision: to transform ordinary spaces into extraordinary experiences. Over the past 15 years, we have established ourselves as leaders in luxury interior design, serving clients across residential, commercial, and hospitality sectors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our design philosophy is rooted in the belief that great design should be both beautiful and functional. We take pride in our ability to listen to our clients, understand their needs, and deliver spaces that exceed expectations while reflecting their unique personality and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group bg-card rounded-2xl p-6 md:p-10 overflow-hidden relative h-full
              md:hover:shadow-xl md:transition-all md:duration-300 md:hover:-translate-y-2">
              {/* Mobile - Static Content */}
              <div className="md:hidden">
                <div className="mb-4">
                  <Target className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized globally as the premier interior design firm that sets the standard for excellence, innovation, and sustainability in creating spaces that inspire and elevate the human experience.
                </p>
              </div>
              
              {/* Desktop - Hover Effects */}
              <div className="hidden md:block">
                {/* Hover Image Overlay */}
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                    alt="Vision - Modern Interior Design"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <Target className="w-16 h-16 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                    To be recognized globally as the premier interior design firm that sets the standard for excellence, innovation, and sustainability in creating spaces that inspire and elevate the human experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group bg-card rounded-2xl p-6 md:p-10 overflow-hidden relative h-full
              md:hover:shadow-xl md:transition-all md:duration-300 md:hover:-translate-y-2">
              {/* Mobile - Static Content */}
              <div className="md:hidden">
                <div className="mb-4">
                  <Heart className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional design solutions that blend aesthetics with functionality, while fostering lasting relationships with our clients through transparency, creativity, and unwavering commitment to quality.
                </p>
              </div>
              
              {/* Desktop - Hover Effects */}
              <div className="hidden md:block">
                {/* Hover Image Overlay */}
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                    alt="Mission - Design Collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <Heart className="w-16 h-16 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                    To deliver exceptional design solutions that blend aesthetics with functionality, while fostering lasting relationships with our clients through transparency, creativity, and unwavering commitment to quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <span className="text-muted-foreground uppercase tracking-wider text-sm">Meet The Founder</span>
              <h2 className="text-4xl font-bold mt-4 mb-6">Nitin Yadav</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With a distinguished career spanning over 15 years in luxury interior design, Nitin Yadav is the visionary force behind Living Space Dekor. Her journey in design began with an innate passion for transforming spaces, which led her to pursue a degree in Interior Architecture from the prestigious Rhode Island School of Design.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nitin's design philosophy is rooted in the belief that every space should be a harmonious blend of aesthetics, functionality, and the unique personality of its inhabitants. Under his leadership, Living Space Dekor has become synonymous with innovative design solutions and exceptional craftsmanship, earning recognition in leading design publications and numerous industry accolades.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary"><CountUp end={150} duration={2} />+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary"><CountUp end={20} duration={2} />+</div>
                  <div className="text-muted-foreground">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl"></div>
                <img
                  src="/founder/1.jpg"
                  alt="Nitin Yadav - Founder of Living Space Dekor"
                  className="relative rounded-2xl w-full h-[600px] object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2"><CountUp end={150} duration={2} />+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2"><CountUp end={120} duration={2} />+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2"><CountUp end={20} duration={2} />+</div>
              <div className="text-muted-foreground">Design Awards</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2"><CountUp end={15} duration={2} />+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Marquee Section - Commented out
      <BrandsMarquee 
        brands={brands}
        title="Trusted by Industry Leaders"
        subtitle="Building confidence with renowned organizations"
      />
      */}

      <Footer />
    </div>
  );
};

// CountUp component props interface
interface CountUpProps {
  end: number;
  duration?: number;
}

// CountUp component for smooth number animation when scrolled into view
const CountUp = ({ end, duration = 2 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const increment = end / (duration * 60); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(Math.floor(end));
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000/60);
    
    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span ref={countRef}>{count}</span>;
};

export default About;
