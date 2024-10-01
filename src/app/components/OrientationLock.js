'use client';

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
        <div className="orientation-warning">
          <p>Please rotate your device to portrait mode for a better experience.</p>
        </div>
      )}
      {/* Your main content goes here */}
    </>
  );
};

export default OrientationLock;