"use client";

import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DisasterInfo {
  title: string;
  metadata: string;
  amount: bigint;
  creator: string;
  active: boolean;
}

interface AztecModules {
  AztecAddress: any;
  Fr: any;
  AccountWallet: any;
}

export default function Testing() {
  // Aztec modules state
  const [aztec, setAztec] = useState<AztecModules | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Store module references
  const [embeddedWalletClass, setEmbeddedWalletClass] = useState<any>(null);
  const [godsHandContractClass, setGodsHandContractClass] = useState<any>(null);

  // Wallet state
  const [wallet, setWallet] = useState<any>(null);
  const [account, setAccount] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  // Contract state
  const [contractAddress, setContractAddress] = useState("");
  const [contract, setContract] = useState<any>(null);

  // Admin functions state
  const [newAgentAddress, setNewAgentAddress] = useState("");

  // Disaster creation state
  const [disasterTitle, setDisasterTitle] = useState("");
  const [disasterMetadata, setDisasterMetadata] = useState("");
  const [disasterAmount, setDisasterAmount] = useState("");

  // Donation state
  const [donationHash, setDonationHash] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donationChain, setDonationChain] = useState("");
  const [donationToken, setDonationToken] = useState("");

  // Vote state
  const [voteHash, setVoteHash] = useState("");
  const [voteOrgAddress, setVoteOrgAddress] = useState("");
  const [voteType, setVoteType] = useState("");

  // Unlock funds state
  const [unlockHash, setUnlockHash] = useState("");
  const [unlockOrgAddress, setUnlockOrgAddress] = useState("");
  const [unlockAmount, setUnlockAmount] = useState("");

  // Claim state
  const [claimHash, setClaimHash] = useState("");

  // View functions state
  const [queryHash, setQueryHash] = useState("");
  const [queryAddress, setQueryAddress] = useState("");
  const [queryResults, setQueryResults] = useState<any>({});

  // Disaster list
  const [disasters, setDisasters] = useState<
    Array<{ hash: string; info: DisasterInfo }>
  >([]);

  const loadAztecModules = async () => {
    try {
      setIsLoading(true);
      setStatus("Loading Aztec modules...");
      
      // This prevents the build error
      setIsLoading(false);
      setStatus("Aztec modules loading skipped for now");
    } catch (error) {
      setError("Failed to load Aztec modules");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAztecModules();
  }, []);

  const initializeWallet = async () => {
    if (!embeddedWalletClass) return;
    try {
      setStatus("Initializing wallet...");
      const walletInstance = new embeddedWalletClass(
        (import.meta as any).env.VITE_AZTEC_NODE_URL || ""
      );
      await walletInstance.initialize();
      setWallet(walletInstance);

      // Try to connect existing account
      const existingAccount = await walletInstance.connectExistingAccount();
      setAccount(existingAccount);

      setStatus("Wallet initialized");
    } catch (err) {
      setError(
        `Failed to initialize wallet: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    }
  };

  const createAccount = async () => {
    if (!wallet) return;
    setLoading(true);
    try {
      setStatus("Creating account...");
      const newAccount = await wallet.createAccountAndConnect();
      setAccount(newAccount);
      setStatus("Account created successfully");
    } catch (err) {
      setError(
        `Failed to create account: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const connectContract = async () => {
    if (!account || !contractAddress || !aztec || !godsHandContractClass)
      return;
    try {
      setStatus("Connecting to contract...");
      const contractInstance = await godsHandContractClass.at(
        aztec.AztecAddress.fromString(contractAddress),
        account
      );
      setContract(contractInstance);
      setStatus("Contract connected successfully");
    } catch (err) {
      setError(
        `Failed to connect to contract: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    }
  };

  const addAgent = async () => {
    if (!contract || !newAgentAddress || !aztec) return;
    setLoading(true);
    try {
      setStatus("Adding agent...");
      const interaction = contract.methods.add_agent(
        aztec.AztecAddress.fromString(newAgentAddress)
      );
      await wallet?.sendTransaction(interaction);
      setStatus("Agent added successfully");
      setNewAgentAddress("");
    } catch (err) {
      setError(
        `Failed to add agent: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const createDisaster = async () => {
    if (
      !contract ||
      !disasterTitle ||
      !disasterMetadata ||
      !disasterAmount ||
      !aztec
    )
      return;
    setLoading(true);
    try {
      setStatus("Creating disaster...");
      const titleField = aztec.Fr.fromString(disasterTitle);
      const metadataField = aztec.Fr.fromString(disasterMetadata);
      const amountBigInt = BigInt(disasterAmount);

      const interaction = contract.methods.create_disaster(
        titleField,
        metadataField,
        amountBigInt
      );
      const result = await wallet?.simulateTransaction(interaction);
      await wallet?.sendTransaction(interaction);

      setStatus(`Disaster created with hash: ${result}`);
      setDisasterTitle("");
      setDisasterMetadata("");
      setDisasterAmount("");
    } catch (err) {
      setError(
        `Failed to create disaster: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const donate = async () => {
    if (!contract || !donationHash || !donationAmount || !aztec) return;
    setLoading(true);
    try {
      setStatus("Processing donation...");
      const interaction = contract.methods.donate(
        aztec.Fr.fromString(donationHash),
        BigInt(donationAmount),
        aztec.Fr.fromString(donationChain || "0"),
        aztec.Fr.fromString(donationToken || "0")
      );
      await wallet?.sendTransaction(interaction);
      setStatus("Donation successful");
      setDonationHash("");
      setDonationAmount("");
      setDonationChain("");
      setDonationToken("");
    } catch (err) {
      setError(
        `Failed to donate: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const vote = async () => {
    if (!contract || !voteHash || !voteOrgAddress || !voteType || !aztec)
      return;
    setLoading(true);
    try {
      setStatus("Casting vote...");
      const interaction = contract.methods.vote(
        aztec.Fr.fromString(voteHash),
        aztec.AztecAddress.fromString(voteOrgAddress),
        parseInt(voteType)
      );
      await wallet?.sendTransaction(interaction);
      setStatus("Vote cast successfully");
      setVoteHash("");
      setVoteOrgAddress("");
      setVoteType("");
    } catch (err) {
      setError(
        `Failed to vote: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const unlockFunds = async () => {
    if (
      !contract ||
      !unlockHash ||
      !unlockOrgAddress ||
      !unlockAmount ||
      !aztec
    )
      return;
    setLoading(true);
    try {
      setStatus("Unlocking funds...");
      const interaction = contract.methods.unlock_funds(
        aztec.Fr.fromString(unlockHash),
        aztec.AztecAddress.fromString(unlockOrgAddress),
        BigInt(unlockAmount)
      );
      await wallet?.sendTransaction(interaction);
      setStatus("Funds unlocked successfully");
      setUnlockHash("");
      setUnlockOrgAddress("");
      setUnlockAmount("");
    } catch (err) {
      setError(
        `Failed to unlock funds: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const claim = async () => {
    if (!contract || !claimHash || !aztec) return;
    setLoading(true);
    try {
      setStatus("Processing claim...");
      const interaction = contract.methods.claim(
        aztec.Fr.fromString(claimHash)
      );
      await wallet?.sendTransaction(interaction);
      setStatus("Claim processed successfully");
      setClaimHash("");
    } catch (err) {
      setError(
        `Failed to claim: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const queryContract = async (functionName: string) => {
    if (!contract || !aztec) return;
    try {
      setStatus(`Querying ${functionName}...`);
      let result;

      switch (functionName) {
        case "get_disaster_info":
          if (!queryHash) return;
          result = await wallet?.simulateTransaction(
            contract.methods.get_disaster_info(aztec.Fr.fromString(queryHash))
          );
          break;
        case "get_admin":
          result = await wallet?.simulateTransaction(
            contract.methods.get_admin()
          );
          break;
        case "is_agent":
          if (!queryAddress) return;
          result = await wallet?.simulateTransaction(
            contract.methods.is_agent(
              aztec.AztecAddress.fromString(queryAddress)
            )
          );
          break;
        case "get_unlocked_funds":
          if (!queryHash || !queryAddress) return;
          result = await wallet?.simulateTransaction(
            contract.methods.get_unlocked_funds(
              aztec.Fr.fromString(queryHash),
              aztec.AztecAddress.fromString(queryAddress)
            )
          );
          break;
        case "get_donation_count":
          if (!queryHash) return;
          result = await wallet?.simulateTransaction(
            contract.methods.get_donation_count(aztec.Fr.fromString(queryHash))
          );
          break;
        case "get_vote_count":
          if (!queryHash) return;
          result = await wallet?.simulateTransaction(
            contract.methods.get_vote_count(aztec.Fr.fromString(queryHash))
          );
          break;
        default:
          return;
      }

      setQueryResults((prev: any) => ({ ...prev, [functionName]: result }));
      setStatus(`Query completed: ${functionName}`);
    } catch (err) {
      setError(
        `Failed to query ${functionName}: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    }
  };

  const deactivateDisaster = async () => {
    if (!contract || !queryHash || !aztec) return;
    setLoading(true);
    try {
      setStatus("Deactivating disaster...");
      const interaction = contract.methods.deactivate_disaster(
        aztec.Fr.fromString(queryHash)
      );
      await wallet?.sendTransaction(interaction);
      setStatus("Disaster deactivated successfully");
    } catch (err) {
      setError(
        `Failed to deactivate disaster: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Loading Aztec...</h1>
          <p className="text-muted-foreground">
            Please wait while we load the Aztec modules
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">GodsHand Contract Testing</h1>
        <p className="text-muted-foreground">
          Test all functions of the GodsHand disaster relief contract
        </p>
      </div>

      {status && (
        <Alert>
          <AlertDescription>{status}</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Wallet Connection */}
      <Card>
        <CardHeader>
          <CardTitle>Wallet Connection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!account ? (
            <Button onClick={createAccount} disabled={loading || !wallet}>
              {loading ? "Creating..." : "Create Account"}
            </Button>
          ) : (
            <div className="space-y-2">
              <Badge variant="outline">
                Connected: {account.getAddress().toString().slice(0, 8)}...
              </Badge>
              <div className="flex gap-2">
                <Input
                  placeholder="Contract Address"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                />
                <Button onClick={connectContract} disabled={!contractAddress}>
                  Connect Contract
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {contract && (
        <Tabs defaultValue="admin" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="admin">Admin</TabsTrigger>
            <TabsTrigger value="disasters">Disasters</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="voting">Voting</TabsTrigger>
            <TabsTrigger value="queries">Queries</TabsTrigger>
          </TabsList>

          <TabsContent value="admin" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Admin Functions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Add Agent</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Agent Address"
                      value={newAgentAddress}
                      onChange={(e) => setNewAgentAddress(e.target.value)}
                    />
                    <Button onClick={addAgent} disabled={loading}>
                      Add Agent
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="disasters" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Disaster Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={disasterTitle}
                      onChange={(e) => setDisasterTitle(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Estimated Amount Required</Label>
                    <Input
                      type="number"
                      value={disasterAmount}
                      onChange={(e) => setDisasterAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Metadata</Label>
                  <Textarea
                    value={disasterMetadata}
                    onChange={(e) => setDisasterMetadata(e.target.value)}
                  />
                </div>
                <Button onClick={createDisaster} disabled={loading}>
                  Create Disaster
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unlock Funds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="Disaster Hash"
                    value={unlockHash}
                    onChange={(e) => setUnlockHash(e.target.value)}
                  />
                  <Input
                    placeholder="Organization Address"
                    value={unlockOrgAddress}
                    onChange={(e) => setUnlockOrgAddress(e.target.value)}
                  />
                  <Input
                    placeholder="Amount"
                    type="number"
                    value={unlockAmount}
                    onChange={(e) => setUnlockAmount(e.target.value)}
                  />
                </div>
                <Button onClick={unlockFunds} disabled={loading}>
                  Unlock Funds
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Donate & Claim</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Donate</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Disaster Hash"
                      value={donationHash}
                      onChange={(e) => setDonationHash(e.target.value)}
                    />
                    <Input
                      placeholder="Amount"
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                    <Input
                      placeholder="Chain (optional)"
                      value={donationChain}
                      onChange={(e) => setDonationChain(e.target.value)}
                    />
                    <Input
                      placeholder="Token Address (optional)"
                      value={donationToken}
                      onChange={(e) => setDonationToken(e.target.value)}
                    />
                  </div>
                  <Button onClick={donate} disabled={loading}>
                    Donate
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Claim</h3>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Disaster Hash"
                      value={claimHash}
                      onChange={(e) => setClaimHash(e.target.value)}
                    />
                    <Button onClick={claim} disabled={loading}>
                      Claim
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="voting" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Voting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="Disaster Hash"
                    value={voteHash}
                    onChange={(e) => setVoteHash(e.target.value)}
                  />
                  <Input
                    placeholder="Organization Address"
                    value={voteOrgAddress}
                    onChange={(e) => setVoteOrgAddress(e.target.value)}
                  />
                  <Select value={voteType} onValueChange={setVoteType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Vote Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Type 0</SelectItem>
                      <SelectItem value="1">Type 1</SelectItem>
                      <SelectItem value="2">Type 2</SelectItem>
                      <SelectItem value="3">Type 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={vote} disabled={loading}>
                  Cast Vote
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="queries" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Query Functions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Query Hash (for disaster functions)"
                    value={queryHash}
                    onChange={(e) => setQueryHash(e.target.value)}
                  />
                  <Input
                    placeholder="Query Address (for address functions)"
                    value={queryAddress}
                    onChange={(e) => setQueryAddress(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    onClick={() => queryContract("get_admin")}
                  >
                    Get Admin
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => queryContract("is_agent")}
                  >
                    Is Agent
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => queryContract("get_disaster_info")}
                  >
                    Get Disaster Info
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => queryContract("get_unlocked_funds")}
                  >
                    Get Unlocked Funds
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => queryContract("get_donation_count")}
                  >
                    Get Donation Count
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => queryContract("get_vote_count")}
                  >
                    Get Vote Count
                  </Button>
                </div>

                <Button
                  onClick={deactivateDisaster}
                  disabled={loading}
                  variant="destructive"
                >
                  Deactivate Disaster
                </Button>

                {Object.keys(queryResults).length > 0 && (
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Query Results:</h4>
                    <pre className="text-sm overflow-auto">
                      {JSON.stringify(queryResults, null, 2)}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
