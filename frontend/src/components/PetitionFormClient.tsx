"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { Organization, FundVault } from "@/lib/types/database";
import { useNavigate } from "react-router-dom";

interface PetitionFormClientProps {
  user: User;
  organization: Organization;
  fundVault: FundVault;
}

interface PetitionFormData {
  petition_title: string;
  petition_description: string;
  requested_amount: number;
  project_location: string;
  beneficiaries_count: number;
  project_timeline: string;
  expected_impact: string;
}

export default function PetitionFormClient({
  organization,
  fundVault,
}: PetitionFormClientProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const supabase = createClient();

  const [formData, setFormData] = useState<PetitionFormData>({
    petition_title: "",
    petition_description: "",
    requested_amount: 0,
    project_location: "",
    beneficiaries_count: 0,
    project_timeline: "",
    expected_impact: "",
  });

  const handleInputChange = (field: keyof PetitionFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Validate requested amount doesn't exceed available funds
      if (formData.requested_amount > (fundVault.remaining_amount || 0)) {
        throw new Error("Requested amount exceeds available funds");
      }

      // Submit petition
      const { error: petitionError } = await supabase
        .from("fund_petitions")
        .insert({
          organization_id: organization.id,
          fund_vault_id: fundVault.id,
          ...formData,
        });

      if (petitionError) throw petitionError;

      setSuccess(true);
      setTimeout(() => {
        navigate("/events");
      }, 2000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while submitting your petition"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
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

        <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 max-w-md w-full mx-4 shadow-2xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/30">
              <svg
                className="w-10 h-10 text-green-600"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Cinzel']">
              Petition Submitted!
            </h2>
            <p className="text-gray-700 mb-6 font-['Cinzel'] text-lg">
              Your petition has been successfully submitted for review. You will
              be redirected to your events shortly.
            </p>
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-900 border-t-transparent mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-800 hover:text-gray-900 mb-6 flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 transition-all duration-300 font-['Cinzel']"
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

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 font-['Cinzel'] text-center">
              Submit Fund Petition
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <span className="text-gray-600 font-semibold font-['Cinzel']">
                  Fund Vault:
                </span>
                <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                  {fundVault.vault_name}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <span className="text-gray-600 font-semibold font-['Cinzel']">
                  Available Funds:
                </span>
                <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                  ${fundVault.remaining_amount?.toLocaleString()}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <span className="text-gray-600 font-semibold font-['Cinzel']">
                  Disaster Type:
                </span>
                <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                  {fundVault.disaster_type}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <span className="text-gray-600 font-semibold font-['Cinzel']">
                  Location:
                </span>
                <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                  {fundVault.location}
                </span>
              </div>
            </div>
            {fundVault.description && (
              <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <p className="text-gray-700 font-['Cinzel'] leading-relaxed">
                  {fundVault.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Petition Form */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                Petition Title *
              </label>
              <input
                type="text"
                required
                value={formData.petition_title}
                onChange={(e) =>
                  handleInputChange("petition_title", e.target.value)
                }
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                placeholder="Brief title for your petition"
              />
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                Petition Description *
              </label>
              <textarea
                rows={6}
                required
                value={formData.petition_description}
                onChange={(e) =>
                  handleInputChange("petition_description", e.target.value)
                }
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel'] resize-none"
                placeholder="Detailed description of your project and how the funds will be used..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Requested Amount (USD) *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  max={fundVault.remaining_amount || 0}
                  value={formData.requested_amount}
                  onChange={(e) =>
                    handleInputChange(
                      "requested_amount",
                      parseFloat(e.target.value).toString()
                    )
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                />
                <p className="text-sm text-gray-600 mt-2 font-['Cinzel']">
                  Maximum: ${fundVault.remaining_amount?.toLocaleString()}
                </p>
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Project Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.project_location}
                  onChange={(e) =>
                    handleInputChange("project_location", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Where will the project take place?"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Number of Beneficiaries *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.beneficiaries_count}
                  onChange={(e) =>
                    handleInputChange(
                      "beneficiaries_count",
                      parseInt(e.target.value).toString()
                    )
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="How many people will benefit?"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Project Timeline *
                </label>
                <input
                  type="text"
                  required
                  value={formData.project_timeline}
                  onChange={(e) =>
                    handleInputChange("project_timeline", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="e.g., 6 months, 1 year"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                Expected Impact *
              </label>
              <textarea
                rows={4}
                required
                value={formData.expected_impact}
                onChange={(e) =>
                  handleInputChange("expected_impact", e.target.value)
                }
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel'] resize-none"
                placeholder="Describe the expected impact and outcomes of your project..."
              />
            </div>

            {error && (
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-800 px-6 py-4 rounded-2xl font-['Cinzel']">
                {error}
              </div>
            )}

            <div className="flex justify-between items-center pt-8">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-8 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 font-semibold font-['Cinzel'] shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-gray-900 rounded-xl hover:from-[#ffed4e] hover:to-[#ffd700] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold font-['Cinzel'] shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {isLoading ? "Submitting..." : "Submit Petition"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
