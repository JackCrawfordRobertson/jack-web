'use client'; // Client-side component

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import styles from "./TopScreenQuote.module.css"; // Use CSS Modules for styling

const FullScreenComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("for anyone");

  const quotes = {
    "for anyone":
      "I explore how storytelling can unravel complex systems like economics and politics. Through playfulness and curiosity, I create engaging experiences to help people better understand the world around us.",
    "for designers":
      "I use storytelling and design to make complex systems like politics and economics more accessible. By blending creativity with curiosity, I push the boundaries of innovative, meaningful experiences.",
    "for recruiters":
      "As an information designer, I transform complex systems into engaging narratives, from economics to politics. I thrive on using creativity and design thinking to make real-world impacts through collaborative work.",
    "for engineers":
      "I'm {not_a_software_engineer}, but I know how to /communicate complex systems like {Social Science} && {Climate Change}. I speak 'fluently' with developers, translating ideas into engaging, interactive experiences.",
  };

  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.centeredDiv}>
        <div className={styles.clickableTexts}>
          {Object.keys(quotes).map((category) => (
            <span
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={category === selectedCategory ? styles.active : ""}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          ))}
        </div>
        <div className={styles.quoteContainer}>
          <strong>Hi, I'm Jack! </strong>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className={styles.quoteTextAnimate}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.3 },
                y: { duration: 0.3 },
              }}
            >
              {quotes[selectedCategory]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Unclickable Scroll Pill */}
      <motion.div 
        className={styles.scrollPill}
      >
        <span className={styles.arrowDown}>↓</span>
      </motion.div>
    </div>
  );
};

export default FullScreenComponent;