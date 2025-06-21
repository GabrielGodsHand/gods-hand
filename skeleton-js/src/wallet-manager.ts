import {
  Fr,
  createLogger,
  createAztecNodeClient,
  AztecAddress,
  getContractInstanceFromDeployParams,
  SponsoredFeePaymentMethod,
  PXE,
  AccountWallet,
  ContractFunctionInteraction,
  ContractArtifact,
} from "@aztec/aztec.js";
import { SponsoredFPCContractArtifact } from "@aztec/noir-contracts.js/SponsoredFPC";
import { SPONSORED_FPC_SALT } from "@aztec/constants";
import { randomBytes } from "@aztec/foundation/crypto";
import { getEcdsaRAccount } from "@aztec/accounts/ecdsa/lazy";
import { getSchnorrAccount } from "@aztec/accounts/schnorr/lazy";
import { getPXEServiceConfig } from "@aztec/pxe/config";
import { createPXEService } from "@aztec/pxe/client/lazy";
import { getDefaultInitializer } from "@aztec/stdlib/abi";
import { getInitialTestAccounts } from "@aztec/accounts/testing";
import { promises as fs } from "fs";
import {
  AccountData,
  AccountInfo,
  WalletWithAccountData,
  TransactionReceipt,
} from "./types.js";

const PROVER_ENABLED = false;
const ACCOUNTS_FILE = "accounts.json";
const logger = createLogger("wallet");

export class WalletManager {
  private pxe!: PXE;
  private accounts = new Map<string, WalletWithAccountData>();
  private currentAccountId: string | null = null;

  constructor(private nodeUrl: string) {}

  async initialize(): Promise<void> {
    console.log("Creating Aztec node client...");
    const aztecNode = await createAztecNodeClient(this.nodeUrl);
    console.log("Aztec node client created");

    console.log("Getting PXE service config...");
    const config = getPXEServiceConfig();
    console.log("PXE service config created");
    config.l1Contracts = await aztecNode.getL1ContractAddresses();
    console.log("L1 contracts fetched");
    config.proverEnabled = PROVER_ENABLED;
    console.log("Prover enabled");
    this.pxe = await createPXEService(aztecNode, config);

    console.log("Registering Sponsored FPC contract...");
    await this.pxe.registerContract({
      instance: await this.getSponsoredPFCContract(),
      artifact: SponsoredFPCContractArtifact,
    });

    console.log("Getting node info...");
    const nodeInfo = await this.pxe.getNodeInfo();
    logger.info("PXE Connected to node", nodeInfo);

    console.log("Loading accounts...");
    await this.loadAccounts();
    console.log("Accounts loaded");
  }

  private async getSponsoredPFCContract() {
    return await getContractInstanceFromDeployParams(
      SponsoredFPCContractArtifact,
      {
        salt: new Fr(SPONSORED_FPC_SALT),
      }
    );
  }

  private async loadAccounts(): Promise<void> {
    try {
      const data = await fs.readFile(ACCOUNTS_FILE, "utf8");
      const savedAccounts: Record<string, AccountData> = JSON.parse(data);

      for (const [id, accountData] of Object.entries(savedAccounts)) {
        const account = await getEcdsaRAccount(
          this.pxe,
          Fr.fromString(accountData.secretKey),
          Buffer.from(accountData.signingKey, "hex"),
          Fr.fromString(accountData.salt)
        );

        await account.register();
        const wallet = (await account.getWallet()) as WalletWithAccountData;
        wallet._accountData = accountData;
        this.accounts.set(id, wallet);
      }
    } catch (error) {
      logger.info("No existing accounts file found");
    }
  }

  private async saveAccounts(): Promise<void> {
    const accountsData: Record<string, AccountData> = {};
    for (const [id, wallet] of this.accounts) {
      if (wallet._accountData) {
        accountsData[id] = wallet._accountData;
      }
    }
    await fs.writeFile(ACCOUNTS_FILE, JSON.stringify(accountsData, null, 2));
  }

  async createAccount(accountId: string): Promise<AccountWallet> {
    if (this.accounts.has(accountId)) {
      throw new Error(`Account ${accountId} already exists`);
    }

    const salt = Fr.random();
    const secretKey = Fr.random();
    const signingKey = randomBytes(32);

    const account = await getEcdsaRAccount(
      this.pxe,
      secretKey,
      signingKey,
      salt
    );

    const deployMethod = await account.getDeployMethod();
    const sponsoredPFCContract = await this.getSponsoredPFCContract();

    const deployOpts = {
      contractAddressSalt: Fr.fromString(account.salt.toString()),
      fee: {
        paymentMethod: await account.getSelfPaymentMethod(
          new SponsoredFeePaymentMethod(sponsoredPFCContract.address)
        ),
      },
      universalDeploy: true,
      skipClassRegistration: true,
      skipPublicDeployment: true,
    };

    const provenInteraction = await deployMethod.prove(deployOpts);
    await provenInteraction.send().wait({ timeout: 120 });

    await account.register();
    const wallet = (await account.getWallet()) as WalletWithAccountData;

    // Store account data for persistence
    wallet._accountData = {
      address: wallet.getAddress().toString(),
      signingKey: signingKey.toString("hex"),
      secretKey: secretKey.toString(),
      salt: salt.toString(),
    };

    this.accounts.set(accountId, wallet);
    await this.saveAccounts();

    logger.info(`Account ${accountId} created: ${wallet.getAddress()}`);
    return wallet;
  }

  async connectTestAccount(
    accountId: string,
    testIndex: number
  ): Promise<AccountWallet> {
    const testAccounts = await getInitialTestAccounts();
    const testAccount = testAccounts[testIndex];

    const account = await getSchnorrAccount(
      this.pxe,
      testAccount.secret,
      testAccount.signingKey,
      testAccount.salt
    );

    await account.register();
    const wallet = (await account.getWallet()) as WalletWithAccountData;

    this.accounts.set(accountId, wallet);
    logger.info(`Test account ${accountId} connected: ${wallet.getAddress()}`);
    return wallet;
  }

  switchAccount(accountId: string): AccountWallet {
    if (!this.accounts.has(accountId)) {
      throw new Error(`Account ${accountId} not found`);
    }
    this.currentAccountId = accountId;
    return this.accounts.get(accountId)!;
  }

  getCurrentWallet(): AccountWallet {
    if (!this.currentAccountId) {
      throw new Error("No account selected");
    }
    return this.accounts.get(this.currentAccountId)!;
  }

  listAccounts(): AccountInfo[] {
    return Array.from(this.accounts.keys()).map((id) => ({
      id,
      address: this.accounts.get(id)!.getAddress().toString(),
      current: id === this.currentAccountId,
    }));
  }

  async sendTransaction(
    interaction: ContractFunctionInteraction
  ): Promise<TransactionReceipt> {
    const sponsoredPFCContract = await this.getSponsoredPFCContract();
    const provenInteraction = await interaction.prove({
      fee: {
        paymentMethod: new SponsoredFeePaymentMethod(
          sponsoredPFCContract.address
        ),
      },
    });

    return await provenInteraction.send().wait({ timeout: 120 });
  }

  async registerContract(
    artifact: ContractArtifact,
    deployer: AztecAddress,
    deploymentSalt: Fr,
    constructorArgs: any[]
  ): Promise<void> {
    const instance = await getContractInstanceFromDeployParams(artifact, {
      constructorArtifact: getDefaultInitializer(artifact),
      constructorArgs,
      deployer,
      salt: deploymentSalt,
    });

    await this.pxe.registerContract({ instance, artifact });
  }
}
