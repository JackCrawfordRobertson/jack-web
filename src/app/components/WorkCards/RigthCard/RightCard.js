'use client'; // Ensure this is treated as a client-side component in Next.js

import { motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component
import styles from "./RightCard.module.css"; // Import CSS Modules

const RightCard = ({ image, title, description, quote1, quote2 }) => {
  return (
    <motion.div
      className={styles.rightMain} // Use CSS Module class names
      whileHover="hover"
      initial="initial"
      style={{ cursor: "pointer" }}
      
    >
      <div className={styles.rightCard}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>

          {/* Pull Quotes */}
          <div className={styles.pullQuotes}>
            <blockquote className={styles.quote}>{quote1}</blockquote>
            <blockquote className={styles.quote}>{quote2}</blockquote>
          </div>
        </div>
      </div>

      {/* Image with Next.js Image component */}
      <motion.div
        className={styles.rightCardImageContainer} // Container for motion and image
        variants={{
          initial: { scale: 1 },
          hover: { scale: 0.95 },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Replace motion.img with Next.js Image */}
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
                    className={styles.cardImage}
        />
      </motion.div>
    </motion.div>
  );
};

export default RightCard;