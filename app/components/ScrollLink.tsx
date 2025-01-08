'use client';
import { ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  offset?: number;
}

export default function ScrollLink({ href, children, className, offset = -100 }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target && target instanceof HTMLElement) {
      const lenis = new Lenis();
      
      lenis.scrollTo(target, {
        offset: offset,
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // Cubic easing
        immediate: false,
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
} 