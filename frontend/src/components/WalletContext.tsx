import React, { createContext, useContext, useState, useEffect } from "react";
import { AztecAddress, Fr, type AccountWallet } from "@aztec/aztec.js";
import { EmbeddedWallet } from "./embedded-wallet";
import { GodsHandContractArtifact } from "./artifacts/GodsHand";

interface WalletContextType {
  wallet: EmbeddedWallet | null;
  account: AccountWallet | null;
  isInitialized: boolean;
  status: string;
  error: string | null;
  connectTestAccount: (index: number) => Promise<void>;
  createAccount: () => Promise<void>;
  clearError: () => void;
}

const WalletContext = createContext<WalletContextType | null>(null);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error("useWallet must be used within WalletProvider");
  return context;
};

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wallet, setWallet] = useState<EmbeddedWallet | null>(null);
  const [account, setAccount] = useState<AccountWallet | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);

  const contractAddress =
    import.meta.env.VITE_IS_SANDBOX === "true"
      ? import.meta.env.VITE_SANDBOX_CONTRACT_ADDRESS
      : import.meta.env.VITE_CONTRACT_ADDRESS;
  const deployerAddress =
    import.meta.env.VITE_IS_SANDBOX === "true"
      ? import.meta.env.VITE_SANDBOX_DEPLOYER_ADDRESS
      : import.meta.env.VITE_DEPLOYER_ADDRESS;
  const deploymentSalt =
    import.meta.env.VITE_IS_SANDBOX === "true"
      ? import.meta.env.VITE_SANDBOX_DEPLOYMENT_SALT
      : import.meta.env.VITE_DEPLOYMENT_SALT;
  const nodeUrl =
    import.meta.env.VITE_IS_SANDBOX === "true"
      ? import.meta.env.VITE_SANDBOX_AZTEC_NODE_URL
      : import.meta.env.VITE_AZTEC_NODE_URL;

  useEffect(() => {
    initializeWallet();
  }, []);

  const initializeWallet = async () => {
    try {
      if (!contractAddress || !deployerAddress || !deploymentSalt || !nodeUrl) {
        throw new Error("Missing required environment variables");
      }

      setStatus("Connecting to node and initializing wallet...");
      const newWallet = new EmbeddedWallet(nodeUrl);
      await newWallet.initialize();

      setStatus("Registering contracts...");
      const isSandbox =
        import.meta.env.VITE_IS_SANDBOX === "true" ? true : false;
      await newWallet.registerContract(
        GodsHandContractArtifact,
        AztecAddress.fromString(deployerAddress),
        Fr.fromString(deploymentSalt),
        [
          AztecAddress.fromString(
            isSandbox
              ? "0x2012172dc101c48390bb7fba83cff75547532b26664f5322c61c075c1383ed77"
              : "0x2cce50c358e5b0e04c06a665216f6831edf6bdfa27d07413c291a7ba840b6299"
          ),
          AztecAddress.fromString(
            isSandbox
              ? "0x138dd3b661a4e603aae83e52dc80dd45d453d4a93647b4124bbcb14bde64b704"
              : "0x0d04afd01555b167610733c92b7603b6682fbaf8a848db50bea9a8a19142410b"
          ),
          2,
        ]
      );

      setStatus("Checking for existing account...");
      const existingAccount = await newWallet.connectExistingAccount();

      setWallet(newWallet);
      setAccount(existingAccount);
      setIsInitialized(true);
      setStatus(
        existingAccount
          ? "Ready to interact with Gods Hand contract"
          : "Create or connect an account to start"
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Initialization failed");
    }
  };

  const connectTestAccount = async (index: number) => {
    if (!wallet) throw new Error("Wallet not initialized");
    try {
      setStatus("Connecting test account...");
      const testAccount = await wallet.connectTestAccount(index);
      setAccount(testAccount);
      setStatus("Test account connected successfully");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to connect test account"
      );
    }
  };

  const createAccount = async () => {
    if (!wallet) throw new Error("Wallet not initialized");
    try {
      setStatus("Creating account...");
      const newAccount = await wallet.createAccountAndConnect();
      setAccount(newAccount);
      setStatus("Account created successfully");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create account");
    }
  };

  const clearError = () => setError(null);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        account,
        isInitialized,
        status,
        error,
        connectTestAccount,
        createAccount,
        clearError,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
