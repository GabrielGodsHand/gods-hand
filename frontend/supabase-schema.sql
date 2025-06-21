-- KYB (Know Your Business) Database Schema
-- This schema includes all necessary tables for comprehensive business verification

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Organizations table - Main organization information
CREATE TABLE organizations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Basic Organization Information
    organization_name VARCHAR(255) NOT NULL,
    legal_name VARCHAR(255),
    trading_name VARCHAR(255),
    registration_number VARCHAR(100),
    tax_identification_number VARCHAR(100),
    vat_number VARCHAR(100),
    
    -- Business Structure
    legal_structure VARCHAR(100), -- LLC, Corporation, Partnership, etc.
    incorporation_date DATE,
    incorporation_country VARCHAR(2), -- ISO country code
    incorporation_state VARCHAR(100),
    
    -- Contact Information
    registered_address_line1 VARCHAR(255),
    registered_address_line2 VARCHAR(255),
    registered_city VARCHAR(100),
    registered_state VARCHAR(100),
    registered_postal_code VARCHAR(20),
    registered_country VARCHAR(2),
    
    operating_address_line1 VARCHAR(255),
    operating_address_line2 VARCHAR(255),
    operating_city VARCHAR(100),
    operating_state VARCHAR(100),
    operating_postal_code VARCHAR(20),
    operating_country VARCHAR(2),
    
    phone_number VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    
    -- Business Details
    industry_sector VARCHAR(100),
    business_description TEXT,
    naics_code VARCHAR(10), -- North American Industry Classification System
    sic_code VARCHAR(10), -- Standard Industrial Classification
    annual_revenue DECIMAL(15,2),
    number_of_employees INTEGER,
    
    -- Banking Information
    bank_name VARCHAR(255),
    bank_account_number VARCHAR(100),
    bank_routing_number VARCHAR(50),
    iban VARCHAR(34),
    swift_code VARCHAR(11),
    
    -- Compliance and Risk
    politically_exposed BOOLEAN DEFAULT FALSE,
    high_risk_jurisdiction BOOLEAN DEFAULT FALSE,
    sanctions_screening_status VARCHAR(50) DEFAULT 'pending',
    
    -- KYB Status and Verification
    kyb_status VARCHAR(50) DEFAULT 'pending', -- pending, in_review, approved, rejected, requires_additional_info
    verification_level VARCHAR(50) DEFAULT 'basic', -- basic, enhanced, ongoing
    risk_rating VARCHAR(20) DEFAULT 'medium', -- low, medium, high
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    verified_at TIMESTAMP WITH TIME ZONE,
    
    -- Logo storage
    logo_url TEXT
);

-- Ultimate Beneficial Owners (UBOs) table
CREATE TABLE ultimate_beneficial_owners (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    
    -- Personal Information
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    date_of_birth DATE,
    nationality VARCHAR(2), -- ISO country code
    
    -- Identification
    id_type VARCHAR(50), -- passport, drivers_license, national_id
    id_number VARCHAR(100),
    id_expiry_date DATE,
    id_issuing_country VARCHAR(2),
    
    -- Address
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(2),
    
    -- Contact
    phone_number VARCHAR(20),
    email VARCHAR(255),
    
    -- Ownership Details
    ownership_percentage DECIMAL(5,2), -- e.g., 25.50 for 25.5%
    control_type VARCHAR(100), -- direct_ownership, voting_rights, control_agreement
    position_title VARCHAR(100),
    
    -- Risk Factors
    politically_exposed_person BOOLEAN DEFAULT FALSE,
    sanctions_screening_status VARCHAR(50) DEFAULT 'pending',
    
    -- Verification Status
    verification_status VARCHAR(50) DEFAULT 'pending',
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Directors and Key Personnel table
CREATE TABLE directors_key_personnel (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    
    -- Personal Information
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    date_of_birth DATE,
    nationality VARCHAR(2),
    
    -- Position Information
    position_title VARCHAR(100) NOT NULL,
    appointment_date DATE,
    resignation_date DATE,
    is_active BOOLEAN DEFAULT TRUE,
    
    -- Contact Information
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(2),
    phone_number VARCHAR(20),
    email VARCHAR(255),
    
    -- Risk Assessment
    politically_exposed_person BOOLEAN DEFAULT FALSE,
    sanctions_screening_status VARCHAR(50) DEFAULT 'pending',
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- KYB Documents table for storing document metadata
CREATE TABLE kyb_documents (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    
    -- Document Information
    document_type VARCHAR(100) NOT NULL, -- certificate_of_incorporation, articles_of_association, etc.
    document_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL, -- Supabase storage path
    file_size INTEGER,
    mime_type VARCHAR(100),
    
    -- Document Status
    verification_status VARCHAR(50) DEFAULT 'pending', -- pending, verified, rejected
    verification_notes TEXT,
    
    -- Timestamps
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    verified_at TIMESTAMP WITH TIME ZONE
);

-- KYB Verification History table for audit trail
CREATE TABLE kyb_verification_history (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    
    -- Verification Details
    verification_type VARCHAR(100) NOT NULL, -- initial, periodic_review, triggered_review
    status_from VARCHAR(50),
    status_to VARCHAR(50) NOT NULL,
    risk_rating_from VARCHAR(20),
    risk_rating_to VARCHAR(20),
    
    -- Review Information
    reviewed_by UUID, -- Could reference admin users table
    review_notes TEXT,
    review_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Additional Context
    trigger_reason VARCHAR(255), -- What triggered this review
    documents_reviewed TEXT[], -- Array of document IDs
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Fund Vaults table for disaster relief funds
CREATE TABLE fund_vaults (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    
    -- Vault Information
    vault_name VARCHAR(255) NOT NULL,
    disaster_type VARCHAR(100) NOT NULL, -- earthquake, flood, hurricane, etc.
    location VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Financial Information
    total_amount DECIMAL(15,2) DEFAULT 0,
    allocated_amount DECIMAL(15,2) DEFAULT 0,
    remaining_amount DECIMAL(15,2) DEFAULT 0,
    
    -- Status
    status VARCHAR(50) DEFAULT 'active', -- active, closed, suspended
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    closed_at TIMESTAMP WITH TIME ZONE
);

-- Fund Petitions table for organizations requesting funds
CREATE TABLE fund_petitions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    fund_vault_id UUID REFERENCES fund_vaults(id) ON DELETE CASCADE,
    
    -- Petition Information
    petition_title VARCHAR(255) NOT NULL,
    petition_description TEXT NOT NULL,
    requested_amount DECIMAL(15,2) NOT NULL,
    
    -- Project Details
    project_location VARCHAR(255),
    beneficiaries_count INTEGER,
    project_timeline VARCHAR(255),
    expected_impact TEXT,
    
    -- Status
    status VARCHAR(50) DEFAULT 'pending', -- pending, under_review, approved, rejected, funded
    
    -- Review Information
    reviewed_by UUID,
    review_notes TEXT,
    review_date TIMESTAMP WITH TIME ZONE,
    
    -- Funding Information
    approved_amount DECIMAL(15,2),
    funded_amount DECIMAL(15,2),
    funding_date TIMESTAMP WITH TIME ZONE,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_organizations_user_id ON organizations(user_id);
CREATE INDEX idx_organizations_kyb_status ON organizations(kyb_status);
CREATE INDEX idx_organizations_verification_level ON organizations(verification_level);
CREATE INDEX idx_ubo_organization_id ON ultimate_beneficial_owners(organization_id);
CREATE INDEX idx_directors_organization_id ON directors_key_personnel(organization_id);
CREATE INDEX idx_documents_organization_id ON kyb_documents(organization_id);
CREATE INDEX idx_verification_history_organization_id ON kyb_verification_history(organization_id);
CREATE INDEX idx_petitions_organization_id ON fund_petitions(organization_id);
CREATE INDEX idx_petitions_vault_id ON fund_petitions(fund_vault_id);

-- Enable Row Level Security (RLS)
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ultimate_beneficial_owners ENABLE ROW LEVEL SECURITY;
ALTER TABLE directors_key_personnel ENABLE ROW LEVEL SECURITY;
ALTER TABLE kyb_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE kyb_verification_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE fund_vaults ENABLE ROW LEVEL SECURITY;
ALTER TABLE fund_petitions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for organizations
CREATE POLICY "Users can view their own organizations" ON organizations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own organizations" ON organizations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own organizations" ON organizations
    FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for UBOs
CREATE POLICY "Users can manage UBOs for their organizations" ON ultimate_beneficial_owners
    FOR ALL USING (
        organization_id IN (
            SELECT id FROM organizations WHERE user_id = auth.uid()
        )
    );

-- RLS Policies for directors
CREATE POLICY "Users can manage directors for their organizations" ON directors_key_personnel
    FOR ALL USING (
        organization_id IN (
            SELECT id FROM organizations WHERE user_id = auth.uid()
        )
    );

-- RLS Policies for documents
CREATE POLICY "Users can manage documents for their organizations" ON kyb_documents
    FOR ALL USING (
        organization_id IN (
            SELECT id FROM organizations WHERE user_id = auth.uid()
        )
    );

-- RLS Policies for verification history (read-only for users)
CREATE POLICY "Users can view verification history for their organizations" ON kyb_verification_history
    FOR SELECT USING (
        organization_id IN (
            SELECT id FROM organizations WHERE user_id = auth.uid()
        )
    );

-- RLS Policies for fund vaults (public read)
CREATE POLICY "Anyone can view fund vaults" ON fund_vaults
    FOR SELECT USING (true);

-- RLS Policies for fund petitions
CREATE POLICY "Users can manage petitions for their organizations" ON fund_petitions
    FOR ALL USING (
        organization_id IN (
            SELECT id FROM organizations WHERE user_id = auth.uid()
        )
    );

-- Create storage bucket for documents and logos
INSERT INTO storage.buckets (id, name, public) VALUES ('kyb-documents', 'kyb-documents', false);
INSERT INTO storage.buckets (id, name, public) VALUES ('organization-logos', 'organization-logos', true);

-- Storage policies for KYB documents
CREATE POLICY "Users can upload documents for their organizations" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'kyb-documents' AND
        auth.uid()::text = (storage.foldername(name))[1]
    );

CREATE POLICY "Users can view documents for their organizations" ON storage.objects
    FOR SELECT USING (
        bucket_id = 'kyb-documents' AND
        auth.uid()::text = (storage.foldername(name))[1]
    );

-- Storage policies for organization logos
CREATE POLICY "Users can upload logos for their organizations" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'organization-logos' AND
        auth.uid()::text = (storage.foldername(name))[1]
    );

CREATE POLICY "Anyone can view organization logos" ON storage.objects
    FOR SELECT USING (bucket_id = 'organization-logos');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON organizations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ubo_updated_at BEFORE UPDATE ON ultimate_beneficial_owners
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_fund_vaults_updated_at BEFORE UPDATE ON fund_vaults
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_fund_petitions_updated_at BEFORE UPDATE ON fund_petitions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 