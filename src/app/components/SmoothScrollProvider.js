'use client'; // Mark this as a client-side component

import { useEffect } from 'react';

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window === 'undefined') return;

    let scroll;

    // Dynamically import LocomotiveScroll and CSS
    Promise.all([
      import('locomotive-scroll'),
      import('locomotive-scroll/dist/locomotive-scroll.css'),
    ]).then(([LocomotiveScrollModule]) => {
      const LocomotiveScroll = LocomotiveScrollModule.default;

      const scrollContainer = document.querySelector('#scroll-container');

      scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smoothMobile: true, // Enables smooth scrolling on mobile devices
      });
    });

    // Clean up when the component is unmounted
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <div id="scroll-container">{children}</div>;
};

export default SmoothScrollProvider;