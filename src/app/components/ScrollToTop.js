"use client"; // Ensure this component is client-side only
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname(); // Track the route change

  useEffect(() => {
    // Use requestAnimationFrame to ensure scroll happens after render
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'auto' // Use auto since smooth is in CSS
      });
    };

    // Give the browser a moment to render the new page
    const timer = setTimeout(scrollToTop, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null; // No UI to render, just functionality
}