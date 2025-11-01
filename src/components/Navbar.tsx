import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { menuData } from "./navbar/menuData";
import MobileMenu from "./navbar/MobileMenu";

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 shadow-lg py-3 backdrop-blur-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`text-2xl font-bold tracking-wider font-serif ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Living Space Dekor
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuData.map((item) => (
              <div key={item.id} className="relative group">
                {item.has_dropdown ? (
                  <>
                    <button 
                      className={`hover:text-secondary transition-colors flex items-center gap-1 font-medium ${
                        scrolled ? "text-gray-700" : "text-white"
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {item.title}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && item.sub_menus && (
                      <div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {item.sub_menus.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.link}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className={`hover:text-secondary transition-colors font-medium ${
                      scrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-all font-medium"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        menuItems={menuData} 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
