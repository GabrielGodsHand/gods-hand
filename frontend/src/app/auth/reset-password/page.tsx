'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isValidSession, setIsValidSession] = useState(false);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  // Password validation
  const isPasswordValid = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const isPasswordStrong = isPasswordValid && hasUpperCase && hasLowerCase && hasNumbers;
  const doPasswordsMatch = password === confirmPassword;

  // Check if user has a valid session for password reset
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsValidSession(true);
      } else {
        setError('Invalid or expired password reset link. Please request a new one.');
      }
    };

    checkSession();
  }, [supabase.auth]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidSession) {
      setError('Invalid session. Please request a new password reset link.');
      return;
    }

    if (!isPasswordStrong) {
      setError('Password must be at least 8 characters with uppercase, lowercase, and numbers');
      return;
    }

    if (!doPasswordsMatch) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        setError(error.message);
      } else {
        setMessage('Password updated successfully! Redirecting to events...');
        setTimeout(() => {
          router.push('/events');
        }, 2000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (!password) return 'bg-gray-300';
    if (password.length < 4) return 'bg-red-500';
    if (password.length < 8) return 'bg-yellow-500';
    if (!isPasswordStrong) return 'bg-orange-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthWidth = () => {
    if (!password) return '0%';
    if (password.length < 4) return '25%';
    if (password.length < 8) return '50%';
    if (!isPasswordStrong) return '75%';
    return '100%';
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
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Login
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 px-10 py-16 shadow-2xl">
            
            {!isValidSession ? (
              /* Invalid Session State */
              <div className="text-center space-y-8">
                {/* Error Icon */}
                <div className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>

                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Reset Link</h1>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    This password reset link is invalid or has expired.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/login"
                    className="w-full bg-gray-900 text-white font-semibold py-5 px-6 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] inline-block text-center"
                  >
                    Request New Reset Link
                  </Link>
                </div>
              </div>
            ) : (
              /* Password Reset Form */
              <>
                {/* Header */}
                <div className="text-center mb-12">
                  {/* Lock Icon */}
                  <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                    Set New Password
                  </h1>
                  <p className="text-gray-600 mt-3 text-sm">
                    Choose a strong password for your account
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* New Password Field */}
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-8 py-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 pr-16 text-lg font-medium"
                        placeholder="New Password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        {showPassword ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Password Strength Indicator */}
                    {password && (
                      <div className="space-y-2">
                        <div className="w-full bg-gray-300 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                            style={{ width: getPasswordStrengthWidth() }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            <span className={password.length >= 8 ? 'text-green-600' : 'text-gray-500'}>
                              ✓ 8+ characters
                            </span>
                            <span className={hasUpperCase ? 'text-green-600' : 'text-gray-500'}>
                              ✓ Uppercase
                            </span>
                            <span className={hasLowerCase ? 'text-green-600' : 'text-gray-500'}>
                              ✓ Lowercase
                            </span>
                            <span className={hasNumbers ? 'text-green-600' : 'text-gray-500'}>
                              ✓ Numbers
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full px-8 py-6 bg-white/20 backdrop-blur-sm border rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 pr-16 text-lg font-medium ${
                        confirmPassword && !doPasswordsMatch ? 'border-red-400' : 'border-white/30'
                      }`}
                      placeholder="Confirm New Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      {showConfirmPassword ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                    {confirmPassword && !doPasswordsMatch && (
                      <p className="text-red-600 text-xs mt-1 px-2">Passwords do not match</p>
                    )}
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-800 px-6 py-4 rounded-2xl text-sm font-medium">
                      {error}
                    </div>
                  )}

                  {/* Success Message */}
                  {message && (
                    <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-800 px-6 py-4 rounded-2xl text-sm font-medium">
                      {message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading || !isPasswordStrong || !doPasswordsMatch}
                      className="w-full bg-gray-900 text-white font-semibold py-5 px-6 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Updating Password...
                        </div>
                      ) : (
                        'Update Password'
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 