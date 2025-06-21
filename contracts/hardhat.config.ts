import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import "@nomicfoundation/hardhat-verify";
dotenv.config();

export const USDC_ADDRESS = "0x929080c91318E6E03FC91E8A16993df6F93e30D9";
export const VAULT_ADDRESS = "0x23E45C6f9CE34FD9C7Fc4e6eD56383A92e9D78b1";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    arbitrumSepolia: {
      url: process.env.ARB_SEPOLIA_RPC_URL || "https://sepolia-rpc.arbitrum.io",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: "N/A",
    },
    customChains: [
      {
        chainId: 421614,
        network: "arbitrumSepolia",
        urls: {
          apiURL: "https://arbitrum-sepolia.blockscout.com/api",
          browserURL: "https://arbitrum-sepolia.blockscout.com",
        },
      },
    ],
  },
};

export default config;
