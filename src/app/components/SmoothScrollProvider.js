'use client'; // Mark this as a client-side component

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import locomotive-scroll CSS

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Ensure this only runs on the client side
    if (typeof window === 'undefined') return;

    const scrollContainer = document.querySelector('#scroll-container');

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      smoothMobile: true, // Enables smooth scrolling on mobile devices
    });

    return () => {
      if (scroll) scroll.destroy(); // Clean up when the component is unmounted
    };
  }, []);

  return <div id="scroll-container">{children}</div>;
};

export default SmoothScrollProvider;