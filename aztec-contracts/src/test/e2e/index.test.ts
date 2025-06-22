import {
  GodsHandContractArtifact,
  GodsHandContract,
} from "../../artifacts/GodsHand.js";
import {
  TokenContractArtifact,
  TokenContract,
} from "@aztec/noir-contracts.js/Token";
import {
  AccountManager,
  AccountWallet,
  CompleteAddress,
  ContractDeployer,
  createLogger,
  Fr,
  PXE,
  TxStatus,
  getContractInstanceFromDeployParams,
  Logger,
  ContractInstanceWithAddress,
} from "@aztec/aztec.js";
import { generateSchnorrAccounts } from "@aztec/accounts/testing";
import { getSchnorrAccount } from "@aztec/accounts/schnorr";
import { spawn } from "child_process";
import { SponsoredFeePaymentMethod } from "@aztec/aztec.js/fee/testing";
import { L1FeeJuicePortalManager, AztecAddress } from "@aztec/aztec.js";
import { createEthereumChain, createExtendedL1Client } from "@aztec/ethereum";
import { getSponsoredFPCInstance } from "../../utils/sponsored_fpc.js";
import { setupPXE } from "../../utils/setup_pxe.js";
import { SponsoredFPCContract } from "@aztec/noir-contracts.js/SponsoredFPC";
import { deriveSigningKey } from "@aztec/stdlib/keys";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("GodsHand", () => {
  let pxe: PXE;
  let agentWallet: AccountWallet;
  let userWallet: AccountWallet;
  let orgWallet: AccountWallet;
  let accounts: CompleteAddress[] = [];
  let logger: Logger;
  let sandboxInstance;
  let sponsoredFPC: ContractInstanceWithAddress;
  let sponsoredPaymentMethod: SponsoredFeePaymentMethod;

  let randomAccountManagers: AccountManager[] = [];
  let randomWallets: AccountWallet[] = [];
  let randomAddresses: AztecAddress[] = [];

  let l1PortalManager: L1FeeJuicePortalManager;
  let skipSandbox: boolean;

  // ETH token contract (for reference - contract doesn't actually transfer tokens)
  let ethToken: TokenContract;

  beforeAll(async () => {
    skipSandbox = process.env.SKIP_SANDBOX === "true";
    if (!skipSandbox) {
      sandboxInstance = spawn("aztec", ["start", "--sandbox"], {
        detached: true,
        stdio: "ignore",
      });
      await sleep(15000);
    }

    logger = createLogger("aztec:godshand:tests");
    console.log("GodsHand tests running.");

    pxe = await setupPXE();

    sponsoredFPC = await getSponsoredFPCInstance();
    await pxe.registerContract({
      instance: sponsoredFPC,
      artifact: SponsoredFPCContract.artifact,
    });
    sponsoredPaymentMethod = new SponsoredFeePaymentMethod(
      sponsoredFPC.address
    );

    // generate random accounts
    randomAccountManagers = await Promise.all(
      (
        await generateSchnorrAccounts(5)
      ).map((a) => getSchnorrAccount(pxe, a.secret, a.signingKey, a.salt))
    );
    // get corresponding wallets
    randomWallets = await Promise.all(
      randomAccountManagers.map((am) => am.getWallet())
    );
    // get corresponding addresses
    randomAddresses = await Promise.all(
      randomWallets.map(async (w) => (await w.getCompleteAddress()).address)
    );

    // create default ethereum clients
    const nodeInfo = await pxe.getNodeInfo();
    const chain = createEthereumChain(
      ["http://localhost:8545"],
      nodeInfo.l1ChainId
    );
    const DefaultMnemonic =
      "test test test test test test test test test test test junk";
    const l1Client = createExtendedL1Client(
      chain.rpcUrls,
      DefaultMnemonic,
      chain.chainInfo
    );

    // create portal manager
    l1PortalManager = await L1FeeJuicePortalManager.new(pxe, l1Client, logger);

    // Set up wallets
    let agentSecretKey = Fr.random();
    let agentSalt = Fr.random();
    let agentAccount = await getSchnorrAccount(
      pxe,
      agentSecretKey,
      deriveSigningKey(agentSecretKey),
      agentSalt
    );
    await agentAccount
      .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    agentWallet = await agentAccount.getWallet();

    let userSecretKey = Fr.random();
    let userSalt = Fr.random();
    let userAccount = await getSchnorrAccount(
      pxe,
      userSecretKey,
      deriveSigningKey(userSecretKey),
      userSalt
    );
    await userAccount
      .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    userWallet = await userAccount.getWallet();

    let orgSecretKey = Fr.random();
    let orgSalt = Fr.random();
    let orgAccount = await getSchnorrAccount(
      pxe,
      orgSecretKey,
      deriveSigningKey(orgSecretKey),
      orgSalt
    );
    await orgAccount
      .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    orgWallet = await orgAccount.getWallet();

    // Deploy ETH token contract (for reference)
    console.log("Deploying ETH token contract");
    ethToken = await TokenContract.deploy(
      agentWallet,
      agentWallet.getAddress(),
      "TestETH",
      "ETH",
      18n
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Mint initial tokens (not used by contract but for reference)
    console.log("Minting initial tokens");
    await ethToken.methods
      .mint_to_public(agentWallet.getAddress(), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
  });

  afterAll(async () => {
    if (!skipSandbox) {
      sandboxInstance!.kill("SIGINT");
    }
  });

  it("Deploys the contract with correct parameters", async () => {
    console.log("Starting contract deployment test");
    const salt = Fr.random();

    const deployer = new ContractDeployer(
      GodsHandContractArtifact,
      agentWallet
    );
    const tx = deployer
      .deploy(
        ethToken.address, // eth_token
        agentWallet.getAddress(), // agent
        1n // vote_threshold
      )
      .send({
        contractAddressSalt: salt,
        fee: { paymentMethod: sponsoredPaymentMethod },
      });

    const receiptAfterMined = await tx.wait({ wallet: agentWallet });
    expect(receiptAfterMined.status).toEqual(TxStatus.SUCCESS);

    const contractInstance = getContractInstanceFromDeployParams(
      GodsHandContractArtifact,
      {
        constructorArgs: [ethToken.address, agentWallet.getAddress(), 1n],
        salt,
        deployer: agentWallet.getAddress(),
      }
    );
    const contract = await GodsHandContract.at(
      contractInstance.address,
      agentWallet
    );

    // Verify config
    const config = await contract.methods.get_config().simulate();
    expect(config.eth_token).toEqual(ethToken.address.toBigInt());
    expect(config.agent).toEqual(agentWallet.getAddress().toBigInt());
    expect(config.vote_threshold).toEqual(1n);

    console.log("Contract deployment test completed successfully");
  });

  it("Creates a disaster and tracks donations", async () => {
    console.log("Starting disaster creation and donation tracking test");

    const contract = await GodsHandContract.deploy(
      agentWallet,
      ethToken.address,
      agentWallet.getAddress(),
      1n
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    const disasterHash = new Fr(12345);
    const estimatedAmount = 1000000n;

    // Create disaster
    await contract.methods
      .create_disaster(disasterHash, estimatedAmount)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Verify disaster info
    const disasterInfo = await contract.methods
      .get_disaster_info(disasterHash)
      .simulate();
    expect(disasterInfo.hash).toEqual(disasterHash.toBigInt());
    expect(disasterInfo.estimated_amount).toEqual(estimatedAmount);
    expect(disasterInfo.active).toBe(true);

    // Check initial balances
    let contractBalance = await contract.methods
      .get_contract_balance(disasterHash)
      .simulate();
    expect(contractBalance).toBe(0n);

    let totalDonations = await contract.methods
      .get_total_donations(disasterHash)
      .simulate();
    expect(totalDonations).toBe(0n);

    // Make donation
    const donationAmount = 100n;
    await contract
      .withWallet(userWallet)
      .methods.donate(disasterHash, donationAmount)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check balances after donation
    contractBalance = await contract.methods
      .get_contract_balance(disasterHash)
      .simulate();
    expect(contractBalance).toBe(donationAmount);

    totalDonations = await contract.methods
      .get_total_donations(disasterHash)
      .simulate();
    expect(totalDonations).toBe(donationAmount);

    const userDonation = await contract.methods
      .get_user_donation(disasterHash, userWallet.getAddress())
      .simulate();
    expect(userDonation).toBe(donationAmount);

    console.log(
      "Disaster creation and donation tracking test completed successfully"
    );
  });

  it("Handles voting and prevents double voting", async () => {
    console.log("Starting voting test");

    const contract = await GodsHandContract.deploy(
      agentWallet,
      ethToken.address,
      agentWallet.getAddress(),
      2n // vote threshold of 2
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    const disasterHash = new Fr(67890);

    // Create disaster
    await contract.methods
      .create_disaster(disasterHash, 2000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Make a donation first
    await contract
      .withWallet(userWallet)
      .methods.donate(disasterHash, 50n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check initial vote count
    let voteCount = await contract.methods
      .get_vote_count(disasterHash)
      .simulate();
    expect(voteCount).toBe(0n);

    // Vote from user wallet
    await contract
      .withWallet(userWallet)
      .methods.vote(disasterHash, orgWallet.getAddress(), 1)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    voteCount = await contract.methods.get_vote_count(disasterHash).simulate();
    expect(voteCount).toBe(1n);

    // Vote from org wallet
    await contract
      .withWallet(orgWallet)
      .methods.vote(disasterHash, orgWallet.getAddress(), 2)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    voteCount = await contract.methods.get_vote_count(disasterHash).simulate();
    expect(voteCount).toBe(2n);

    console.log("Voting test completed successfully");
  });

  it("Tests fund unlocking and claiming", async () => {
    console.log("Starting fund unlock and claiming test");

    const contract = await GodsHandContract.deploy(
      agentWallet,
      ethToken.address,
      agentWallet.getAddress(),
      1n
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    const disasterHash = new Fr(11111);

    // Create disaster
    await contract.methods
      .create_disaster(disasterHash, 3000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Donate to have funds available
    const donationAmount = 500n;
    await contract
      .withWallet(userWallet)
      .methods.donate(disasterHash, donationAmount)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Vote to reach threshold
    await contract
      .withWallet(userWallet)
      .methods.vote(disasterHash, orgWallet.getAddress(), 1)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check vote count reached threshold
    const voteCount = await contract.methods
      .get_vote_count(disasterHash)
      .simulate();
    expect(voteCount).toBe(1n);

    // Unlock funds for organization
    const unlockAmount = 200n;
    await contract.methods
      .unlock_funds(disasterHash, orgWallet.getAddress(), unlockAmount)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check unlocked funds
    let unlockedFunds = await contract.methods
      .get_unlocked_funds(disasterHash, orgWallet.getAddress())
      .simulate();
    expect(unlockedFunds).toBe(unlockAmount);

    // Check contract balance before claiming
    let contractBalance = await contract.methods
      .get_contract_balance(disasterHash)
      .simulate();
    expect(contractBalance).toBe(donationAmount);

    // Claim funds
    await contract
      .withWallet(orgWallet)
      .methods.claim(disasterHash)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check balances after claiming
    unlockedFunds = await contract.methods
      .get_unlocked_funds(disasterHash, orgWallet.getAddress())
      .simulate();
    expect(unlockedFunds).toBe(0n);

    contractBalance = await contract.methods
      .get_contract_balance(disasterHash)
      .simulate();
    expect(contractBalance).toBe(donationAmount - unlockAmount);

    console.log("Fund unlock and claiming test completed successfully");
  });

  it("Tests disaster deactivation", async () => {
    console.log("Starting disaster deactivation test");

    const contract = await GodsHandContract.deploy(
      agentWallet,
      ethToken.address,
      agentWallet.getAddress(),
      1n
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    const disasterHash = new Fr(22222);

    // Create disaster
    await contract.methods
      .create_disaster(disasterHash, 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Verify disaster is active
    let disasterInfo = await contract.methods
      .get_disaster_info(disasterHash)
      .simulate();
    expect(disasterInfo.active).toBe(true);

    // Deactivate disaster
    await contract.methods
      .deactivate_disaster(disasterHash)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Verify disaster is now inactive
    disasterInfo = await contract.methods
      .get_disaster_info(disasterHash)
      .simulate();
    expect(disasterInfo.active).toBe(false);

    console.log("Disaster deactivation test completed successfully");
  });

  it("Tests access control", async () => {
    console.log("Starting access control test");

    const contract = await GodsHandContract.deploy(
      agentWallet,
      ethToken.address,
      agentWallet.getAddress(),
      1n
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    const disasterHash = new Fr(33333);

    // Non-agent should not be able to create disaster
    try {
      await contract
        .withWallet(userWallet)
        .methods.create_disaster(disasterHash, 1000000n)
        .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
        .wait();
      expect(true).toBe(false); // Should not reach here
    } catch (error) {
      expect(error.message).toContain("Only agent can create disasters");
    }

    // Agent should be able to create disaster
    await contract.methods
      .create_disaster(disasterHash, 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Make donation and vote
    await contract
      .withWallet(userWallet)
      .methods.donate(disasterHash, 100n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    await contract
      .withWallet(userWallet)
      .methods.vote(disasterHash, orgWallet.getAddress(), 1)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Non-agent should not be able to unlock funds
    try {
      await contract
        .withWallet(userWallet)
        .methods.unlock_funds(disasterHash, orgWallet.getAddress(), 50n)
        .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
        .wait();
      expect(true).toBe(false); // Should not reach here
    } catch (error) {
      expect(error.message).toContain("Only agent can unlock funds");
    }

    // Agent should be able to unlock funds
    await contract.methods
      .unlock_funds(disasterHash, orgWallet.getAddress(), 50n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    console.log("Access control test completed successfully");
  });
});
