"use client"; // Client-side component

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import styles from "./TopScreenQuote.module.css"; // Use CSS Modules for styling

const FullScreenComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState("for anyone");
    const [isMobile, setIsMobile] = useState(false);

    // Detect if the user is on mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Set mobile as true if width is 768px or less
        };

        // Add event listener to handle resize
        window.addEventListener("resize", handleResize);

        // Check on initial render
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const quotes = {
        "for anyone": "I explore how storytelling can unravel complex systems like economics and politics. Through playfulness and curiosity, I create engaging experiences to help people better understand the world around us.",
        "for designers": "I use storytelling, visual communication and design to make complex systems like politics and economics more accessible. By blending creativity with curiosity, I push the boundaries of innovative, meaningful experiences.",
        "for recruiters": "As a strategist, I transform complex systems into engaging narratives, from economics to politics. I thrive on using creativity and design thinking to make real-world impacts through collaborative work.",
        "for engineers": "I’m not a {software engineer} / but I know how to {communicate complex systems}; I speak {fluently} with developers // {translating ideas} => {engaging, interactive experiences}.y",
    };

    return (
        <div className={styles.fullScreenContainer}>
            <div className={styles.centeredDiv}>
                <div className={styles.quoteContainer}>
                    <strong>Hi, I'm Jack!</strong>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            className={styles.quoteTextAnimate}
                            layout // Allow layout changes
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                        >
                            {quotes[selectedCategory]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Clickable text for categories, placed below the quote */}
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
            </div>

            {/* Unclickable Scroll Pill */}
            <motion.div className={styles.scrollPill}>
                <span className={styles.arrowDown}>↓</span>
            </motion.div>
        </div>
    );
};

export default FullScreenComponent;