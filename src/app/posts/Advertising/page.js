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
import { Button } from "@mui/material"; // Import the Button component
import {useMediaQuery} from "@mui/material";

const Advertising = () => {
    const router = useRouter();
    const [isDesktop, setIsDesktop] = useState(true);
    const isMobile = useMediaQuery("(max-width:768px)");

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
                        Advertising &nbsp;&nbsp;&nbsp;&nbsp; Advertising &nbsp;&nbsp;&nbsp;&nbsp; Advertising
                        &nbsp;&nbsp;&nbsp;&nbsp; Advertising &nbsp;&nbsp;&nbsp;&nbsp; Advertising
                        &nbsp;&nbsp;&nbsp;&nbsp; Advertising
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
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449658/Main-3_dpbvls.png"
                        alt="Hero Image for My Advertising"
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
                                <span className={styles.infoValue}>
                                    {" "}
                                    Personal
                                </span>
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

                        {/* Conditional Button with Placeholder */}
                        {false ? ( // Set this to `false` when you want to hide the button
                              <Button
                              variant="contained"
                              href="https://written.jack-robertson.co.uk/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.viewSiteButton}
                              style={{
                                marginTop: "20px",
                                backgroundColor: "#fff", // Customize the button color
                                color: "#3496d3", // Text color
                                textTransform: "none", // Prevent uppercase transformation
                            }}
                          >
                              View Live Site
                          </Button>
                        ) : (
                            <div style={{width: "200px", height: "auto", visibility: "hidden"}}>
                                {/* Placeholder for IconButton */}
                            </div>
                        )}
                    </div>
                </div>

                {/* Project Description */}
                <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionTitle}>
                        <h3>Description</h3>
                    </div>
                    <div className={styles.descriptionText}>
                        <p>
                        During my time at Girardot Design in 2022/2023, I led design efforts for major clients, including Guinness Global Investors (GGI), whose assets under management saw a 150% increase following our advertising campaigns. Over 12 months, GGI’s largest fund, Global Equity Income, grew from £2.4bn to £3.9bn, contributing to the company’s highest sales in its 20-year history. Alongside this, I worked with prestigious brands such as Goldman Sachs and Elmwood Warm Spaces, as well as playing a key role in the rebrand of the Royal Opera House.
                        </p>
                    </div>
                </div>

                {/* Two-Column Grid */}
                <div className={styles.twoColumnGrid}>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727771959/Taxi-min_ipkebg.png"
                            alt="First Grid Image of my Advertising portfolio"
                            width={1920}
                            height={1080}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727771958/Free_A4_Brochure_Mockup_1-min_lkhqcm.png"
                            alt="Second Grid Image of my Advertising portfolio"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727771958/Screenshot_2024-10-01_at_09.29.27-min_tjxztd.png"
                            alt= "Third Grid Image of my Advertising portfolio"
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
                        marginBottom: "4em", // Margin bottom
                    }}
                />

                {/* Project Quotes */}
                <QuoteWithImage
                    quote={
                        <>
                            'Guinness Global Investors’ largest fund grew by £1.5bn in just 12 months, driving the company’s highest sales in its 20-year history.
                            <b> - Marketing Director'</b>
                        </>
                    }
                    imageUrl="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727787084/logo_gjrzu5.svg"

                    altText="LinkedIn is the most important cross-industry professional network around, despite some well-grounded gripes many people have with the interface and service. Everyone serious about their career should have an account. - Internet"
                />

                {/* Call to Action */}
                 <Button
                    onClick={handleBackClick}
                    aria-label="back to home"
                    sx={{
                        backgroundColor: "#3496d3",
                        borderRadius: "30px",
                        color: "#fff",
                        marginTop: "4em",
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
                </Button>
            </main>
        </>
    );
};

export default Advertising;
