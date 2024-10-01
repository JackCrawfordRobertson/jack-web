'use client'; // Ensure this is a client-side component

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Custom404() {


  return (
    <motion.div
      initial={{ opacity: 0 }} // Start hidden
      animate={{ opacity: 1 }} // Fade in
      exit={{ opacity: 0 }} // Fade out on exit
      transition={{ duration: 1 }} // 1-second animation
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#3496d3', // Light background
        color: '#fff', // Dark text
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', margin: '0' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>
        Sorry, the page you're looking for does not exist.
      </p>
      <p style={{ marginTop: '10px', fontSize: '1rem', color: '#fff' }}>
        Click below to return home.
      </p>
      <a
        href="/"
        style={{
          marginTop: '20px',
          fontSize: '2rem',
          color: '#fff',
          textDecoration: 'underline',
        }}
      >
        Go back home now
      </a>
    </motion.div>
  );
}