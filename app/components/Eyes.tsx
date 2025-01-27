"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Eyes() {
  const eyeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pupilRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      eyeRefs.current.forEach((eye, index) => {
        if (!eye || !pupilRefs.current[index]) return;

        const eyeRect = eye.getBoundingClientRect();
        const pupil = pupilRefs.current[index]!;

        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate angle between mouse and eye center
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

        // Calculate pupil position (radius of movement = 3px)
        const radius = 3;
        const pupilX = Math.cos(angle) * radius;
        const pupilY = Math.sin(angle) * radius;

        // Apply transform to pupil
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="inline-flex items-center gap-1 mx-2"
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          ref={el => { eyeRefs.current[i] = el }}
          className="w-8 h-8 rounded-full bg-background border-[2.5px] border-foreground relative"
        >
          <div
            ref={el => { pupilRefs.current[i] = el }}
            className="absolute w-3 h-3 bg-foreground rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>
      ))}
    </motion.span>
  );
} 