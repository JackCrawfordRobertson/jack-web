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
import {Button} from "@mui/material"; // Import Button from Material UI
import {useMediaQuery} from "@mui/material";

const PaymentsAssociation = () => {
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
                        The Payments Association &nbsp;&nbsp;&nbsp;&nbsp; The Payments Association &nbsp;&nbsp;&nbsp;&nbsp; The Payments Association &nbsp;&nbsp;&nbsp;&nbsp; The Payments Association
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
                        alt="Hero image of The Payments Association project"
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
                                <span className={styles.infoValue}> 2025</span>
                            </div>
                            <div className={styles.infoField}>
                                <span className={styles.infoLabel}>
                                    <strong>Role:</strong>
                                </span>
                                <span className={styles.infoValue}> Data Journalist</span>
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
                    </div>
                </div>

                {/* Project Description */}
                <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionTitle}>
                        <h3>Description</h3>
                    </div>
                    <div className={styles.descriptionText}>
                        <p>
                            As a Data Journalist at The Payments Association, I investigate and communicate the trends shaping the payments industry. My work bridges the gap between complex data and compelling narratives, ensuring stakeholders understand the implications of emerging payment technologies and market shifts. Beyond research and reporting, I actively speak at industry conferences and host a podcast exploring the stories, strategies, and innovations driving the payments ecosystem forward.
                        </p>
                    </div>
                </div>

                {/* Featured Reports Section */}
                <div className={styles.featuredReportsSection}>
                    <h3 className={styles.reportsTitle}>Featured Research & Insights</h3>

                    <div className={styles.reportsGrid}>
                        {/* Report Card 1: Merchant Regulation Roadmap */}
                        <div className={styles.reportCard}>
                            <div className={styles.reportCardImageContainer}>
                                <Image
                                    src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727702487/Jack3-min_sriu3s.png"
                                    alt="Merchant Regulation Roadmap"
                                    width={400}
                                    height={250}
                                    className={styles.reportCardImage}
                                />
                            </div>
                            <div className={styles.reportCardContent}>
                                <h4 className={styles.reportCardTitle}>Merchant Regulation Roadmap Q4 2025</h4>
                                <p className={styles.reportCardDescription}>
                                    Critical regulatory deadlines and compliance requirements for UK merchants. Covers ISO 20022 migration, payment safeguarding rules, BNPL regulation, and emerging challenges.
                                </p>
                                <Button
                                    variant="contained"
                                    href="https://thepaymentsassociation.org/article/merchant-regulation-roadmap-q4-2025/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Read Merchant Regulation Roadmap"
                                    style={{
                                        backgroundColor: "#3496d3",
                                        color: "#fff",
                                        textTransform: "none",
                                        padding: "8px 16px",
                                        borderRadius: "8px",
                                        fontWeight: "bold",
                                        fontSize: "0.95rem",
                                        marginTop: "12px",
                                    }}
                                >
                                    Read More
                                </Button>
                            </div>
                        </div>

                        {/* Report Card 2: Financial Crime 360 */}
                        <div className={styles.reportCard}>
                            <div className={styles.reportCardImageContainer}>
                                <Image
                                    src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727702486/Jack4-min_bqbxqx.png"
                                    alt="Financial Crime 360 Research"
                                    width={400}
                                    height={250}
                                    className={styles.reportCardImage}
                                />
                            </div>
                            <div className={styles.reportCardContent}>
                                <h4 className={styles.reportCardTitle}>Financial Crime 360: 2025 Registrant Findings</h4>
                                <p className={styles.reportCardDescription}>
                                    Research from 1,618 senior payments leaders on industry responses to financial crime risks. Key finding: 75% identify financial crime as primary concern, with AI viewed as the biggest opportunity.
                                </p>
                                <Button
                                    variant="contained"
                                    href="https://thepaymentsassociation.org/article/2025-financial-crime-360-registrant-findings/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Read Financial Crime 360"
                                    style={{
                                        backgroundColor: "#3496d3",
                                        color: "#fff",
                                        textTransform: "none",
                                        padding: "8px 16px",
                                        borderRadius: "8px",
                                        fontWeight: "bold",
                                        fontSize: "0.95rem",
                                        marginTop: "12px",
                                    }}
                                >
                                    Read More
                                </Button>
                            </div>
                        </div>

                        {/* Report Card 3: FCA Safeguarding Rules */}
                        <div className={styles.reportCard}>
                            <div className={styles.reportCardImageContainer}>
                                <Image
                                    src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727702484/Jack1-min_xwmkaw.png"
                                    alt="FCA Safeguarding Rules"
                                    width={400}
                                    height={250}
                                    className={styles.reportCardImage}
                                />
                            </div>
                            <div className={styles.reportCardContent}>
                                <h4 className={styles.reportCardTitle}>Navigating FCA's New Safeguarding Rules</h4>
                                <p className={styles.reportCardDescription}>
                                    Essential guide to the FCA's new safeguarding framework (PS25/12) effective May 7, 2026. Covers daily reconciliations, monthly reporting, qualified audits, and compliance requirements.
                                </p>
                                <Button
                                    variant="contained"
                                    href="https://thepaymentsassociation.org/article/navigating-fcas-new-safeguarding-rules-for-payments-firms/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Read FCA Safeguarding Rules"
                                    style={{
                                        backgroundColor: "#3496d3",
                                        color: "#fff",
                                        textTransform: "none",
                                        padding: "8px 16px",
                                        borderRadius: "8px",
                                        fontWeight: "bold",
                                        fontSize: "0.95rem",
                                        marginTop: "12px",
                                    }}
                                >
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider
                    sx={{
                        backgroundColor: "#3496d3",
                        height: "2px",
                        width: isMobile ? "100%" : "80%",
                        marginTop: "2em",
                        marginBottom: "4em",
                    }}
                />

                {/* Speaking Section with Gallery */}
                <div className={styles.speakingSection}>
                    <h3 className={styles.sectionTitle}>Speaking at Industry Conferences</h3>
                    <p className={styles.sectionDescription}>
                        I share insights and research findings at leading payments industry conferences, combining storytelling with rigorous data analysis.
                    </p>

                    {/* Condensed Image Gallery for Speaking */}
                    <div className={styles.compactGalleryGrid}>
                        <div className={styles.galleryItem}>
                            <Image
                                src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727702487/Jack3-min_sriu3s.png"
                                alt="Speaking at payments conference"
                                width={400}
                                height={300}
                                className={styles.galleryImage}
                            />
                        </div>
                        <div className={styles.galleryItem}>
                            <Image
                                src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727702486/Jack4-min_bqbxqx.png"
                                alt="Speaking at payments conference"
                                width={400}
                                height={300}
                                className={styles.galleryImage}
                            />
                        </div>
                    </div>
                </div>

                <Divider
                    sx={{
                        backgroundColor: "#3496d3",
                        height: "2px",
                        width: isMobile ? "100%" : "80%",
                        marginTop: "3em",
                        marginBottom: "3em",
                    }}
                />

                {/* Podcast Section with Spotify Embed */}
                <div className={styles.podcastSection}>
                    <div className={styles.podcastContent}>
                        <h3 className={styles.podcastTitle}>Insights Podcast</h3>
                        <p className={styles.podcastSubtitle}>Hosted by Jack Robertson</p>
                        <p className={styles.podcastDescription}>
                            The world of payments and corporate finance is changing at a pace unexperienced before. Join me as host, bringing together expert panels to discuss operational resilience, fraud prevention, regulatory developments, and the future of payments.
                        </p>

                        {/* Spotify Embed */}
                        <div className={styles.spotifyEmbedContainer}>
                            <iframe
                                src="https://open.spotify.com/embed/show/0dHbGv8yY78vqOcPV3aBY6?utm_source=generator"
                                width="100%"
                                height="232"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                className={styles.spotifyEmbed}
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <Button
                    onClick={handleBackClick}
                    aria-label="back to home"
                    sx={{
                        backgroundColor: "#3496d3",
                        borderRadius: "30px",
                        color: "#fff",
                        marginTop: "4em",
                        marginBottom: "2em",
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

export default PaymentsAssociation;
