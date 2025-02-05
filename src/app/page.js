import Link from "next/link";
import styles from "./page.module.css"; // Your custom CSS file

// Import your components
import TopScreenQuote from "./components/FullScreenComponent/TopScreenQuote";
import LeftCard from "./components/WorkCards/LeftCard/LeftCard";
import RightCard from "./components/WorkCards/RigthCard/RightCard";
import Play from "./components/WorkCards/Play/Play";
import FunSection from "./components/FunSection/FunSection";
import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import Divider from "@mui/material/Divider";
import CallToAction from "./components/CallToAction/CallToAction";


export default function Home() {
    return (
        <>
            {/* Main page content */}
            <main className={styles.main}>
                <TopScreenQuote />
                <div className={styles.homeTopContainer}>
                    <div className={styles.title}>What I'm doing.</div>

                    <Divider
                        sx={{
                            backgroundColor: "white", // Set color to white
                            height: "2px", // Set height to 1px
                            width: "100%", // Full width
                        }}
                    />

                    <Link href="/posts/DataJournalism" passHref>
                        <LeftCard
                            image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449663/Main-4_tv0vto.png" // Optimized Cloudinary URL
                            title="Digital Strategist"
                            description="Working with ICE-HUB to craft new ways of data storytelling."
                            quote1="Brand Perception"
                            quote2="Sustainability Goals"
                        />
                    </Link>

                    <Link href="/posts/WrittenWork" passHref>
                        <RightCard
                            image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449670/Main_lplvgj.png"
                            title="Written Work"
                            description="Discover my weekly articles and design stories, where I share fresh insights on climate, water, sustainability, and beyond."
                            quote1="Narrative"
                            quote2="Data investigation"
                        />
                    </Link>

                    <FunSection />
                    <Divider
                        sx={{
                            backgroundColor: "white", // Set color to white
                            height: "2px", // Set height to 1px
                            width: "100%", // Full width
                            marginBottom: "20px",
                        }}
                    />
                    <Play />

                    <div className={styles.title}>What I've done.</div>

                    <Divider
                        sx={{
                            backgroundColor: "white", // Set color to white
                            height: "2px", // Set height to 1px
                            width: "100%", // Full width
                        }}
                    />

                    <Link href="/posts/Maya" passHref>
                        <LeftCard
                            image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449666/MainMaya_loyeb3.png"
                            title="Maya"
                            description="Maya redefines environmental communication by transforming complex data into clear, actionable insights, fostering collaboration to address water scarcity in the Middle East."
                            quote1="Infomation Design"
                            quote2="Communication Strategy"
                        />
                    </Link>

                    <Link href="/posts/Advertising" passHref>
                    <RightCard
                        image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449658/Main-3_dpbvls.png"
                        title="Advertising"
                        description="Working with brands like HSBC and the Royal Opera House, I helped shape stories through bold branding and creative innovation."
                        quote1="Production"
                        quote2="Creative Communication"
                    />
                    </Link>

                    <Link href="/posts/MiddelEast" passHref>
                        <LeftCard
                          image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449659/wholebook_oj5bln.jpg"
                            title="Middle East"
                            description="In 2021, I explored how information design can reveal the human and political impact of Middle East conflicts through data-driven visualisation and collaborative workshops."
                            quote1="Communicating Complexity"
                            quote2="Workshoping"
                        />
                    </Link>
                  
                   
                    <Divider
                        sx={{
                            backgroundColor: "white", // Set color to white
                            height: "2px", // Set height to 1px
                            width: "100%", // Full width
                            marginBottom: "20px",
                        }}
                    />

                    <CallToAction />

                    <Divider
                        sx={{
                            backgroundColor: "white", // Set color to white
                            height: "2px", // Set height to 1px
                            width: "100%", // Full width
                            marginBottom: "20px",
                        }}
                    />
                </div>
            </main>

            {/* Render the FloatingLogo */}
            <FloatingLogo />
        </>
    );
}
