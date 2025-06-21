# God's Hand - Fund Distribution Platform

A comprehensive platform for disaster relief fund distribution with KYB (Know Your Business) verification for NGOs and non-profit organizations.

## Features

### 🌟 Divine Parallax Landing Page
- Stunning parallax effect with divine hand emerging from clouds
- Scroll-controlled animations
- Responsive design with mobile optimization
- Beautiful gradient backgrounds and divine aesthetics

### 🔐 Authentication & Security
- Email-based authentication with Supabase Auth
- Secure session management
- Row Level Security (RLS) policies
- Email verification for new accounts

### 📋 Comprehensive KYB System
- **7-Step KYB Form** with real-world compliance data:
  1. Basic Organization Information
  2. Contact & Address Details
  3. Business Details & Industry Classification
  4. Banking Information
  5. Ultimate Beneficial Owners (UBOs)
  6. Document Upload & Verification
  7. Review & Submission

### 📊 KYB Data Collection
Based on real-world KYB requirements:
- Organization registration details
- Legal structure and incorporation information
- Industry classification (NAICS codes)
- Ultimate Beneficial Owner information
- Director and key personnel details
- Banking and financial information
- Risk assessment and compliance checks
- Document verification system

### 💰 Fund Management
- Multiple disaster relief fund vaults
- Real-time fund availability tracking
- Petition submission system
- Status tracking for applications

### 📁 Document Management
- Secure document upload to Supabase Storage
- Support for all KYB document types:
  - Certificate of Incorporation
  - Articles of Association
  - Business Licenses
  - Tax Certificates
  - Bank Statements
  - Audited Financial Statements
  - UBO Declarations
  - And more...

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Styling**: CSS3 with custom divine theme
- **Authentication**: Supabase Auth with email verification
- **Database**: PostgreSQL with comprehensive KYB schema
- **File Storage**: Supabase Storage with secure buckets

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### 1. Clone and Install
```bash
git clone <repository-url>
cd hand-of-god-nextjs
npm install
```

### 2. Supabase Setup

#### Create a new Supabase project:
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

#### Set up the database:
1. In your Supabase dashboard, go to SQL Editor
2. Run the schema from `supabase-schema.sql`
3. Run the sample data from `sample-data.sql`

#### Configure Storage:
The schema automatically creates two storage buckets:
- `kyb-documents` (private) - for KYB verification documents
- `organization-logos` (public) - for organization logos

### 3. Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Application
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Database Schema

### Core Tables
- **organizations** - Main organization data
- **ultimate_beneficial_owners** - UBO information
- **directors_key_personnel** - Director and key personnel data
- **kyb_documents** - Document metadata and verification status
- **kyb_verification_history** - Audit trail for KYB processes
- **fund_vaults** - Disaster relief fund containers
- **fund_petitions** - Organization funding requests

### Security Features
- Row Level Security (RLS) enabled on all tables
- Users can only access their own organization data
- Secure file upload policies
- Audit trails for all KYB activities

## KYB Process Flow

1. **Registration**: User creates account with email verification
2. **Organization Setup**: Complete 7-step KYB form
3. **Document Upload**: Submit required verification documents
4. **Verification**: Admin review and approval process
5. **Fund Access**: Approved organizations can submit petitions
6. **Ongoing Monitoring**: Periodic reviews and updates

## Real-World KYB Compliance

This system implements actual KYB requirements used by financial institutions:

### Required Information
- **Entity Information**: Legal name, registration number, incorporation details
- **Business Structure**: Legal form, ownership structure, business activities
- **Geographic Information**: Registered and operating addresses
- **Financial Information**: Banking details, revenue, employee count
- **Beneficial Ownership**: UBOs with >25% ownership or control
- **Risk Assessment**: PEP screening, sanctions checks, jurisdiction risk

### Document Requirements
- Certificate of Incorporation
- Articles of Association/Memorandum
- Business licenses and permits
- Tax registration certificates
- Bank statements and account verification
- UBO declarations and identification
- Director identification and appointments
- Audited financial statements (if applicable)

## API Routes

- `/api/auth/confirm` - Email confirmation
- `/api/auth/signout` - User logout
- `/login` - Authentication page
- `/dashboard` - User dashboard
- `/kyb` - KYB form and verification
- `/petition/[id]` - Fund petition submission

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Security Considerations

- All sensitive data is encrypted at rest
- File uploads are scanned and validated
- RLS policies prevent unauthorized data access
- Audit trails track all KYB activities
- Regular security reviews and updates

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

---

*"Where Heaven Hears, and Humanity Helps — One Anonymous Gift at a Time."*
