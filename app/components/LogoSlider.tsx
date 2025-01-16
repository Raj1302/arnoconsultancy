'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const logos = [
    {
      url: '/logos/logo1.svg',
      alt: 'Company Logo 1',
      width: 160,
      height: 80,
    },
    {
      url: '/logos/logo2.svg',
      alt: 'Company Logo 2',
      width: 160,
      height: 80,
    },
    {
      url: '/logos/logo3.svg',
      alt: 'Company Logo 3',
      width: 160,
      height: 80,
    },
    {
      url: '/logos/logo4.svg',
      alt: 'Company Logo 4',
      width: 160,
      height: 80,
    },
  ];

  // Triple the logos to ensure smooth infinite scroll
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative">
      <div 
        ref={sliderRef}
        className="flex gap-4 xs:gap-6 sm:gap-8 md:gap-16 items-center overflow-hidden whitespace-nowrap scroll-smooth"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
        }}
      >
        <div className="flex gap-4 xs:gap-6 sm:gap-8 md:gap-16 items-center">
          {repeatedLogos.map((logo, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-16 xs:w-20 sm:w-24 md:w-32 h-8 xs:h-10 sm:h-12 md:h-16 relative 
                       grayscale hover:grayscale-0 transition-all duration-300 
                       opacity-60 hover:opacity-100"
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider; 