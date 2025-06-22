"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zkPassportService } from "../lib/zkpassport";
import { createClient } from "../lib/supabase/client";
import qrcode from "qrcode";

interface VotingModalProps {
  isOpen: boolean;
  onClose: () => void;
  claimId: string;
  organizationName: string;
  disasterHash: string;
  organizationAztecAddress: string;
  claimedAmount: number;
  reason: string;
  onVoteComplete: (voteType: string) => void;
}

type VotingStep = "verification" | "voting" | "success";
type VoteType = "accept" | "reject" | "raise_amount" | "lower_amount";

export default function VotingModal({
  isOpen,
  onClose,
  claimId,
  disasterHash,
  organizationAztecAddress,
  organizationName,
  claimedAmount,
  reason,
  onVoteComplete,
}: VotingModalProps) {
  const [currentStep, setCurrentStep] = useState<VotingStep>("verification");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<string>("");
  const [selectedVote, setSelectedVote] = useState<VoteType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const supabase = createClient();

  const handleVerification = async () => {
    setIsVerifying(true);
    setVerificationStatus("Generating QR code...");

    try {
      const { url, onResult } = await zkPassportService.verifyAgeForVoting();

      // Generate QR code instead of opening popup
      const canvas = document.getElementById("qr-canvas");
      if (canvas) {
        await qrcode.toCanvas(canvas, url);
        setVerificationStatus(
          "Scan the QR code with your phone to verify your age"
        );
      }

      onResult(({ verified, result }) => {
        if (verified) {
          const isOver18 = result.age?.gte?.result;
          if (isOver18) {
            setVerificationStatus(
              "✅ Age verification successful! You can now vote."
            );
            setTimeout(() => {
              setCurrentStep("voting");
              setIsVerifying(false);
              setVerificationStatus("");
            }, 2000);
          } else {
            setVerificationStatus(
              "❌ You must be 18+ years old to vote on funding claims."
            );
            setIsVerifying(false);
          }
        } else {
          setVerificationStatus("❌ Verification failed. Please try again.");
          setIsVerifying(false);
        }
      });
    } catch (error) {
      console.error("Verification error:", error);
      setVerificationStatus(
        `❌ Error: ${
          error instanceof Error ? error.message : "Verification failed"
        }`
      );
      setIsVerifying(false);
    }
  };

  const handleVoteSubmit = async () => {
    if (!selectedVote) return;

    setIsSubmitting(true);
    setSubmitStatus("Submitting your vote...");

    try {
      const { error } = await supabase.from("votes").insert({
        claim_id: claimId,
        vote_type: selectedVote,
        voter_ip: null, // Could be set from request headers in a real implementation
      });

      if (error) {
        throw error;
      }

      setSubmitStatus("✅ Vote submitted successfully!");
      setCurrentStep("success");

      // Notify parent component
      onVoteComplete(selectedVote);

      // Close modal after success
      setTimeout(() => {
        onClose();
        resetModal();
      }, 2000);
    } catch (error) {
      console.error("Vote submission error:", error);
      setSubmitStatus(
        `❌ Error: ${
          error instanceof Error ? error.message : "Failed to submit vote"
        }`
      );
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setCurrentStep("verification");
    setIsVerifying(false);
    setVerificationStatus("");
    setSelectedVote(null);
    setIsSubmitting(false);
    setSubmitStatus("");
  };

  useEffect(() => {
    if (!isOpen) {
      resetModal();
    }
  }, [isOpen]);

  const getVoteTypeLabel = (voteType: VoteType) => {
    switch (voteType) {
      case "accept":
        return "✓ Accept Request";
      case "reject":
        return "✗ Reject Request";
      case "raise_amount":
        return "↑ Raise Amount";
      case "lower_amount":
        return "↓ Lower Amount";
      default:
        return voteType;
    }
  };

  const getVoteTypeDescription = (voteType: VoteType) => {
    switch (voteType) {
      case "accept":
        return "Approve the funding request as submitted";
      case "reject":
        return "Reject the funding request entirely";
      case "raise_amount":
        return "Approve but suggest a higher amount";
      case "lower_amount":
        return "Approve but suggest a lower amount";
      default:
        return "";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ paddingTop: "120px" }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Scroll Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative max-w-3xl w-full h-fit"
            style={{ maxHeight: "calc(100vh - 160px)" }}
          >
            {/* Ancient Scroll Design */}
            <div
              className="relative rounded-2xl border-4 border-amber-800 shadow-2xl"
              style={{ backgroundColor: "#cbb287" }}
            >
              {/* Scroll Decorations */}
              <div className="absolute -top-2 left-4 right-4 h-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 rounded-full"></div>
              <div className="absolute -bottom-2 left-4 right-4 h-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 rounded-full"></div>

              {/* Scroll Ends */}
              <div className="absolute -left-3 top-2 bottom-2 w-6 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full shadow-lg"></div>
              <div className="absolute -right-3 top-2 bottom-2 w-6 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full shadow-lg"></div>

              {/* Content */}
              <div className="p-6">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-amber-900 hover:text-black transition-colors z-10"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 font-['Cinzel'] mb-2 drop-shadow-sm">
                    Cast Your Vote
                  </h2>
                  <div className="text-gray-800 font-['Cinzel'] text-sm">
                    <div className="font-bold">{organizationName}</div>
                    <div className="text-xl font-black text-amber-800 mt-1">
                      ${claimedAmount.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait">
                  {currentStep === "verification" && (
                    <motion.div
                      key="verification"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 font-['Cinzel'] mb-2">
                          Age Verification Required
                        </h3>
                        <p className="text-gray-700 font-['Cinzel'] mb-4 leading-relaxed">
                          Scan the QR code with your phone to verify you are 18+
                          using ZKPassport.
                        </p>
                      </div>

                      {/* QR Code Display */}
                      {isVerifying && (
                        <div className="mb-4 text-center">
                          <canvas
                            id="qr-canvas"
                            className="mx-auto border-2 border-amber-600 rounded-lg bg-white p-4"
                          />
                        </div>
                      )}

                      {/* Status Message */}
                      {verificationStatus && (
                        <div className="mb-4 p-3 bg-amber-200/70 border border-amber-600/50 rounded-lg">
                          <p className="text-gray-900 font-['Cinzel'] text-sm text-center font-medium">
                            {verificationStatus}
                          </p>
                        </div>
                      )}

                      {/* Verification Button */}
                      <button
                        onClick={handleVerification}
                        disabled={isVerifying}
                        className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 disabled:bg-gray-400/20 disabled:border-gray-400/30 disabled:text-gray-500 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none font-['Cinzel']"
                      >
                        {isVerifying
                          ? "Waiting for verification..."
                          : "Generate QR Code"}
                      </button>
                    </motion.div>
                  )}
                  {currentStep === "voting" && (
                    <motion.div
                      key="voting"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-900 font-['Cinzel'] mb-3 text-center">
                          Select Your Vote
                        </h3>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                          <p className="text-gray-800 font-['Cinzel'] text-sm leading-relaxed">
                            {reason}
                          </p>
                        </div>
                      </div>

                      {/* Voting Options */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {(
                          [
                            "accept",
                            "reject",
                            "raise_amount",
                            "lower_amount",
                          ] as VoteType[]
                        ).map((voteType) => (
                          <button
                            key={voteType}
                            onClick={() => setSelectedVote(voteType)}
                            className={`p-4 rounded-lg border-2 transition-all duration-300 font-['Cinzel'] text-left ${
                              selectedVote === voteType
                                ? "border-amber-600 bg-amber-100/50 shadow-lg"
                                : "border-white/30 bg-white/10 hover:bg-white/20"
                            }`}
                          >
                            <div className="font-bold text-gray-900 mb-1">
                              {getVoteTypeLabel(voteType)}
                            </div>
                            <div className="text-gray-700 text-xs">
                              {getVoteTypeDescription(voteType)}
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Status Message */}
                      {submitStatus && (
                        <div className="mb-4 p-3 bg-amber-200/70 border border-amber-600/50 rounded-lg">
                          <p className="text-gray-900 font-['Cinzel'] text-sm text-center font-medium">
                            {submitStatus}
                          </p>
                        </div>
                      )}

                      {/* Submit Vote Button */}
                      <button
                        onClick={handleVoteSubmit}
                        disabled={!selectedVote || isSubmitting}
                        className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 disabled:bg-gray-400/20 disabled:border-gray-400/30 disabled:text-gray-500 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none font-['Cinzel']"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-900"
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
                            Submitting Vote...
                          </div>
                        ) : (
                          `Submit Vote: ${
                            selectedVote
                              ? getVoteTypeLabel(selectedVote)
                              : "Select an option"
                          }`
                        )}
                      </button>
                    </motion.div>
                  )}

                  {currentStep === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 font-['Cinzel'] mb-2">
                          Vote Submitted Successfully!
                        </h3>
                        <p className="text-gray-700 font-['Cinzel'] leading-relaxed">
                          Thank you for participating in the democratic funding
                          process. Your vote has been recorded.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divine Footer */}
                <div className="mt-6 text-center">
                  <p className="text-gray-800 font-['Cinzel'] text-xs italic">
                    ✨ Your voice matters in disaster relief decisions ✨
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
