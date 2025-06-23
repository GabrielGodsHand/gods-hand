"use client";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load divine parallax CSS for header styles
    const loadDivineStyles = () => {
      // Check if styles are already loaded
      if (document.getElementById("divine-header-styles")) {
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/styles/divine-parallax.css";
      link.id = "divine-header-styles";
      document.head.appendChild(link);
    };

    loadDivineStyles();
  }, []);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleEventsClick = () => {
    navigate("/events");
  };

  return (
    <header className="divine-header">
      <div className="header-container">
        <div className="header-pill">
          <div className="logo-section">
            <h1
              className="divine-logo"
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            >
              God&apos;s Hand
            </h1>
          </div>

          <div className="account-section">
            <button className="login-button" onClick={handleEventsClick}>
              Events
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
