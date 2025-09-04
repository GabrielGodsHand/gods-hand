import React, { useState } from "react";
import { AztecAddress, Fr } from "@aztec/aztec.js";
import { keccak256 } from "@aztec/foundation/crypto";
import { GodsHandContract } from "./artifacts/GodsHand";
import { useWallet } from "./WalletContext";

const textToField = (text: string): Fr => {
  const hash = keccak256(Buffer.from(text, "utf8"));
  const truncatedHash = hash.slice(0, 31);
  return new Fr(BigInt("0x" + truncatedHash.toString("hex")));
};

const contractAddress =
  import.meta.env.VITE_IS_SANDBOX === "true"
    ? import.meta.env.VITE_SANDBOX_CONTRACT_ADDRESS
    : import.meta.env.VITE_CONTRACT_ADDRESS;

export const ConnectTestAccount: React.FC = () => {
  const { connectTestAccount } = useWallet();
  const [selectedAccount, setSelectedAccount] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    try {
      await connectTestAccount(selectedAccount - 1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Connect Test Account</h3>
      <select
        value={selectedAccount}
        onChange={(e) => setSelectedAccount(Number(e.target.value))}
      >
        <option value={1}>Account 1</option>
        <option value={2}>Account 2</option>
        <option value={3}>Account 3</option>
      </select>
      <button onClick={handleConnect} disabled={loading}>
        {loading ? "Connecting..." : "Connect Test Account"}
      </button>
    </div>
  );
};

export const CreateDisaster: React.FC = () => {
  const { wallet, account } = useWallet();
  const [title, setTitle] = useState("");
  const [metadata, setMetadata] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet || !account) return;

    setLoading(true);
    try {
      const disasterHash = textToField(JSON.stringify({ title, metadata }));
      const contract = await GodsHandContract.at(
        AztecAddress.fromString(contractAddress),
        account
      );
      const interaction = contract.methods.create_disaster(
        disasterHash,
        Number(amount)
      );
      await wallet.sendTransaction(interaction);

      setTitle("");
      setMetadata("");
      setAmount("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Create Disaster</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Disaster Title"
          required
        />
        <input
          value={metadata}
          onChange={(e) => setMetadata(e.target.value)}
          placeholder="Metadata"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Estimated Amount Required"
          required
        />
        <button type="submit" disabled={loading || !account}>
          {loading ? "Creating..." : "Create Disaster"}
        </button>
      </form>
    </div>
  );
};

export const Donate: React.FC = () => {
  const { wallet, account } = useWallet();
  const [hash, setHash] = useState("");
  const [amount, setAmount] = useState("");
  const [chain, setChain] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet || !account) return;

    setLoading(true);
    try {
      const chainField = new Fr(
        BigInt("0x" + Number(chain).toString(16).padStart(62, "0"))
      );
      const tokenField = new Fr(
        BigInt("0x" + token.slice(2).padStart(62, "0"))
      );

      const contract = await GodsHandContract.at(
        AztecAddress.fromString(contractAddress),
        account
      );
      const interaction = contract.methods.donate(
        new Fr(BigInt(hash)),
        Number(amount),
        chainField,
        tokenField
      );
      await wallet.sendTransaction(interaction);

      setHash("");
      setAmount("");
      setChain("");
      setToken("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Donate</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          placeholder="Disaster Hash"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          value={chain}
          onChange={(e) => setChain(e.target.value)}
          placeholder="Chain"
          required
        />
        <input
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Token Address"
          required
        />
        <button type="submit" disabled={loading || !account}>
          {loading ? "Donating..." : "Donate"}
        </button>
      </form>
    </div>
  );
};

export const Vote: React.FC = () => {
  const { wallet, account } = useWallet();
  const [hash, setHash] = useState("");
  const [org, setOrg] = useState("");
  const [voteType, setVoteType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet || !account) return;

    setLoading(true);
    try {
      const contract = await GodsHandContract.at(
        AztecAddress.fromString(contractAddress),
        account
      );
      const interaction = contract.methods.vote(
        Fr.fromString(hash),
        AztecAddress.fromString(org),
        Number(voteType)
      );
      await wallet.sendTransaction(interaction);

      setHash("");
      setOrg("");
      setVoteType("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Vote</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          placeholder="Disaster Hash"
          required
        />
        <input
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          placeholder="Organization Address"
          required
        />
        <select
          value={voteType}
          onChange={(e) => setVoteType(e.target.value)}
          required
        >
          <option value="">Select Vote Type</option>
          <option value="1">Approve</option>
          <option value="0">Reject</option>
        </select>
        <button type="submit" disabled={loading || !account}>
          {loading ? "Voting..." : "Vote"}
        </button>
      </form>
    </div>
  );
};

export const UnlockFunds: React.FC = () => {
  const { wallet, account } = useWallet();
  const [hash, setHash] = useState("");
  const [org, setOrg] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet || !account) return;

    setLoading(true);
    try {
      const contract = await GodsHandContract.at(
        AztecAddress.fromString(contractAddress),
        account
      );
      const interaction = contract.methods.unlock_funds(
        Fr.fromString(hash),
        AztecAddress.fromString(org),
        Number(amount)
      );
      await wallet.sendTransaction(interaction);

      setHash("");
      setOrg("");
      setAmount("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Unlock Funds</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          placeholder="Disaster Hash"
          required
        />
        <input
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          placeholder="Organization Address"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit" disabled={loading || !account}>
          {loading ? "Unlocking..." : "Unlock Funds"}
        </button>
      </form>
    </div>
  );
};

export const Claim: React.FC = () => {
  const { wallet, account } = useWallet();
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet || !account) return;

    setLoading(true);
    try {
      const contract = await GodsHandContract.at(
        AztecAddress.fromString(contractAddress),
        account
      );
      const interaction = contract.methods.claim(Fr.fromString(hash));
      await wallet.sendTransaction(interaction);

      setHash("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Claim</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          placeholder="Disaster Hash"
          required
        />
        <button type="submit" disabled={loading || !account}>
          {loading ? "Claiming..." : "Claim"}
        </button>
      </form>
    </div>
  );
};
