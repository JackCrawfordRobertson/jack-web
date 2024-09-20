'use client'; // Ensure it's a client-side component

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './FunSection.module.css'; // Import the CSS module for styling

const FunSection = () => {
  const controls = useAnimation(); // Framer Motion animation controls

  // Intersection Observer to trigger the animation when the section is halfway in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible'); // Start animation when in view
        } else {
          controls.start('hidden'); // Animate out when scrolled out
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the section is visible (halfway)
    );

    const element = document.getElementById('fun-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls]);

  // Animation variants for each letter, with weight transition from light to bold
  const letterVariants = {
    hidden: { opacity: 0, y: 60, fontWeight: 300 }, // Start off lighter and further down
    visible: (i) => ({
      opacity: 1,
      y: 0,
      fontWeight: 700, // Animate from light to bold
      transition: {
        delay: i * 0.03, // Faster delay for a quicker flow
        duration: 0.6,   // Smooth transition for the weight and position change
        ease: [0.25, 0.8, 0.25, 1], // A soft ease for smooth animation
      },
    }),
  };

  return (
    <div className={styles.funSection} id="fun-section">
      <motion.div
        className={styles.funText}
        initial="hidden"
        animate={controls} // Use controls to animate in and out
        variants={{
          hidden: { opacity: 0, scale: 0.9, fontWeight: 300 }, // Slight scale and light weight initially
          visible: { opacity: 1, scale: 1, fontWeight: 700 },  // Scale up to normal size and bold
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }} // Smooth easing for the whole text block
      >
        {'What I Do For Fun!'.split('').map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            className={styles.letter}
          >
            {letter === ' ' ? '\u00A0' : letter} {/* Add space for letters */}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default FunSection;