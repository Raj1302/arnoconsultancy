"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description: "We start by understanding your brand, target market, and product requirements through detailed consultations and market research.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    image: "/images/process/package-research.jpg"
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Our designers create multiple unique concepts that align with your brand identity and resonate with your target audience.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    image: "/images/process/package-concept.jpg"
  },
  {
    number: "03",
    title: "Design & Refinement",
    description: "We refine the chosen concept, perfecting every detail from typography to color schemes and structural elements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    image: "/images/process/package-design.jpg"
  },
  {
    number: "04",
    title: "3D Prototyping",
    description: "We create realistic 3D prototypes to visualize the final product and test structural integrity and functionality.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    image: "/images/process/package-prototype.jpg"
  },
  {
    number: "05",
    title: "Production Setup",
    description: "We prepare all files for production, ensuring color accuracy, proper dimensions, and manufacturing specifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    image: "/images/process/package-production.jpg"
  },
  {
    number: "06",
    title: "Quality Control",
    description: "We oversee the production process and conduct thorough quality checks to ensure the final product meets our high standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/images/process/package-quality.jpg"
  }
];

export default function PackageProcessSection() {
  return (
    <section className="relative bg-background py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Design Process
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We follow a comprehensive approach to create packaging designs that not only look great but also perform exceptionally well
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/10 to-transparent hidden lg:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 lg:gap-16`}>
                  {/* Content Side */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center lg:justify-start`}>
                      <div className="w-16 h-16 rounded-2xl bg-accent/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                        <div className="text-accent">
                          {step.icon}
                        </div>
                      </div>
                      <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/30">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Timeline Point for larger screens */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-6 h-6">
                    <div className="w-full h-full rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors" />
                    <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                  </div>

                  {/* Visual Side with Image */}
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br from-accent/5 to-transparent p-1 rounded-2xl group-hover:from-accent/10 transition-colors ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                      <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 border border-accent/10">
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 