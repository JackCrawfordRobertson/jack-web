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

const MiddelEast = () => {
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
                        Middle East &nbsp;&nbsp;&nbsp;&nbsp; Middle East &nbsp;&nbsp;&nbsp;&nbsp; Middle East
                        &nbsp;&nbsp;&nbsp;&nbsp; Middle East &nbsp;&nbsp;&nbsp;&nbsp; Middle East
                        &nbsp;&nbsp;&nbsp;&nbsp; Middle East
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
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449668/Main_Landing_woe1yb.png"
                        alt="Hero Image for my Middle East project"
                        width={1520} // Adjust based on your image
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
                                <span className={styles.infoValue}> 2022</span>
                            </div>
                            <div className={styles.infoField}>
                                <span className={styles.infoLabel}>
                                    <strong>Location:</strong>
                                </span>
                                <span className={styles.infoValue}>
                                    {" "}
                                    GCD, Central Saint Martins
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
                            <IconButton
                                href="https://your-live-site-link.com"
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
                        In 2021, I observed a noticeable decline in Western media coverage of conflicts in the Middle East. This prompted me to pursue my dissertation, “A New Way of Seeing: Visualizing the Middle East Wars.” In this work, I examined how information design can deepen our understanding of the human and political scale of impact, destruction and displacement in the region. As part of my research, I conducted a series of workshops where participants filled over 200 meters of scrolls with data. Each dot on the scrolls represented a civilan life lost in the Middle East conflicts, while participants also shared their knowledge and perspectives, illustrating the scale and complexity of the wars.
                        </p>
                    </div>
                </div>

                {/* Two-Column Grid */}
                <div className={styles.twoColumnGrid}>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107946/image2_anhedj.png"
                            alt="First Grid Image of my Middle East project"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107946/image3_w2kcfm.png"
                            alt="Second Grid Image of my Middle East project"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107946/image1_mgf1z9.png"
                            alt= "Third Grid Image of my Middle East project"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107945/image5_u4xjin.png"
                            alt="Fourth Grid Image of my Middle East project"
                            width={600}
                            height={400}
                            className={styles.gridImage}
                        />
                    </div>

                    <div className={styles.gridItem}>
                        <Image
                            src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727107945/image5_u4xjin.png"
                            alt="Fifth Grid Image of my Middle East project"
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
                    quote={
                        <>
                            'Jack’s work demonstrates a clear, in-depth analysis of his creative and ethical position in
                            relation to information design, especially concerning destruction and displacement in the
                            Middle East.
                            <b> - Kira Salter, Course Leader'</b>
                        </>
                    }
                    imageUrl="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727283850/Central_Saint_Martins_College_of_Arts_and_Design_King_27s_Cross_bdf4rf.jpg" // Replace with your image URL
                    altText="Central Saint Martins College of Arts and Design King's Cross"
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

export default MiddelEast;
