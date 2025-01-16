'use client';
import { useEffect, useState } from 'react';

const pills = [
  { 
    id: 1, 
    text: 'Social Media Marketing', 
    emoji: '📱',
    bgColor: 'bg-violet-600',
    inactiveBg: 'bg-violet-50',
    inactiveText: 'text-violet-400'
  },
  { 
    id: 2, 
    text: 'Digital Advertising', 
    emoji: '📢',
    bgColor: 'bg-blue-600',
    inactiveBg: 'bg-blue-50',
    inactiveText: 'text-blue-400'
  },
  { 
    id: 3, 
    text: 'Content Creation', 
    emoji: '✍️',
    bgColor: 'bg-pink-600',
    inactiveBg: 'bg-pink-50',
    inactiveText: 'text-pink-400'
  },
  { 
    id: 4, 
    text: 'Web Development', 
    emoji: '💻',
    bgColor: 'bg-emerald-600',
    inactiveBg: 'bg-emerald-50',
    inactiveText: 'text-emerald-400'
  },
  { 
    id: 5, 
    text: 'Analytics & Insights', 
    emoji: '📊',
    bgColor: 'bg-amber-600',
    inactiveBg: 'bg-amber-50',
    inactiveText: 'text-amber-400'
  },
];

const ScrollPills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('help-section');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsFixed(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight - viewportHeight);

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const progress = (scrollPosition - sectionTop) / (sectionHeight - viewportHeight);
        
        const paddedProgress = Math.max(0.1, Math.min(0.9, progress));
        
        const scaledProgress = (paddedProgress - 0.1) / 0.8 * (pills.length - 1);
        
        setActiveIndex(Math.min(
          Math.floor(scaledProgress),
          pills.length - 1
        ));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="help-section"
      className="min-h-[300vh] relative"
    >
      <div className={`w-full h-screen ${
        isFixed ? 'fixed top-0' : 'absolute'
      } ${!isFixed && activeIndex === pills.length - 1 ? 'bottom-0 top-auto' : 'top-0'}`}
      >
        <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-times mb-16 text-center">
            We Help You With
          </h2>
          
          <div className="relative">
            {pills.map((pill, index) => (
              <div
                key={pill.id}
                className={`
                  absolute left-1/2 -translate-x-1/2 whitespace-nowrap
                  px-8 py-4 rounded-full transition-all duration-500
                  flex items-center gap-4 shadow-lg
                  ${index === activeIndex 
                    ? `opacity-100 ${pill.bgColor} text-white scale-110 transform-gpu`
                    : `opacity-0 ${pill.inactiveBg} ${pill.inactiveText} scale-90 transform-gpu`
                  }
                  ${index < activeIndex ? '-translate-y-40' : ''}
                  ${index > activeIndex ? 'translate-y-40' : ''}
                `}
              >
                <span className="text-2xl">{pill.emoji}</span>
                <span className="text-xl font-medium">{pill.text}</span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
            <div className="flex gap-3">
              {pills.map((pill, index) => (
                <div
                  key={index}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === activeIndex 
                      ? `w-10 ${pill.bgColor}` 
                      : 'bg-gray-200'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollPills; 