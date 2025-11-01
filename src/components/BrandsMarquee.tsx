"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Brand {
  name: string;
  logo: string;
}

interface BrandsMarqueeProps {
  brands: Brand[];
  title?: string;
  subtitle?: string;
}

const BrandsMarquee: React.FC<BrandsMarqueeProps> = ({ 
  brands, 
  title = "Trusted by Industry Leaders", 
  subtitle = "Building confidence with renowned organizations" 
}) => {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white pt-8 pb-16 md:pt-12 md:pb-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header - Matches other section styles */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div 
          className="relative overflow-hidden w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        >
          <div className="animate-marquee">
            {[...brands, ...brands].map((brand, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center justify-center flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-12"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: (index % brands.length) * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              >
                <div className="mb-2 sm:mb-3">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-12 sm:h-20 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextSibling as HTMLElement;
                      if (fallback) fallback.style.display = "block";
                    }}
                  />
                  <div
                    className="h-12 sm:h-20 md:h-28 w-auto aspect-[4/3] bg-gradient-to-r from-gray-200 to-gray-300 rounded opacity-50 flex items-center justify-center text-gray-500 text-xs text-center"
                    style={{ display: "none" }}
                  >
                    {brand.name}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight max-w-[80px] sm:max-w-[120px] md:max-w-[150px]">
                    {brand.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-12 sm:w-24 md:w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute right-0 top-0 w-12 sm:w-24 md:w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
      </div>

      {/* CSS for marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
            width: calc(200% + 64px);
          }
          @media (max-width: 768px) {
            .animate-marquee {
              animation: marquee 15s linear infinite;
              width: calc(200% + 32px);
            }
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default BrandsMarquee;
