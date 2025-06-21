'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import DivineParallax from '@/components/DivineParallax';
import Header from '@/components/Header';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  useEffect(() => {
    // Load divine parallax CSS only for this page
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/divine-parallax.css';
    link.id = 'divine-parallax-styles';
    document.head.appendChild(link);

    // Initialize the divine parallax effect
    new DivineParallax();

    // Cleanup function to remove styles when component unmounts
    return () => {
      const existingLink = document.getElementById('divine-parallax-styles');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  const handleViewEvents = () => {
    // Always redirect to events page regardless of authentication status
    router.push('/events');
  };

  return (
    <>
      {/* Divine Header */}
      <Header />

      {/* Main Parallax Container - exactly like original */}
      <main id="divine-parallax" className="parallax-container">
        {/* Background gradient */}
        <div className="parallax-layer" id="bg-gradient"></div>
        
        {/* Single cloud layer */}
        <div className="parallax-layer clouds-layer" id="clouds-far">
          <img src="/assets/clouds.PNG" alt="Divine Clouds" className="clouds-image" />
        </div>

        {/* The Divine Hand - scroll controlled */}
        <div className="parallax-layer" id="divine-hand">
          <img src="/assets/hand.PNG" alt="Divine Hand" className="hand-image" />
          <div className="hand-glow"></div>
        </div>

        {/* Hero Text - appears when hand animation completes */}
        <div className="parallax-layer hero-text-container">
          <div className="hero-content">
            <h1 className="hero-title">God's Hand</h1>
            <div className="scroll-indicator">
              <p>Scroll For Blessings</p>
              <div className="scroll-arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p className="hero-subtitle">Where Heaven Hears, and Humanity Helps — One Anonymous Gift at a Time.</p>
            <div className="divine-buttons">
              <button className="divine-btn primary" onClick={handleViewEvents} disabled={loading}>
                <span className="btn-text">
                  {loading ? 'Loading...' : 'View Events'}
                </span>
                <div className="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll space */}
      <div style={{ height: '500vh', background: 'transparent' }}></div>
    </>
  );
}
