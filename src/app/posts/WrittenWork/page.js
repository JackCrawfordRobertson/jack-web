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
import Button from "@mui/material/Button";
import {useMediaQuery} from "@mui/material";

const WrittenWork = () => {
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
                        Written Work &nbsp;&nbsp;&nbsp;&nbsp; Written Work &nbsp;&nbsp;&nbsp;&nbsp; Written Work
                        &nbsp;&nbsp;&nbsp;&nbsp; Written Work &nbsp;&nbsp;&nbsp;&nbsp; Written Work
                        &nbsp;&nbsp;&nbsp;&nbsp; Written Work
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
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449671/MainLanding_jw3v6e.png"
                        alt="Hero Image for My Written Work"
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
                        {true ? ( // Set this to `false` when you want to hide the button
                            <Button
                            variant="contained" // You can use 'contained' or 'outlined'
                            href="https://written.jack-robertson.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Live Site"
                            style={{
                                backgroundColor: "#fff", // Customise the button background color to white
                                fontSize: "1.2rem", // Set the font size to match your theme
                                color: "#3496d3", // Set the text color to match your theme
                                textTransform: "none", // Prevent uppercase transformation of text
                                padding: "12px 20px", // Add consistent padding for the button
                                borderRadius: "12px", // Rounded corners for the button
                                fontWeight: "bold", // Bold text
                                boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)", // Subtle shadow
                                transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth transition effects
                            }}
                            onMouseOver={() => (document.body.style.cursor = 'pointer')}
                            onMouseOut={() => (document.body.style.cursor = 'default')}
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
                        Explore my portfolio of written work, where I delve into a range of interconnected design narratives and systems, including Climate, Water, and Sustainability. Each article offers my unique insights and perspectives on these pressing issues and more. With new content released weekly, you’ll find an evolving exploration of topics at the intersection of technology, design, and environmental responsibility. Whether it’s about innovative solutions or deeper societal implications, my work aims to provoke thought and inspire action. Check back every week for fresh ideas and engaging content that reflects my ongoing research and creative exploration.
                        </p>
                    </div>
                </div>

                {/* Two-Column Grid */}
                <div className={styles.twoColumnGrid}>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449662/Jack1_min_xqwgom.png"
                            alt="First Grid Image of my Written Work portfolio"
                            width={1920}
                            height={1080}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449665/Jack3_k97uxi.png"
                            alt="Second Grid Image of my Written Work portfolio"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449667/Jack4_oeys5m.png"
                            alt= "Third Grid Image of my Written Work portfolio"
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
                            'Jack’s work offers a thoughtful exploration of the integration of AI within corporate environments, addressing both the potential benefits and the organisational barriers that may impact its widespread adoption.
                            <b> - LinkedIn Commenter'</b>
                        </>
                    }
                    imageUrl="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727698909/Linkedinlogo_he4taa.png"

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

export default WrittenWork;
