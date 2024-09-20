'use client'; // Required to make this a client-side component in Next.js

import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component
import styles from './LeftCard.module.css'; // Import CSS Modules

const LeftCard = ({ image, title, description, quote1, quote2 }) => {
  return (
    <motion.div
      className={styles.main}  // Use CSS module class
      whileHover="hover"       // Apply hover state when main container is hovered
      initial="initial"        // Set initial animation state
      style={{ cursor: 'pointer' }} // Change cursor to pointer on hover
    >
      <motion.div
        className={styles.leftCardImageContainer} // Container for motion and image
        variants={{
          initial: { scale: 1 },    // Image at normal scale initially
          hover: { scale: 0.95 },   // Scale down when hovered
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Next.js Image component with layout="fill" */}
        <Image
  src={image}
  alt={title}
  fill
  style={{ objectFit: 'cover' }}
  className={styles.leftCardImage}
/>
      </motion.div>

      <div className={styles.card}>  {/* Use CSS module class */}
        <div className={styles.cardContent}>  {/* Use CSS module class */}
          <h3 className={styles.cardTitle}>{title}</h3>  {/* Use CSS module class */}
          <p className={styles.cardDescription}>{description}</p>  {/* Use CSS module class */}

          {/* Pull Quotes */}
          <div className={styles.pullQuotes}>  {/* Use CSS module class */}
            <blockquote className={styles.quote}>{quote1}</blockquote>  {/* Use CSS module class */}
            <blockquote className={styles.quote}>{quote2}</blockquote>  {/* Use CSS module class */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeftCard;