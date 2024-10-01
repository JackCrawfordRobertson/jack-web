"use client"; // Client-side component

import React, { useEffect, useState } from 'react';

const OrientationLock = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches && window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isLandscape && (
        <div style={{
          position: 'fixed', // Fixed positioning to overlay on the entire viewport
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh', // Full viewport height
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000, // Ensure it's above other content
          textAlign: 'center',
          fontSize: '1.5rem',
          padding: '20px',
        }}>
          <p>Please rotate your device to portrait mode for a better experience.</p>
        </div>
      )}
    </>
  );
};

export default OrientationLock;