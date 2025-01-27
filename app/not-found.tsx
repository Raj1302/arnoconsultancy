"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-tight">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="relative -mt-8 md:-mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-foreground/70 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Back to Home
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 rounded-full border border-primary/30 hover:bg-primary/5 font-medium transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-12 border-t border-primary/10">
            <h3 className="text-lg font-semibold mb-4">
              You might be interested in:
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/services"
                className="px-6 py-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                Our Services
              </Link>
              <Link 
                href="/portfolio"
                className="px-6 py-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                Portfolio
              </Link>
              <Link 
                href="/blog"
                className="px-6 py-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 