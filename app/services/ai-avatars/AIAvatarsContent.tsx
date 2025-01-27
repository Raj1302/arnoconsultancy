"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ParallaxSection from "@/app/components/ParallaxSection";
import ProcessSection from "@/app/components/ProcessSection";
import ReviewSection from "@/app/components/ReviewSection";
import Eyes from "@/app/components/Eyes";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AIAvatarsContent() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center pt-40 sm:pt-48 pb-20 px-4 sm:px-6 lg:px-8">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="relative max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              {/* Subtitle */}
              <motion.p
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="text-primary font-medium"
              >
                Next-Gen AI Technology
              </motion.p>

              {/* Title */}
              <motion.h1 
                {...fadeIn}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-ubuntu)] tracking-tight"
              >
                Transform Your Brand With
                <br />
                AI Avatars<Eyes />
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mt-4"
              >
                Create stunning, personalized AI avatars that bring your brand to life 
                and engage your audience like never before. Stand out in the digital space 
                with cutting-edge avatar technology.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <button className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-primary/25">
                  Get Started Now
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-primary/20 hover:border-primary/30 font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-primary/5">
                  View Demo
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
              >
                {[
                  { number: "500+", label: "Avatars Created" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support" },
                  { number: "100%", label: "Unique Designs" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Parallax Section */}
        <ParallaxSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Review Section */}
        <ReviewSection />
      </main>
      <Footer />
    </>
  );
} 