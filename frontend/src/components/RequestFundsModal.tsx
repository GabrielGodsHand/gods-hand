"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "../lib/supabase/client";
import { useWallet } from "./WalletContext";

interface RequestFundsModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventId: string;
}

interface ApiResponse {
  petition: string;
  isTrue: boolean;
  amount: number;
  summary: string;
  reasoning: string;
  sources: Array<{
    title: string;
    url: string;
    snippet: string;
  }>;
  responseTimeMs: number;
}

export default function RequestFundsModal({
  isOpen,
  onClose,
  eventTitle,
  eventId,
}: RequestFundsModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [organizationName, setOrganizationName] = useState<string>("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const { account } = useWallet();
  const [logoPreview, setLogoPreview] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supabase = createClient();

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1 && organizationName.trim()) {
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = async () => {
    if (!reason.trim() || !organizationName.trim()) {
      setSubmitStatus("Please provide all required information.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("Processing your request...");

    try {
      // Insert claim into database with organization details
      const { data: claimData, error } = await supabase
        .from("claims")
        .insert({
          event_id: eventId,
          organization_name: organizationName.trim(),
          claimed_amount: 0,
          organization_aztec_address: account?.getAddress() || "",
          reason: reason.trim(),
          claim_state: "voting",
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      setSubmitStatus(
        `Success! Your funding request  has been submitted. AI is analyzing youworks.`
      );
      setIsProcessing(true);

      const apiUrl =
        "https://938acb9507759287bfcfb317b56ab1b38f1d599b-3000.dstack-prod8.phala.network";

      const apiResponse = await fetch(`${apiUrl}/api/fact-check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          statement: reason,
        }),
      });

      const data = await apiResponse.json();
      console.log(data);

      await supabase
        .from("claims")
        .update({
          claimed_amount: data.amount,
        })
        .eq("id", claimData.id);

      setApiResponse(data);
      setIsProcessing(false);
      setIsSuccess(true);
      setSubmitStatus("Analysis complete! Review the results below.");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting funding request:", error);
      setSubmitStatus(
        `Error: ${
          error instanceof Error ? error.message : "Failed to submit request"
        }`
      );
      setIsSubmitting(false);
      setIsProcessing(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setOrganizationName("");
    setLogoFile(null);
    setLogoPreview("");
    setReason("");
    setSubmitStatus("");
    setIsSubmitting(false);
    setIsSuccess(false);
    setIsProcessing(false);
    setApiResponse(null);
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const renderStep1 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 font-['Cinzel'] mb-2">
          Organization Information
        </h3>
        <p className="text-gray-700 font-['Cinzel'] text-sm">
          Please provide your organization details
        </p>
      </div>

      {/* Logo Upload */}
      <div className="text-center mb-6">
        <label className="block text-gray-900 font-['Cinzel'] font-bold mb-3">
          Organization Logo (Optional)
        </label>
        <div className="flex flex-col items-center space-y-4">
          {logoPreview && (
            <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-600/50">
              <img
                src={logoPreview}
                alt="Logo preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="bg-white/20 backdrop-blur-sm border-2 border-amber-600/50 hover:bg-white/30 text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold font-['Cinzel'] transition-all duration-300"
          >
            {logoPreview ? "Change Logo" : "Upload Logo"}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Organization Name */}
      <div>
        <label className="block text-gray-900 font-['Cinzel'] font-bold mb-3 text-lg">
          Organization Name *
        </label>
        <input
          type="text"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          placeholder="Enter your organization name..."
          maxLength={100}
          className="w-full p-4 bg-white/20 backdrop-blur-sm border-2 border-amber-600/50 rounded-xl text-gray-900 font-['Cinzel'] placeholder-gray-600 focus:outline-none focus:border-amber-700 focus:bg-white/30 transition-all text-lg"
        />
        <div className="mt-2 text-gray-700 font-['Cinzel'] text-xs">
          {organizationName.length}/100 characters
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-6">
        <button
          onClick={handleNextStep}
          disabled={!organizationName.trim()}
          className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 disabled:bg-gray-400/20 disabled:border-gray-400/30 disabled:text-gray-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none font-['Cinzel']"
        >
          Continue to Funding Request
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 font-['Cinzel'] mb-2">
          Funding Request Details
        </h3>
        <div className="flex justify-center items-center gap-3 text-gray-800 font-['Cinzel'] text-sm">
          <span>
            Organization: <span className="font-bold">{organizationName}</span>
          </span>
        </div>
      </div>

      {/* Reason Input */}
      <div>
        <label className="block text-gray-900 font-['Cinzel'] font-bold mb-3 text-lg">
          Funding Request Justification *
        </label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Please provide a detailed explanation of why you need funding for this disaster relief effort. Include specific plans, activities, beneficiaries, timeline, and expected impact..."
          rows={10}
          maxLength={2000}
          className="w-full p-4 bg-white/20 backdrop-blur-sm border-2 border-amber-600/50 rounded-xl text-gray-900 font-['Cinzel'] placeholder-gray-600 focus:outline-none focus:border-amber-700 focus:bg-white/30 transition-all resize-none text-sm leading-relaxed"
        />
        <div className="mt-2 flex justify-between items-center">
          <div className="text-gray-700 font-['Cinzel'] text-xs italic">
            💡 Include specific plans, timeline, beneficiaries, and expected
            outcomes
          </div>
          <div className="text-gray-700 font-['Cinzel'] text-xs font-medium">
            {reason.length}/2000 characters
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handlePrevStep}
          className="flex-1 bg-gray-500/20 backdrop-blur-xl border border-gray-500/30 hover:bg-gray-500/30 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 font-['Cinzel']"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !reason.trim()}
          className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 disabled:bg-gray-400/20 disabled:border-gray-400/30 disabled:text-gray-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none font-['Cinzel']"
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
              {isProcessing ? "Analyzing..." : "Submitting..."}
            </div>
          ) : (
            "Submit Funding Request"
          )}
        </button>
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 font-['Cinzel'] mb-2">
          AI Analysis Results
        </h3>
        <div className="flex justify-center items-center gap-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-bold font-['Cinzel'] ${
              apiResponse?.isTrue
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {apiResponse?.isTrue ? "✓ Verified" : "✗ Unverified"}
          </span>
          <span className="text-2xl font-bold text-amber-600 font-['Cinzel']">
            ${apiResponse?.amount?.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-amber-600/30">
        <h4 className="font-bold text-gray-900 font-['Cinzel'] mb-2">
          Petition Summary
        </h4>
        <p className="text-gray-800 font-['Cinzel'] text-sm leading-relaxed">
          {apiResponse?.petition}
        </p>
      </div>

      <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-amber-600/30">
        <h4 className="font-bold text-gray-900 font-['Cinzel'] mb-2">
          Analysis Summary
        </h4>
        <p className="text-gray-800 font-['Cinzel'] text-sm leading-relaxed">
          {apiResponse?.summary}
        </p>
      </div>

      <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-amber-600/30">
        <h4 className="font-bold text-gray-900 font-['Cinzel'] mb-2">
          Reasoning
        </h4>
        <p className="text-gray-800 font-['Cinzel'] text-sm leading-relaxed">
          {apiResponse?.reasoning}
        </p>
      </div>

      {apiResponse?.sources && apiResponse.sources.length > 0 && (
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-amber-600/30">
          <h4 className="font-bold text-gray-900 font-['Cinzel'] mb-3">
            Sources
          </h4>
          <div className="space-y-2">
            {apiResponse.sources.map((source, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-3">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-700 hover:text-amber-800 font-['Cinzel'] text-sm block mb-1 hover:underline"
                >
                  {source.title}
                </a>
                <p className="text-gray-700 font-['Cinzel'] text-xs leading-relaxed">
                  {source.snippet}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center text-gray-600 font-['Cinzel'] text-xs">
        Analysis completed in {apiResponse?.responseTimeMs}ms
      </div>

      <button
        onClick={onClose}
        className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-['Cinzel']"
      >
        Close
      </button>
    </div>
  );

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
            className="relative max-w-5xl w-full h-fit"
            style={{ maxHeight: "calc(100vh - 160px)" }}
          >
            {/* Ancient Scroll Design */}
            <div
              className="relative rounded-2xl border-4 border-amber-800 shadow-2xl overflow-y-auto"
              style={{
                backgroundColor: "#cbb287",
                maxHeight: "calc(100vh - 160px)",
              }}
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
                  <h2 className="text-3xl font-bold text-gray-900 font-['Cinzel'] mb-2 drop-shadow-sm">
                    Request Funds
                  </h2>
                  <div className="flex justify-center items-center gap-3 text-gray-800 font-['Cinzel'] text-sm">
                    <span>
                      For: <span className="font-bold">{eventTitle}</span>
                    </span>
                  </div>

                  {/* Step Indicator - Only show during form steps */}
                  {!isSuccess && (
                    <div className="flex justify-center items-center mt-4 space-x-4">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold font-['Cinzel'] ${
                          currentStep >= 1
                            ? "bg-amber-600 text-white"
                            : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        1
                      </div>
                      <div
                        className={`w-12 h-1 rounded-full ${
                          currentStep >= 2 ? "bg-amber-600" : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold font-['Cinzel'] ${
                          currentStep >= 2
                            ? "bg-amber-600 text-white"
                            : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        2
                      </div>
                    </div>
                  )}
                </div>

                {/* Status Message */}
                {submitStatus && !isSuccess && (
                  <div
                    className={`mb-4 p-3 rounded-lg border ${
                      submitStatus.startsWith("Error")
                        ? "bg-red-200/70 border-red-600/50"
                        : "bg-amber-200/70 border-amber-600/50"
                    }`}
                  >
                    <p className="text-gray-900 font-['Cinzel'] text-xs text-center font-medium">
                      {submitStatus}
                    </p>
                  </div>
                )}

                {/* Form Steps */}
                {!isSuccess && (
                  <>
                    {currentStep === 1 && renderStep1()}
                    {currentStep === 2 && renderStep2()}
                  </>
                )}

                {/* Results */}
                {isSuccess && apiResponse && renderResults()}

                {/* Divine Footer - Only show during form steps */}
                {!isSuccess && (
                  <div className="mt-6 text-center">
                    <p className="text-gray-800 font-['Cinzel'] text-xs italic">
                      ✨ May your efforts bring hope to those in need ✨
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
