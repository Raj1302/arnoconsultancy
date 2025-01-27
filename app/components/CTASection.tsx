"use client";

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative bg-primary/5 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 bg-background rounded-3xl p-8 md:p-12 lg:p-16 border border-primary/10 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl">
                Get started with AI avatars today and elevate your digital presence to new heights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                Get Started Now
              </button>
              <button className="px-8 py-4 rounded-full border border-primary/30 hover:bg-primary/5 font-medium transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 