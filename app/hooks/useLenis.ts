'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (target && target instanceof HTMLElement) {
          lenis.scrollTo(target, {
            offset: -100,
            duration: 1.5,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
          });
        }
      });
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const stopScroll = (isMenuOpen: boolean) => {
      if (isMenuOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    return () => {
      lenis.destroy();
    };
  }, []);
} 