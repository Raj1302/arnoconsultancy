"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Content Strategy",
    description: "We develop a comprehensive content strategy aligned with your business goals and target audience preferences.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    image: "/images/process/content-strategy.jpg"
  },
  {
    number: "02",
    title: "Research & Planning",
    description: "Our team conducts thorough research to identify trending topics, keywords, and content gaps in your industry.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    image: "/images/process/content-research.jpg"
  },
  {
    number: "03",
    title: "Content Creation",
    description: "Expert writers and designers create engaging, SEO-optimized content that tells your brand story effectively.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    image: "/images/process/content-creation.jpg"
  },
  {
    number: "04",
    title: "Review & Optimization",
    description: "Each piece of content undergoes rigorous quality checks and optimization for maximum impact and engagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/images/process/content-review.jpg"
  },
  {
    number: "05",
    title: "Distribution",
    description: "We distribute your content across relevant channels and platforms to reach your target audience effectively.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    image: "/images/process/content-distribution.jpg"
  },
  {
    number: "06",
    title: "Performance Analysis",
    description: "We track content performance and provide detailed analytics to measure success and guide future strategy.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    image: "/images/process/content-analysis.jpg"
  }
];

export default function ContentProcessSection() {
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
            Our Content Process
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We follow a strategic approach to create content that engages your audience and drives results
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