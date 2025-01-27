"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const serviceItems = [
  { 
    name: "AI Avatars", 
    path: "/services/ai-avatars",
    description: "Custom AI-generated avatars for your brand",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  { 
    name: "Website Development", 
    path: "/services/web-development",
    description: "Custom websites and web applications",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  { 
    name: "Package Designing", 
    path: "/services/package-design",
    description: "Eye-catching packaging solutions",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  { 
    name: "Digital Marketing", 
    path: "/services/digital-marketing",
    description: "Comprehensive digital marketing solutions",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  { 
    name: "Content Writing", 
    path: "/services/content-writing",
    description: "Professional content creation services",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const navItems = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (isServicesOpen && !(e.target as Element).closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, [isServicesOpen]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full z-50 px-4 sm:px-6">
      <motion.nav 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-6xl mx-auto bg-background rounded-2xl shadow-md border border-primary/20"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link 
                href="/" 
                className="text-xl font-bold font-[family-name:var(--font-ubuntu)] tracking-wide text-foreground"
              >
                Arno Consultancy
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 ml-16">
              <div className="flex items-center space-x-8">
                {/* Home Link */}
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/"
                    className="font-[family-name:var(--font-ubuntu)] text-foreground/80 hover:text-foreground transition-colors relative group"
                  >
                    Home
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </Link>
                </motion.div>

                {/* Services Dropdown */}
                <div className="relative group services-dropdown">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="font-[family-name:var(--font-ubuntu)] text-foreground/80 hover:text-foreground transition-colors relative group flex items-center gap-1"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </button>
                  
                  {/* Enhanced Dropdown Menu */}
                  <motion.div
                    initial={false}
                    animate={isServicesOpen ? 
                      { opacity: 1, y: 0 } : 
                      { opacity: 0, y: -10 }
                    }
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className={`absolute left-1/2 -translate-x-1/2 mt-4 w-72 rounded-xl shadow-lg bg-background border border-primary/20 ${!isServicesOpen && 'hidden pointer-events-none'}`}
                  >
                    <div className="p-2">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          onClick={() => setIsServicesOpen(false)}
                          className={`flex items-center gap-3 p-2.5 hover:bg-primary/10 rounded-lg transition-colors group ${
                            index !== serviceItems.length - 1 ? 'mb-1' : ''
                          }`}
                        >
                          <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-foreground/70 group-hover:bg-primary/20 group-hover:text-foreground transition-colors">
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-medium text-foreground/90 group-hover:text-foreground truncate">
                              {item.name}
                            </h3>
                            <p className="text-xs text-foreground/60 group-hover:text-foreground/80 truncate">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Regular Nav Items */}
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.path}
                      className="font-[family-name:var(--font-ubuntu)] text-foreground/80 hover:text-foreground transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Get a Quote Button */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2 rounded-full bg-foreground text-background font-medium hover:shadow-md transition-all duration-300"
              >
                Get a Quote
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-primary/20"
              >
                <span className="sr-only">Open main menu</span>
                <div className="h-6 w-6 flex flex-col justify-around">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="h-0.5 w-6 bg-foreground block"
                  ></motion.span>
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="h-0.5 w-6 bg-foreground block"
                  ></motion.span>
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="h-0.5 w-6 bg-foreground block"
                  ></motion.span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={isOpen ? 
              { opacity: 1, height: "auto" } : 
              { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden rounded-b-2xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Home Link */}
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="/"
                  className="font-[family-name:var(--font-ubuntu)] block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-primary/20 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              {/* Mobile Services Menu */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="font-[family-name:var(--font-ubuntu)] w-full flex items-center justify-between px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-primary/20 rounded-md"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: isServicesOpen ? "auto" : 0 }}
                  className="overflow-hidden pl-4"
                >
                  <div className="space-y-1 py-2">
                    {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="flex items-center gap-3 p-2.5 hover:bg-primary/10 rounded-lg transition-colors group"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-foreground/70 group-hover:bg-primary/20 group-hover:text-foreground transition-colors">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-medium text-foreground/90 group-hover:text-foreground truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-foreground/60 group-hover:text-foreground/80 truncate">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Regular Mobile Nav Items */}
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  className="font-[family-name:var(--font-ubuntu)] block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-primary/20 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Get a Quote Button */}
            <div className="pt-2">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full px-3 py-2 rounded-md bg-foreground text-background font-medium hover:shadow-md transition-all duration-300"
              >
                Get a Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
        </div>
      </motion.nav>
    </div>
  );
} 