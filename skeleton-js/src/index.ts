import { WalletManager } from "./wallet-manager.js";
import { ContractOperations } from "./contract-operations.js";
import { AztecAddress, Fr, AccountWallet } from "@aztec/aztec.js";
import {
  GodsHandContract,
  GodsHandContractArtifact,
} from "../artifacts/GodsHand.js";
import { AccountInfo, VoteType, TransactionReceipt } from "./types.js";
import "fake-indexeddb/auto";
import { config } from "dotenv";

config();

const IS_SANDBOX = JSON.parse(process.env.IS_SANDBOX || "false");
const NODE_URL = IS_SANDBOX
  ? process.env.SANDBOX_AZTEC_NODE_URL
  : process.env.TESTNET_AZTEC_NODE_URL;
const CONTRACT_ADDRESS = IS_SANDBOX
  ? process.env.SANDBOX_CONTRACT_ADDRESS
  : process.env.TESTNET_CONTRACT_ADDRESS;
const DEPLOYER_ADDRESS = IS_SANDBOX
  ? process.env.SANDBOX_DEPLOYER_ADDRESS
  : process.env.TESTNET_DEPLOYER_ADDRESS;
const DEPLOYMENT_SALT = IS_SANDBOX
  ? process.env.SANDBOX_DEPLOYMENT_SALT
  : process.env.TESTNET_DEPLOYMENT_SALT;

if (!CONTRACT_ADDRESS || !DEPLOYER_ADDRESS || !DEPLOYMENT_SALT) {
  throw new Error("Missing required environment variables");
}

export class AztecApp {
  private walletManager: WalletManager;
  private operations!: ContractOperations;

  constructor() {
    console.log(NODE_URL);
    this.walletManager = new WalletManager(NODE_URL);
  }

  async initialize(): Promise<void> {
    console.log("Initializing wallet manager...");
    await this.walletManager.initialize();
    console.log("Wallet manager initialized");

    console.log("Registering contract...");
    const isSandbox = JSON.parse(process.env.IS_SANDBOX || "false");
    await this.walletManager.registerContract(
      GodsHandContractArtifact,
      AztecAddress.fromString(DEPLOYER_ADDRESS),
      Fr.fromString(DEPLOYMENT_SALT),
      [
        AztecAddress.fromString(
          isSandbox
            ? "0x0bb503afa555ece146273fe00539f4dbcc2fc42d1cb4bbbf8e5bbea04aaa9eb9"
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
    console.log("Contract registered");

    console.log("Creating contract operations...");
    this.operations = new ContractOperations(
      this.walletManager,
      CONTRACT_ADDRESS || ""
    );
    console.log("Contract operations created");
  }

  // Account management
  async createAccount(accountId: string): Promise<AccountWallet> {
    return await this.walletManager.createAccount(accountId);
  }

  async connectTestAccount(
    accountId: string,
    testIndex: number = 0
  ): Promise<AccountWallet> {
    return await this.walletManager.connectTestAccount(accountId, testIndex);
  }

  switchAccount(accountId: string): AccountWallet {
    return this.walletManager.switchAccount(accountId);
  }

  listAccounts(): AccountInfo[] {
    return this.walletManager.listAccounts();
  }

  // Contract operations
  async createDisaster(
    title: string,
    metadata: string,
    amount: number
  ): Promise<{ receipt: TransactionReceipt; disasterHash: string }> {
    return await this.operations.createDisaster(title, metadata, amount);
  }

  async donate(
    disasterHash: string,
    amount: number,
    chain: string,
    tokenAddress: string
  ): Promise<TransactionReceipt> {
    return await this.operations.donate(
      disasterHash,
      amount,
      chain,
      tokenAddress
    );
  }

  async vote(
    disasterHash: string,
    organizationAddress: string,
    voteType: VoteType
  ): Promise<TransactionReceipt> {
    return await this.operations.vote(
      disasterHash,
      organizationAddress,
      voteType
    );
  }

  async unlockFunds(
    disasterHash: string,
    organizationAddress: string,
    amount: number
  ): Promise<TransactionReceipt> {
    return await this.operations.unlockFunds(
      disasterHash,
      organizationAddress,
      amount
    );
  }

  async claim(disasterHash: string): Promise<TransactionReceipt> {
    return await this.operations.claim(disasterHash);
  }
}

// Example usage
// async function main(): Promise<void> {
//   console.log("Starting...");
//   const app = new AztecApp();
//   console.log("Initializing...");
//   await app.initialize();

//   // Setup accounts
//   console.log("Connecting test accounts...");
//   await app.connectTestAccount("test1", 0);
//   console.log("Connected test1");
//   await app.connectTestAccount("test2", 1);
//   console.log("Connected test2");
//   await app.connectTestAccount("test3", 2);
//   const accounts = app.listAccounts();
//   console.log("Listing accounts...");
//   console.log("Available accounts:", accounts);

//   console.log("Switching to test2...");
//   // Switch to test1 and create disaster
//   app.switchAccount("test2");
//   console.log("Creating disaster...");
//   const { receipt: createReceipt, disasterHash } = await app.createDisaster(
//     "Earthquake Relief",
//     "Emergency fund for earthquake victims",
//     1000000
//   );
//   console.log("Disaster created: ", createReceipt);

//   // Switch to test2 and donate
//   console.log("Switching to test1...");
//   app.switchAccount("test1");
//   console.log("Donating...");
//   const donateReceipt = await app.donate(
//     disasterHash,
//     50000,
//     "1",
//     "0x1234567890123456789012345678901234567890"
//   );
//   console.log("Donation made:", donateReceipt);

//   console.log("Voting...");
//   const voteReceipt1 = await app.vote(disasterHash, accounts[0].address, 1);
//   console.log("Vote cast:", voteReceipt1);

//   // Switch to test3 and vote
//   console.log("Switching to test3...");
//   app.switchAccount("test3");
//   const voteReceipt = await app.vote(disasterHash, accounts[0].address, 1);
//   console.log("Vote cast:", voteReceipt);

//   console.log("Unlocking funds...");
//   console.log("Switching to test2...");
//   app.switchAccount("test2");
//   const unlockReceipt = await app.unlockFunds(
//     disasterHash,
//     accounts[0].address,
//     10000
//   );
//   console.log("Funds unlocked:", unlockReceipt);

//   console.log("Claiming funds...");
//   console.log("Switching to test1...");
//   app.switchAccount("test1");
//   const claimReceipt = await app.claim(disasterHash);
//   console.log("Funds claimed:", claimReceipt);
// }

// if (import.meta.url === `file://${process.argv[1]}`) {
//   main().catch(console.error);
// }
