export interface Organization {
  id: string;
  user_id: string;
  
  // Basic Organization Information
  organization_name: string;
  legal_name?: string;
  trading_name?: string;
  registration_number?: string;
  tax_identification_number?: string;
  vat_number?: string;
  
  // Business Structure
  legal_structure?: string;
  incorporation_date?: string;
  incorporation_country?: string;
  incorporation_state?: string;
  
  // Contact Information
  registered_address_line1?: string;
  registered_address_line2?: string;
  registered_city?: string;
  registered_state?: string;
  registered_postal_code?: string;
  registered_country?: string;
  
  operating_address_line1?: string;
  operating_address_line2?: string;
  operating_city?: string;
  operating_state?: string;
  operating_postal_code?: string;
  operating_country?: string;
  
  phone_number?: string;
  email?: string;
  website?: string;
  
  // Business Details
  industry_sector?: string;
  business_description?: string;
  naics_code?: string;
  sic_code?: string;
  annual_revenue?: number;
  number_of_employees?: number;
  
  // Banking Information
  bank_name?: string;
  bank_account_number?: string;
  bank_routing_number?: string;
  iban?: string;
  swift_code?: string;
  
  // Compliance and Risk
  politically_exposed?: boolean;
  high_risk_jurisdiction?: boolean;
  sanctions_screening_status?: string;
  
  // KYB Status and Verification
  kyb_status?: 'pending' | 'in_review' | 'approved' | 'rejected' | 'requires_additional_info';
  verification_level?: 'basic' | 'enhanced' | 'ongoing';
  risk_rating?: 'low' | 'medium' | 'high';
  
  // Timestamps
  created_at: string;
  updated_at: string;
  verified_at?: string;
  
  // Logo storage
  logo_url?: string;
}

export interface UltimateBeneficialOwner {
  id: string;
  organization_id: string;
  
  // Personal Information
  first_name: string;
  last_name: string;
  middle_name?: string;
  date_of_birth?: string;
  nationality?: string;
  
  // Identification
  id_type?: 'passport' | 'drivers_license' | 'national_id';
  id_number?: string;
  id_expiry_date?: string;
  id_issuing_country?: string;
  
  // Address
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  
  // Contact
  phone_number?: string;
  email?: string;
  
  // Ownership Details
  ownership_percentage?: number;
  control_type?: string;
  position_title?: string;
  
  // Risk Factors
  politically_exposed_person?: boolean;
  sanctions_screening_status?: string;
  
  // Verification Status
  verification_status?: string;
  
  // Timestamps
  created_at: string;
  updated_at: string;
}

export interface DirectorKeyPersonnel {
  id: string;
  organization_id: string;
  
  // Personal Information
  first_name: string;
  last_name: string;
  middle_name?: string;
  date_of_birth?: string;
  nationality?: string;
  
  // Position Information
  position_title: string;
  appointment_date?: string;
  resignation_date?: string;
  is_active?: boolean;
  
  // Contact Information
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  phone_number?: string;
  email?: string;
  
  // Risk Assessment
  politically_exposed_person?: boolean;
  sanctions_screening_status?: string;
  
  // Timestamps
  created_at: string;
  updated_at: string;
}

export interface KYBDocument {
  id: string;
  organization_id: string;
  
  // Document Information
  document_type: string;
  document_name: string;
  file_path: string;
  file_size?: number;
  mime_type?: string;
  
  // Document Status
  verification_status?: 'pending' | 'verified' | 'rejected';
  verification_notes?: string;
  
  // Timestamps
  uploaded_at: string;
  verified_at?: string;
}

export interface FundVault {
  id: string;
  
  // Vault Information
  vault_name: string;
  disaster_type: string;
  location: string;
  description?: string;
  
  // Financial Information
  total_amount?: number;
  allocated_amount?: number;
  remaining_amount?: number;
  
  // Status
  status?: 'active' | 'closed' | 'suspended';
  
  // Timestamps
  created_at: string;
  updated_at: string;
  closed_at?: string;
}

export interface FundPetition {
  id: string;
  organization_id: string;
  fund_vault_id: string;
  
  // Petition Information
  petition_title: string;
  petition_description: string;
  requested_amount: number;
  
  // Project Details
  project_location?: string;
  beneficiaries_count?: number;
  project_timeline?: string;
  expected_impact?: string;
  
  // Status
  status?: 'pending' | 'under_review' | 'approved' | 'rejected' | 'funded';
  
  // Review Information
  reviewed_by?: string;
  review_notes?: string;
  review_date?: string;
  
  // Funding Information
  approved_amount?: number;
  funded_amount?: number;
  funding_date?: string;
  
  // Timestamps
  created_at: string;
  updated_at: string;
}

// Form types for creating/updating
export interface OrganizationFormData {
  organization_name: string;
  legal_name?: string;
  trading_name?: string;
  registration_number?: string;
  tax_identification_number?: string;
  vat_number?: string;
  legal_structure?: string;
  incorporation_date?: string;
  incorporation_country?: string;
  incorporation_state?: string;
  registered_address_line1?: string;
  registered_address_line2?: string;
  registered_city?: string;
  registered_state?: string;
  registered_postal_code?: string;
  registered_country?: string;
  operating_address_line1?: string;
  operating_address_line2?: string;
  operating_city?: string;
  operating_state?: string;
  operating_postal_code?: string;
  operating_country?: string;
  phone_number?: string;
  email?: string;
  website?: string;
  industry_sector?: string;
  business_description?: string;
  naics_code?: string;
  sic_code?: string;
  annual_revenue?: number;
  number_of_employees?: number;
  bank_name?: string;
  bank_account_number?: string;
  bank_routing_number?: string;
  iban?: string;
  swift_code?: string;
  politically_exposed?: boolean;
  high_risk_jurisdiction?: boolean;
}

export interface UBOFormData {
  first_name: string;
  last_name: string;
  middle_name?: string;
  date_of_birth?: string;
  nationality?: string;
  id_type?: 'passport' | 'drivers_license' | 'national_id';
  id_number?: string;
  id_expiry_date?: string;
  id_issuing_country?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  phone_number?: string;
  email?: string;
  ownership_percentage?: number;
  control_type?: string;
  position_title?: string;
  politically_exposed_person?: boolean;
}

// Document types for KYB verification
export const KYB_DOCUMENT_TYPES = {
  CERTIFICATE_OF_INCORPORATION: 'certificate_of_incorporation',
  ARTICLES_OF_ASSOCIATION: 'articles_of_association',
  MEMORANDUM_OF_ASSOCIATION: 'memorandum_of_association',
  BUSINESS_LICENSE: 'business_license',
  TAX_CERTIFICATE: 'tax_certificate',
  BANK_STATEMENT: 'bank_statement',
  PROOF_OF_ADDRESS: 'proof_of_address',
  AUDITED_FINANCIAL_STATEMENTS: 'audited_financial_statements',
  BOARD_RESOLUTION: 'board_resolution',
  SHAREHOLDER_REGISTER: 'shareholder_register',
  GOOD_STANDING_CERTIFICATE: 'good_standing_certificate',
  REGULATORY_LICENSE: 'regulatory_license',
  UBO_DECLARATION: 'ubo_declaration',
  DIRECTOR_IDENTIFICATION: 'director_identification',
  POWER_OF_ATTORNEY: 'power_of_attorney'
} as const;

export type KYBDocumentType = typeof KYB_DOCUMENT_TYPES[keyof typeof KYB_DOCUMENT_TYPES];

// Legal structures
export const LEGAL_STRUCTURES = {
  LLC: 'Limited Liability Company (LLC)',
  CORPORATION: 'Corporation',
  PARTNERSHIP: 'Partnership',
  SOLE_PROPRIETORSHIP: 'Sole Proprietorship',
  NON_PROFIT: 'Non-Profit Organization',
  COOPERATIVE: 'Cooperative',
  TRUST: 'Trust',
  FOUNDATION: 'Foundation',
  OTHER: 'Other'
} as const;

// Industry sectors (simplified list)
export const INDUSTRY_SECTORS = {
  AGRICULTURE: 'Agriculture, Forestry, Fishing and Hunting',
  MINING: 'Mining, Quarrying, and Oil and Gas Extraction',
  UTILITIES: 'Utilities',
  CONSTRUCTION: 'Construction',
  MANUFACTURING: 'Manufacturing',
  WHOLESALE_TRADE: 'Wholesale Trade',
  RETAIL_TRADE: 'Retail Trade',
  TRANSPORTATION: 'Transportation and Warehousing',
  INFORMATION: 'Information',
  FINANCE: 'Finance and Insurance',
  REAL_ESTATE: 'Real Estate and Rental and Leasing',
  PROFESSIONAL: 'Professional, Scientific, and Technical Services',
  MANAGEMENT: 'Management of Companies and Enterprises',
  ADMINISTRATIVE: 'Administrative and Support and Waste Management Services',
  EDUCATIONAL: 'Educational Services',
  HEALTHCARE: 'Health Care and Social Assistance',
  ARTS: 'Arts, Entertainment, and Recreation',
  ACCOMMODATION: 'Accommodation and Food Services',
  OTHER_SERVICES: 'Other Services',
  PUBLIC_ADMINISTRATION: 'Public Administration',
  HUMANITARIAN: 'Humanitarian and Relief Services'
} as const;

export interface Event {
  id: string;
  disaster_location: string;
  created_at: string;
  title: string;
  description: string;
  estimated_amount_required: number;
  source: string;
  tweet_id?: string;
}

export interface Claim {
  id: string;
  event_id: string;
  org_id?: string;
  organization_name?: string;
  claimed_amount: number;
  reason: string;
  claim_state: 'waiting_for_ai' | 'voting' | 'approved' | 'rejected' | 'claimed';
  logo_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ClaimWithOrganization extends Claim {
  // This interface now extends the updated Claim interface
  // which already includes organization_name
}

export interface Vote {
  id: string;
  claim_id: string;
  vote_type: 'accept' | 'reject' | 'raise_amount' | 'lower_amount';
  voter_ip?: string; // For anonymous voting
  created_at: string;
} 