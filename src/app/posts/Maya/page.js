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
import {useMediaQuery} from "@mui/material";

const Maya = () => {
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
                        Maya &nbsp;&nbsp;&nbsp;&nbsp; Maya &nbsp;&nbsp;&nbsp;&nbsp; Maya
                        &nbsp;&nbsp;&nbsp;&nbsp; Maya &nbsp;&nbsp;&nbsp;&nbsp; Maya
                        &nbsp;&nbsp;&nbsp;&nbsp; Maya &nbsp;&nbsp;&nbsp;&nbsp; Maya &nbsp;&nbsp;&nbsp;&nbsp; Maya
                        &nbsp;&nbsp;&nbsp;&nbsp; Maya &nbsp;&nbsp;&nbsp;&nbsp; Maya
                        &nbsp;&nbsp;&nbsp;&nbsp; Maya &nbsp;&nbsp;&nbsp;&nbsp; Maya
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
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449660/Main_LandingMaya_vvzthe.png"
                        alt="Hero Image for Maya"
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
                                    <strong>Location:</strong>
                                </span>
                                <span className={styles.infoValue}>
                                    {" "}
                                    MA Royal College of Art
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
                        {true ? ( // Set this to `false` when you want to hide the button
                            <IconButton
                                href="https://maya.jack-robertson.co.uk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.viewSiteButton}
                                aria-label="View Live Site"
                            >
                                View Live Site
                            </IconButton>
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
                        While studying for my MA in Digital Direction at the Royal College of Art, I focused on streamlining the pitching process between NGOs and international donors to secure funding for addressing water depletion caused by climate change. This led to the development of Maya, an innovative web-based platform that translates complex environmental data into actionable insights. Maya transforms dense water case studies from the Levant into accessible, design-driven narratives, facilitating better communication among stakeholders. After successful beta testing, Maya is now poised for expansion, aiming to empower global experts and communities in tackling the pressing issue of water scarcity.
                        </p>
                    </div>
                </div>

                {/* Two-Column Grid */}
                <div className={styles.twoColumnGrid}>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727703293/Jack4-min_yhv0v9.png"
                            alt="First Grid Image of my Maya project"
                            width={1920} // Adjust based on your image
                            height={1080} // Adjust based on your image
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727703295/Jack1-min_a4jkxd.png"
                            alt="Second Grid Image of my Maya project"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727703297/Jack3-min_lvac56.png"
                            alt= "Third Grid Image of my Maya project"
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
                            'Jack’s work demonstrates a clear, in-depth analysis of his creative and ethical position in
                            relation to information design, especially concerning destruction and displacement in the
                            Middle East.
                            <b> - Supervisor, MA Digital Direction'</b>
                        </>
                    }
                    imageUrl="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727703615/royal-college-of-art-herzog-and-de-meuron_2_hfmzij.jpg" // Replace with your image URL
                    altText="Royal College of Art Building"
                />

                {/* Call to Action */}
                <IconButton
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
                </IconButton>
            </main>
        </>
    );
};

export default Maya;
