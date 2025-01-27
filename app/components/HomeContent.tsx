"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TypeWriter from "./TypeWriter";
import Eyes from "./Eyes";
import Carousel from "./Carousel";
import LogoSlider from "./LogoSlider";
import ParallaxSection from "./ParallaxSection";
import ReviewSection from "./ReviewSection";
import ProcessSection from "./ProcessSection";
import BlogsSection from "./BlogsSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const serviceItems = [
    {
      name: "AI Avatars",
      description: "Leverage cutting-edge artificial intelligence to create stunning avatars.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
      image: "/images/services/ai-avatar.webp",
      color: {
        bg: "bg-purple-50",
        border: "rgba(147, 51, 234, 0.2)",
        text: "text-purple-900",
      },
    },
    {
      name: "Web Development",
      description: "Create stunning, responsive websites that engage and convert visitors.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      ),
      image: "/images/services/web-development.jpg",
      color: {
        bg: "bg-blue-50",
        border: "rgba(59, 130, 246, 0.2)",
        text: "text-blue-900",
      },
    },
    {
      name: "Digital Marketing",
      description: "Boost your online presence with data-driven marketing strategies.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      image: "/images/services/digital-marketing.jpg",
      color: {
        bg: "bg-amber-50",
        border: "rgba(245, 158, 11, 0.2)",
        text: "text-amber-900",
      },
    },
    {
      name: "Content Creation",
      description: "Boost Your SEO with High-Quality Content",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      image: "/images/services/content-creation.jpg",
      color: {
        bg: "bg-green-50",
        border: "rgba(34, 197, 94, 0.2)",
        text: "text-green-900",
      },
    },
    {
      name: "Package Design",
      description: "Boost Your Brand with Stunning Package Design",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      image: "/images/services/package-design.jpg",
      color: {
        bg: "bg-orange-50",
        border: "rgba(245, 158, 11, 0.2)",
        text: "text-orange-900",
      },
    },
  ];

export default function HomeContent() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-40 sm:pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-2"
          >
            <motion.h1 
              {...fadeIn}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-ubuntu)] tracking-tight"
            >
              Transform Your Digital 
              <br />
              Presence<Eyes /> With
              <TypeWriter />
            </motion.h1>
            
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mt-4"
            >
              Elevate your brand with cutting-edge AI solutions, stunning web experiences, 
              and strategic digital marketing that sets you apart.
            </motion.p>
          </motion.div>

          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Explore Services
            </button>
            <button className="px-8 py-3 rounded-full border border-foreground/10 hover:bg-primary/10 font-medium transition-all duration-300 transform hover:-translate-y-0.5">
              View Portfolio
            </button>
          </motion.div>
        </div>

        {/* Carousel Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full mt-32 mb-12"
        >
          <Carousel items={serviceItems} />
        </motion.div>
      </section>

      {/* Logo Slider Section */}
      <LogoSlider />

      {/* Parallax Section */}
      <ParallaxSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Review Section */}
      <ReviewSection />

      {/* Blogs Section */}
      <BlogsSection />
    </main>
  );
} 