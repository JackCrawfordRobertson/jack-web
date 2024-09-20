'use client'; // Ensure this is a client-side component

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './LoadingScreen.module.css'; // CSS Module for styling

import blueLogo from '/public/Blue_Logo.svg'; // Path to your logo

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Hide the loading screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loadingScreen}
          initial={{ opacity: 1 }} // Loading screen starts fully visible
          exit={{ opacity: 0 }} // Fade out the loading screen
          transition={{ duration: 1 }} // Fade-out duration
        >
          <motion.div
            className={styles.logoContainer}
            initial={{ opacity: 0, scale: 0.3, rotate: 0 }} // Logo starts hidden and small
            animate={{ opacity: 1, scale: 1, rotate: 360 }} // Logo becomes visible, spins, and grows
            transition={{
              type: 'spring', // Use spring physics
              stiffness: 80,  // Lower stiffness for a softer bounce
              damping: 20,    // Increase damping to reduce oscillation
              mass: 1,        // A heavier mass will slow down the motion
              duration: 2.5,  // Slow down the entire animation
            }}
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