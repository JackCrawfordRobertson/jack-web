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
        "for anyone": "I'm a data journalist specialising in making payments and fintech intelligence accessible to everyone. I transform complex topics like merchant payments, financial crime, and digital inclusion into clear, compelling stories that help you navigate the evolving payments landscape.",
        "for designers": "I combine data-driven storytelling with strategic analysis to make challenging payments and fintech topics understandable. My work in fraud prevention, regulatory compliance, and digital commerce innovation uses powerful visualisations to turn complex data into compelling narratives.",
        "for recruiters": "I'm a data journalist with expertise in payments intelligence, merchant payments, financial crime prevention, and digital inclusion. I transform industry data into actionable insights that drive meaningful conversations among payments leaders and help organisations navigate the fintech landscape.",
        "for engineers": "I'm not a {software engineer} / but I know how to {communicate payments intelligence}; I speak {fluently} with data & narrative // {merchant payments, fraud prevention, regulatory intelligence, inclusion} => {accessible, actionable insights for stakeholders}.",
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