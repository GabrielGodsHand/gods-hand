"use client";

import { useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import {
  Organization,
  OrganizationFormData,
  UBOFormData,
  LEGAL_STRUCTURES,
  INDUSTRY_SECTORS,
  KYB_DOCUMENT_TYPES,
} from "@/lib/types/database";
import { useNavigate } from "react-router-dom";

interface KYBFormClientProps {
  user: User;
  existingOrganization: Organization | null;
}

interface FormStep {
  id: number;
  title: string;
  description: string;
}

const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    title: "Basic Information",
    description: "Organization details and structure",
  },
  {
    id: 2,
    title: "Contact & Address",
    description: "Registered and operating addresses",
  },
  {
    id: 3,
    title: "Business Details",
    description: "Industry, revenue, and operations",
  },
  {
    id: 4,
    title: "Banking Information",
    description: "Financial account details",
  },
  {
    id: 5,
    title: "Ultimate Beneficial Owners",
    description: "UBO information and ownership",
  },
  {
    id: 6,
    title: "Documents Upload",
    description: "Required verification documents",
  },
  {
    id: 7,
    title: "Review & Submit",
    description: "Final review and submission",
  },
];

export default function KYBFormClient({
  user,
  existingOrganization,
}: KYBFormClientProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");
  const [documents, setDocuments] = useState<{ [key: string]: File }>({});
  const [ubos, setUbos] = useState<UBOFormData[]>([
    {
      first_name: "John",
      last_name: "Smith",
      ownership_percentage: 60,
      position_title: "Executive Director",
    },
    {
      first_name: "Sarah",
      last_name: "Johnson",
      ownership_percentage: 40,
      position_title: "Board Chairman",
    },
  ]);

  const navigate = useNavigate();
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form data state with pre-filled mock values for testing
  const [formData, setFormData] = useState<OrganizationFormData>({
    organization_name:
      existingOrganization?.organization_name || "Global Relief Foundation",
    legal_name:
      existingOrganization?.legal_name || "Global Relief Foundation Inc.",
    trading_name: existingOrganization?.trading_name || "GRF",
    registration_number:
      existingOrganization?.registration_number || "REG-2024-001234",
    tax_identification_number:
      existingOrganization?.tax_identification_number || "12-3456789",
    vat_number: existingOrganization?.vat_number || "VAT123456789",
    legal_structure: existingOrganization?.legal_structure || "non_profit",
    incorporation_date:
      existingOrganization?.incorporation_date || "2020-01-15",
    incorporation_country: existingOrganization?.incorporation_country || "US",
    incorporation_state:
      existingOrganization?.incorporation_state || "California",
    registered_address_line1:
      existingOrganization?.registered_address_line1 || "123 Charity Lane",
    registered_address_line2:
      existingOrganization?.registered_address_line2 || "Suite 100",
    registered_city: existingOrganization?.registered_city || "San Francisco",
    registered_state: existingOrganization?.registered_state || "CA",
    registered_postal_code:
      existingOrganization?.registered_postal_code || "94102",
    registered_country: existingOrganization?.registered_country || "US",
    operating_address_line1:
      existingOrganization?.operating_address_line1 || "456 Relief Street",
    operating_address_line2:
      existingOrganization?.operating_address_line2 || "Floor 2",
    operating_city: existingOrganization?.operating_city || "Los Angeles",
    operating_state: existingOrganization?.operating_state || "CA",
    operating_postal_code:
      existingOrganization?.operating_postal_code || "90210",
    operating_country: existingOrganization?.operating_country || "US",
    phone_number: existingOrganization?.phone_number || "+1-555-123-4567",
    email: existingOrganization?.email || "info@globalrelief.org",
    website: existingOrganization?.website || "https://www.globalrelief.org",
    industry_sector:
      existingOrganization?.industry_sector || "humanitarian_aid",
    business_description:
      existingOrganization?.business_description ||
      "A non-profit organization dedicated to providing disaster relief and humanitarian aid to communities in need around the world.",
    naics_code: existingOrganization?.naics_code || "813212",
    sic_code: existingOrganization?.sic_code || "8399",
    annual_revenue: existingOrganization?.annual_revenue || 2500000,
    number_of_employees: existingOrganization?.number_of_employees || 25,
    bank_name: existingOrganization?.bank_name || "Bank of America",
    bank_account_number:
      existingOrganization?.bank_account_number || "****1234",
    bank_routing_number:
      existingOrganization?.bank_routing_number || "021000322",
    iban: existingOrganization?.iban || "US12BOFA21000012345678",
    swift_code: existingOrganization?.swift_code || "BOFAUS3N",
    politically_exposed: existingOrganization?.politically_exposed || false,
    high_risk_jurisdiction:
      existingOrganization?.high_risk_jurisdiction || false,
  });

  const handleInputChange = (
    field: keyof OrganizationFormData,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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

  const handleDocumentUpload = (documentType: string, file: File) => {
    setDocuments((prev) => ({ ...prev, [documentType]: file }));
  };

  const addUBO = () => {
    setUbos((prev) => [
      ...prev,
      {
        first_name: "",
        last_name: "",
        ownership_percentage: 0,
        position_title: "",
      },
    ]);
  };

  const updateUBO = (
    index: number,
    field: keyof UBOFormData,
    value: string | number
  ) => {
    setUbos((prev) =>
      prev.map((ubo, i) => (i === index ? { ...ubo, [field]: value } : ubo))
    );
  };

  const removeUBO = (index: number) => {
    setUbos((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadFile = async (file: File, bucket: string, path: string) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;
    return data;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError("");

    try {
      let logoUrl = existingOrganization?.logo_url;

      // Upload logo if provided
      if (logoFile) {
        const logoPath = `${user.id}/logo-${Date.now()}.${logoFile.name
          .split(".")
          .pop()}`;
        await uploadFile(logoFile, "organization-logos", logoPath);
        const {
          data: { publicUrl },
        } = supabase.storage.from("organization-logos").getPublicUrl(logoPath);
        logoUrl = publicUrl;
      }

      // Create or update organization
      const organizationData = {
        ...formData,
        user_id: user.id,
        logo_url: logoUrl,
        kyb_status: "approved" as const,
      };

      let organizationId: string;

      if (existingOrganization) {
        const { error } = await supabase
          .from("organizations")
          .update(organizationData)
          .eq("id", existingOrganization.id);

        if (error) throw error;
        organizationId = existingOrganization.id;
      } else {
        const { data, error } = await supabase
          .from("organizations")
          .insert(organizationData)
          .select()
          .single();

        if (error) throw error;
        organizationId = data.id;
      }

      // Insert UBOs
      if (ubos.length > 0) {
        const uboData = ubos.map((ubo) => ({
          ...ubo,
          organization_id: organizationId,
        }));

        const { error: uboError } = await supabase
          .from("ultimate_beneficial_owners")
          .upsert(uboData);

        if (uboError) throw uboError;
      }

      // Upload documents
      for (const [documentType, file] of Object.entries(documents)) {
        const documentPath = `${
          user.id
        }/documents/${documentType}-${Date.now()}.${file.name
          .split(".")
          .pop()}`;
        await uploadFile(file, "kyb-documents", documentPath);

        const { error: docError } = await supabase
          .from("kyb_documents")
          .insert({
            organization_id: organizationId,
            document_type: documentType,
            document_name: file.name,
            file_path: documentPath,
            file_size: file.size,
            mime_type: file.type,
          });

        if (docError) throw docError;
      }

      navigate("/events");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An error occurred during submission";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < FORM_STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 font-['Cinzel'] text-center">
              Basic Organization Information
            </h3>

            {/* Logo Upload */}
            <div className="text-center">
              <label className="block text-base font-semibold text-gray-700 mb-4 font-['Cinzel']">
                Organization Logo
              </label>
              <div className="flex flex-col items-center space-y-4">
                {logoPreview && (
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white/30">
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
                  className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] hover:from-[#ffed4e] hover:to-[#ffd700] text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold font-['Cinzel'] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Upload Logo
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization_name}
                  onChange={(e) =>
                    handleInputChange("organization_name", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter organization name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Legal Name
                </label>
                <input
                  type="text"
                  value={formData.legal_name}
                  onChange={(e) =>
                    handleInputChange("legal_name", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter legal name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Trading Name
                </label>
                <input
                  type="text"
                  value={formData.trading_name}
                  onChange={(e) =>
                    handleInputChange("trading_name", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter trading name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Legal Structure
                </label>
                <select
                  value={formData.legal_structure}
                  onChange={(e) =>
                    handleInputChange("legal_structure", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                >
                  <option value="">Select Legal Structure</option>
                  {Object.entries(LEGAL_STRUCTURES).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Registration Number
                </label>
                <input
                  type="text"
                  value={formData.registration_number}
                  onChange={(e) =>
                    handleInputChange("registration_number", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter registration number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Tax Identification Number
                </label>
                <input
                  type="text"
                  value={formData.tax_identification_number}
                  onChange={(e) =>
                    handleInputChange(
                      "tax_identification_number",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter tax ID number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Incorporation Date
                </label>
                <input
                  type="date"
                  value={formData.incorporation_date}
                  onChange={(e) =>
                    handleInputChange("incorporation_date", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Incorporation Country
                </label>
                <input
                  type="text"
                  value={formData.incorporation_country}
                  onChange={(e) =>
                    handleInputChange("incorporation_country", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="US, UK, CA, etc."
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 font-['Cinzel'] text-center">
              Contact & Address Information
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Registered Address */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <h4 className="text-lg font-semibold text-gray-800 mb-6 font-['Cinzel'] text-center">
                  Registered Address
                </h4>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    value={formData.registered_address_line1}
                    onChange={(e) =>
                      handleInputChange(
                        "registered_address_line1",
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  />
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    value={formData.registered_address_line2}
                    onChange={(e) =>
                      handleInputChange(
                        "registered_address_line2",
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.registered_city}
                      onChange={(e) =>
                        handleInputChange("registered_city", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    />
                    <input
                      type="text"
                      placeholder="State/Province"
                      value={formData.registered_state}
                      onChange={(e) =>
                        handleInputChange("registered_state", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Postal Code"
                      value={formData.registered_postal_code}
                      onChange={(e) =>
                        handleInputChange(
                          "registered_postal_code",
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    />
                    <input
                      type="text"
                      placeholder="Country (US, CA, UK, etc.)"
                      value={formData.registered_country}
                      onChange={(e) =>
                        handleInputChange("registered_country", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    />
                  </div>
                </div>
              </div>

              {/* Operating Address */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <h4 className="text-lg font-semibold text-gray-800 mb-6 font-['Cinzel'] text-center">
                  Operating Address
                </h4>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    value={formData.operating_address_line1}
                    onChange={(e) =>
                      handleInputChange(
                        "operating_address_line1",
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  />
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    value={formData.operating_address_line2}
                    onChange={(e) =>
                      handleInputChange(
                        "operating_address_line2",
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.operating_city}
                      onChange={(e) =>
                        handleInputChange("operating_city", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    />
                    <input
                      type="text"
                      placeholder="State/Province"
                      value={formData.operating_state}
                      onChange={(e) =>
                        handleInputChange("operating_state", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Postal Code"
                      value={formData.operating_postal_code}
                      onChange={(e) =>
                        handleInputChange(
                          "operating_postal_code",
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    />
                    <input
                      type="text"
                      placeholder="Country (US, CA, UK, etc.)"
                      value={formData.operating_country}
                      onChange={(e) =>
                        handleInputChange("operating_country", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <h4 className="text-lg font-semibold text-gray-800 mb-6 font-['Cinzel'] text-center">
                Contact Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone_number}
                    onChange={(e) =>
                      handleInputChange("phone_number", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    placeholder="contact@organization.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                    placeholder="https://www.organization.com"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 font-['Cinzel'] text-center">
              Business Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Industry Sector
                </label>
                <select
                  value={formData.industry_sector}
                  onChange={(e) =>
                    handleInputChange("industry_sector", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                >
                  <option value="">Select Industry</option>
                  {Object.entries(INDUSTRY_SECTORS).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  NAICS Code
                </label>
                <input
                  type="text"
                  value={formData.naics_code}
                  onChange={(e) =>
                    handleInputChange("naics_code", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="6-digit NAICS code"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Annual Revenue (USD)
                </label>
                <input
                  type="number"
                  value={formData.annual_revenue || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "annual_revenue",
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter annual revenue"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={formData.number_of_employees || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "number_of_employees",
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter number of employees"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  SIC Code
                </label>
                <input
                  type="text"
                  value={formData.sic_code}
                  onChange={(e) =>
                    handleInputChange("sic_code", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="4-digit SIC code"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  VAT Number
                </label>
                <input
                  type="text"
                  value={formData.vat_number}
                  onChange={(e) =>
                    handleInputChange("vat_number", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter VAT number"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                Business Description
              </label>
              <textarea
                rows={4}
                value={formData.business_description}
                onChange={(e) =>
                  handleInputChange("business_description", e.target.value)
                }
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel'] resize-none"
                placeholder="Describe your organization's activities and mission..."
              />
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <h4 className="text-lg font-semibold text-gray-800 mb-6 font-['Cinzel'] text-center">
                Risk Assessment
              </h4>
              <div className="space-y-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.politically_exposed}
                    onChange={(e) =>
                      handleInputChange("politically_exposed", e.target.checked)
                    }
                    className="mr-3 w-4 h-4 text-gray-900 bg-white/30 border-white/40 rounded focus:ring-white/50 focus:ring-2"
                  />
                  <span className="text-gray-700 font-['Cinzel']">
                    Organization has politically exposed persons
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.high_risk_jurisdiction}
                    onChange={(e) =>
                      handleInputChange(
                        "high_risk_jurisdiction",
                        e.target.checked
                      )
                    }
                    className="mr-3 w-4 h-4 text-gray-900 bg-white/30 border-white/40 rounded focus:ring-white/50 focus:ring-2"
                  />
                  <span className="text-gray-700 font-['Cinzel']">
                    Organization operates in high-risk jurisdictions
                  </span>
                </label>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 font-['Cinzel'] text-center">
              Banking Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Bank Name
                </label>
                <input
                  type="text"
                  value={formData.bank_name}
                  onChange={(e) =>
                    handleInputChange("bank_name", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter bank name"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Account Number
                </label>
                <input
                  type="text"
                  value={formData.bank_account_number}
                  onChange={(e) =>
                    handleInputChange("bank_account_number", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter account number"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  Routing Number
                </label>
                <input
                  type="text"
                  value={formData.bank_routing_number}
                  onChange={(e) =>
                    handleInputChange("bank_routing_number", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter routing number"
                />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  SWIFT Code
                </label>
                <input
                  type="text"
                  value={formData.swift_code}
                  onChange={(e) =>
                    handleInputChange("swift_code", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter SWIFT code"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-base font-semibold text-gray-700 mb-3 font-['Cinzel']">
                  IBAN
                </label>
                <input
                  type="text"
                  value={formData.iban}
                  onChange={(e) => handleInputChange("iban", e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                  placeholder="Enter IBAN"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-gray-900 font-['Cinzel']">
                Ultimate Beneficial Owners
              </h3>
              <button
                type="button"
                onClick={addUBO}
                className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] hover:from-[#ffed4e] hover:to-[#ffd700] text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold font-['Cinzel'] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Add UBO
              </button>
            </div>

            {ubos.length === 0 ? (
              <div className="text-center py-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                <div className="mx-auto w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-['Cinzel'] text-lg">
                  No UBOs added yet. Click &quot;Add UBO&quot; to get started.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {ubos.map((ubo, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 font-['Cinzel']">
                        UBO #{index + 1}
                      </h4>
                      <button
                        type="button"
                        onClick={() => removeUBO(index)}
                        className="text-red-600 hover:text-red-800 font-semibold font-['Cinzel'] transition-colors duration-300"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          value={ubo.first_name}
                          onChange={(e) =>
                            updateUBO(index, "first_name", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={ubo.last_name}
                          onChange={(e) =>
                            updateUBO(index, "last_name", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                          Position Title
                        </label>
                        <input
                          type="text"
                          placeholder="Position Title"
                          value={ubo.position_title}
                          onChange={(e) =>
                            updateUBO(index, "position_title", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3 font-['Cinzel']">
                          Ownership Percentage
                        </label>
                        <input
                          type="number"
                          placeholder="Ownership %"
                          value={ubo.ownership_percentage}
                          onChange={(e) =>
                            updateUBO(
                              index,
                              "ownership_percentage",
                              parseFloat(e.target.value)
                            )
                          }
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 font-['Cinzel']"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 font-['Cinzel'] text-center">
              Required Documents
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(KYB_DOCUMENT_TYPES).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl"
                >
                  <h4 className="text-base font-semibold text-gray-800 mb-4 font-['Cinzel']">
                    {value
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </h4>
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleDocumentUpload(value, file);
                    }}
                    className="w-full text-sm text-gray-700 font-['Cinzel'] file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-[#ffd700] file:to-[#ffed4e] file:text-gray-900 hover:file:from-[#ffed4e] hover:file:to-[#ffd700] file:transition-all file:duration-300 file:shadow-lg hover:file:shadow-xl file:transform hover:file:scale-[1.02] file:font-['Cinzel']"
                  />
                  {documents[value] && (
                    <div className="mt-4 p-3 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl">
                      <p className="text-sm text-green-800 font-semibold font-['Cinzel'] flex items-center">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {documents[value].name}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 font-['Cinzel'] text-center">
              Review & Submit
            </h3>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-6 font-['Cinzel'] text-center">
                Organization Summary
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <span className="text-gray-600 font-semibold font-['Cinzel']">
                    Organization Name:
                  </span>
                  <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                    {formData.organization_name}
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <span className="text-gray-600 font-semibold font-['Cinzel']">
                    Legal Structure:
                  </span>
                  <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                    {formData.legal_structure}
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <span className="text-gray-600 font-semibold font-['Cinzel']">
                    Industry:
                  </span>
                  <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                    {formData.industry_sector}
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <span className="text-gray-600 font-semibold font-['Cinzel']">
                    UBOs:
                  </span>
                  <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                    {ubos.length}
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <span className="text-gray-600 font-semibold font-['Cinzel']">
                    Documents:
                  </span>
                  <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                    {Object.keys(documents).length}
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <span className="text-gray-600 font-semibold font-['Cinzel']">
                    Annual Revenue:
                  </span>
                  <span className="text-gray-900 ml-2 font-bold font-['Cinzel']">
                    {formData.annual_revenue
                      ? `$${formData.annual_revenue.toLocaleString()}`
                      : "Not specified"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-yellow-600"
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
                <div>
                  <h5 className="text-lg font-semibold text-yellow-800 mb-2 font-['Cinzel']">
                    Important Notice
                  </h5>
                  <p className="text-yellow-700 font-['Cinzel'] leading-relaxed">
                    By submitting this form, you confirm that all information
                    provided is accurate and complete. Your organization will
                    undergo KYB verification which may take 3-5 business days.
                    You will be notified via email once the review is complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
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

      {/* Back to Events Button */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => navigate("/events")}
          className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-gray-800 hover:bg-white/30 transition-all duration-300 text-sm font-medium font-['Cinzel']"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Events
        </button>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-['Cinzel'] tracking-wide">
            Organization Verification
          </h1>
          <p className="text-gray-700 text-lg font-['Cinzel']">
            Complete your KYB (Know Your Business) verification to access fund
            vaults
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {FORM_STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold font-['Cinzel'] ${
                    currentStep >= step.id
                      ? "bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-gray-900 shadow-lg"
                      : "bg-white/20 text-gray-600 backdrop-blur-sm border border-white/30"
                  }`}
                >
                  {step.id}
                </div>
                {index < FORM_STEPS.length - 1 && (
                  <div
                    className={`w-12 h-1 mx-2 rounded-full ${
                      currentStep > step.id
                        ? "bg-gradient-to-r from-[#ffd700] to-[#ffed4e]"
                        : "bg-white/30"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 font-['Cinzel']">
              {FORM_STEPS[currentStep - 1].title}
            </h2>
            <p className="text-gray-700 text-base font-['Cinzel'] mt-2">
              {FORM_STEPS[currentStep - 1].description}
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          {renderStep()}

          {error && (
            <div className="mt-8 bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-800 px-6 py-4 rounded-2xl font-['Cinzel']">
              {error}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-8 py-3 bg-gray-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-all duration-300 font-semibold font-['Cinzel'] shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Previous
            </button>

            {currentStep < FORM_STEPS.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-8 py-3 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-gray-900 rounded-xl hover:from-[#ffed4e] hover:to-[#ffd700] transition-all duration-300 font-semibold font-['Cinzel'] shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold font-['Cinzel'] shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {isLoading ? "Submitting..." : "Submit KYB Application"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
