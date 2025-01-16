'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const cards = [
  {
    title: "AI Avatar Generation",
    description: "Create stunning, personalized avatars for your brand",
    image: "/slides/slide1.webp",
  },
  {
    title: "Package Design",
    description: "Stand out on shelves with eye-catching designs",
    image: "/slides/slide1.webp",
  },
  {
    title: "Web Development",
    description: "Build powerful, responsive websites",
    image: "/slides/slide1.webp",
  },
];

const PeekingCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const isActive = index === currentIndex;
    const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;
    const isNext = index === (currentIndex + 1) % cards.length;

    if (isActive) {
      return "z-20 scale-100 opacity-100 translate-x-0 rotate-0";
    } else if (isPrev) {
      return "z-10 scale-95 opacity-70 -translate-x-[45%] -rotate-6";
    } else if (isNext) {
      return "z-10 scale-95 opacity-70 translate-x-[45%] rotate-6";
    } else {
      return "scale-90 opacity-0";
    }
  };

  return (
    <div className="relative w-full max-w-[1000px] h-[500px] mx-auto mt-16">
      <div className="relative h-full flex items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              absolute w-full max-w-[400px] bg-white rounded-3xl overflow-hidden
              shadow-lg transition-all duration-500 ease-in-out transform-gpu
              hover:scale-[1.02] cursor-pointer
              ${getCardStyle(index)}
            `}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="relative h-[300px] w-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-times mb-2">{card.title}</h3>
              <p className="text-accent">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeekingCardSlider; 