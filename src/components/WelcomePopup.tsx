import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after 5 seconds if not seen in this session
    const popupKey = 'livingSpaceDekor_welcomePopupShown';
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem(popupKey);
      if (!hasSeen) {
        setIsVisible(true);
        sessionStorage.setItem(popupKey, 'true');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);
  const navigateTo = (path: string) => {
    setIsVisible(false);
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden font-sans border border-gray-100"
          >
            {/* Decorative Elements - Soft and Elegant */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-100/50 via-blue-50/40 to-gray-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-slate-50/40 to-gray-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            {/* Close Button */}
            <div className="absolute top-3 right-3 z-10">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-md transition-all duration-200"
                aria-label="Close welcome message"
              >
                <X className="w-5 h-5 text-gray-700" />
              </motion.button>
            </div>
            
            {/* Content */}
            <div className="relative px-6 py-8 sm:px-8 sm:py-10 text-center">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-3 leading-tight"
              >
                Welcome to Living Space Décor
              </motion.h2>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-sm mx-auto leading-relaxed px-2"
              >
                Transform your space into a sanctuary of style and comfort. Let's create something beautiful together.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex flex-col gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(71, 85, 105, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigateTo('/contact')}
                  className="group w-full px-6 py-3.5 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white font-semibold rounded-xl hover:from-slate-700 hover:via-slate-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigateTo('/portfolio')}
                  className="w-full px-6 py-3.5 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  View Our Work
                </motion.button>
              </motion.div>

              {/* Trust Badge */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mt-5 sm:mt-6 text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-1.5"
              >
                <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Join hundreds of satisfied homeowners
              </motion.p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}