// components/SmoothScrollProvider.js

"use client"; // Mark this as a client-side component

const SmoothScrollProvider = ({ children }) => {
  // SmoothScrollProvider now acts as a simple wrapper
  // Smooth scrolling is handled by CSS (scroll-behavior: smooth in globals.css)
  // This avoids issues with Locomotive Scroll library causing scroll conflicts

  return (
    <div id="scroll-container">
      {children}
    </div>
  );
};

export default SmoothScrollProvider;