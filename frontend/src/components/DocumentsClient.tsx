"use client";

import { User } from "@supabase/supabase-js";
import { Organization, KYBDocument } from "@/lib/types/database";
import { useNavigate } from "react-router-dom";

interface DocumentsClientProps {
  user: User;
  organization: Organization;
  documents: KYBDocument[];
}

export default function DocumentsClient({
  organization,
  documents,
}: DocumentsClientProps) {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-500/20 text-green-800 border border-green-500/30";
      case "rejected":
        return "bg-red-500/20 text-red-800 border border-red-500/30";
      default:
        return "bg-yellow-500/20 text-yellow-800 border border-yellow-500/30";
    }
  };

  const formatDocumentType = (type: string) => {
    return type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate("/events")}
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

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-['Cinzel'] tracking-wide">
              Document Management
            </h1>
            <p className="text-gray-700 text-lg font-['Cinzel']">
              Manage KYB verification documents for{" "}
              {organization.organization_name}
            </p>
          </div>
        </div>

        {/* Documents List */}
        {documents.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl text-center">
            <div className="w-20 h-20 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-gray-600"
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-['Cinzel']">
              No Documents Uploaded
            </h3>
            <p className="text-gray-700 mb-8 text-lg font-['Cinzel']">
              You haven&apos;t uploaded any KYB documents yet. Complete your KYB
              form to upload required documents.
            </p>
            <button
              onClick={() => navigate("/kyb")}
              className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] hover:from-[#ffed4e] hover:to-[#ffd700] text-gray-900 px-8 py-4 rounded-xl font-semibold font-['Cinzel'] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Complete KYB Form
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((document) => (
              <div
                key={document.id}
                className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Cinzel']">
                      {formatDocumentType(document.document_type)}
                    </h3>
                    <p className="text-sm text-gray-700 truncate font-['Cinzel']">
                      {document.document_name}
                    </p>
                  </div>
                  <span
                    className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full font-['Cinzel'] ${getStatusColor(
                      document.verification_status || "pending"
                    )}`}
                  >
                    {(document.verification_status || "pending").toUpperCase()}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-['Cinzel']">
                      File Size:
                    </span>
                    <span className="text-gray-900 font-semibold font-['Cinzel']">
                      {document.file_size
                        ? formatFileSize(document.file_size)
                        : "Unknown"}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-['Cinzel']">
                      Uploaded:
                    </span>
                    <span className="text-gray-900 font-semibold font-['Cinzel']">
                      {new Date(document.uploaded_at).toLocaleDateString()}
                    </span>
                  </div>

                  {document.verified_at && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-['Cinzel']">
                        Verified:
                      </span>
                      <span className="text-gray-900 font-semibold font-['Cinzel']">
                        {new Date(document.verified_at).toLocaleDateString()}
                      </span>
                    </div>
                  )}

                  {document.verification_notes && (
                    <div className="mt-4 p-4 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-2xl">
                      <h4 className="text-xs font-semibold text-yellow-800 mb-2 font-['Cinzel']">
                        Verification Notes
                      </h4>
                      <p className="text-yellow-700 text-xs font-['Cinzel']">
                        {document.verification_notes}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="font-['Cinzel']">
                        {document.mime_type || "Unknown type"}
                      </span>
                    </div>

                    {document.verification_status === "verified" && (
                      <div className="flex items-center text-green-600">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        <span className="text-xs font-semibold font-['Cinzel']">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload More Documents */}
        {documents.length > 0 && (
          <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-['Cinzel']">
              Need to Upload More Documents?
            </h3>
            <p className="text-gray-700 mb-6 text-lg font-['Cinzel']">
              You can update your organization information and upload additional
              documents through the KYB form.
            </p>
            <button
              onClick={() => navigate("/kyb")}
              className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] hover:from-[#ffed4e] hover:to-[#ffd700] text-gray-900 px-8 py-4 rounded-xl font-semibold font-['Cinzel'] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Update KYB Information
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
