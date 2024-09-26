// components/SmoothScrollProvider.js

"use client"; // Mark this as a client-side component

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const SmoothScrollProvider = ({ children }) => {
  const pathname = usePathname(); // Get the current route
  const scrollRef = useRef(null); // Reference to the Locomotive Scroll instance

  useEffect(() => {
    // Function to initialize Locomotive Scroll
    const initScroll = async () => {
      // Dynamically import Locomotive Scroll and its CSS
      const LocomotiveScrollModule = await import('locomotive-scroll');
      await import('locomotive-scroll/dist/locomotive-scroll.css');

      const LocomotiveScroll = LocomotiveScrollModule.default;

      // Destroy existing instance if it exists
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }

      const scrollContainer = document.querySelector('#scroll-container');

      // Initialize Locomotive Scroll
      scrollRef.current = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smoothMobile: true,
      });

      // Scroll to the top after initialization
      scrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
    };

    // Initialize on component mount and whenever the pathname changes
    initScroll();

    // Clean up on component unmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, [pathname]); // Re-initialize when the route changes

  // Update Locomotive Scroll after images have loaded
  useEffect(() => {
    const updateScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.update();
      }
    };

    // Listen for the load event to ensure images have loaded
    window.addEventListener('load', updateScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('load', updateScroll);
    };
  }, []);

  return (
    <div id="scroll-container" data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScrollProvider;