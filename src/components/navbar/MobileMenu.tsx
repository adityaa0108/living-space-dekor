import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from './menuData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { ConsultationForm } from '../ConsultationForm';

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, isOpen, onClose }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const location = useLocation();

  const toggleSubmenu = (id: number) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  // Animation variants with proper TypeScript types for Framer Motion
  const menuVariants = {
    hidden: { x: '100%' } as const,
    visible: { 
      x: 0,
      transition: { 
        type: 'spring' as const,
        damping: 40,
        stiffness: 300
      }
    },
    exit: { 
      x: '100%',
      transition: { 
        type: 'spring' as const,
        damping: 40,
        stiffness: 300
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 } as const,
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: 'easeInOut' as const
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.2,
        ease: 'easeInOut' as const
      }
    }
  };
  
  const itemVariants = {
    closed: { 
      opacity: 0,
      y: 10
    } as const,
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + (i * 0.04),
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const
      }
    })
  };
  
  const subMenuVariants = {
    closed: {
      height: 0,
      opacity: 0
    } as const,
    open: {
      height: 'auto' as const,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  } as const;

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Don't automatically close consultation form when mobile menu closes
  // as we're using it after menu close

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div key="mobile-menu">
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] md:hidden"
            style={{
              transform: 'translateZ(0)',
              willChange: 'opacity'
            }}
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 w-[320px] bg-white z-[9999] shadow-2xl overflow-y-auto"
            style={{
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 z-10" style={{ transform: 'translateZ(0)' }}>
              <div className="flex items-center justify-between px-6 py-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-xl font-light tracking-[0.2em] text-gray-900">
                    LIVING SPACE
                  </h1>
                </motion.div>
                
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-all duration-200"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </motion.button>
              </div>
            </div>

            {/* Navigation */}
            <div className="px-6 py-8">
              <nav>
                <ul className="space-y-0">
                  {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.link;
                    
                    return (
                      <motion.li 
                        key={item.id}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        custom={index}
                      >
                        <div className="relative group">
                          <Link
                            to={item.link}
                            className={`flex items-center justify-between py-4 text-[15px] font-light tracking-wide transition-all duration-300 ${
                              isActive
                                ? 'text-gray-900 font-normal'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                            onClick={!item.has_dropdown ? onClose : undefined}
                          >
                            <span className="relative">
                              {item.title}
                              {isActive && (
                                <motion.span
                                  layoutId="activeUnderline"
                                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gray-900"
                                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                              )}
                            </span>
                            
                            {item.has_dropdown && (
                              <motion.button
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleSubmenu(item.id);
                                }}
                                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                whileTap={{ scale: 0.9 }}
                              >
                                <motion.div
                                  animate={{ rotate: activeSubmenu === item.id ? 180 : 0 }}
                                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                >
                                  <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                                </motion.div>
                              </motion.button>
                            )}
                          </Link>

                          {/* Subtle hover line */}
                          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </div>

                        {item.has_dropdown && item.sub_menus && (
                          <motion.div
                            variants={subMenuVariants}
                            initial="closed"
                            animate={activeSubmenu === item.id ? 'open' : 'closed'}
                            className="overflow-hidden"
                          >
                            <ul className="pl-4 pt-2 pb-2 space-y-0">
                              {item.sub_menus.map((subMenu, subIndex) => (
                                <motion.li
                                  key={subIndex}
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={activeSubmenu === item.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                                  transition={{ delay: subIndex * 0.03, duration: 0.3 }}
                                >
                                  <Link
                                    to={subMenu.link}
                                    className="block py-3 text-[13px] font-light text-gray-500 hover:text-gray-900 transition-colors duration-200"
                                    onClick={onClose}
                                  >
                                    {subMenu.title}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Simple CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-gray-100"
              >
                <p className="text-xs font-light tracking-wider text-gray-500 uppercase mb-4">
                  Get in Touch
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    // Close the menu first
                    onClose();
                    // Then show the form after a small delay to allow the menu to close
                    setTimeout(() => {
                      setShowConsultationForm(true);
                    }, 100);
                  }}
                  className="w-full py-3.5 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-300"
                >
                  Book Consultation
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Consultation Form */}
      {showConsultationForm && (
        <motion.div 
          key="consultation-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[10000] flex items-center justify-center p-4"
        >
          <div className="w-full max-w-md">
            <ConsultationForm onClose={() => setShowConsultationForm(false)} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;