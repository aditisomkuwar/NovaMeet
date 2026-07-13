import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const router = useNavigate();

    return (
        <div className='landingPageContainer'>

            <nav>
                <div className='navHeader'>
                    <h2 style={{ color: "#8B5CF6", fontWeight: "700" }}>
                        💜 NovaMeet
                    </h2>
                </div>

                <div className='navlist'>
                    <p onClick={() => router("/aljk23")}>
                        Join Meeting
                    </p>

                    <p onClick={() => router("/auth")}>
                        Create Account
                    </p>

                    <div
                        role="button"
                        onClick={() => router("/auth")}
                        style={{
                            background: "#A855F7",
                            color: "#F9FAFB",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontWeight: "600"
                        }}
                    >
                        Login
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">

                <div>

                    <h1 style={{ fontSize: "3.2rem", lineHeight: "1.2" }}>
                        <span style={{ color: "#8B5CF6" }}>
                            Connect
                        </span>{" "}
                        Anytime,
                        <br />
                        Anywhere.
                    </h1>

                    <p
                        style={{
                            color: "#D1D5DB",
                            fontSize: "1.2rem",
                            marginTop: "15px"
                        }}
                    >
                        Secure HD Video Meetings for Everyone.
                    </p>

                    <div role='button'>
                        <Link to={"/auth"}>
                            Start Meeting
                        </Link>
                    </div>

                </div>

                <div>
                    <img src="/mobile.png" alt="NovaMeet" />
                </div>

            </div>

        </div>
    );
}