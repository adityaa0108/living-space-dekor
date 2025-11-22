import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo/logo.png" 
                alt="Living Space Dekor" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Transforming spaces into timeless masterpieces with bespoke design excellence.
            </p>
            <div className="flex space-x-4">
              {/* Facebook link commented out
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              */}
              <a href="https://www.instagram.com/livingspacedecor_?igsh=YjlnMzV5d2RiNW5x" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              {/* LinkedIn link commented out
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-primary-foreground/80 hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/residential" className="text-primary-foreground/80 hover:text-secondary transition-colors">Residential Design</Link></li>
              <li><Link to="/services/commercial" className="text-primary-foreground/80 hover:text-secondary transition-colors">Commercial Spaces</Link></li>
              <li><Link to="/services/hospitality" className="text-primary-foreground/80 hover:text-secondary transition-colors">Hospitality Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Shop-LGB 28, Galaxy Diamond Plaza Sector 4 Greater Noida West, Greater Noida, Uttar Pradesh 201009</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-5 h-5" />
                <span>+91 88266 06869</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-5 h-5" />
                <span>info@livingspacedekor.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Living Space Dekor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
