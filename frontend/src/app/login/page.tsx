"use client";

import { useState, useEffect, Suspense } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

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

  const router = useRouter();
  const searchParams = useSearchParams();
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
          router.push(getRedirectUrl());
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
          router.push(getRedirectUrl());
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
      setError("Failed to send password reset email. Please try again.");
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
    setShowPassword(false);
    setShowConfirmPassword(false);
    setIsEmailSent(false);
    setCanResendEmail(false);
    setResendCountdown(0);
    setShowForgotPassword(false);
    setResetEmail("");
  };

  const getPasswordStrengthColor = () => {
    if (!password) return "bg-gray-300";
    if (password.length < 4) return "bg-red-500";
    if (password.length < 8) return "bg-yellow-500";
    if (!isPasswordStrong) return "bg-orange-500";
    return "bg-green-500";
  };

  const getPasswordStrengthWidth = () => {
    if (!password) return "0%";
    if (password.length < 4) return "25%";
    if (password.length < 8) return "50%";
    if (!isPasswordStrong) return "75%";
    return "100%";
  };

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background - same as landing page */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af8c] via-[#c9a876] to-[#b8956a]"></div>
        <div className="absolute inset-0 opacity-80">
          <img
            src="/assets/clouds.PNG"
            alt="Divine Clouds"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-gray-800 hover:bg-white/30 transition-all duration-300 text-sm font-medium"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 px-8 py-12 shadow-2xl">
            {/* Email Verification Success State */}
            {isEmailSent ? (
              <div className="text-center space-y-6">
                {/* Success Icon */}
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-3 font-['Cinzel']">
                    Check Your Email
                  </h1>
                  <p className="text-gray-700 text-base leading-relaxed font-['Cinzel']">
                    We&apos;ve sent a verification link to{" "}
                    <strong>{email}</strong>
                  </p>
                </div>

                {/* Instructions */}
                <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 text-left">
                  <h3 className="font-semibold text-gray-900 mb-2 font-['Cinzel']">
                    Next Steps:
                  </h3>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside font-['Cinzel']">
                    <li>Check your email inbox (and spam folder)</li>
                    <li>Click the verification link in the email</li>
                    <li>You&apos;ll be automatically signed in</li>
                  </ol>
                </div>

                {/* Resend Email */}
                <div className="space-y-3">
                  {canResendEmail ? (
                    <button
                      onClick={handleResendEmail}
                      disabled={isLoading}
                      className="w-full bg-gray-900 text-white font-semibold py-3 px-5 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-['Cinzel']"
                    >
                      {isLoading ? "Sending..." : "Resend Verification Email"}
                    </button>
                  ) : (
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1 font-['Cinzel']">
                        Didn&apos;t receive the email?
                      </p>
                      <p className="text-sm text-gray-500 font-['Cinzel']">
                        You can resend in {resendCountdown} seconds
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setIsEmailSent(false)}
                    className="w-full text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 font-['Cinzel']"
                  >
                    ← Back to Sign In
                  </button>
                </div>
              </div>
            ) : showForgotPassword ? (
              /* Forgot Password State */
              <div className="text-center space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-3 font-['Cinzel']">
                    Reset Password
                  </h1>
                  <p className="text-gray-700 text-base leading-relaxed font-['Cinzel']">
                    Enter your email address and we&apos;ll send you a link to
                    reset your password
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div>
                    <input
                      id="resetEmail"
                      name="resetEmail"
                      type="email"
                      autoComplete="email"
                      required
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 text-base font-medium font-['Cinzel']"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isResetLoading || !resetEmail}
                    className="w-full bg-gray-900 text-white font-semibold py-4 px-5 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-['Cinzel']"
                  >
                    {isResetLoading ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="w-full text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 font-['Cinzel']"
                  >
                    ← Back to Sign In
                  </button>
                </form>
              </div>
            ) : (
              /* Regular Sign In/Up Form */
              <>
                {/* Header */}
                <div className="text-center mb-10">
                  <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-['Cinzel']">
                    {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
                  </h1>
                  {isSignUp && (
                    <p className="text-gray-600 mt-2 text-sm font-['Cinzel']">
                      Join our platform to access disaster relief funds
                    </p>
                  )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 text-base font-medium font-['Cinzel']"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete={
                          isSignUp ? "new-password" : "current-password"
                        }
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 pr-14 text-base font-medium font-['Cinzel']"
                        placeholder="Password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Password Strength Indicator (Sign Up Only) */}
                    {isSignUp && password && (
                      <div className="space-y-2">
                        <div className="w-full bg-gray-300 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                            style={{ width: getPasswordStrengthWidth() }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div className="flex flex-wrap gap-x-3 gap-y-1 font-['Cinzel']">
                            <span
                              className={
                                password.length >= 8
                                  ? "text-green-600"
                                  : "text-gray-500"
                              }
                            >
                              ✓ 8+ characters
                            </span>
                            <span
                              className={
                                hasUpperCase
                                  ? "text-green-600"
                                  : "text-gray-500"
                              }
                            >
                              ✓ Uppercase
                            </span>
                            <span
                              className={
                                hasLowerCase
                                  ? "text-green-600"
                                  : "text-gray-500"
                              }
                            >
                              ✓ Lowercase
                            </span>
                            <span
                              className={
                                hasNumbers ? "text-green-600" : "text-gray-500"
                              }
                            >
                              ✓ Numbers
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password Field (Sign Up Only) */}
                  {isSignUp && (
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full px-6 py-4 bg-white/20 backdrop-blur-sm border rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 pr-14 text-base font-medium font-['Cinzel'] ${
                          confirmPassword && !doPasswordsMatch
                            ? "border-red-400"
                            : "border-white/30"
                        }`}
                        placeholder="Confirm Password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        {showConfirmPassword ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                      {confirmPassword && !doPasswordsMatch && (
                        <p className="text-red-600 text-xs mt-1 px-1 font-['Cinzel']">
                          Passwords do not match
                        </p>
                      )}
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-800 px-4 py-3 rounded-2xl text-sm font-medium font-['Cinzel']">
                      {error}
                    </div>
                  )}

                  {/* Success Message */}
                  {message && (
                    <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-800 px-4 py-3 rounded-2xl text-sm font-medium font-['Cinzel']">
                      {message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-4 flex justify-center">
                    <button
                      type="submit"
                      disabled={
                        isLoading ||
                        (isSignUp && (!isPasswordStrong || !doPasswordsMatch))
                      }
                      className="w-3/4 bg-gray-900 text-white font-semibold py-4 px-5 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-['Cinzel']"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {isSignUp ? "Creating Account..." : "Signing In..."}
                        </div>
                      ) : isSignUp ? (
                        "Create Account"
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </div>

                  {/* Toggle Mode */}
                  <div className="text-center pt-6">
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 font-['Cinzel']"
                    >
                      {isSignUp
                        ? "Already have an account? Sign in"
                        : "Don't have an account? Create one"}
                    </button>
                  </div>

                  {/* Additional Help Links */}
                  {!isSignUp && (
                    <div className="text-center pt-3 border-t border-white/20 space-y-2">
                      <p className="text-xs text-gray-600 font-['Cinzel']">
                        Need help?
                      </p>
                      <div className="flex justify-center space-x-4">
                        <button
                          type="button"
                          onClick={() => setShowForgotPassword(true)}
                          className="text-gray-700 hover:text-gray-900 text-xs font-medium transition-colors duration-200 font-['Cinzel']"
                        >
                          Forgot password?
                        </button>
                        <Link
                          href="/auth/verify-email"
                          className="text-gray-700 hover:text-gray-900 text-xs font-medium transition-colors duration-200 font-['Cinzel']"
                        >
                          Resend verification email
                        </Link>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
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
