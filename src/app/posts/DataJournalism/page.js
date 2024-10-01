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
import { Button } from "@mui/material"; // Import Button from Material UI
import {useMediaQuery} from "@mui/material";

const DataJournalism = () => {
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
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727373725/ICE-Research_Image_1_knwpm0.jpg"
                        alt="Hero image of the data journalism project"
                        width={1920} // Adjust based on your image
                        height={1080} // Adjust based on your image
                        priority={true}
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

<Button
    variant="contained" // You can also use 'outlined' or 'text' based on your design
    href="https://research.ice-hub.biz/"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.viewSiteButton} // Custom styles can still be applied
    aria-label="View Live Site"
    style={{
        marginTop: "20px",
        backgroundColor: "#fff", // Customize the button color
        color: "#3496d3", // Text color
        textTransform: "none", // Prevent uppercase transformation
    }}
>
    View Live Site
</Button>
                    </div>
                </div>

                {/* Project Description */}
                <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionTitle}>
                        <h3>Description</h3>
                    </div>
                    <div className={styles.descriptionText}>
                        <p>
                            As a data journalist for ICE-Hub, I produced articles and insights shaping the corporate
                            events industry, using data-driven storytelling to inform and engage stakeholders.
                            Additionally, I led a research project exploring innovative methods of data communication.
                            By integrating diverse data sources and crafting a structured narrative, we developed an
                            industry-first dashboard for the corporate events sector, revolutionising how data is
                            interpreted and setting new standards for clarity and engagement.
                        </p>
                    </div>
                </div>

                {/* Two-Column Grid */}
                <div className={styles.twoColumnGrid}>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727702487/Jack3-min_sriu3s.png"
                            alt="First Grid Image for Data Journalism page"
                            width={1920} // Adjust based on your image
                            height={1080} // Adjust based on your image
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727702486/Jack4-min_bqbxqx.png"
                            alt="Second Grid Image for Data Journalism page"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727702484/Jack1-min_xwmkaw.png"
                            alt="Third Grid Image for Data Journalism page"
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
                            'This project redefined how we approached storytelling through data.
                            <b> - Anita Howard, Strategy Director ICE-HUB'</b>
                        </>
                    }
                    imageUrl="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727702652/Anita-Howard_epeyv5.jpg" // Replace with your image URL
                    altText="Image of person who said the quote"
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

export default DataJournalism;
