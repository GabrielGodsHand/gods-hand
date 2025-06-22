"use client";

import { useState, useEffect, Suspense } from "react";
import { createClient } from "@/lib/supabase/client";
import { useNavigate, useSearchParams } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [canResendEmail, setCanResendEmail] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isResetLoading, setIsResetLoading] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const supabase = createClient();

  // Get redirect URL from search params or default to events page
  const getRedirectUrl = () => {
    const redirectParam = searchParams.get("redirect");
    return redirectParam ? decodeURIComponent(redirectParam) : "/events";
  };

  // Check for URL parameters on component mount
  useEffect(() => {
    const errorParam = searchParams.get("error");
    const messageParam = searchParams.get("message");

    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
    if (messageParam) {
      setMessage(decodeURIComponent(messageParam));
    }
  }, [searchParams]);

  // Countdown timer for resend email
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendCountdown > 0) {
      interval = setInterval(() => {
        setResendCountdown((prev) => {
          if (prev <= 1) {
            setCanResendEmail(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendCountdown]);

  // Password validation
  const isPasswordValid = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const isPasswordStrong =
    isPasswordValid && hasUpperCase && hasLowerCase && hasNumbers;
  const doPasswordsMatch = password === confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    // Enhanced validation for signup
    if (isSignUp) {
      if (!isPasswordValid) {
        setError("Password must be at least 8 characters long");
        setIsLoading(false);
        return;
      }
      if (!isPasswordStrong) {
        setError("Password must contain uppercase, lowercase, and numbers");
        setIsLoading(false);
        return;
      }
      if (!doPasswordsMatch) {
        setError("Passwords do not match");
        setIsLoading(false);
        return;
      }
    }

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/confirm`,
          },
        });

        if (error) {
          if (error.message.includes("already registered")) {
            setError(
              "An account with this email already exists. Please sign in instead."
            );
            setIsSignUp(false);
          } else {
            setError(error.message);
          }
        } else if (data.user && !data.user.email_confirmed_at) {
          setIsEmailSent(true);
          setMessage(
            `We've sent a verification email to ${email}. Please check your inbox and click the verification link to complete your registration.`
          );
          setResendCountdown(60); // 60 second countdown
          setCanResendEmail(false);
        } else if (data.user && data.user.email_confirmed_at) {
          // User is already confirmed, redirect to events
          navigate(getRedirectUrl());
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            setError(
              "Invalid email or password. Please check your credentials and try again."
            );
          } else if (error.message.includes("Email not confirmed")) {
            setError(
              "Please verify your email address before signing in. Check your inbox for the verification link."
            );
            setIsEmailSent(true);
            setCanResendEmail(true);
          } else {
            setError(error.message);
          }
        } else if (data.user) {
          navigate(getRedirectUrl());
        }
      }
    } catch (err) {
      console.log("err", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    if (!canResendEmail || !email) return;

    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/confirm`,
        },
      });

      if (error) {
        setError(error.message);
      } else {
        setMessage(
          `Verification email resent to ${email}. Please check your inbox.`
        );
        setResendCountdown(60);
        setCanResendEmail(false);
      }
    } catch (err) {
      console.log("err", err);
      setError("Failed to resend verification email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) return;

    setIsResetLoading(true);
    setError("");
    setMessage("");

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) {
        setError(error.message);
      } else {
        setMessage(
          `Password reset email sent to ${resetEmail}. Please check your inbox.`
        );
        setShowForgotPassword(false);
        setResetEmail("");
      }
    } catch (err) {
      console.log("err", err);
      setError("Failed to send reset email. Please try again.");
    } finally {
      setIsResetLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError("");
    setMessage("");
    setPassword("");
    setConfirmPassword("");
    setIsEmailSent(false);
    setCanResendEmail(false);
    setResendCountdown(0);
    setShowForgotPassword(false);
  };

  const getPasswordStrengthColor = () => {
    if (!password) return "bg-gray-300";
    if (isPasswordStrong) return "bg-green-500";
    if (isPasswordValid) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getPasswordStrengthWidth = () => {
    if (!password) return "0%";
    if (isPasswordStrong) return "100%";
    if (isPasswordValid) return "66%";
    return "33%";
  };

  // Continue with rest of the JSX (truncated for brevity)
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-white/70">
            {isSignUp
              ? "Join the divine mission of global aid"
              : "Continue your journey of giving"}
          </p>
        </div>

        {(error || message) && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              error
                ? "bg-red-500/20 border border-red-500/30 text-red-200"
                : "bg-green-500/20 border border-green-500/30 text-green-200"
            }`}
          >
            {error || message}
          </div>
        )}

        {showForgotPassword ? (
          <form onSubmit={handleForgotPassword} className="space-y-6">
            <div>
              <label htmlFor="reset-email" className="block text-white/80 mb-2">
                Email Address
              </label>
              <input
                id="reset-email"
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="flex-1 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isResetLoading || !resetEmail}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-all"
              >
                {isResetLoading ? "Sending..." : "Send Reset Email"}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white/80 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>

              {isSignUp && password && (
                <div className="mt-2">
                  <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                      style={{ width: getPasswordStrengthWidth() }}
                    ></div>
                  </div>
                  <div className="text-xs text-white/70 space-y-1">
                    <div
                      className={
                        isPasswordValid ? "text-green-400" : "text-red-400"
                      }
                    >
                      ✓ At least 8 characters
                    </div>
                    <div
                      className={
                        hasUpperCase ? "text-green-400" : "text-red-400"
                      }
                    >
                      ✓ Uppercase letter
                    </div>
                    <div
                      className={
                        hasLowerCase ? "text-green-400" : "text-red-400"
                      }
                    >
                      ✓ Lowercase letter
                    </div>
                    <div
                      className={hasNumbers ? "text-green-400" : "text-red-400"}
                    >
                      ✓ Number
                    </div>
                  </div>
                </div>
              )}
            </div>

            {isSignUp && (
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-white/80 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                {confirmPassword && (
                  <div className="mt-2">
                    <div
                      className={`text-xs ${
                        doPasswordsMatch ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {doPasswordsMatch
                        ? "✓ Passwords match"
                        : "✗ Passwords don't match"}
                    </div>
                  </div>
                )}
              </div>
            )}

            {!isSignUp && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-blue-300 hover:text-blue-200 text-sm"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={
                isLoading ||
                !email ||
                !password ||
                (isSignUp && (!confirmPassword || !doPasswordsMatch))
              }
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 transition-all transform hover:scale-105"
            >
              {isLoading
                ? "Loading..."
                : isSignUp
                ? "Create Account"
                : "Sign In"}
            </button>

            {isEmailSent && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendEmail}
                  disabled={!canResendEmail || isLoading}
                  className="text-blue-300 hover:text-blue-200 disabled:text-white/50 text-sm"
                >
                  {canResendEmail
                    ? "Resend verification email"
                    : `Resend in ${resendCountdown}s`}
                </button>
              </div>
            )}

            <div className="text-center">
              <span className="text-white/70">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </span>
              <button
                type="button"
                onClick={toggleMode}
                className="ml-2 text-blue-300 hover:text-blue-200 font-medium"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
