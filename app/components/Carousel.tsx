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
    const positions = {
      // Previous/Left card
      [((currentIndex - 1) + items.length) % items.length]: {
        x: '-100%',
        y: '5%',
        scale: 0.95,
        opacity: 1,
        rotateY: 5,
        rotateZ: -8,
        zIndex: 0,
      },
      // Current/Center card
      [currentIndex]: {
        x: '-50%',
        y: '-5%',
        scale: 1,
        opacity: 1,
        rotateY: 0,
        rotateZ: 0,
        zIndex: 2,
      },
      // Next/Right card
      [(currentIndex + 1) % items.length]: {
        x: '0%',
        y: '15%',
        scale: 0.95,
        opacity: 1,
        rotateY: -5,
        rotateZ: 8,
        zIndex: 0,
      },
    };

    return positions[index] || {
      x: '-50%',
      y: '20%',
      scale: 0.9,
      opacity: 0,
      rotateY: 0,
      rotateZ: 0,
      zIndex: -1,
    };
  };

  return (
    <div className="relative w-full h-[600px] perspective-[1500px] -mt-12">
      <div className="absolute inset-0 flex items-start justify-center">
        <div className="relative w-full max-w-7xl">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={getSlideStyles(index)}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[450px] cursor-pointer"
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
                className={`w-full overflow-hidden rounded-3xl transition-colors shadow-xl backdrop-blur-sm ${item.color.bg}`}
                style={{
                  borderWidth: '1px',
                  borderColor: item.color.border,
                }}
              >
                <div className="p-6">
                  <div className="relative h-52 w-full rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 450px) 100vw, 450px"
                    />
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${item.color.text}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-2xl font-semibold mb-4 ${item.color.text}`}>{item.name}</h3>
                  <p className={`text-lg leading-relaxed opacity-80 ${item.color.text}`}>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 