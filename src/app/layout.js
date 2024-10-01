import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import EmissionCalculator from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from './components/LoadingScreen/LoadingScreen'; // Import the LoadingScreen


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jack Crawford Robertson",
  description:
    "I am an information designer, data thinker, and artist. As a communicator, I navigate context and design constraints to bring projects to life, thriving as a catalyst for creativity.",
  keywords: [
    "storytelling",
    "narratives",
    "economics",
    "politics",
    "data visualization",
    "design",
    "information design",
  ],
  authors: [{ name: "Jack Robertson", twitter: "@JackRobertso" }],
  openGraph: {
    title: "Jack Crawford Robertson",
    description:
      "I am an information designer, data thinker, and artist. As a communicator, I navigate context and design constraints to bring projects to life, thriving as a catalyst for creativity.",
    url: "https://jack-robertson.co.uk/",
    type: "website",
    site_name: "Jack Crawford Robertson",
    images: [
      {
        url: "https://res.cloudinary.com/dfsznxwhz/image/upload/v1727367918/Web_Image_vhkox2.png", 
        width: 800,
        height: 600,
        alt: "Jack Crawford Robertson Profile Image",
      },
    ],
    profile: {
      firstName: "Jack",
      lastName: "Robertson",
      username: "JackRobertso",
      gender: "male",
    },
    links: [
      {
        url: "https://github.com/JackCrawfordRobertson", // Replace with your GitHub profile link
        label: "GitHub",
      },
      {
        url: "https://www.linkedin.com/in/jackcrobertson", // Replace with your LinkedIn profile link
        label: "LinkedIn",
      },
    ],
  },
  icons: {
    icon: "/images/icons/favicon.ico",
    shortcut: "/images/icons/favicon.ico",
    apple: "/images/icons/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Crawford Robertson",
    description:
      "I am an information designer, data thinker, and artist. As a communicator, I navigate context and design constraints to bring projects to life, thriving as a catalyst for creativity.",
    creator: "@JackRobertso",
  },
  other: {
    "google-site-verification": "IH6yR8ty_gLdC8Ra-sWK8KT-qQoC1gZ_JYR9E1N-JzI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <LoadingScreen /> {/* Load the loading screen */}
        {/* Apply smooth scrolling globally */}
        <SmoothScrollProvider>
          {/* Scroll to top on route change */}
          <ScrollToTop />
          {/* Your page content */}
          {children}
          {/* Global Footer */}
          <EmissionCalculator /> {/* Footer globally added */}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}