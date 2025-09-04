import {
  GodsHandContractArtifact,
  GodsHandContract,
} from "../../artifacts/GodsHand.js";
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
  let firstWallet: AccountWallet;
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

  beforeAll(async () => {
    skipSandbox = process.env.SKIP_SANDBOX === "true";
    logger = createLogger("aztec:aztec-starter:gods-hand");
    logger.info("Starting GodsHand test suite setup");

    if (!skipSandbox) {
      logger.info("Starting sandbox instance");
      sandboxInstance = spawn("aztec", ["start", "--sandbox"], {
        detached: true,
        stdio: "ignore",
      });
      await sleep(15000);
      logger.info("Sandbox instance started");
    } else {
      logger.info("Skipping sandbox startup");
    }

<<<<<<< HEAD
    logger = createLogger("aztec:aztec-starter:gods-hand");
=======
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
    logger.info("GodsHand tests running.");

    logger.info("Setting up PXE");
    pxe = await setupPXE();
    logger.info("PXE setup complete");

    logger.info("Getting sponsored FPC instance");
    sponsoredFPC = await getSponsoredFPCInstance();
    await pxe.registerContract({
      instance: sponsoredFPC,
      artifact: SponsoredFPCContract.artifact,
    });
    sponsoredPaymentMethod = new SponsoredFeePaymentMethod(
      sponsoredFPC.address
    );
    logger.info("Sponsored FPC registered");

    // generate random accounts
    logger.info("Generating 5 random accounts");
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
    logger.info(`Generated ${randomAddresses.length} random accounts`);

    // create default ethereum clients
    logger.info("Setting up Ethereum clients");
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
    logger.info("Creating L1 portal manager");
    l1PortalManager = await L1FeeJuicePortalManager.new(pxe, l1Client, logger);
    logger.info("L1 portal manager created");

    // Set up a wallet
    logger.info("Creating first wallet");
    let secretKey = Fr.random();
    let salt = Fr.random();
    let schnorrAccount = await getSchnorrAccount(
      pxe,
      secretKey,
      deriveSigningKey(secretKey),
      salt
    );
    await schnorrAccount
      .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    firstWallet = await schnorrAccount.getWallet();
    logger.info(`First wallet created: ${firstWallet.getAddress()}`);
    logger.info("GodsHand test suite setup complete");
  });

  afterAll(async () => {
    logger.info("Cleaning up GodsHand test suite");
    if (!skipSandbox) {
      logger.info("Killing sandbox instance");
      sandboxInstance!.kill("SIGINT");
    }
    logger.info("GodsHand test suite cleanup complete");
  });

<<<<<<< HEAD
  it("Deploys the contract", async () => {
    const salt = Fr.random();
    const GodsHandArtifact = GodsHandContractArtifact;
    const accounts = await Promise.all(
      (
        await generateSchnorrAccounts(2)
      ).map(
        async (a) =>
          await getSchnorrAccount(pxe, a.secret, a.signingKey, a.salt)
      )
    );
    await Promise.all(
      accounts.map((a) =>
        a.deploy({ fee: { paymentMethod: sponsoredPaymentMethod } }).wait()
      )
    );
    const daWallets = await Promise.all(accounts.map((a) => a.getWallet()));
    const [deployerWallet, adminWallet] = daWallets;
    const [deployerAddress, adminAddress] = daWallets.map((w) =>
      w.getAddress()
    );

    const deploymentData = await getContractInstanceFromDeployParams(
      GodsHandArtifact,
      {
        constructorArgs: [adminAddress],
        salt,
        deployer: deployerWallet.getAddress(),
      }
    );
    const deployer = new ContractDeployer(GodsHandArtifact, deployerWallet);
    const tx = deployer.deploy(adminAddress).send({
      contractAddressSalt: salt,
      fee: { paymentMethod: sponsoredPaymentMethod }, // without the sponsoredFPC the deployment fails, thus confirming it works
=======
  // it("Deploys the contract", async () => {
  //   logger.info("Starting contract deployment test");
  //   const salt = Fr.random();
  //   logger.info(`Using deployment salt: ${salt}`);

  //   const GodsHandArtifact = GodsHandContractArtifact;
  //   logger.info("Generating deployer and admin accounts");
  //   const accounts = await Promise.all(
  //     (
  //       await generateSchnorrAccounts(2)
  //     ).map(
  //       async (a) =>
  //         await getSchnorrAccount(pxe, a.secret, a.signingKey, a.salt)
  //     )
  //   );
  //   logger.info("Generated deployer and admin accounts");

  //   logger.info("Deploying accounts");
  //   await Promise.all(
  //     accounts.map((a, i) => {
  //       logger.info(`Deploying account ${i}`);
  //       return a
  //         .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //         .wait();
  //     })
  //   );
  //   logger.info("Accounts deployed");

  //   const daWallets = await Promise.all(accounts.map((a) => a.getWallet()));
  //   const [deployerWallet, adminWallet] = daWallets;
  //   const [deployerAddress, adminAddress] = daWallets.map((w) =>
  //     w.getAddress()
  //   );
  //   logger.info(`Deployer: ${deployerAddress}, Admin: ${adminAddress}`);

  //   logger.info("Getting deployment parameters");
  //   const deploymentData = await getContractInstanceFromDeployParams(
  //     GodsHandArtifact,
  //     {
  //       constructorArgs: [adminAddress],
  //       salt,
  //       deployer: deployerWallet.getAddress(),
  //     }
  //   );
  //   logger.info(`Target deployment address: ${deploymentData.address}`);

  //   const deployer = new ContractDeployer(GodsHandArtifact, deployerWallet);
  //   logger.info("Sending deployment transaction");
  //   const tx = deployer.deploy(adminAddress).send({
  //     contractAddressSalt: salt,
  //     fee: { paymentMethod: sponsoredPaymentMethod }, // without the sponsoredFPC the deployment fails, thus confirming it works
  //   });

  //   const receipt = await tx.getReceipt();
  //   logger.info(`Deployment receipt status: ${receipt.status}`);

  //   expect(receipt).toEqual(
  //     expect.objectContaining({
  //       status: TxStatus.PENDING,
  //       error: "",
  //     })
  //   );

  //   logger.info("Waiting for deployment to be mined");
  //   const receiptAfterMined = await tx.wait({ wallet: deployerWallet });
  //   logger.info(`Final deployment status: ${receiptAfterMined.status}`);

  //   logger.info("Checking contract metadata");
  //   expect(await pxe.getContractMetadata(deploymentData.address)).toBeDefined();
  //   expect(
  //     (await pxe.getContractMetadata(deploymentData.address)).contractInstance
  //   ).toBeTruthy();
  //   expect(receiptAfterMined).toEqual(
  //     expect.objectContaining({
  //       status: TxStatus.SUCCESS,
  //     })
  //   );

  //   expect(receiptAfterMined.contract.instance.address).toEqual(
  //     deploymentData.address
  //   );
  //   logger.info("Contract deployment test completed successfully");
  // });

  it("Creates a disaster and accepts donations", async () => {
    logger.info("Starting disaster creation and donation test");

    logger.info("Deploying GodsHand contract");
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();
    logger.info(`Contract deployed at: ${contract.address}`);

    // Register contract with PXE for all wallets to use
    logger.info("Registering contract with PXE");
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
    });
    logger.info("Contract registered with PXE");

    // Create disaster (admin is agent by default)
    logger.info("Simulating disaster creation");
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();
    logger.info(`Disaster hash from simulation: ${disasterHash}`);

<<<<<<< HEAD
    const receiptAfterMined = await tx.wait({ wallet: deployerWallet });
    expect(await pxe.getContractMetadata(deploymentData.address)).toBeDefined();
    expect(
      (await pxe.getContractMetadata(deploymentData.address)).contractInstance
    ).toBeTruthy();
    expect(receiptAfterMined).toEqual(
      expect.objectContaining({
        status: TxStatus.SUCCESS,
      })
    );

    expect(receiptAfterMined.contract.instance.address).toEqual(
      deploymentData.address
    );
  });

  it("Creates a disaster and accepts donations", async () => {
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract with PXE for all wallets to use
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    // Create disaster (admin is agent by default)
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();

=======
    logger.info("Creating disaster");
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
<<<<<<< HEAD

    // Check initial donation count
    let donationCount = await contract.methods
      .get_donation_count(disasterHash)
      .simulate();
    expect(donationCount).toBe(0n);

    // Make donation using the donor's wallet
    const donor = randomWallets[0];
    const contractWithDonor = contract.withWallet(donor);

    await contractWithDonor.methods
      .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check donation count increased
    donationCount = await contract.methods
      .get_donation_count(disasterHash)
      .simulate();
    expect(donationCount).toBe(1n);
  });

  it("Should fail when trying to donate twice", async () => {
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract with PXE for all wallets to use
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();

    // Create disaster
    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    const donor = randomWallets[0];
    const contractWithDonor = contract.withWallet(donor);

    // First donation
    await contractWithDonor.methods
      .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    expect(
      await contract.methods.get_donation_count(disasterHash).simulate()
    ).toBe(1n);

    // We try donating again, but our TX is dropped due to trying to emit duplicate nullifiers
    // first confirm that it fails simulation
    await expect(
      contractWithDonor.methods
        .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
        .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
        .wait()
    ).rejects.toThrow(/Existing nullifier/);

    // if we skip simulation before submitting the tx,
    // tx will be included in a block but with app logic reverted
    await expect(
      contractWithDonor.methods
        .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
        .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
        .wait()
    ).rejects.toThrow(/Existing nullifier/);
  });

  it("Creates a disaster and accepts votes", async () => {
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract with PXE for all wallets to use
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    // Create disaster
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();

    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check initial vote count
    let voteCount = await contract.methods
      .get_vote_count(disasterHash)
      .simulate();
    expect(voteCount).toBe(0n);

    // Vote
    const voter = randomWallets[0];
    const org = randomAddresses[1];
    const contractWithVoter = contract.withWallet(voter);

    await contractWithVoter.methods
      .vote(disasterHash, org, 1)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check vote count increased
    voteCount = await contract.methods.get_vote_count(disasterHash).simulate();
    expect(voteCount).toBe(1n);
  });

  it("Should fail when trying to vote twice", async () => {
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract with PXE for all wallets to use
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    // Create disaster
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();

    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    const voter = randomWallets[0];
    const org = randomAddresses[1];
    const contractWithVoter = contract.withWallet(voter);

    // First vote
    await contractWithVoter.methods
      .vote(disasterHash, org, 1)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    expect(await contract.methods.get_vote_count(disasterHash).simulate()).toBe(
      1n
    );

    // We try voting again, but our TX is dropped due to trying to emit duplicate nullifiers
    await expect(
      contractWithVoter.methods
        .vote(disasterHash, org, 2)
        .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
        .wait()
    ).rejects.toThrow(/Existing nullifier/);
  });

  it("Tests fund management workflow", async () => {
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract with PXE for all wallets to use
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    // Create disaster
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();

    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    const org = randomAddresses[0];

    // Check initial unlocked funds
    let unlockedFunds = await contract.methods
      .get_unlocked_funds(disasterHash, org)
      .simulate();
    expect(unlockedFunds).toBe(0n);

    // Unlock funds (admin is agent by default)
    await contract.methods
      .unlock_funds(disasterHash, org, 5000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check unlocked funds
    unlockedFunds = await contract.methods
      .get_unlocked_funds(disasterHash, org)
      .simulate();
    expect(unlockedFunds).toBe(5000n);

    // Claim funds
    const orgWallet = randomWallets[0]; // org wallet
    const contractWithOrg = contract.withWallet(orgWallet);

    await contractWithOrg.methods
      .claim(disasterHash)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check funds were claimed
    unlockedFunds = await contract.methods
      .get_unlocked_funds(disasterHash, org)
      .simulate();
    expect(unlockedFunds).toBe(0n);
  });

  it("Tests agent management", async () => {
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Register contract with PXE for all wallets to use
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    const agent = randomAddresses[0];

    // Check agent is not authorized initially
    let isAgent = await contract.methods.is_agent(agent).simulate();
    expect(isAgent).toBe(false);

    // Add agent
    await contract.methods
      .add_agent(agent)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Check agent is now authorized
    isAgent = await contract.methods.is_agent(agent).simulate();
    expect(isAgent).toBe(true);

    // Agent should be able to create disaster
    const agentWallet = randomWallets[0];
    const contractWithAgent = contract.withWallet(agentWallet);

    const disasterHash = await contractWithAgent.methods
      .create_disaster(new Fr(789), new Fr(101112), 2000000n)
      .simulate();

    await contractWithAgent.methods
      .create_disaster(new Fr(789), new Fr(101112), 2000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Verify disaster was created
    const disasterInfo = await contract.methods
      .get_disaster_info(disasterHash)
      .simulate();
    expect(disasterInfo.title).toEqual(new Fr(789));
    expect(disasterInfo.metadata).toEqual(new Fr(101112));
    expect(disasterInfo.amount).toBe(2000000n);
    expect(disasterInfo.active).toBe(true);
  });
=======
    logger.info("Disaster created successfully");

    // Check initial donation count
    logger.info("Checking initial donation count");
    let donationCount = await contract.methods
      .get_donation_count(disasterHash)
      .simulate();
    logger.info(`Initial donation count: ${donationCount}`);
    expect(donationCount).toBe(0n);

    // Make donation using the donor's wallet
    const donor = randomWallets[0];
    logger.info(`Using donor wallet: ${donor.getAddress()}`);
    const contractWithDonor = contract.withWallet(donor);

    logger.info("Making donation");
    await contractWithDonor.methods
      .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    logger.info("Donation completed");

    // Check donation count increased
    logger.info("Checking donation count after donation");
    donationCount = await contract.methods
      .get_donation_count(disasterHash)
      .simulate();
    logger.info(`Final donation count: ${donationCount}`);
    expect(donationCount).toBe(1n);
    logger.info("Disaster creation and donation test completed successfully");
  });

  // it("Should fail when trying to donate twice", async () => {
  //   logger.info("Starting duplicate donation test");

  //   logger.info("Deploying GodsHand contract");
  //   const contract = await GodsHandContract.deploy(
  //     firstWallet,
  //     firstWallet.getAddress()
  //   )
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .deployed();
  //   logger.info(`Contract deployed at: ${contract.address}`);

  //   // Register contract with PXE for all wallets to use
  //   logger.info("Registering contract with PXE");
  //   await pxe.registerContract({
  //     instance: contract.instance,
  //     artifact: GodsHandContractArtifact,
  //   });

  //   logger.info("Simulating disaster creation");
  //   const disasterHash = await contract.methods
  //     .create_disaster(new Fr(123), new Fr(456), 1000000n)
  //     .simulate();
  //   logger.info(`Disaster hash: ${disasterHash}`);

  //   // Create disaster
  //   logger.info("Creating disaster");
  //   await contract.methods
  //     .create_disaster(new Fr(123), new Fr(456), 1000000n)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("Disaster created");

  //   const donor = randomWallets[0];
  //   logger.info(`Using donor wallet: ${donor.getAddress()}`);
  //   const contractWithDonor = contract.withWallet(donor);

  //   // First donation
  //   logger.info("Making first donation");
  //   await contractWithDonor.methods
  //     .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("First donation completed");

  //   logger.info("Checking donation count after first donation");
  //   const donationCount = await contract.methods
  //     .get_donation_count(disasterHash)
  //     .simulate();
  //   logger.info(`Donation count: ${donationCount}`);
  //   expect(donationCount).toBe(1n);

  //   // We try donating again, but our TX is dropped due to trying to emit duplicate nullifiers
  //   // first confirm that it fails simulation
  //   logger.info("Attempting second donation (should fail)");
  //   await expect(
  //     contractWithDonor.methods
  //       .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
  //       .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //       .wait()
  //   ).rejects.toThrow(/Existing nullifier/);
  //   logger.info("Second donation correctly failed with nullifier error");

  //   // if we skip simulation before submitting the tx,
  //   // tx will be included in a block but with app logic reverted
  //   logger.info(
  //     "Attempting second donation without simulation (should also fail)"
  //   );
  //   await expect(
  //     contractWithDonor.methods
  //       .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
  //       .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //       .wait()
  //   ).rejects.toThrow(/Existing nullifier/);
  //   logger.info("Second donation without simulation also correctly failed");
  //   logger.info("Duplicate donation test completed successfully");
  // });

  // it("Creates a disaster and accepts votes", async () => {
  //   logger.info("Starting disaster creation and voting test");

  //   logger.info("Deploying GodsHand contract");
  //   const contract = await GodsHandContract.deploy(
  //     firstWallet,
  //     firstWallet.getAddress()
  //   )
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .deployed();
  //   logger.info(`Contract deployed at: ${contract.address}`);

  //   // Register contract with PXE for all wallets to use
  //   logger.info("Registering contract with PXE");
  //   await pxe.registerContract({
  //     instance: contract.instance,
  //     artifact: GodsHandContractArtifact,
  //   });

  //   // Create disaster
  //   logger.info("Simulating disaster creation");
  //   const disasterHash = await contract.methods
  //     .create_disaster(new Fr(123), new Fr(456), 1000000n)
  //     .simulate();
  //   logger.info(`Disaster hash: ${disasterHash}`);

  //   logger.info("Creating disaster");
  //   await contract.methods
  //     .create_disaster(new Fr(123), new Fr(456), 1000000n)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("Disaster created");

  //   // Check initial vote count
  //   logger.info("Checking initial vote count");
  //   let voteCount = await contract.methods
  //     .get_vote_count(disasterHash)
  //     .simulate();
  //   logger.info(`Initial vote count: ${voteCount}`);
  //   expect(voteCount).toBe(0n);

  //   // Vote
  //   const voter = randomWallets[0];
  //   const org = randomAddresses[1];
  //   logger.info(`Voter: ${voter.getAddress()}, Organization: ${org}`);
  //   const contractWithVoter = contract.withWallet(voter);

  //   logger.info("Casting vote");
  //   await contractWithVoter.methods
  //     .vote(disasterHash, org, 1)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("Vote cast successfully");

  //   // Check vote count increased
  //   logger.info("Checking vote count after voting");
  //   voteCount = await contract.methods.get_vote_count(disasterHash).simulate();
  //   logger.info(`Final vote count: ${voteCount}`);
  //   expect(voteCount).toBe(1n);
  //   logger.info("Disaster creation and voting test completed successfully");
  // });

  // it("Should fail when trying to vote twice", async () => {
  //   logger.info("Starting duplicate voting test");

  //   logger.info("Deploying GodsHand contract");
  //   const contract = await GodsHandContract.deploy(
  //     firstWallet,
  //     firstWallet.getAddress()
  //   )
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .deployed();
  //   logger.info(`Contract deployed at: ${contract.address}`);

  //   // Register contract with PXE for all wallets to use
  //   logger.info("Registering contract with PXE");
  //   await pxe.registerContract({
  //     instance: contract.instance,
  //     artifact: GodsHandContractArtifact,
  //   });

  //   // Create disaster
  //   logger.info("Simulating disaster creation");
  //   const disasterHash = await contract.methods
  //     .create_disaster(new Fr(123), new Fr(456), 1000000n)
  //     .simulate();
  //   logger.info(`Disaster hash: ${disasterHash}`);

  //   logger.info("Creating disaster");
  //   await contract.methods
  //     .create_disaster(new Fr(123), new Fr(456), 1000000n)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("Disaster created");

  //   const voter = randomWallets[0];
  //   const org = randomAddresses[1];
  //   logger.info(`Voter: ${voter.getAddress()}, Organization: ${org}`);
  //   const contractWithVoter = contract.withWallet(voter);

  //   // First vote
  //   logger.info("Casting first vote");
  //   await contractWithVoter.methods
  //     .vote(disasterHash, org, 1)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("First vote cast successfully");

  //   logger.info("Checking vote count after first vote");
  //   const voteCount = await contract.methods
  //     .get_vote_count(disasterHash)
  //     .simulate();
  //   logger.info(`Vote count: ${voteCount}`);
  //   expect(voteCount).toBe(1n);

  //   // We try voting again, but our TX is dropped due to trying to emit duplicate nullifiers
  //   logger.info("Attempting second vote (should fail)");
  //   await expect(
  //     contractWithVoter.methods
  //       .vote(disasterHash, org, 2)
  //       .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //       .wait()
  //   ).rejects.toThrow(/Existing nullifier/);
  //   logger.info("Second vote correctly failed with nullifier error");
  //   logger.info("Duplicate voting test completed successfully");
  // });

  // it("Tests fund management workflow", async () => {
  //   logger.info("Starting fund management workflow test");

  //   logger.info("Deploying GodsHand contract");
  //   const contract = await GodsHandContract.deploy(
  //     firstWallet,
  //     firstWallet.getAddress()
  //   )
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .deployed();
  //   logger.info(`Contract deployed at: ${contract.address}`);

  //   // Register contract with PXE for all wallets to use
  //   logger.info("Registering contract with PXE");
  //   await pxe.registerContract({
  //     instance: contract.instance,
  //     artifact: GodsHandContractArtifact,
  //   });

  //   // Create disaster
  //   logger.info("Simulating disaster creation");
  //   const disasterHash = await contract.methods
  //     .create_disaster(new Fr(123), new Fr(456), 1000000n)
  //     .simulate();
  //   logger.info(`Disaster hash: ${disasterHash}`);

  //   logger.info("Creating disaster");
  //   await contract.methods
  //     .create_disaster(new Fr(123), new Fr(456), 1000000n)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("Disaster created");

  //   const org = randomAddresses[0];
  //   logger.info(`Organization address: ${org}`);

  //   // Check initial unlocked funds
  //   logger.info("Checking initial unlocked funds");
  //   let unlockedFunds = await contract.methods
  //     .get_unlocked_funds(disasterHash, org)
  //     .simulate();
  //   logger.info(`Initial unlocked funds: ${unlockedFunds}`);
  //   expect(unlockedFunds).toBe(0n);

  //   // Unlock funds (admin is agent by default)
  //   logger.info("Unlocking funds");
  //   await contract.methods
  //     .unlock_funds(disasterHash, org, 5000n)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("Funds unlocked");

  //   // Check unlocked funds
  //   logger.info("Checking unlocked funds after unlock");
  //   unlockedFunds = await contract.methods
  //     .get_unlocked_funds(disasterHash, org)
  //     .simulate();
  //   logger.info(`Unlocked funds after unlock: ${unlockedFunds}`);
  //   expect(unlockedFunds).toBe(5000n);

  //   // Claim funds
  //   const orgWallet = randomWallets[0]; // org wallet
  //   logger.info(`Organization wallet: ${orgWallet.getAddress()}`);
  //   const contractWithOrg = contract.withWallet(orgWallet);

  //   logger.info("Claiming funds");
  //   await contractWithOrg.methods
  //     .claim(disasterHash)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("Funds claimed");

  //   // Check funds were claimed
  //   logger.info("Checking unlocked funds after claim");
  //   unlockedFunds = await contract.methods
  //     .get_unlocked_funds(disasterHash, org)
  //     .simulate();
  //   logger.info(`Unlocked funds after claim: ${unlockedFunds}`);
  //   expect(unlockedFunds).toBe(0n);
  //   logger.info("Fund management workflow test completed successfully");
  // });

  // it("Tests agent management", async () => {
  //   logger.info("Starting agent management test");

  //   logger.info("Deploying GodsHand contract");
  //   const contract = await GodsHandContract.deploy(
  //     firstWallet,
  //     firstWallet.getAddress()
  //   )
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .deployed();
  //   logger.info(`Contract deployed at: ${contract.address}`);

  //   // Register contract with PXE for all wallets to use
  //   logger.info("Registering contract with PXE");
  //   await pxe.registerContract({
  //     instance: contract.instance,
  //     artifact: GodsHandContractArtifact,
  //   });

  //   const agent = randomAddresses[0];
  //   logger.info(`Agent address: ${agent}`);

  //   // Check agent is not authorized initially
  //   logger.info("Checking initial agent authorization");
  //   let isAgent = await contract.methods.is_agent(agent).simulate();
  //   logger.info(`Initial agent authorization: ${isAgent}`);
  //   expect(isAgent).toBe(false);

  //   // Add agent
  //   logger.info("Adding agent");
  //   await contract.methods
  //     .add_agent(agent)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("Agent added");

  //   // Check agent is now authorized
  //   logger.info("Checking agent authorization after adding");
  //   isAgent = await contract.methods.is_agent(agent).simulate();
  //   logger.info(`Agent authorization after adding: ${isAgent}`);
  //   expect(isAgent).toBe(true);

  //   // Agent should be able to create disaster
  //   const agentWallet = randomWallets[0];
  //   logger.info(`Agent wallet: ${agentWallet.getAddress()}`);
  //   const contractWithAgent = contract.withWallet(agentWallet);

  //   logger.info("Agent simulating disaster creation");
  //   const disasterHash = await contractWithAgent.methods
  //     .create_disaster(new Fr(789), new Fr(101112), 2000000n)
  //     .simulate();
  //   logger.info(`Disaster hash from agent simulation: ${disasterHash}`);

  //   logger.info("Agent creating disaster");
  //   await contractWithAgent.methods
  //     .create_disaster(new Fr(789), new Fr(101112), 2000000n)
  //     .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
  //     .wait();
  //   logger.info("Disaster created by agent");

  //   // Verify disaster was created
  //   logger.info("Verifying disaster information");
  //   const disasterInfo = await contract.methods
  //     .get_disaster_info(disasterHash)
  //     .simulate();
  //   logger.info(`Disaster title: ${disasterInfo.title}`);
  //   logger.info(`Disaster metadata: ${disasterInfo.metadata}`);
  //   logger.info(`Disaster amount: ${disasterInfo.amount}`);
  //   logger.info(`Disaster active: ${disasterInfo.active}`);

  //   expect(disasterInfo.title).toEqual(new Fr(789));
  //   expect(disasterInfo.metadata).toEqual(new Fr(101112));
  //   expect(disasterInfo.amount).toBe(2000000n);
  //   expect(disasterInfo.active).toBe(true);
  //   logger.info("Agent management test completed successfully");
  // });
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
});

// describe("Empty test", () => {
//   it("should pass", () => {
//     expect(true).toBe(true);
//   });
// });
