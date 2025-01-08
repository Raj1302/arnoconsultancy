'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/blogs', label: 'Blogs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                    ${scrolled ? 'py-4' : 'bg-white border-b border-gray-200'}`}>
      <div className={`
        transition-all duration-300
        ${scrolled 
          ? 'mx-2 sm:mx-4 md:mx-8' 
          : 'mx-0'
        }
      `}>
        <div className={`
          transition-all duration-300
          px-4 sm:px-6 py-3 mx-auto max-w-7xl
          ${scrolled 
            ? 'bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 hover:bg-white/95 shadow-lg' 
            : 'bg-transparent'
          }
        `}>
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center hover:scale-105 transition-transform"
            >
              <h1 className="logo-text text-xl sm:text-2xl md:text-3xl tracking-tight italic">
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                  Arno
                </span>
                <span className="font-normal text-gray-700">
                  {" "}Consultancy
                </span>
              </h1>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300
                           relative px-5 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-5 right-5 h-0.5 bg-gray-800
                                 origin-left transform scale-x-0 transition-transform duration-300
                                 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="bg-violet-600 text-white px-6 py-2.5 rounded-full 
                         font-medium transition-all duration-300
                         hover:bg-violet-700 hover:scale-105 hover:shadow-md
                         active:scale-95"
              >
                Let's Grow
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-gray-800 transition-transform duration-300"
                style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'none' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? 'max-h-[400px] opacity-100 visible'
                : 'max-h-0 opacity-0 invisible'
            }`}
          >
            <div className={`
              flex flex-col gap-4 pt-4 pb-2
              ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
              transition-all duration-300 delay-100
            `}>
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    text-gray-600 hover:text-gray-900 transition-all
                    py-2 px-4 rounded-lg hover:bg-gray-50
                    transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-4'}
                    opacity-${isMenuOpen ? '100' : '0'}
                    transition-all duration-300
                    delay-[${(index + 1) * 100}ms]
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-violet-600 text-white px-6 py-3 rounded-lg
                         font-medium text-center transition-all duration-300
                         hover:bg-violet-700 active:scale-95 mt-2
                         transform ${isMenuOpen ? 'translate-y-0' : 'translate-y-4'}
                         opacity-${isMenuOpen ? '100' : '0'}
                         delay-[500ms]"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Grow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 