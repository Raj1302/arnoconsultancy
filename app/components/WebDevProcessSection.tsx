"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and website requirements through detailed consultations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    image: "/images/process/web-discovery.jpg"
  },
  {
    number: "02",
    title: "Design & Wireframing",
    description: "Our designers create intuitive layouts and stunning visuals that align with your brand identity and user expectations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    image: "/images/process/web-design.jpg"
  },
  {
    number: "03",
    title: "Development",
    description: "Our expert developers bring the designs to life using modern technologies and best practices for optimal performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    image: "/images/process/web-development.jpg"
  },
  {
    number: "04",
    title: "Testing & QA",
    description: "Rigorous testing across devices and browsers ensures your website functions flawlessly for all users.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/images/process/web-testing.jpg"
  },
  {
    number: "05",
    title: "Launch & Optimization",
    description: "We ensure a smooth launch and optimize your website for peak performance and search engine visibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    image: "/images/process/web-launch.jpg"
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description: "We provide ongoing maintenance, updates, and support to keep your website secure and performing optimally.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    image: "/images/process/web-support.jpg"
  }
];

export default function WebDevProcessSection() {
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
            Our Development Process
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We follow a systematic approach to create high-performing websites that deliver results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary/20 via-secondary/10 to-transparent hidden lg:block" />

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
                      <div className="w-16 h-16 rounded-2xl bg-secondary/5 group-hover:bg-secondary/10 flex items-center justify-center transition-colors">
                        <div className="text-secondary">
                          {step.icon}
                        </div>
                      </div>
                      <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary/30">
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
                    <div className="w-full h-full rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors" />
                    <div className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" />
                  </div>

                  {/* Visual Side with Image */}
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br from-secondary/5 to-transparent p-1 rounded-2xl group-hover:from-secondary/10 transition-colors ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                      <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 border border-secondary/10">
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