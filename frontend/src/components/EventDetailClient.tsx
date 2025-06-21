"use client";

import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import {
  Organization,
  Event,
  ClaimWithOrganization,
} from "@/lib/types/database";
import { createClient } from "@/lib/supabase/client";
import Header from "@/components/Header";
import DivineLoader from "@/components/DivineLoader";
import DecryptedText from "@/components/DecryptedText";
import DonationModal from "@/components/DonationModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import RequestFundsModal from "./RequestFundsModal";
import VotingModal from "./VotingModal";

interface EventDetailClientProps {
  user: User | null;
  organization: Organization | null;
  eventId: string;
}

export default function EventDetailClient({
  user,
  organization,
  eventId,
}: EventDetailClientProps) {
  const router = useRouter();
  const supabase = createClient();

  const [event, setEvent] = useState<Event | null>(null);
  const [claims, setClaims] = useState<ClaimWithOrganization[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVote, setSelectedVote] = useState<{
    [claimId: string]: string;
  }>({});
  const [hasVoted, setHasVoted] = useState<{ [claimId: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState<"donations" | "claims">(
    "donations"
  );
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isRequestFundsModalOpen, setIsRequestFundsModalOpen] = useState(false);
  const [votingModal, setVotingModal] = useState<{
    isOpen: boolean;
    claimId: string;
    organizationName: string;
    claimedAmount: number;
    reason: string;
  }>({
    isOpen: false,
    claimId: "",
    organizationName: "",
    claimedAmount: 0,
    reason: "",
  });

  // Find user's claim if they are logged in and have an organization
  const userClaim =
    user && organization
      ? claims.find((claim) => claim.org_id === organization.id)
      : null;

  // Consistent date formatting function to avoid hydration mismatch
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  // Consistent datetime formatting function
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  // Fetch event and claims data
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch event details
        const { data: eventData, error: eventError } = await supabase
          .from("events")
          .select("*")
          .eq("id", eventId)
          .single();

        if (eventError) {
          console.error("Error fetching event:", eventError);
          return;
        }

        setEvent(eventData);

        // Fetch claims for this event
        const { data: claimsData, error: claimsError } = await supabase
          .from("claims")
          .select(
            `
            *,
            organizations!claims_org_id_fkey (
              organization_name
            )
          `
          )
          .eq("event_id", eventId)
          .order("created_at", { ascending: false });

        if (claimsError) {
          console.error("Error fetching claims:", claimsError);
        } else {
          setClaims(claimsData || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [eventId, supabase]);

  const handleVote = async (claimId: string, voteType: string) => {
    setSelectedVote((prev) => ({ ...prev, [claimId]: voteType }));
    setHasVoted((prev) => ({ ...prev, [claimId]: true }));
    console.log(`Voted ${voteType} for claim ${claimId}`);
  };

  const openVotingModal = (claim: ClaimWithOrganization) => {
    setVotingModal({
      isOpen: true,
      claimId: claim.id,
      organizationName:
        claim.organizations?.organization_name || "Unknown Organization",
      claimedAmount: claim.claimed_amount,
      reason: claim.reason,
    });
  };

  const getClaimStateColor = (state: string) => {
    switch (state) {
      case "voting":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      case "waiting_for_ai":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "claimed":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getClaimStateText = (state: string) => {
    switch (state) {
      case "voting":
        return "Open for Voting";
      case "approved":
        return "Approved";
      case "rejected":
        return "Rejected";
      case "waiting_for_ai":
        return "Under Review";
      case "claimed":
        return "Funds Claimed";
      default:
        return state;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Divine Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af8c] via-[#c9a876] to-[#b8956a]"></div>
        <div className="absolute inset-0 opacity-60">
          <img
            src="/assets/clouds.PNG"
            alt="Divine Clouds"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Divine Header */}
      <Header />

      <main
        className="relative z-10 max-w-7xl mx-auto px-6 py-8"
        style={{ paddingTop: "100px" }}
      >
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-gray-700 hover:text-gray-900 font-['Cinzel'] transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Back to Events
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <DivineLoader
            message="Loading Sacred Event Details..."
            size="large"
          />
        )}

        {/* Event Not Found */}
        {!loading && !event && (
          <div className="text-center py-16">
            <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
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
            <p className="text-gray-700 font-['Cinzel'] text-lg">
              Event not found.
            </p>
          </div>
        )}

        {/* Event Content */}
        {!loading && event && (
          <>
            {/* Event Header */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4 font-['Cinzel']">
                    {event.title}
                  </h1>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-700 font-['Cinzel']">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.disaster_location}
                    </div>
                    <div className="flex items-center text-gray-700 font-['Cinzel']">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {formatDate(event.created_at)}
                    </div>
                  </div>
                  <p className="text-gray-700 font-['Cinzel'] leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <a
                    href={event.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white/20 hover:bg-white/30 text-gray-800 font-medium py-2 px-3 rounded-lg transition-colors font-['Cinzel'] text-sm backdrop-blur-sm border border-white/30"
                  >
                    <svg
                      className="w-3 h-3 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Source
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {/* Total Amount Display */}
                  <div className="text-center p-4 bg-amber-100/20 rounded-xl border border-amber-200/30 backdrop-blur-sm">
                    <p className="text-sm text-gray-700 font-['Cinzel'] mb-1">
                      Total Needed
                    </p>
                    <p className="text-3xl font-bold text-gray-900 font-['Cinzel'] drop-shadow-sm">
                      ${event.estimated_amount_required.toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsDonationModalOpen(true)}
                    className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-['Cinzel']"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>

            {/* My Claim Container - Only show if user is logged in and has a claim */}
            {userClaim && (
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Cinzel'] flex items-center drop-shadow-sm">
                  <svg
                    className="w-8 h-8 mr-4 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  My Claim Status
                </h2>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-['Cinzel'] drop-shadow-sm">
                        Your Funding Request
                      </h3>
                      <p className="text-base text-gray-700 font-['Cinzel'] font-medium mt-1">
                        Requested: ${userClaim.claimed_amount.toLocaleString()}
                      </p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold border ${getClaimStateColor(
                        userClaim.claim_state
                      )} font-['Cinzel'] drop-shadow-sm`}
                    >
                      {getClaimStateText(userClaim.claim_state)}
                    </span>
                  </div>

                  <p className="text-gray-800 font-['Cinzel'] text-base mb-4 leading-relaxed font-medium">
                    {userClaim.reason}
                  </p>

                  <div className="text-sm text-gray-600 font-['Cinzel'] font-medium">
                    Submitted: {formatDateTime(userClaim.created_at)}
                  </div>

                  {userClaim.claim_state === "voting" && (
                    <div className="mt-4 p-4 bg-blue-50/50 rounded-lg border border-blue-200/50">
                      <p className="text-blue-800 font-['Cinzel'] font-medium text-center">
                        🗳️ Your claim is currently being reviewed by the
                        community. Check the Fund Claims tab to see voting
                        progress.
                      </p>
                    </div>
                  )}

                  {userClaim.claim_state === "approved" && (
                    <div className="mt-4 p-4 bg-green-50/50 rounded-lg border border-green-200/50">
                      <p className="text-green-800 font-['Cinzel'] font-medium text-center">
                        ✅ Congratulations! Your claim has been approved. Funds
                        will be distributed shortly.
                      </p>
                    </div>
                  )}

                  {userClaim.claim_state === "rejected" && (
                    <div className="mt-4 p-4 bg-red-50/50 rounded-lg border border-red-200/50">
                      <p className="text-red-800 font-['Cinzel'] font-medium text-center">
                        ❌ Your claim was not approved by the community. You may
                        submit a new request with additional justification.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tabbed Content Section */}
            <div className="mb-8">
              {/* Tab Navigation */}
              <div className="flex mb-6 bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20 shadow-lg">
                <button
                  onClick={() => setActiveTab("donations")}
                  className={`flex-1 flex items-center justify-center py-3 px-6 rounded-xl font-['Cinzel'] font-semibold transition-all duration-300 ${
                    activeTab === "donations"
                      ? "bg-amber-700 text-white shadow-lg"
                      : "text-gray-700 hover:bg-white/20"
                  }`}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Recent Donations
                </button>
                <button
                  onClick={() => setActiveTab("claims")}
                  className={`flex-1 flex items-center justify-center py-3 px-6 rounded-xl font-['Cinzel'] font-semibold transition-all duration-300 ${
                    activeTab === "claims"
                      ? "bg-amber-700 text-white shadow-lg"
                      : "text-gray-700 hover:bg-white/20"
                  }`}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Fund Claims ({claims.length})
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeTab === "donations" ? (
                    <motion.div
                      key="donations"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <h2 className="text-3xl font-bold text-gray-900 mb-8 font-['Cinzel'] flex items-center drop-shadow-sm">
                        <svg
                          className="w-8 h-8 mr-4 text-amber-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        Recent Donations
                      </h2>

                      {/* Futuristic Encrypted Donations Table */}
                      <div className="bg-transparent rounded-lg p-4 border border-gray-300/50">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 gap-4 text-center py-2 border-b border-gray-300/30 mb-3">
                          <div className="font-mono text-black text-sm font-bold">
                            DONOR_ID
                          </div>
                          <div className="font-mono text-black text-sm font-bold">
                            AMOUNT_USD
                          </div>
                          <div className="font-mono text-black text-sm font-bold">
                            TIMESTAMP
                          </div>
                        </div>

                        {/* Encrypted Donation Rows */}
                        <div className="space-y-2">
                          {[
                            {
                              donor: "X7K9#M2@P5L",
                              amount: "$#@!%*&",
                              time: "2024:##:##",
                            },
                            {
                              donor: "Q3R8@N4$W7",
                              amount: "*&%#$@!",
                              time: "2024:##:##",
                            },
                            {
                              donor: "Z9F2#K5@M8L",
                              amount: "#$%&*@",
                              time: "2024:##:##",
                            },
                            {
                              donor: "B6H3@R7$Q2",
                              amount: "@!#%*&",
                              time: "2024:##:##",
                            },
                            {
                              donor: "V4N8#L1@K9",
                              amount: "*&#@%$",
                              time: "2024:##:##",
                            },
                            {
                              donor: "T2M7@F5#P8",
                              amount: "%$#@!*",
                              time: "2024:##:##",
                            },
                            {
                              donor: "D1Q6#R3@N4",
                              amount: "&*%#@$",
                              time: "2024:##:##",
                            },
                            {
                              donor: "S8L5@K2#M7",
                              amount: "#@!%*&",
                              time: "2024:##:##",
                            },
                          ].map((donation, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-3 gap-4 text-center py-1 hover:bg-gray-100/20 transition-colors rounded"
                            >
                              <div className="font-mono text-black text-sm">
                                <DecryptedText
                                  text={donation.donor}
                                  animateOn="view"
                                  speed={60}
                                  maxIterations={12}
                                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?"
                                  className="font-mono text-black"
                                  encryptedClassName="text-black"
                                />
                              </div>
                              <div className="font-mono text-black text-sm">
                                <DecryptedText
                                  text={donation.amount}
                                  animateOn="view"
                                  speed={80}
                                  maxIterations={15}
                                  characters="$@#%&*!?0123456789ABCDEF"
                                  className="font-mono text-black"
                                  encryptedClassName="text-black"
                                />
                              </div>
                              <div className="font-mono text-black text-sm">
                                <DecryptedText
                                  text={donation.time}
                                  animateOn="view"
                                  speed={70}
                                  maxIterations={10}
                                  characters="0123456789:#-ABCDEF"
                                  className="font-mono text-black"
                                  encryptedClassName="text-black"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="claims"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <h2 className="text-3xl font-bold text-gray-900 mb-8 font-['Cinzel'] flex items-center drop-shadow-sm">
                        <svg
                          className="w-8 h-8 mr-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Fund Claims ({claims.length})
                      </h2>
                      <div className="space-y-6 max-h-96 overflow-y-auto">
                        {claims.map((claim) => (
                          <div
                            key={claim.id}
                            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/25 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 font-['Cinzel'] drop-shadow-sm">
                                  {claim.organizations?.organization_name ||
                                    "Unknown Organization"}
                                </h3>
                                <div className="text-2xl font-black text-amber-800 font-['Cinzel'] font-bold mt-2 drop-shadow-lg">
                                  ${claim.claimed_amount.toLocaleString()}
                                </div>
                              </div>
                              <span
                                className={`px-4 py-2 rounded-full text-sm font-bold border ${getClaimStateColor(
                                  claim.claim_state
                                )} font-['Cinzel'] drop-shadow-sm`}
                              >
                                {getClaimStateText(claim.claim_state)}
                              </span>
                            </div>

                            <p className="text-gray-800 font-['Cinzel'] text-base mb-4 leading-relaxed font-medium">
                              {claim.reason}
                            </p>

                            {claim.claim_state === "voting" && (
                              <div className="mt-4 p-4 bg-blue-50/50 rounded-lg border border-blue-200/50">
                                <h4 className="font-bold text-gray-900 mb-3 font-['Cinzel'] text-lg">
                                  Community Voting:
                                </h4>
                                {hasVoted[claim.id] ? (
                                  <div className="text-center py-4">
                                    <div className="inline-flex items-center text-green-700 font-['Cinzel'] font-bold text-lg">
                                      <svg
                                        className="w-6 h-6 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                      Vote submitted: {selectedVote[claim.id]}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="text-center">
                                    <button
                                      onClick={() => openVotingModal(claim)}
                                      className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-lg transition-colors font-['Cinzel'] shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                                    >
                                      Cast Your Vote
                                    </button>
                                    <p className="text-blue-700 font-['Cinzel'] text-xs mt-2 italic">
                                      Age verification required via ZKPassport
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}

                            <div className="mt-4 text-sm text-gray-600 font-['Cinzel'] font-medium">
                              Submitted: {formatDateTime(claim.created_at)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Fund Claiming Information & Request Button */}
            <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Cinzel'] drop-shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Request Relief Funds
                </h2>
                <p className="text-gray-800 font-['Cinzel'] text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                  Organizations can submit funding requests for relief efforts.
                  All requests go through a transparent community voting process
                  to ensure funds reach legitimate causes.
                </p>
              </div>

              {/* How Fund Claiming Works */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100/60 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-['Cinzel'] mb-3 drop-shadow-sm">
                    1. Submit Request
                  </h3>
                  <p className="text-gray-700 font-['Cinzel'] font-medium">
                    Submit your funding request with detailed justification and
                    required amount
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100/60 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-['Cinzel'] mb-3 drop-shadow-sm">
                    2. Community Review
                  </h3>
                  <p className="text-gray-700 font-['Cinzel'] font-medium">
                    The community votes to accept, reject, or adjust your
                    funding request
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100/60 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-['Cinzel'] mb-3 drop-shadow-sm">
                    3. Receive Funds
                  </h3>
                  <p className="text-gray-700 font-['Cinzel'] font-medium">
                    Approved requests receive funds directly for disaster relief
                    operations
                  </p>
                </div>
              </div>

              {/* Request Button */}
              {user && organization ? (
                <div className="text-center">
                  <button
                    onClick={() => setIsRequestFundsModalOpen(true)}
                    disabled={!!userClaim}
                    className={`font-bold py-6 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-['Cinzel'] text-xl ${
                      userClaim
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                    }`}
                  >
                    {userClaim ? "Request Already Submitted" : "Request Funds"}
                  </button>
                  <p className="text-gray-600 font-['Cinzel'] text-sm mt-4 italic">
                    {userClaim
                      ? "✅ You have already submitted a funding request for this event"
                      : "💡 Anonymous voting ensures fair and transparent fund distribution"}
                  </p>
                </div>
              ) : user && !organization ? (
                <div className="text-center">
                  <Link
                    href="/kyb"
                    className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-['Cinzel'] text-xl"
                  >
                    Complete KYB Verification
                  </Link>
                  <p className="text-gray-600 font-['Cinzel'] text-sm mt-4 italic">
                    💡 Complete organization verification to submit funding
                    requests
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <Link
                    href="/login"
                    className="inline-block bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-['Cinzel'] text-xl"
                  >
                    Sign In to Request Funds
                  </Link>
                  <p className="text-gray-600 font-['Cinzel'] text-sm mt-4 italic">
                    💡 Register your organization to submit funding requests
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        eventTitle={event?.title || "Disaster Relief Event"}
      />

      {/* Request Funds Modal */}
      {user && organization && (
        <RequestFundsModal
          isOpen={isRequestFundsModalOpen}
          onClose={() => setIsRequestFundsModalOpen(false)}
          eventTitle={event?.title || "Disaster Relief Event"}
          eventId={event?.id || ""}
          user={user}
          organization={organization}
        />
      )}

      {/* Voting Modal */}
      {votingModal.isOpen && (
        <VotingModal
          isOpen={votingModal.isOpen}
          onClose={() =>
            setVotingModal({
              isOpen: false,
              claimId: "",
              organizationName: "",
              claimedAmount: 0,
              reason: "",
            })
          }
          claimId={votingModal.claimId}
          organizationName={votingModal.organizationName}
          claimedAmount={votingModal.claimedAmount}
          reason={votingModal.reason}
          onVoteComplete={(voteType) =>
            handleVote(votingModal.claimId, voteType)
          }
        />
      )}
    </div>
  );
}
