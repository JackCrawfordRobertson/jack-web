'use client';

import React, { useState } from "react";
import Image from "next/image"; // For the PNG image
import styles from "./CallToAction.module.css"; // Import your custom CSS

const CallToAction = () => {
  const [copied, setCopied] = useState(false); // State to manage email copied notification

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jack@ya-ya.co.uk"); // Copy the email to the clipboard
    setCopied(true); // Show notification
    setTimeout(() => setCopied(false), 2000); // Hide notification after 2 seconds
  };

  return (
    <div className={styles.callToActionContainer}>
      {/* Image */}
      <Image
        src="/images/Memoji.png" // Replace with your PNG path
        alt="Chat Icon"
        width={400}
        height={400}
        className={styles.image}
      />

      {/* Title and Button */}
      <div className={styles.textContainer}>
        <button className={styles.emailButton} onClick={handleCopyEmail}>
        Let's Chat!
        </button>
      </div>

      {/* Notification for copied email */}
      {copied && <p className={styles.copiedNotification}>Email copied!</p>}
    </div>
  );
};

export default CallToAction;