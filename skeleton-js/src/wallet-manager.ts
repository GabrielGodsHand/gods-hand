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
import { deriveMasterIncomingViewingSecretKey } from "@aztec/stdlib/keys";
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
    logger.info(process.env.IS_SANDBOX);
    logger.info("Loading accounts");
    try {
      const testAccounts = JSON.parse(process.env.IS_SANDBOX || "false")
        ? await getInitialTestAccounts()
        : [
            {
              secret: Fr.fromString(
                "0x242e865950ae8c7464d967ca18feb0bcb106a199dbbc9ee30501f54f1c3564ac"
              ),
              signingKey: deriveMasterIncomingViewingSecretKey(
                Fr.fromString(
                  "0x242e865950ae8c7464d967ca18feb0bcb106a199dbbc9ee30501f54f1c3564ac"
                )
              ),
              salt: Fr.fromString(
                "0x0000000000000000000000000000000000000000000000000000000000000000"
              ),
              address: AztecAddress.fromString(
                "0x099a59ca144deac44753670349810cd333cc1083fcb635f7a0b98e6a02cdaea5"
              ),
            },
            {
              secret: Fr.fromString(
                "0x241267a5e3db07a6c5a68c350142ee694a76dc871dbe11793996e1cfa3a3bc63"
              ),
              signingKey: deriveMasterIncomingViewingSecretKey(
                Fr.fromString(
                  "0x241267a5e3db07a6c5a68c350142ee694a76dc871dbe11793996e1cfa3a3bc63"
                )
              ),
              salt: Fr.fromString(
                "0x0000000000000000000000000000000000000000000000000000000000000000"
              ),
              address: AztecAddress.fromString(
                "0x12b8da8a4fa04b12c53ab1cfd7cf0af5fb94bccd26d6112eacf509739c00f7d2"
              ),
            },
            {
              secret: Fr.fromString(
                "0x025ddc80f7e8a780b95583b2043381ff433d84872fa01bcda812b263d791369a"
              ),
              signingKey: deriveMasterIncomingViewingSecretKey(
                Fr.fromString(
                  "0x025ddc80f7e8a780b95583b2043381ff433d84872fa01bcda812b263d791369a"
                )
              ),
              salt: Fr.fromString(
                "0x0000000000000000000000000000000000000000000000000000000000000000"
              ),
              address: AztecAddress.fromString(
                "0x0d04afd01555b167610733c92b7603b6682fbaf8a848db50bea9a8a19142410b"
              ),
            },
          ];

      logger.info(JSON.stringify(testAccounts));
      for (const [id, accountData] of Object.entries(testAccounts)) {
        logger.info(JSON.stringify(accountData));
        const account = await getSchnorrAccount(
          this.pxe,
          (accountData as { secret: string }).secret,
          (accountData as { signingKey: string }).signingKey,
          (accountData as { salt: string }).salt
        );

        logger.info("Registering account");
        await account.register();
        logger.info("Account registered");
        const wallet = (await account.getWallet()) as WalletWithAccountData;
        wallet._accountData = {
          address: (accountData as { address: string }).address,
          signingKey: (accountData as { signingKey: string }).signingKey,
          secretKey: (accountData as { secret: string }).secret,
          salt: (accountData as { salt: string }).salt,
        };
        logger.info("Setting account");
        this.accounts.set(id, wallet);
        logger.info("Account set");
      }
    } catch (error) {
      logger.info("No existing accounts file found");
      logger.error(error);
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
    const testAccounts = JSON.parse(process.env.IS_SANDBOX || "false")
      ? await getInitialTestAccounts()
      : [
          {
            secret: Fr.fromString(
              "0x242e865950ae8c7464d967ca18feb0bcb106a199dbbc9ee30501f54f1c3564ac"
            ),
            signingKey: deriveMasterIncomingViewingSecretKey(
              Fr.fromString(
                "0x242e865950ae8c7464d967ca18feb0bcb106a199dbbc9ee30501f54f1c3564ac"
              )
            ),
            salt: Fr.fromString(
              "0x0000000000000000000000000000000000000000000000000000000000000000"
            ),
            address: AztecAddress.fromString(
              "0x099a59ca144deac44753670349810cd333cc1083fcb635f7a0b98e6a02cdaea5"
            ),
          },
          {
            secret: Fr.fromString(
              "0x241267a5e3db07a6c5a68c350142ee694a76dc871dbe11793996e1cfa3a3bc63"
            ),
            signingKey: deriveMasterIncomingViewingSecretKey(
              Fr.fromString(
                "0x241267a5e3db07a6c5a68c350142ee694a76dc871dbe11793996e1cfa3a3bc63"
              )
            ),
            salt: Fr.fromString(
              "0x0000000000000000000000000000000000000000000000000000000000000000"
            ),
            address: AztecAddress.fromString(
              "0x12b8da8a4fa04b12c53ab1cfd7cf0af5fb94bccd26d6112eacf509739c00f7d2"
            ),
          },
          {
            secret: Fr.fromString(
              "0x025ddc80f7e8a780b95583b2043381ff433d84872fa01bcda812b263d791369a"
            ),
            signingKey: deriveMasterIncomingViewingSecretKey(
              Fr.fromString(
                "0x025ddc80f7e8a780b95583b2043381ff433d84872fa01bcda812b263d791369a"
              )
            ),
            salt: Fr.fromString(
              "0x0000000000000000000000000000000000000000000000000000000000000000"
            ),
            address: AztecAddress.fromString(
              "0x0d04afd01555b167610733c92b7603b6682fbaf8a848db50bea9a8a19142410b"
            ),
          },
        ];
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
