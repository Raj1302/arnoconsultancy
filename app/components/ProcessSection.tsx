"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with understanding your brand identity, target audience, and specific requirements for AI avatars.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    image: "/images/process/consultation.jpg"
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our team creates a detailed plan and design concepts for your AI avatars, ensuring alignment with your brand guidelines.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    image: "/images/process/planning.jpg"
  },
  {
    number: "03",
    title: "AI Generation",
    description: "Using cutting-edge AI technology, we generate high-quality avatars that capture your brand's essence and personality.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    image: "/images/process/generation.jpg"
  },
  {
    number: "04",
    title: "Refinement",
    description: "We fine-tune and perfect every detail of your AI avatars based on your feedback and requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    image: "/images/process/refinement.jpg"
  },
  {
    number: "05",
    title: "Integration",
    description: "We help you integrate the AI avatars across your digital platforms and provide technical support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    image: "/images/process/integration.jpg"
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support to help you maximize the impact of your AI avatars.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    image: "/images/process/launch.jpg"
  }
];

export default function ProcessSection() {
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
            Our Process
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We follow a systematic approach to create stunning AI avatars that perfectly represent your brand
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent hidden lg:block" />

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
                      <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/30">
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
                    <div className="w-full h-full rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                  </div>

                  {/* Visual Side with Image */}
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br from-primary/5 to-transparent p-1 rounded-2xl group-hover:from-primary/10 transition-colors ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                      <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 border border-primary/10">
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