import Image from "next/image"; // Import Next.js Image component
import Link from "next/link";
import styles from "./page.module.css"; // Your custom CSS file

// Import your components
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import EmissionCalculator from "./components/Emission/EmissionCalculator";
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
            <LoadingScreen />

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

                    <Link href="/project/DataJournalism" passHref>
                        <LeftCard
                            image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449663/Main-4_tv0vto.png" // Optimized Cloudinary URL
                            title="Data Journalism"
                            description="Working with ICE to craft new ways of data storytelling."
                            quote1="This is the first pull quote."
                            quote2="This is the second pull quote."
                        />
                    </Link>

                    <Link href="/project/WrittenWork" passHref>
                        <RightCard
                            image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449670/Main_lplvgj.png"
                            title="Writen Work"
                            description="Explore my weekly articles and design narratives where I share insights on climate, water, sustainability, and related systems."
                            quote1="Narrative"
                            quote2="Data investigation"
                        />
                    </Link>

                    <div className={styles.title}>What I've done.</div>

                    <Divider
                        sx={{
                            backgroundColor: "white", // Set color to white
                            height: "2px", // Set height to 1px
                            width: "100%", // Full width
                        }}
                    />

                    <Link href="/project/Maya" passHref>
                        <LeftCard
                            image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449666/MainMaya_loyeb3.png"
                            title="Maya"
                            description="Working with ICE to craft new ways of data storytelling."
                            quote1="This is the first pull quote."
                            quote2="This is the second pull quote."
                        />
                    </Link>

                    <RightCard
                        image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449658/Main-3_dpbvls.png"
                        title="Advertising"
                        description="Working with ICE to craft new ways of data storytelling in the corporate events world, highlighting and delivering findings to new audiences."
                        quote1="This is the first pull quote."
                        quote2="This is the second pull quote."
                    />

                    <Link href="/project/MiddelEast" passHref>
                        <LeftCard
                            image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1727449659/wholebook_oj5bln.jpg"
                            title="Middle East"
                            description="In 2021, I explored how information design can reveal the human and political impact of Middle East conflicts through data-driven visualisation and collaborative workshops."
                            quote1="Infomation Design"
                            quote2="Workshoping"
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
