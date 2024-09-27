// components/QuoteWithImage.js

import React from 'react';
import Image from 'next/image';
import styles from './QuoteWithImage.module.css'; // Create this CSS module for styling

const QuoteWithImage = ({ quote, imageUrl, altText }) => {
    return (
        <div className={styles.quoteContainer}>
            <div className={styles.imageContainer}>
                <Image src={imageUrl} alt={altText} width={400} height={400} className={styles.quoteImage} />
            </div>
            <div className={styles.quoteText}>
                <p>{quote}</p>
            </div>
            
        </div>
    );
};

export default QuoteWithImage;