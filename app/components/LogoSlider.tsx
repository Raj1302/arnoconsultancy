"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const companies = [
  { name: "Company 1", logo: "/logos/logo1.svg" },
  { name: "Company 2", logo: "/logos/logo2.svg" },
  { name: "Company 3", logo: "/logos/logo3.svg" },
  { name: "Company 4", logo: "/logos/logo4.svg" },
  // Duplicate for seamless loop
  { name: "Company 1", logo: "/logos/logo1.svg" },
  { name: "Company 2", logo: "/logos/logo2.svg" },
  { name: "Company 3", logo: "/logos/logo3.svg" },
  { name: "Company 4", logo: "/logos/logo4.svg" },
  { name: "Company 1", logo: "/logos/logo1.svg" },
  { name: "Company 2", logo: "/logos/logo2.svg" },
  { name: "Company 3", logo: "/logos/logo3.svg" },
  { name: "Company 4", logo: "/logos/logo4.svg" },
];

export default function LogoSlider() {
  return (
    <div className="w-full bg-background/50 backdrop-blur-sm border-y border-primary/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg font-medium text-foreground/70 mb-12"
        >
          Trusted by innovative companies worldwide
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {companies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center min-w-[150px] h-12 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/50 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}