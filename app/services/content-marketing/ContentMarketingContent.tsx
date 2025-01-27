"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Eyes from "@/app/components/Eyes";
import ContentProcessSection from "@/app/components/ContentProcessSection";
import ContentReviewSection from "@/app/components/ContentReviewSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const contentTypes = [
  { name: "Blog Posts", icon: "/icons/blog.svg" },
  { name: "Social Media", icon: "/icons/social.svg" },
  { name: "Whitepapers", icon: "/icons/whitepaper.svg" },
  { name: "Video Scripts", icon: "/icons/video.svg" },
  { name: "Newsletters", icon: "/icons/newsletter.svg" },
  { name: "Case Studies", icon: "/icons/case-study.svg" },
];

export default function ContentMarketingContent() {
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
                Strategic Content Solutions
              </motion.p>

              {/* Title */}
              <motion.h1 
                {...fadeIn}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-ubuntu)] tracking-tight"
              >
                Tell Your Story
                <br />
                With Impact<Eyes /> Today
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mt-4"
              >
                Create engaging content that resonates with your audience and drives results. 
                Our expert team crafts compelling narratives across all platforms.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <button className="px-8 py-4 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-secondary/25">
                  Start Your Story
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
                  { number: "500+", label: "Articles Published" },
                  { number: "2M+", label: "Content Views" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "45%", label: "Avg. Engagement" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-secondary">{stat.number}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Content Types */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.5 }}
                className="pt-16"
              >
                <h3 className="text-lg font-medium text-foreground/80 mb-8">
                  Content We Create
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                  {contentTypes.map((type) => (
                    <div 
                      key={type.name}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-16 h-16 rounded-xl bg-background p-3 border border-secondary/10 group-hover:border-secondary/30 transition-colors">
                        <img
                          src={type.icon}
                          alt={type.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                        {type.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <ContentProcessSection />

        {/* Review Section */}
        <ContentReviewSection />
      </main>
      <Footer />
    </>
  );
} 