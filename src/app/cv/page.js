"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material"; // Import MUI Button

const CV = () => {
  return (
    <main style={{ padding: "20px", fontFamily: "inter, sans-serif" }}>
      <div className="container">
        {/* Title, Subtext, and Download Button */}
        <div className="content">
          <h1>Jack Robertson's CV</h1>
          <p>You can download my full CV from the link below:</p>

          {/* MUI Button for Download */}
          <a href="/files/Jack_Robertson_CV.pdf" download>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#fff",
                color: "#3496d3",
                borderRadius: "8px",
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              Download CV (PDF)
            </Button>
          </a>
        </div>

        {/* Preview Image of CV using Next.js 13+ image handling */}
        <div className="image-container">
          <div className="responsive-image">
            <Image
              src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1728380861/JCR_Master_CV_iucp02.png"
              alt="Preview of Jack Robertson's CV"
              fill
              style={{ objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Optimisation with Media Queries */}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: left;
        }

        .image-container {
          width: 100%;
          max-width: 500px; /* Desktop size */
        }

        .responsive-image {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 140%; /* Maintain aspect ratio (700px/500px) */
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column; /* Stack items vertically on mobile */
            gap: 20px; /* Reduce gap between elements */
          }

          h1 {
            font-size: 1.5rem; /* Adjust font size for mobile */
          }

          p {
            font-size: 1rem; /* Adjust paragraph font size */
          }

          Button {
            width: 100%; /* Make button full width on mobile */
          }

          .image-container {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
};

export default CV;