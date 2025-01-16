'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/blogs', label: 'Blogs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] sm:h-[80px]
                    ${scrolled ? '' : 'bg-transparent'}`}>
      <div className="mx-auto px-4 sm:px-6 py-3 max-w-7xl">
        {/* Logo and Main Nav Container */}
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo - Always Visible */}
          <Link 
            href="/" 
            className="flex items-center hover:scale-105 transition-transform relative z-50"
          >
            <h1 className="logo-text text-xl sm:text-2xl md:text-3xl tracking-tight italic">
              <span className={`font-bold ${isMenuOpen ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600'}`}>
                Arno
              </span>
              <span className={`font-normal ${isMenuOpen ? 'text-white/80' : 'text-gray-700'}`}>
                {" "}Consultancy
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-8 px-6 py-2 rounded-full transition-all duration-300
                        ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-all duration-300 relative group
                         ${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5
                               origin-left transform scale-x-0 transition-transform duration-300
                               group-hover:scale-x-100 bg-gray-800`} />
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="#contact"
              className="bg-primary text-white px-6 py-2 rounded-full 
                       font-medium transition-all duration-300
                       hover:bg-primary/90 hover:scale-105 hover:shadow-md
                       active:scale-95"
            >
              Let's Grow
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden w-10 h-10 relative flex items-center justify-center
                      transition-colors relative z-50 rounded-lg
                      ${isMenuOpen ? 'text-white' : 'text-gray-800 hover:bg-gray-100'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 relative">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out
                            ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : 'translate-y-0'}`} 
                    style={{ top: '0' }} />
                    
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out
                            ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                    style={{ top: '50%', transform: 'translateY(-50%)' }} />
                    
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out
                            ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : 'translate-y-0'}`}
                    style={{ bottom: '0' }} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-primary/95 backdrop-blur-lg transition-all duration-500 
                     ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{ top: '0', height: '100vh' }}
        >
          <div className={`
            flex flex-col justify-center items-center h-full gap-6
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            transition-all duration-500 delay-100
          `}>
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  text-2xl font-times text-white/80 hover:text-white py-2 px-4
                  transform transition-all duration-300 hover:scale-110
                  ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
                `}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-white text-primary px-8 py-3 rounded-full
                       font-medium text-xl text-center transition-all duration-300
                       hover:bg-white/90 active:scale-95 mt-4
                       transform hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
            >
              Let's Grow
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;