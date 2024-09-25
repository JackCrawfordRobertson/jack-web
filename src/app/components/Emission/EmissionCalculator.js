'use client';

import React, { useState } from "react";
import { IconButton } from "@mui/material"; // For the button
import { GitHub, LinkedIn } from "@mui/icons-material"; // Material UI icons
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import styles from "./badge-styles.module.css"; // Using CSS modules for styling

function EmissionCalculator() {
    const [copied, setCopied] = useState(false); // State to show copied feedback

    // Function to copy email to clipboard
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('jack@ya-ya.co.uk').then(() => {
            setCopied(true); // Show "Email Copied!" text
            // Reset after 2 seconds
            setTimeout(() => {
                setCopied(false); // Show "Contact" text again
            }, 2000);
        });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.carbonButton}>
                {/* Carbon Information */}
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

                {/* Contact Button and GitHub/LinkedIn Icons */}
                <div className={styles.icons}>
                    <IconButton
                        href="https://github.com/your-username" // Replace with your GitHub link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <GitHub className={styles.icon} />
                    </IconButton>

                    <IconButton
                        href="https://www.linkedin.com/in/your-profile/" // Replace with your LinkedIn profile
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <LinkedIn className={styles.icon} />
                    </IconButton>

                    {/* Motion button with animated text */}
                    <motion.button
                        className={styles.contactButton}
                        onClick={copyEmailToClipboard}
                    >
                        <AnimatePresence initial={false} mode="wait">
                            {copied ? (
                                <motion.span
                                    key="email-copied"
                                    initial={{ opacity: 0, y: -20 }} // Start above
                                    animate={{ opacity: 1, y: 0 }} // Fade in from above
                                    exit={{ opacity: 0, y: 20 }} // Fade out and move down
                                    transition={{ duration: 0.5 }} // Smooth transition
                                >
                                    Email Copied!
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="contact"
                                    initial={{ opacity: 0, y: 20 }} // Start below
                                    animate={{ opacity: 1, y: 0 }} // Fade in from below
                                    exit={{ opacity: 0, y: -20 }} // Fade out and move up
                                    transition={{ duration: 0.5 }} // Smooth transition
                                >
                                    Contact
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}

export default EmissionCalculator;