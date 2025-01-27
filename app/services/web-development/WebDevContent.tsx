"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Eyes from "@/app/components/Eyes";
import WebDevProcessSection from "@/app/components/WebDevProcessSection";
import WebDevReviewSection from "@/app/components/WebDevReviewSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const technologies = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
];

export default function WebDevContent() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center pt-40 sm:pt-48 pb-20 px-4 sm:px-6 lg:px-8">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
          
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
                className="text-secondary font-medium"
              >
                Modern Web Solutions
              </motion.p>

              {/* Title */}
              <motion.h1 
                {...fadeIn}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-ubuntu)] tracking-tight"
              >
                Elevate Your Online
                <br />
                Presence<Eyes /> Today
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mt-4"
              >
                Create stunning, responsive websites that engage your audience and drive results. 
                Our expert team combines beautiful design with powerful functionality.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <button className="px-8 py-4 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-secondary/25">
                  Start Your Project
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-secondary/20 hover:border-secondary/30 font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-secondary/5">
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
                  { number: "100+", label: "Websites Launched" },
                  { number: "99%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support" },
                  { number: "5s", label: "Avg. Load Time" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-secondary">{stat.number}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Technologies */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.5 }}
                className="pt-16"
              >
                <h3 className="text-lg font-medium text-foreground/80 mb-8">
                  Technologies We Use
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                  {technologies.map((tech) => (
                    <div 
                      key={tech.name}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-16 h-16 rounded-xl bg-background p-3 border border-secondary/10 group-hover:border-secondary/30 transition-colors">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <WebDevProcessSection />

        {/* Review Section */}
        <WebDevReviewSection />
      </main>
      <Footer />
    </>
  );
} 