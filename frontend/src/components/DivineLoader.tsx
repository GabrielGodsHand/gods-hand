'use client';

import React from 'react';

interface DivineLoaderProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function DivineLoader({ 
  message = "Loading...", 
  size = 'medium' 
}: DivineLoaderProps) {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-xl'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Divine Halo Container */}
      <div className="relative">
        {/* Outer Divine Ring */}
        <div className={`${sizeClasses[size]} relative`}>
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 animate-spin opacity-80">
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#d4af8c] via-[#c9a876] to-[#b8956a]"></div>
          </div>
          
          {/* Inner Golden Ring */}
          <div className="absolute inset-2 rounded-full border-2 border-amber-300 animate-pulse">
            <div className="absolute inset-1 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 opacity-60"></div>
          </div>
          
          {/* Central Divine Light */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50">
              <div className="absolute inset-0 rounded-full bg-white opacity-60 animate-ping"></div>
            </div>
          </div>
          
          {/* Divine Rays */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-4 bg-gradient-to-t from-transparent to-yellow-400 opacity-70"
                style={{
                  top: '-8px',
                  left: '50%',
                  transformOrigin: '50% 100%',
                  transform: `translateX(-50%) rotate(${i * 45}deg)`
                }}
              ></div>
            ))}
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-60`}
                style={{
                  top: `${20 + (i * 10)}%`,
                  left: `${15 + (i * 12)}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Divine Glow Effect */}
        <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-400/20 blur-xl animate-pulse`}></div>
      </div>
      
      {/* Divine Message */}
      <div className="mt-6 text-center">
        <p className={`${textSizeClasses[size]} font-['Cinzel'] font-medium text-gray-800 drop-shadow-sm animate-pulse`}>
          {message}
        </p>
        <div className="flex justify-center mt-2 space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-amber-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Divine Blessing Text */}
      <div className="mt-4 text-center opacity-70">
        <p className="text-xs font-['Cinzel'] text-gray-600 italic">
          ✨ Divine grace is loading ✨
        </p>
      </div>
    </div>
  );
}

// Full-screen loading component for page transitions
export function FullScreenDivineLoader({ 
  message = "Loading sacred content...",
  size = 'large' 
}: DivineLoaderProps) {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Divine Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af8c] via-[#c9a876] to-[#b8956a]"></div>
        <div className="absolute inset-0 opacity-60">
          <img
            src="/assets/clouds.png"
            alt="Divine Clouds"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Loader Content */}
      <div className="relative z-10">
        <DivineLoader message={message} size={size} />
      </div>
    </div>
  );
} 