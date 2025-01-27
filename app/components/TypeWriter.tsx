"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  { text: "Innovation", color: "text-primary font-bold" },
  { text: "Excellence", color: "text-secondary font-bold" },
  { text: "Creativity", color: "text-accent font-bold" }
];

export default function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[calc(1.5em_+_0.5rem)] relative">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.span
            key={words[index].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`block absolute w-full ${words[index].color} drop-shadow-sm`}
          >
            {words[index].text}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
} 