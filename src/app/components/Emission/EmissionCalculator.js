import React from 'react';
import styles from './badge-styles.module.css'; // Using CSS modules for styling

function EmissionCalculator() {
  return (
    <div className={styles.carbonButton}>
      <div className={styles.carbonText}>
        <a 
          href="https://www.websitecarbon.com/website/jack-robertson-co-uk/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          0.10g of CO2/view
        </a>
        <a 
          href="https://www.websitecarbon.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.websiteCarbon}
        >
          Website Carbon
        </a>
      </div>
      <div className={styles.carbonRating}>
        <p>Cleaner than 90% of pages tested</p>
      </div>
    </div>
  );
}

export default EmissionCalculator;