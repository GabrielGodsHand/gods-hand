"use client";

<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState, useEffect, Suspense } from "react";
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
import { createClient } from "@/lib/supabase/client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

<<<<<<< HEAD
export default function VerifyEmailPage() {
=======
function VerifyEmailForm() {
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [canResendEmail, setCanResendEmail] = useState(true);
  const [resendCountdown, setResendCountdown] = useState(0);

  const searchParams = useSearchParams();
  const supabase = createClient();

  // Get email from URL params if provided
  useEffect(() => {
    const emailParam = searchParams.get("email");
    const messageParam = searchParams.get("message");
    const errorParam = searchParams.get("error");

    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
    if (messageParam) {
      setMessage(decodeURIComponent(messageParam));
    }
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
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

  const handleResendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
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
        if (error.message.includes("already confirmed")) {
          setMessage("Your email is already verified! You can sign in now.");
        } else {
          setError(error.message);
        }
      } else {
        setMessage(
          `Verification email sent to ${email}. Please check your inbox and spam folder.`
        );
        setResendCountdown(60);
        setCanResendEmail(false);
      }
    } catch (err) {
      console.log("err", err);
      setError("Failed to send verification email. Please try again.");
    } finally {
      setIsLoading(false);
    }
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

      {/* Back to Login Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/login"
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
          Back to Login
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 px-8 py-12 shadow-2xl">
            <div className="text-center space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3 font-['Cinzel']">
                  Verify Your Email
                </h1>
                <p className="text-gray-700 text-base leading-relaxed font-['Cinzel']">
                  Enter your email address to receive a verification link
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleResendEmail} className="space-y-4">
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
                    placeholder="Enter your email address"
                  />
                </div>

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
                <div className="space-y-3">
                  {canResendEmail ? (
                    <button
                      type="submit"
                      disabled={isLoading || !email}
                      className="w-full bg-gray-900 text-white font-semibold py-4 px-5 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-['Cinzel']"
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
                          Sending...
                        </div>
                      ) : (
                        "Send Verification Email"
                      )}
                    </button>
                  ) : (
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1 font-['Cinzel']">
                        Email sent successfully!
                      </p>
                      <p className="text-sm text-gray-500 font-['Cinzel']">
                        You can request another email in {resendCountdown}{" "}
                        seconds
                      </p>
                    </div>
                  )}
                </div>
              </form>

              {/* Instructions */}
              <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 text-left">
                <h3 className="font-semibold text-gray-900 mb-2 font-['Cinzel']">
                  What to do next:
                </h3>
                <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside font-['Cinzel']">
                  <li>Check your email inbox (and spam/junk folder)</li>
                  <li>Look for an email from our platform</li>
                  <li>
                    Click the &quot;Verify Email&quot; button in the email
                  </li>
                  <li>You&apos;ll be automatically signed in</li>
                </ol>
              </div>

              {/* Help Links */}
              <div className="text-center space-y-1">
                <p className="text-sm text-gray-600 font-['Cinzel']">
                  Already verified your email?
                </p>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 font-['Cinzel']"
                >
                  Sign in to your account →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailForm />
    </Suspense>
  );
}
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
