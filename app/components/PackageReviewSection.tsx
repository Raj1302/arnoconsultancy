"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const reviews = [
  {
    name: "Rachel Chen",
    handle: "@rachelc",
    role: "Product Manager at EcoGoods",
    image: "/images/reviews/review1.jpg",
    content: "The packaging design exceeded our expectations! The attention to sustainability and brand identity was remarkable. 🌿",
    likes: 428,
    date: "2 days ago"
  },
  {
    name: "Marcus Thompson",
    handle: "@marcust",
    role: "CEO at Luxury Brands Co",
    image: "/images/reviews/review2.jpg",
    content: "Their innovative approach to luxury packaging helped our products stand out in a crowded market. Exceptional work! ✨",
    likes: 356,
    date: "1 week ago"
  },
  {
    name: "Sofia Rodriguez",
    handle: "@sofiar",
    role: "Creative Director at BeautyBox",
    image: "/images/reviews/review3.jpg",
    content: "The 3D prototyping process was invaluable. It saved us time and ensured the final product was perfect! 📦",
    likes: 512,
    date: "3 days ago"
  },
  {
    name: "Alex Kim",
    handle: "@alexk",
    role: "Founder at GreenPack",
    image: "/images/reviews/review4.jpg",
    content: "Their sustainable packaging solutions helped us reduce waste while maintaining premium quality. Amazing team! 🌱",
    likes: 389,
    date: "5 days ago"
  },
  {
    name: "Emma Watson",
    handle: "@emmaw",
    role: "Marketing Head at FoodCo",
    image: "/images/reviews/review5.jpg",
    content: "The packaging design increased our shelf presence significantly. Sales have improved by 40%! 📈",
    likes: 445,
    date: "1 day ago"
  },
  {
    name: "David Miller",
    handle: "@davidm",
    role: "Operations Manager at BevCo",
    image: "/images/reviews/review6.jpg",
    content: "Their attention to production requirements and quality control was impressive. Smooth process from start to finish! 🎯",
    likes: 334,
    date: "4 days ago"
  }
];

export default function PackageReviewSection() {
  return (
    <section className="relative bg-background py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-foreground/70">
            See what our clients say about their packaging design experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background rounded-xl p-6 border border-accent/10 hover:border-accent/30 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-base truncate">
                          {review.name}
                        </h3>
                        <p className="text-sm text-foreground/50 truncate">
                          {review.handle}
                        </p>
                      </div>
                      <svg 
                        className="w-5 h-5 text-accent/80"
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-foreground/60 mb-3">
                      {review.role}
                    </p>
                    <p className="text-base leading-relaxed mb-3">
                      {review.content}
                    </p>
                    <div className="flex items-center justify-between text-sm text-foreground/50">
                      <div className="flex items-center gap-1">
                        <svg 
                          className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span>{review.likes}</span>
                      </div>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 