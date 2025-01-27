"use client";

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/images/services/ai-avatar.webp',
  '/images/services/content-creation.jpg',
  '/images/services/analytics.jpg',
  '/images/services/web-development.jpg',
  '/images/services/digital-marketing.jpg',
  '/images/services/package-design.jpg',
  // Add more images as needed
];

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoPlaying(false);
  };

  // Transform for the text and button
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.8],
    ['50vh', '0vh', '0vh', '-50vh']
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.8],
    [0, 1, 1, 0]
  );

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Center Text and Play Button */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{ 
            y: contentY,
            opacity: contentOpacity
          }}
        >
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
              Create AI Avatars
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4 mb-12">
              Boost your business with personalized AI-generated avatars
            </p>
            
            {/* Play Button */}
            <button
              onClick={handlePlayVideo}
              className="group relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-white/5 animate-ping" />
              <svg
                className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Floating Images */}
        <div className="absolute inset-0 flex items-center justify-center">
          {images.map((src, index) => {
            const startProgress = index * 0.15;
            const endProgress = startProgress + 0.25;

            const y = useTransform(
              scrollYProgress,
              [startProgress, endProgress],
              ['100vh', '-100vh']
            );

            const opacity = useTransform(
              scrollYProgress,
              [
                startProgress,
                startProgress + 0.05,
                endProgress - 0.05,
                endProgress
              ],
              [0, 1, 1, 0]
            );

            const scale = useTransform(
              scrollYProgress,
              [startProgress, endProgress],
              [0.8, 1.2]
            );

            const offset = index % 2 === 0 ? -200 : 200;

            return (
              <motion.div
                key={src}
                className="absolute"
                style={{
                  x: offset,
                  y,
                  opacity,
                  scale,
                }}
              >
                <Image
                  src={src}
                  alt="AI Avatar"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg"
                  priority={index < 2}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Video Modal */}
        {isVideoPlaying && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={handleCloseVideo}
          >
            <div 
              className="relative w-full max-w-6xl aspect-video"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={handleCloseVideo}
                className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                ref={videoRef}
                className="w-full h-full rounded-lg"
                controls
                playsInline
                src="/videos/showreel.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 