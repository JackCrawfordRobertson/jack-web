"use client"; // Mark the whole component as client-side

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation"; // Import for navigation
import Image from "next/image";
import Marquee from "react-fast-marquee"; // Import the library
import {IconButton} from "@mui/material"; // Material UI button
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Material UI back icon
import styles from "./ProjectPage.module.css"; // Adjust path for your CSS
import {motion, AnimatePresence} from "framer-motion"; // For animations
import LoadingScreenPage from "../../components/LoadingScreen/LoadingScreenPage"; // Import the loading screen
import QuoteWithImage from "./QuoteWithImage";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from '@mui/material';


const DataJournalism = () => {
    const router = useRouter();
    const [isDesktop, setIsDesktop] = useState(true);
    const isMobile = useMediaQuery('(max-width:768px)');


    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768); // Adjust 768px as needed
        };

        // Set initial value
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);
    }, []);

    // Back button click handler
    const handleBackClick = () => {
        router.push("/");
    };

    return (
        <>
            {/* Loading Screen */}
            <LoadingScreenPage />
            <div className={styles.marqueeContainer}>
                <Marquee gradient={false} speed={50}>
                    <span className={styles.marqueeText}>
                        Data Journalism &nbsp;&nbsp;&nbsp;&nbsp; Data Journalism &nbsp;&nbsp;&nbsp;&nbsp; Data
                        Journalism &nbsp;&nbsp;&nbsp;&nbsp; Data Journalism &nbsp;&nbsp;&nbsp;&nbsp; Data Journalism
                        &nbsp;&nbsp;&nbsp;&nbsp; Data Journalism
                    </span>
                </Marquee>
            </div>

            <main className={styles.dataJournalismMain}>
                {/* Hero Image */}
                <div className={styles.sectionOne}>
                    <div className={styles.backButtonContainer}>
                        <IconButton onClick={handleBackClick} aria-label="back to home">
                            <ArrowBackIcon />
                        </IconButton>
                    </div>
                    <Image
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107948/image6_oxggss.png"
                        alt="Hero Image"
                        width={1920} // Adjust based on your image
                        height={1080} // Adjust based on your image
                        className={styles.heroImage}
                    />

                    {/* Info Container */}
                    <div className={styles.infoContainer}>
                        <div className={styles.infoFields}>
                            <div className={styles.infoField}>
                                <span className={styles.infoLabel}>
                                    <strong>Year:</strong>
                                </span>
                                <span className={styles.infoValue}> 2024</span>
                            </div>
                            <div className={styles.infoField}>
                                <span className={styles.infoLabel}>
                                    <strong>Client:</strong>
                                </span>
                                <span className={styles.infoValue}> ICE Corporate Events</span>
                            </div>
                        </div>
                        {/* Down arrow for desktop */}

                        {/* Unclickable Scroll Pill */}
                        {isDesktop && (
                            <motion.div
                                className={styles.scrollPill}
                                initial={{opacity: 0, y: -20}} // Start with invisible and above position
                                animate={{opacity: 1, y: 0}} // Animate to visible and normal position
                                transition={{duration: 1.5, ease: "easeOut"}} // Smooth transition
                            >
                                <span className={styles.arrowDown}>↓</span>
                            </motion.div>
                        )}

                        <IconButton
                            href="https://your-live-site-link.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.viewSiteButton}
                            aria-label="View Live Site"
                        >
                            View Live Site
                        </IconButton>
                    </div>
                </div>

                {/* Project Description */}
                <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionTitle}>
                        <h3>Description</h3>
                    </div>
                    <div className={styles.descriptionText}>
                        <p>
                            This project focused on exploring innovative ways of data storytelling in the corporate
                            events sector. By integrating various data sources and using a clear narrative, we delivered
                            insights that reached a broader audience.
                        </p>
                    </div>
                </div>

                {/* Two-Column Grid */}
                <div className={styles.twoColumnGrid}>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107946/image2_anhedj.png"
                            alt="Image 1"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107946/image3_w2kcfm.png"
                            alt="Image 2"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107946/image1_mgf1z9.png"
                            alt="Image 3"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107945/image5_u4xjin.png"
                            alt="Image 4"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>

                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107945/image5_u4xjin.png"
                            alt="Image 4"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                     
                    </div>
                    
                </div>

                <Divider
            sx={{
                backgroundColor: "#3496d3", // Divider color
                height: "2px", // Set height
                width: isMobile ? "100%" : "80%", // 100% on mobile, 80% on desktop
                marginTop: "1em", // Margin top
                marginBottom: "1em", // Margin bottom
            }}
        />

                {/* Project Quotes */}
                <QuoteWithImage
                    quote="'This project redefined how we approached storytelling through data.'"
                    imageUrl="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107946/image1_mgf1z9.png" // Replace with your image URL
                    altText="Data storytelling illustration"
                />

                {/* Call to Action */}
                <IconButton
                    onClick={handleBackClick}
                    aria-label="back to home"
                    sx={{
                        backgroundColor: "#3496d3",
                        borderRadius: "30px",
                        color: "#fff",
                        padding: "10px 20px",
                        fontSize: "1.1rem",
                        "&:hover": {
                            backgroundColor: "#2678a6",
                            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                        },
                        "@media (max-width: 768px)": {
                            width: "100%",
                            padding: "12px 15px",
                            fontSize: "0.8rem",
                            boxShadow: "none",
                        },
                    }}
                >
                    View More Projects
                </IconButton>
            </main>
        </>
    );
};

export default DataJournalism;
