"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Eyes from "@/app/components/Eyes";
import PackageProcessSection from "@/app/components/PackageProcessSection";
import PackageReviewSection from "@/app/components/PackageReviewSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const tools = [
  { name: "Adobe Illustrator", icon: "/icons/illustrator.svg" },
  { name: "Adobe Photoshop", icon: "/icons/photoshop.svg" },
  { name: "Adobe InDesign", icon: "/icons/indesign.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Blender", icon: "/icons/blender.svg" },
  { name: "Sketch", icon: "/icons/sketch.svg" },
];

export default function PackageDesignContent() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center pt-40 sm:pt-48 pb-20 px-4 sm:px-6 lg:px-8">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          
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
                className="text-accent font-medium"
              >
                Creative Packaging Solutions
              </motion.p>

              {/* Title */}
              <motion.h1 
                {...fadeIn}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-ubuntu)] tracking-tight"
              >
                Make Your Products
                <br />
                Stand Out<Eyes /> Today
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mt-4"
              >
                Create memorable packaging designs that capture attention and drive sales. 
                Our expert team combines creativity with strategic thinking to deliver impactful solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <button className="px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-accent/25">
                  Start Your Project
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-accent/20 hover:border-accent/30 font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-accent/5">
                  View Portfolio
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
              >
                {[
                  { number: "250+", label: "Packages Designed" },
                  { number: "97%", label: "Client Satisfaction" },
                  { number: "15+", label: "Design Awards" },
                  { number: "100%", label: "Unique Designs" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-accent">{stat.number}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Design Tools */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.5 }}
                className="pt-16"
              >
                <h3 className="text-lg font-medium text-foreground/80 mb-8">
                  Design Tools We Use
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                  {tools.map((tool) => (
                    <div 
                      key={tool.name}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-16 h-16 rounded-xl bg-background p-3 border border-accent/10 group-hover:border-accent/30 transition-colors">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <PackageProcessSection />

        {/* Review Section */}
        <PackageReviewSection />
      </main>
      <Footer />
    </>
  );
} 