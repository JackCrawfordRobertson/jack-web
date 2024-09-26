// components/LoadingScreen.js
'use client'; // Ensure this is a client-side component

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.css'; // CSS Module for styling
import Image from 'next/image';
import blueLogo from '/public/Blue_Logo.svg'; // Path to your logo

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Hide the loading screen after 0.9 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900); // 900ms for the fade-out duration

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loadingScreen}
          initial={{ opacity: 1 }} // Loading screen starts fully visible
          exit={{ opacity: 0 }}    // Fade out the loading screen
          transition={{ duration: 0.9 }} // Fade-out duration set to 0.9 seconds
        >
          <motion.div
            className={styles.logoContainer}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }} // Logo starts slightly smaller and invisible
            animate={{ opacity: 1, scale: 1.1, rotate: 0 }} // Logo gently scales up with a slight rotation
            exit={{ opacity: 0, scale: 0.8, rotate: 0 }} // Logo shrinks back on exit
            transition={{ duration: 0.9, ease: 'easeInOut' }} // Matches the overall screen transition
          >
            <Image
              src={blueLogo}
              alt="Loading Logo"
              width={150} // Adjust the width as needed
              height={150} // Adjust the height as needed
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;