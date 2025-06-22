import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle auth redirects
    const pathname = location.pathname;

    if (pathname.includes("/confirm")) {
      // Handle email confirmation
      navigate("/events");
    } else if (pathname.includes("/reset-password")) {
      // Handle password reset
      navigate("/login");
    } else {
      // Default redirect
      navigate("/login");
    }
  }, [location.pathname, navigate]);

  return <div>Processing authentication...</div>;
}
