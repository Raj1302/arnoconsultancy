"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CarouselProps {
  items: {
    icon: React.ReactNode;
    name: string;
    description: string;
    image: string;
    color: {
      bg: string;
      border: string;
      text: string;
    };
  }[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [items.length]);

  const getSlideStyles = (index: number) => {
    // Mobile styles (single card view)
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return index === currentIndex 
        ? {
            x: '-50%',
            y: '0%',
            scale: 1,
            opacity: 1,
            rotateY: 0,
            rotateZ: 0,
            zIndex: 2,
          }
        : {
            x: '-50%',
            y: '0%',
            scale: 0.9,
            opacity: 0,
            rotateY: 0,
            rotateZ: 0,
            zIndex: -1,
          };
    }

    // Desktop styles (4 cards view)
    const positions = {
      [((currentIndex - 2) + items.length) % items.length]: {
        x: '-150%',
        y: '10%',
        scale: 0.85,
        opacity: 0.7,
        rotateY: 10,
        rotateZ: -12,
        zIndex: 0,
      },
      [((currentIndex - 1) + items.length) % items.length]: {
        x: '-100%',
        y: '5%',
        scale: 0.9,
        opacity: 0.8,
        rotateY: 5,
        rotateZ: -8,
        zIndex: 1,
      },
      [currentIndex]: {
        x: '-50%',
        y: '-5%',
        scale: 1,
        opacity: 1,
        rotateY: 0,
        rotateZ: 0,
        zIndex: 3,
      },
      [(currentIndex + 1) % items.length]: {
        x: '0%',
        y: '5%',
        scale: 0.9,
        opacity: 0.8,
        rotateY: -5,
        rotateZ: 8,
        zIndex: 1,
      },
      [(currentIndex + 2) % items.length]: {
        x: '50%',
        y: '10%',
        scale: 0.85,
        opacity: 0.7,
        rotateY: -10,
        rotateZ: 12,
        zIndex: 0,
      },
    };

    return positions[index] || {
      x: '100%',
      y: '10%',
      scale: 0.8,
      opacity: 0,
      rotateY: 0,
      rotateZ: 0,
      zIndex: -1,
    };
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] perspective-[1500px] -mt-6 sm:-mt-12">
      <div className="absolute inset-0 flex items-start justify-center">
        <div className="relative w-full max-w-[90rem]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={getSlideStyles(index)}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[380px] cursor-pointer"
              onClick={() => setCurrentIndex(index)}
              style={{ 
                transformOrigin: "center center",
                filter: index === currentIndex ? 'none' : 'brightness(0.95)',
              }}
              whileHover={{
                scale: index === currentIndex ? 1.02 : 0.95,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className={`w-full overflow-hidden rounded-2xl sm:rounded-3xl transition-colors shadow-xl backdrop-blur-sm ${item.color.bg}`}
                style={{
                  borderWidth: '2px',
                  borderColor: item.color.border,
                  boxShadow: `0 8px 32px ${item.color.border}25`,
                }}
              >
                <div className="p-4 sm:p-6">
                  <div className="relative h-36 sm:h-44 md:h-52 w-full rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 450px"
                    />
                  </div>
                </div>
                <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${item.color.text}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 ${item.color.text}`}>
                    {item.name}
                  </h3>
                  <p className={`text-sm sm:text-base md:text-lg leading-relaxed opacity-80 ${item.color.text}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:hidden">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-foreground' : 'bg-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 