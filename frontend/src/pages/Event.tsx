import { useParams } from "react-router-dom";
import EventDetailClient from "../components/EventDetailClient";
import React from "react";
import { FullScreenDivineLoader } from "../components/DivineLoader";

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
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
        
        {/* Error Content */}
        <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 max-w-md w-full mx-4 shadow-2xl text-center">
          <div className="w-20 h-20 bg-red-100/60 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Cinzel']">
            Event Not Found
          </h2>
          <p className="text-gray-700 mb-6 font-['Cinzel'] text-lg">
            The sacred event you're looking for could not be found.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-['Cinzel']"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return <EventDetailClient eventId={id} />;
}
