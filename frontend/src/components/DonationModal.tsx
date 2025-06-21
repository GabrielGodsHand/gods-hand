"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
}

interface Web3Utils {
  toWei: (amount: string, unit: string) => string;
}

interface Web3Instance {
  utils: Web3Utils;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

export default function DonationModal({
  isOpen,
  onClose,
  eventTitle,
}: DonationModalProps) {
  const [step, setStep] = useState<"amount" | "wallet">("amount");
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<string>("");

  // Dummy contract address for testing
  const DUMMY_CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890";

  const handleAmountSubmit = () => {
    if (donationAmount && parseFloat(donationAmount) > 0) {
      setStep("wallet");
    }
  };

  const connectMetamask = async () => {
    setIsConnecting(true);
    setConnectionStatus("Connecting to MetaMask...");

    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        setConnectionStatus(
          "MetaMask not found. Please install MetaMask extension."
        );
        setIsConnecting(false);
        return;
      }

      // Request account access
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      if (accounts.length === 0) {
        setConnectionStatus("No accounts found. Please unlock MetaMask.");
        setIsConnecting(false);
        return;
      }

      setConnectionStatus("Connected! Preparing transaction...");

      // Create Web3 instance (simplified for demo)
      const web3 = new (
        window as unknown as {
          Web3: new (provider: EthereumProvider) => Web3Instance;
        }
      ).Web3(window.ethereum);

      // Convert USDC amount to wei (assuming 1 USDC = 0.001 ETH for demo purposes)
      const ethAmount = (parseFloat(donationAmount) * 0.001).toString();
      const donationAmountWei = web3.utils.toWei(ethAmount, "ether");

      const transactionParameters = {
        to: DUMMY_CONTRACT_ADDRESS,
        from: accounts[0],
        value: donationAmountWei,
        data: "0x", // Empty data for simple transfer
      };

      setConnectionStatus("Please confirm the transaction in MetaMask...");

      const txHash = (await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      })) as string;

      setConnectionStatus(
        `Transaction sent! Hash: ${txHash.substring(0, 10)}...`
      );

      // Close modal after successful transaction
      setTimeout(() => {
        onClose();
        setConnectionStatus("");
        setIsConnecting(false);
        setStep("amount");
        setDonationAmount("");
      }, 3000);
    } catch (error: unknown) {
      console.error("MetaMask connection error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Transaction failed";
      setConnectionStatus(`Error: ${errorMessage}`);
      setIsConnecting(false);
    }
  };

  const connectAztec = () => {
    setConnectionStatus("Aztec wallet integration coming soon...");
    setTimeout(() => {
      setConnectionStatus("");
    }, 2000);
  };

  const handleBack = () => {
    setStep("amount");
    setConnectionStatus("");
    setIsConnecting(false);
  };

  useEffect(() => {
    if (!isOpen) {
      setStep("amount");
      setDonationAmount("");
      setConnectionStatus("");
      setIsConnecting(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Scroll Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative max-w-md w-full"
          >
            {/* Ancient Scroll Design */}
            <div
              className="relative rounded-2xl border-4 border-amber-800 shadow-2xl"
              style={{ backgroundColor: "#cbb287" }}
            >
              {/* Scroll Decorations */}
              <div className="absolute -top-2 left-4 right-4 h-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 rounded-full"></div>
              <div className="absolute -bottom-2 left-4 right-4 h-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 rounded-full"></div>

              {/* Scroll Ends */}
              <div className="absolute -left-3 top-2 bottom-2 w-6 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full shadow-lg"></div>
              <div className="absolute -right-3 top-2 bottom-2 w-6 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full shadow-lg"></div>

              {/* Content */}
              <div className="p-8 pt-12 pb-12">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-amber-900 hover:text-black transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Back Button (only show on wallet step) */}
                {step === "wallet" && (
                  <button
                    onClick={handleBack}
                    className="absolute top-4 left-4 text-amber-900 hover:text-black transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
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
                  </button>
                )}

                {/* Step 1: Amount Input */}
                {step === "amount" && (
                  <>
                    {/* Title */}
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 font-['Cinzel'] mb-2 drop-shadow-sm">
                        Enter Donation Amount
                      </h2>
                      <div className="mt-2 text-gray-800 font-['Cinzel'] text-xs italic">
                        For: {eventTitle}
                      </div>
                    </div>

                    {/* Amount Input */}
                    <div className="mb-6">
                      <label className="block text-gray-900 font-['Cinzel'] font-bold mb-3 text-lg">
                        Amount (USDC)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 font-['Cinzel'] text-xl font-bold">
                          $
                        </span>
                        <input
                          type="number"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                          className="w-full pl-8 pr-4 py-4 bg-white/20 backdrop-blur-sm border-2 border-amber-600/50 rounded-xl text-gray-900 font-['Cinzel'] text-xl font-bold placeholder-gray-600 focus:outline-none focus:border-amber-700 focus:bg-white/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Continue Button */}
                    <button
                      onClick={handleAmountSubmit}
                      disabled={
                        !donationAmount || parseFloat(donationAmount) <= 0
                      }
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 disabled:bg-gray-400/20 disabled:border-gray-400/30 disabled:text-gray-500 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none font-['Cinzel']"
                    >
                      Continue to Payment
                    </button>
                  </>
                )}

                {/* Step 2: Wallet Selection */}
                {step === "wallet" && (
                  <>
                    {/* Title */}
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 font-['Cinzel'] mb-2 drop-shadow-sm">
                        Choose your payment method
                      </h2>
                      <div className="mt-2 text-gray-800 font-['Cinzel'] text-sm">
                        Donating:{" "}
                        <span className="font-bold">
                          ${donationAmount} USDC
                        </span>
                      </div>
                      <div className="mt-1 text-gray-800 font-['Cinzel'] text-xs italic">
                        For: {eventTitle}
                      </div>
                    </div>

                    {/* Status Message */}
                    {connectionStatus && (
                      <div className="mb-6 p-3 bg-amber-200/70 rounded-lg border border-amber-600/50">
                        <p className="text-gray-900 font-['Cinzel'] text-sm text-center font-medium">
                          {connectionStatus}
                        </p>
                      </div>
                    )}

                    {/* Wallet Options */}
                    <div className="space-y-4">
                      {/* MetaMask Option */}
                      <button
                        onClick={connectMetamask}
                        disabled={isConnecting}
                        className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 disabled:bg-gray-400/20 disabled:border-gray-400/30 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none font-['Cinzel'] flex items-center justify-center"
                      >
                        <img
                          src="/MetaMask.png"
                          alt="MetaMask"
                          className="w-6 h-6 mr-3"
                        />
                        {isConnecting ? "Connecting..." : "MetaMask Wallet"}
                      </button>

                      {/* Aztec Option */}
                      <button
                        onClick={connectAztec}
                        disabled={isConnecting}
                        className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 disabled:bg-gray-400/20 disabled:border-gray-400/30 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none font-['Cinzel'] flex items-center justify-center"
                      >
                        <svg
                          className="w-6 h-6 mr-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.93 5.16-1.19 9-5.38 9-10.93V7l-10-5z" />
                        </svg>
                        Aztec Wallet (macOS only)
                      </button>
                    </div>
                  </>
                )}

                {/* Divine Footer */}
                <div className="mt-8 text-center">
                  <p className="text-gray-800 font-['Cinzel'] text-xs italic">
                    ✨ Your generosity brings divine blessings ✨
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
