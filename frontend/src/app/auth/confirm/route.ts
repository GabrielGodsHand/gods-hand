import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');
  const next = searchParams.get('next') ?? '/events';

  // Create redirect URLs
  const successRedirectTo = new URL(next, origin);
  const errorRedirectTo = new URL('/login', origin);

  // Check if we have the required parameters
  if (!token_hash || !type) {
    errorRedirectTo.searchParams.set('error', 'Invalid verification link. Please request a new verification email.');
    return NextResponse.redirect(errorRedirectTo);
  }

  try {
    const supabase = await createClient();

    // Verify the OTP token
    const { data, error } = await supabase.auth.verifyOtp({
      type: type as any,
      token_hash,
    });

    if (error) {
      console.error('Email verification error:', error);
      
      // Handle specific error cases
      let errorMessage = 'Could not verify email. ';
      
      if (error.message.includes('expired')) {
        errorMessage += 'The verification link has expired. Please request a new one.';
      } else if (error.message.includes('invalid')) {
        errorMessage += 'The verification link is invalid. Please request a new one.';
      } else if (error.message.includes('already confirmed')) {
        errorMessage += 'Your email is already verified. You can sign in now.';
      } else {
        errorMessage += 'Please try again or request a new verification email.';
      }
      
      errorRedirectTo.searchParams.set('error', errorMessage);
      return NextResponse.redirect(errorRedirectTo);
    }

    // Success case
    if (data.user) {
      // Add success message
      successRedirectTo.searchParams.set('message', 'Email verified successfully! Welcome to the platform.');
      
      // Clean up any error parameters
      successRedirectTo.searchParams.delete('error');
      
      return NextResponse.redirect(successRedirectTo);
    }

    // Fallback error case
    errorRedirectTo.searchParams.set('error', 'Verification completed but user data is missing. Please try signing in.');
    return NextResponse.redirect(errorRedirectTo);

  } catch (err) {
    console.error('Unexpected error during email verification:', err);
    errorRedirectTo.searchParams.set('error', 'An unexpected error occurred during verification. Please try again.');
    return NextResponse.redirect(errorRedirectTo);
  }
} 