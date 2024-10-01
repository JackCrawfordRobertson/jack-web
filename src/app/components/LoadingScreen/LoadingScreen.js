'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import blueLogo from '/public/Blue_Logo.svg';
import styles from './LoadingScreen.module.css'; // Create this CSS file for styles

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling when loading
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
      // Re-enable scrolling when loading is complete
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loadingScreen}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.logoContainer}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 20,
              duration: 2.5,
            }}
          >
            <Image
              src={blueLogo}
              alt="Loading Logo"
              width={150}
              height={150}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;