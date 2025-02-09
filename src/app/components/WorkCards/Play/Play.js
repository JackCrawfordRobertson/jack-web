"use client"; // Ensure this is treated as a client-side component in Next.js

import {motion} from "framer-motion";
import Image from "next/image"; // Import Next.js Image component
import styles from "./Play.module.css"; // Import CSS module

const Play = () => {
    return (
        <div className={styles.workCardsContainer}>
            {/* First Work Card */}
            

           

            <motion.a
               href="https://pints.jack-robertson.co.uk/"
               target="_blank" // Opens link in a new tab
               rel="noopener noreferrer" // Security feature to prevent access to window.opener
               className={styles.workCard}
               whileHover="hover" // Apply hover interaction to the entire card
               initial="initial"
            >
                <motion.div
                    className={styles.imageContainer}
                    variants={{
                        initial: {scale: 1}, // Image at normal scale initially
                        hover: {scale: 0.95}, // Slight scaling effect on hover
                    }}
                    transition={{type: "spring", stiffness: 300}}
                >
                    <Image
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449657/Main-2_luebxh.png"
                        alt="Pints app hero Image"
                        fill
                        className={styles.workCardImage}
                    />
                </motion.div>
                <div className={styles.workCardSub}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.workCardTitle}>PINTS!</h3>
                        <p className={styles.workCardDescription}>Looking for a cheap beer in central London but still want a nice pub? Pints has you covered, share your location and discover the three cheapest pints within 1,000 meters of you. Best viewed on mobile.</p>
                    </div>
                </div>
            </motion.a>

            <motion.a
                href="https://aspect.jack-robertson.co.uk/" // Add link target here
                className={styles.workCard}
                target="_blank" // Opens link in a new tab
                rel="noopener noreferrer" // Security feature to prevent access to window.opener
                whileHover="hover" // Apply hover interaction to the entire card
                initial="initial"
            >
                <motion.div
                    className={styles.imageContainer}
                    variants={{
                        initial: {scale: 1}, // Image at normal scale initially
                        hover: {scale: 0.95}, // Slight scaling effect on hover
                    }}
                    transition={{type: "spring", stiffness: 300}}
                >
                    <Image
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1734696763/Compress_PNG_Aspect_rxhuk2.png"
                        alt="Aspect hero Image"
                        fill
                      
                        className={styles.workCardImage}
                    />
                </motion.div>
                <div className={styles.workCardSub}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.workCardTitle}>Aspect</h3>
                        <p className={styles.workCardDescription}>Your house, your movies, no arguments. Aspect is the app that makes choosing tonight’s film as easy as hitting play.</p>
                    </div>
                </div>
            </motion.a>

            <motion.a
                href="https://www.apple.com/uk/home-app/" // Add link target here
                className={styles.workCard}
                target="_blank" // Opens link in a new tab
                rel="noopener noreferrer" // Security feature to prevent access to window.opener
                whileHover="hover" // Apply hover interaction to the entire card
                initial="initial"
            >
                <motion.div
                    className={styles.imageContainer}
                    variants={{
                        initial: {scale: 1}, // Image at normal scale initially
                        hover: {scale: 0.95}, // Slight scaling effect on hover
                    }}
                    transition={{type: "spring", stiffness: 300}}
                >
                    <Image
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1731436228/Cover_Image_Compress_PNG_bsumda.png"
                        alt="Project 3"
                        fill
                    
                        className={styles.workCardImage}
                    />
                </motion.div>
                <div className={styles.workCardSub}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.workCardTitle}>Home Automation</h3>
                        <p className={styles.workCardDescription}>I powered up my home with Python and Apple HomeKit, adding smart temperature tracking and security features to keep things comfy and secure!</p>
                    </div>
                </div>
            </motion.a>
        </div>
    );
};

export default Play;
