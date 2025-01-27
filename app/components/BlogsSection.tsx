"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const blogs = [
  {
    title: "The Future of AI Avatars in Digital Marketing",
    excerpt: "Discover how AI-powered avatars are revolutionizing brand communication and customer engagement in the digital space.",
    image: "/images/blogs/ai-marketing.jpg",
    category: "AI Technology",
    readTime: "5 min read",
    date: "Oct 15, 2023"
  },
  {
    title: "Creating Authentic Brand Personas with AI",
    excerpt: "Learn how businesses are leveraging AI avatars to build more authentic and relatable brand personalities.",
    image: "/images/blogs/brand-persona.jpg",
    category: "Branding",
    readTime: "4 min read",
    date: "Oct 12, 2023"
  },
  {
    title: "Best Practices for AI Avatar Integration",
    excerpt: "Expert tips on seamlessly integrating AI avatars into your existing digital marketing strategy.",
    image: "/images/blogs/integration.jpg",
    category: "Best Practices",
    readTime: "6 min read",
    date: "Oct 8, 2023"
  }
];

export default function BlogsSection() {
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
            Latest Insights
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in AI avatar technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-background rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-colors">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/5 text-primary">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-4 text-foreground/60">
                      <span>{blog.readTime}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="mt-6 flex items-center text-primary">
                    <span className="font-medium">Read More</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 rounded-full border border-primary/30 hover:bg-primary/5 font-medium transition-all duration-300">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
} 