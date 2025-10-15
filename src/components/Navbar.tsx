import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "#",
      dropdown: [
        { name: "Residential Design", path: "/services/residential" },
        { name: "Commercial Spaces", path: "/services/commercial" },
        { name: "Hospitality Design", path: "/services/hospitality" },
      ]
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass shadow-lg py-3" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary-foreground tracking-wider">
            Living Space Dekor
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button 
                      className="text-primary-foreground hover:text-secondary transition-colors flex items-center gap-1"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {servicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-56 glass rounded-lg shadow-xl py-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-3 text-primary-foreground hover:bg-secondary/20 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-primary-foreground hover:text-secondary transition-colors ${
                      location.pathname === link.path ? "text-secondary font-medium" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary-dark transition-all"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass rounded-lg mt-4 py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button 
                      className="w-full text-left px-4 py-3 text-primary-foreground flex items-center justify-between"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="bg-black/10">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-8 py-2 text-primary-foreground hover:bg-secondary/20"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block px-4 py-3 text-primary-foreground hover:bg-secondary/20"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
