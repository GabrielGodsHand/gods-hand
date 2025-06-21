import {
  AccountWallet,
  ContractArtifact,
  AztecAddress,
  Fr,
} from "@aztec/aztec.js";

export interface AccountData {
  address: string;
  signingKey: string;
  secretKey: string;
  salt: string;
}

export interface AccountInfo {
  id: string;
  address: string;
  current: boolean;
}

export interface DisasterData {
  title: string;
  metadata: string;
}

export interface WalletWithAccountData extends AccountWallet {
  _accountData?: AccountData;
}

export type VoteType = 0 | 1; // 0 = reject, 1 = approve

export interface TransactionReceipt {
  blockHash?: string;
  blockNumber?: number;
  transactionHash: string;
  status: string;
}
