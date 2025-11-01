import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Target, Heart, TrendingUp } from "lucide-react";
import aboutBanner from "@/assets/about-banner.jpg";
import founderImage from "@/assets/founder.jpg";
import Team from "@/components/Team";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutBanner})` 
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-10">
              <Target className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized globally as the premier interior design firm that sets the standard for excellence, innovation, and sustainability in creating spaces that inspire and elevate the human experience.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-10">
              <Heart className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional design solutions that blend aesthetics with functionality, while fostering lasting relationships with our clients through transparency, creativity, and unwavering commitment to quality.
              </p>
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
              <h2 className="text-4xl font-bold mt-4 mb-6">Sarah Anderson</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in luxury interior design, Sarah Anderson founded Living Space Dekor with a passion for creating spaces that tell stories. Her journey began with a degree in Interior Architecture from the prestigious Rhode Island School of Design.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sarah's design philosophy centers on the belief that every space should be a reflection of its inhabitants' personality and lifestyle. Her work has been featured in leading design publications and has earned numerous industry accolades.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-muted-foreground">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl"></div>
                <img
                  src={founderImage}
                  alt="Sarah Anderson"
                  className="relative rounded-2xl w-full h-[600px] object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">120+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-primary-foreground/80">Design Awards</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      <Footer />
    </div>
  );
};

export default About;
