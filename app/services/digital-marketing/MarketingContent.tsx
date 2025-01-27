"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Eyes from "@/app/components/Eyes";
import MarketingProcessSection from "@/app/components/MarketingProcessSection";
import MarketingReviewSection from "@/app/components/MarketingReviewSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const platforms = [
  { name: "Google Ads", icon: "/icons/google-ads.svg" },
  { name: "Meta Ads", icon: "/icons/meta-ads.svg" },
  { name: "LinkedIn", icon: "/icons/linkedin.svg" },
  { name: "Twitter Ads", icon: "/icons/twitter-ads.svg" },
  { name: "TikTok Ads", icon: "/icons/tiktok-ads.svg" },
  { name: "Analytics", icon: "/icons/analytics.svg" },
];

export default function MarketingContent() {
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
                Data-Driven Marketing Solutions
              </motion.p>

              {/* Title */}
              <motion.h1 
                {...fadeIn}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-ubuntu)] tracking-tight"
              >
                Grow Your Business
                <br />
                Online<Eyes /> Today
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mt-4"
              >
                Transform your online presence with data-driven digital marketing strategies. 
                Our expert team delivers measurable results through SEO, social media, and targeted campaigns.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <button className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-primary/25">
                  Get Free Audit
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-primary/20 hover:border-primary/30 font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-primary/5">
                  View Case Studies
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
              >
                {[
                  { number: "300%", label: "Average ROI" },
                  { number: "10M+", label: "Ad Spend Managed" },
                  { number: "95%", label: "Client Retention" },
                  { number: "24/7", label: "Campaign Monitoring" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Marketing Platforms */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.5 }}
                className="pt-16"
              >
                <h3 className="text-lg font-medium text-foreground/80 mb-8">
                  Platforms We Work With
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                  {platforms.map((platform) => (
                    <div 
                      key={platform.name}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-16 h-16 rounded-xl bg-background p-3 border border-primary/10 group-hover:border-primary/30 transition-colors">
                        <img
                          src={platform.icon}
                          alt={platform.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                        {platform.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <MarketingProcessSection />

        {/* Review Section */}
        <MarketingReviewSection />
      </main>
      <Footer />
    </>
  );
} 