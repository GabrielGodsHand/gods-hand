# God's Hand

> Where Heaven Hears, and Humanity Helps — One Anonymous Gift at a Time.

**God's Hand** is a privacy-preserving disaster relief donation platform that combines Aztec Protocol's zero-knowledge technology with AI-powered verification agents and decentralized governance. The system enables anonymous donations while ensuring funds reach legitimate organizations through community-driven voting mechanisms.

## 🌟 Features

### 🔒 Privacy-First Donations

- **Zero-Knowledge Donations**: Donate anonymously using Aztec Protocol's privacy technology
- **zkPassport Integration**: Age verification without revealing personal data
- **Nullifier System**: Prevents double donations while maintaining anonymity

### 🤖 AI-Powered Verification

- **TEE Agents**: Trusted Execution Environment agents for disaster verification
- **Automated Disaster Detection**: AI agents monitor and create disaster events
- **Smart Fund Distribution**: AI-assisted fund allocation based on verified needs

### 🗳️ Decentralized Governance

- **Community Voting**: Stake-based voting on fund releases
- **Organization Verification**: Community vets relief organizations
- **Transparent Distribution**: All fund movements tracked on-chain

### 🌍 Global Relief Network

- **Interactive Globe**: Visualize disasters and donations worldwide
- **Real-time Updates**: Live disaster feed with verified information
- **Multi-chain Support**: Ethereum and Aztec network integration

## 🏗️ Architecture

```
God's Hand Platform
├── Frontend (React + Vite)
├── Aztec Contracts (Noir)
├── Ethereum Contracts (Solidity)
├── Zero-Knowledge Circuits (Noir)
├── TEE Agents (AI Verification)
└── Governance System
```

### Core Components

#### 1. **Aztec Contracts** (`/aztec-contracts`)

- **GodsHand Contract**: Main donation and voting logic
- **Private Donations**: Anonymous contribution system
- **Vote Nullifiers**: Prevent double voting while maintaining privacy
- **Fund Management**: Secure handling of donated assets

#### 2. **Zero-Knowledge Circuits** (`/circuits`)

- **zkPassport Verification**: Age verification without personal data exposure
- **Honk Proof System**: High-efficiency proof generation
- **Identity Nullifiers**: Unique user identification without revealing identity

#### 3. **Ethereum Contracts** (`/contracts`)

- **Governance System**: Decentralized decision making
- **Token Management**: ERC20 token handling and staking
- **Fee Distribution**: Gas fee management and rewards
- **Organization Registry**: Verified relief organization database

#### 4. **TEE Agents** (`/TEE`)

- **Verify Agent**: Disaster verification and validation
- **X Agent**: Social media monitoring and disaster detection
- **Eliza Framework**: AI character system for automated responses

#### 5. **Frontend Application** (`/frontend`)

- **React + TypeScript**: Modern web interface
- **3D Globe Visualization**: Interactive world map showing disasters
- **Wallet Integration**: MetaMask and Aztec wallet support
- **Real-time Updates**: Live disaster and donation feeds

## 🚀 Quick Start

### Prerequisites

- Node.js ≥ 18.0.0
- pnpm (recommended)
- Docker (for TEE agents)
- Aztec Sandbox (for local development)

### 1. Clone Repository

```bash
git clone https://github.com/your-username/gods-hand.git
cd gods-hand
```

### 2. Start Aztec Sandbox

```bash
# Install Aztec CLI
npm install -g @aztec/cli

# Start local Aztec network
aztec start --sandbox
```

### 3. Deploy Contracts

```bash
# Deploy Aztec contracts
cd aztec-contracts
npm install
npm run deploy

# Deploy Ethereum contracts
cd ../contracts
npm install
npx hardhat deploy --network localhost
```

### 4. Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your contract addresses
npm run dev
```

### 5. Start TEE Agents

```bash
cd TEE/verifyagent
cp .env.example .env
# Add your API keys to .env
docker-compose up
```

## 💻 Development

### Smart Contract Development

#### Aztec Contracts (Noir)

```bash
cd aztec-contracts
nargo check          # Check syntax
nargo test           # Run tests
nargo compile        # Compile contracts
```

#### Ethereum Contracts (Solidity)

```bash
cd contracts
npx hardhat compile  # Compile contracts
npx hardhat test     # Run tests
npx hardhat deploy   # Deploy contracts
```

### Circuit Development

```bash
cd circuits
nargo check          # Verify circuit logic
nargo prove          # Generate proof
nargo verify         # Verify proof
```

### Frontend Development

```bash
cd frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run test         # Run tests
```

## 🔧 Configuration

### Environment Variables

#### Frontend (`.env`)

```env
VITE_AZTEC_NODE_URL=http://localhost:8080
VITE_CONTRACT_ADDRESS=0x...
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-key
```

#### TEE Agents (`.env`)

```env
OPENROUTER_API_KEY=your-openrouter-key
DISCORD_API_TOKEN=your-discord-token
TWITTER_USERNAME=your-twitter-username
TWITTER_PASSWORD=your-twitter-password
```

### Contract Addresses

Update contract addresses in:

- `frontend/src/lib/artifacts/`
- `aztec-contracts/scripts/deploy_contract.ts`
- `contracts/scripts/deploy-*.js`

## 🧪 Testing

### Run All Tests

```bash
# Aztec contract tests
cd aztec-contracts && npm test

# Ethereum contract tests
cd contracts && npx hardhat test

# Circuit tests
cd circuits && nargo test

# Frontend tests
cd frontend && npm test
```

### Integration Tests

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


this is a commit from Marshal
cd aztec-contracts
npm run test:integration
```

## 📖 Usage Guide

### For Donors

1. **Connect Wallet**: Use MetaMask or create Aztec account
2. **Verify Identity**: Complete zkPassport verification (optional)
3. **Browse Disasters**: View active disaster relief campaigns
4. **Donate Anonymously**: Make private donations using Aztec
5. **Track Impact**: Monitor fund distribution (without revealing your donation)

### For Relief Organizations

1. **Register Organization**: Submit verification documents
2. **Request Funds**: Create funding requests for specific disasters
3. **Community Review**: Allow community to vote on your request
4. **Receive Funds**: Access approved donations for relief work
5. **Report Impact**: Provide updates on fund usage

### For Community Governors

1. **Stake Tokens**: Lock governance tokens to participate
2. **Review Requests**: Evaluate organization funding requests
3. **Cast Votes**: Vote on fund releases and organization verification
4. **Earn Rewards**: Receive rewards for active participation

## 🛠️ API Reference

### Aztec Contract Methods

```typescript
// Donate to disaster relief
await contract.methods.donate(disasterHash, amount).send();

// Vote on fund release
await contract.methods.vote(disasterHash, orgAddress, voteType).send();

// Create new disaster (agent only)
await contract.methods.create_disaster(hash, estimatedAmount).send();
```

### REST API Endpoints

```
GET /api/disasters           # List active disasters
GET /api/disasters/:id       # Get disaster details
POST /api/organizations      # Register organization
GET /api/votes/:disaster     # Get voting status
```

## 🤝 Contributing

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Write Tests**: Ensure your code is well-tested
4. **Follow Conventions**: Use provided linting and formatting
5. **Submit PR**: Include detailed description of changes

### Development Guidelines

- **Smart Contracts**: Follow Aztec and Solidity best practices
- **Frontend**: Use TypeScript, follow React conventions
- **Testing**: Maintain >80% test coverage
- **Documentation**: Update README and inline comments

## 📚 Documentation

- [Aztec Protocol Docs](https://docs.aztec.network/)
- [Noir Language Guide](https://noir-lang.org/)
- [zkPassport SDK](https://docs.zkpassport.id/)
- [Project Wiki](./docs/) - Detailed technical documentation

## 🔐 Security

### Audit Status

- [ ] Smart Contract Audit (Pending)
- [ ] Circuit Audit (Pending)
- [ ] Frontend Security Review (Pending)

### Responsible Disclosure

Report security vulnerabilities to: security@godshand.xyz

### Known Limitations

- Testnet deployment only
- Limited to specific disaster types
- Requires trusted setup for circuits

## 🚧 Roadmap

### Phase 1: MVP (Current)

- [x] Basic donation system
- [x] Aztec integration
- [x] Simple governance
- [x] Web interface

### Phase 2: Enhanced Privacy

- [ ] Advanced circuits
- [ ] Mobile app
- [ ] Cross-chain support
- [ ] Improved UX

### Phase 3: Global Scale

- [ ] Mainnet deployment
- [ ] Partnership integrations
- [ ] Advanced AI agents
- [ ] Global disaster API

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Aztec Protocol** for privacy-preserving smart contracts
- **zkPassport** for identity verification technology
- **Eliza Framework** for AI agent capabilities
- **Community Contributors** for ongoing development

## 📞 Support

- **Discord**: [Join our community](https://discord.gg/godshand)
- **Twitter**: [@GodsHandDeFi](https://twitter.com/GodsHandDeFi)
- **Email**: support@godshand.xyz
- **Documentation**: [docs.godshand.xyz](https://docs.godshand.xyz)

---

**"In times of crisis, humanity's true strength emerges not from what we reveal, but from what we choose to give."**

this is a commit by marshal

hello there, marshal and sam say hi!

hi