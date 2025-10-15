import { Link } from "react-router-dom";
import { Award, Users, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-primary/10 rounded-2xl p-12 text-center">
                <div className="text-6xl font-bold text-primary mb-2">15+</div>
                <div className="text-xl text-foreground">Years Excellence</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-muted-foreground uppercase tracking-wider text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Crafting Timeless Interiors
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Living Space Dekor, we believe that exceptional design yearns for boundless style underlined by simplicity. Our approach combines global design sensibilities with personalized touches to create spaces that are both stylish and functional.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With years of expertise in residential, commercial, and hospitality design, we transform ordinary spaces into extraordinary experiences that reflect your unique personality and lifestyle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Premium Quality</h4>
                  <p className="text-sm text-muted-foreground">Finest materials and exceptional craftsmanship</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Personalized Design</h4>
                  <p className="text-sm text-muted-foreground">Tailored to your unique vision</p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
