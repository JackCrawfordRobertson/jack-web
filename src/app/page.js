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
import CallToAction from "./components/CallToAction/CallToAction"; // Import the CTA component

// Images should be in the 'public' directory in Next.js
const ba5Image = "/images/Projects/BA/image1.png";

export default function Home() {
    return (
        <>
            {/* Render the LoadingScreen at the top */}
            {/* <LoadingScreen /> */}

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

                    <Link href="/project/datajournalism" passHref>
                        <LeftCard
                            image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1726768155/image5_u37xei.png"
                            title="Data Journalism"
                            description="Working with ICE to craft new ways of data storytelling."
                            quote1="This is the first pull quote."
                            quote2="This is the second pull quote."
                        />
                    </Link>

                    <RightCard
                        image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1726768155/image5_u37xei.png"
                        title="Data Journalism"
                        description="Working with ICE to craft new ways of data storytelling in the corporate events world, highlighting and delivering findings to new audiences."
                        quote1="This is the first pull quote."
                        quote2="This is the second pull quote."
                    />

                    <div className={styles.title}>What I've done.</div>

                    <Divider
                        sx={{
                            backgroundColor: "white", // Set color to white
                            height: "2px", // Set height to 1px
                            width: "100%", // Full width
                        }}
                    />

                    <LeftCard
                        image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1726768155/image5_u37xei.png"
                        title="Data Journalism"
                        description="Working with ICE to craft new ways of data storytelling."
                        quote1="This is the first pull quote."
                        quote2="This is the second pull quote."
                    />

                    <RightCard
                        image="https://res.cloudinary.com/dfsznxwhz/image/upload/v1726768155/image5_u37xei.png"
                        title="Data Journalism"
                        description="Working with ICE to craft new ways of data storytelling in the corporate events world, highlighting and delivering findings to new audiences."
                        quote1="This is the first pull quote."
                        quote2="This is the second pull quote."
                    />

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

                    <EmissionCalculator />
                </div>
            </main>

            {/* Render the FloatingLogo */}
            <FloatingLogo />
        </>
    );
}
