"use client";

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const supabase = createClient();

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

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setDropdownOpen(false);
    navigate("/");
  };

  const handleDashboard = () => {
    setDropdownOpen(false);
    navigate("/events");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
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

          {/* <div className="account-section">
            {loading ? (
              <div className="loading-spinner"></div>
            ) : user ? (
              <div className="account-dropdown" ref={dropdownRef}>
                <button
                  className="account-button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <svg
                    className="user-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <svg
                    className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={handleDashboard}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                      Events
                    </button>
                    <button
                      className="dropdown-item logout"
                      onClick={handleSignOut}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16,17 21,12 16,7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="login-button" onClick={handleLogin}>
                Sign In
              </button>
            )}
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
