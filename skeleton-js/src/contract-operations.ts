import { Fr, AztecAddress } from "@aztec/aztec.js";
import { keccak256 } from "@aztec/foundation/crypto";
import { GodsHandContract } from "../artifacts/GodsHand.js";
import { WalletManager } from "./wallet-manager.js";
import { DisasterData, VoteType, TransactionReceipt } from "./types.js";

function textToField(text: string): Fr {
  const hash = keccak256(Buffer.from(text, "utf8"));
  const truncatedHash = hash.slice(0, 31);
  return new Fr(BigInt("0x" + truncatedHash.toString("hex")));
}

export class ContractOperations {
  constructor(
    private walletManager: WalletManager,
    private contractAddress: string
  ) {}

  private async getContract(): Promise<GodsHandContract> {
    const wallet = this.walletManager.getCurrentWallet();
    return await GodsHandContract.at(
      AztecAddress.fromString(this.contractAddress),
      wallet
    );
  }

  async createDisaster(
    title: string,
    metadata: string,
    amount: number
  ): Promise<{ receipt: TransactionReceipt; disasterHash: string }> {
    const disasterData: DisasterData = { title, metadata };
    const disasterHash = textToField(JSON.stringify(disasterData));
    const contract = await this.getContract();
    const interaction = contract.methods.create_disaster(disasterHash, amount);
    const receipt = await this.walletManager.sendTransaction(interaction);
    return { receipt, disasterHash: disasterHash.toString() };
  }

  async donate(
    disasterHash: string,
    amount: number,
    chain: string,
    tokenAddress: string
  ): Promise<TransactionReceipt> {
    const chainField = new Fr(
      BigInt("0x" + Number(chain).toString(16).padStart(62, "0"))
    );
    const tokenField = new Fr(
      BigInt("0x" + tokenAddress.slice(2).padStart(62, "0"))
    );

    const contract = await this.getContract();
    const interaction = contract.methods.donate(
      new Fr(BigInt(disasterHash)),
      amount,
      chainField,
      tokenField
    );
    return await this.walletManager.sendTransaction(interaction);
  }

  async vote(
    disasterHash: string,
    organizationAddress: string,
    voteType: VoteType
  ): Promise<TransactionReceipt> {
    const contract = await this.getContract();
    const interaction = contract.methods.vote(
      Fr.fromString(disasterHash),
      AztecAddress.fromString(organizationAddress),
      voteType
    );
    return await this.walletManager.sendTransaction(interaction);
  }

  async unlockFunds(
    disasterHash: string,
    organizationAddress: string,
    amount: number
  ): Promise<TransactionReceipt> {
    const contract = await this.getContract();
    const interaction = contract.methods.unlock_funds(
      Fr.fromString(disasterHash),
      AztecAddress.fromString(organizationAddress),
      amount
    );
    return await this.walletManager.sendTransaction(interaction);
  }

  async claim(disasterHash: string): Promise<TransactionReceipt> {
    const contract = await this.getContract();
    const interaction = contract.methods.claim(Fr.fromString(disasterHash));
    return await this.walletManager.sendTransaction(interaction);
  }
}
