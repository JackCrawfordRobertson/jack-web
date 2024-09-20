'use client'

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "./FloatingLogo.module.css"; // Separate CSS module for the logo

const FloatingLogo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures that the component is mounted on the client side
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <Image
      src="/images/White-logo.png" // Path relative to the public folder
      alt="Floating Logo"
      width={100} // Adjust the size as needed
      height={100}
      className={styles.logo} // Apply the fixed position class
      priority // Ensure the logo loads quickly
    />,
    document.body // Render the logo directly into the body element
  );
};

export default FloatingLogo;