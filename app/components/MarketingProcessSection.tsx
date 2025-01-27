"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Audit & Analysis",
    description: "We analyze your current digital presence, competitors, and market opportunities to create a data-driven strategy.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    image: "/images/process/marketing-audit.jpg"
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "We create a comprehensive marketing strategy tailored to your goals, target audience, and budget.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    image: "/images/process/marketing-strategy.jpg"
  },
  {
    number: "03",
    title: "Campaign Setup",
    description: "We set up and optimize your campaigns across chosen platforms with compelling content and targeted messaging.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    image: "/images/process/marketing-setup.jpg"
  },
  {
    number: "04",
    title: "Performance Tracking",
    description: "We monitor campaign performance in real-time, tracking key metrics and making data-driven optimizations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    image: "/images/process/marketing-tracking.jpg"
  },
  {
    number: "05",
    title: "Optimization",
    description: "We continuously optimize campaigns based on performance data to improve ROI and campaign effectiveness.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    image: "/images/process/marketing-optimization.jpg"
  },
  {
    number: "06",
    title: "Reporting & Analysis",
    description: "We provide detailed reports with actionable insights and recommendations for continued growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    image: "/images/process/marketing-reporting.jpg"
  }
];

export default function MarketingProcessSection() {
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
            Our Marketing Process
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We follow a data-driven approach to create and optimize marketing campaigns that deliver measurable results
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