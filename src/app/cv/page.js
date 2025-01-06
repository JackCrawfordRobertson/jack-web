"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";

const CV = () => {
    return (
        <main style={{ padding: "20px", fontFamily: "inter, sans-serif", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#3496d3' }}>
            <div className="container">
                {/* Title, Subtext, and Download Button */}
                <div className="content">
                    <h1 style={{ color: "#fff" }}>Jack Robertson's CV</h1>
                    <p style={{ color: "#f0f8ff" }}>You can download my full CV from the links below:</p>

                    <a href="/files/Jack_Robertson_CV.pdf" download>
                        <Button
                            variant="contained"
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
                            Download Plain Text (CV Readers)
                        </Button>
                    </a>
                </div>

                {/* Preview Image of CV */}
                <div className="image-container">
                    <Image
                        src="https://res.cloudinary.com/dfsznxwhz/image/upload/v1730107749/Screenshot_2024-10-28_at_09.29.03_jjnp2h.png"
                        alt="Preview of Jack Robertson's CV"
                        layout="responsive"
                        width={400}
                        height={250}
                        style={{
                            objectFit: "cover",
                            borderRadius: "10px",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </div>
            </div>

            {/* Mobile Optimisation with Media Queries */}
            <style jsx>{`
                .container {
                    display: flex;
                    align-items: flex-start;
                    gap: 40px;
                    width: 80%;
                    margin: 0 auto;
                }

                .content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
                }

                .image-container {
                    flex: 0 0 50%;
                }

                @media (max-width: 768px) {
                    .container {
                        flex-direction: column;
                        align-items: center;
                        gap: 20px;
                    }

                    .image-container {
                        width: 100%;
                    }

                    h1 {
                        font-size: 1.5rem;
                    }

                    p {
                        font-size: 1rem;
                    }

                    Button {
                        width: 100%;
                    }
                }
            `}</style>
        </main>
    );
};

export default CV;