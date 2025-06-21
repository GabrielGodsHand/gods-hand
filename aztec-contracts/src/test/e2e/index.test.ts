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
    if (!skipSandbox) {
      sandboxInstance = spawn("aztec", ["start", "--sandbox"], {
        detached: true,
        stdio: "ignore",
      });
      await sleep(15000);
    }

    logger = createLogger("aztec:aztec-starter:voting");
    console.log("Aztec-Starter tests running.");

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

    // Set up a wallet
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
  });

  afterAll(async () => {
    if (!skipSandbox) {
      sandboxInstance!.kill("SIGINT");
    }
  });

  it("Deploys the contract", async () => {
    console.log("Starting contract deployment test");
    const salt = Fr.random();
    console.log(`Using deployment salt: ${salt}`);

    const GodsHandArtifact = GodsHandContractArtifact;
    console.log("Generating deployer and admin accounts");
    const accounts = await Promise.all(
      (
        await generateSchnorrAccounts(2)
      ).map(
        async (a) =>
          await getSchnorrAccount(pxe, a.secret, a.signingKey, a.salt)
      )
    );
    console.log("Generated deployer and admin accounts");

    console.log("Deploying accounts");
    await Promise.all(
      accounts.map((a, i) => {
        console.log(`Deploying account ${i}`);
        return a
          .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
          .wait();
      })
    );
    console.log("Accounts deployed");

    const daWallets = await Promise.all(accounts.map((a) => a.getWallet()));
    const [deployerWallet, adminWallet] = daWallets;
    const [deployerAddress, adminAddress] = daWallets.map((w) =>
      w.getAddress()
    );
    console.log(`Deployer: ${deployerAddress}, Admin: ${adminAddress}`);

    console.log("Getting deployment parameters");
    const deploymentData = await getContractInstanceFromDeployParams(
      GodsHandArtifact,
      {
        constructorArgs: [adminAddress],
        salt,
        deployer: deployerWallet.getAddress(),
      }
    );
    console.log(`Target deployment address: ${deploymentData.address}`);

    const deployer = new ContractDeployer(GodsHandArtifact, deployerWallet);
    console.log("Sending deployment transaction");
    const tx = deployer.deploy(adminAddress).send({
      contractAddressSalt: salt,
      fee: { paymentMethod: sponsoredPaymentMethod }, // without the sponsoredFPC the deployment fails, thus confirming it works
    });

    const receipt = await tx.getReceipt();
    console.log(`Deployment receipt status: ${receipt.status}`);

    expect(receipt).toEqual(
      expect.objectContaining({
        status: TxStatus.PENDING,
        error: "",
      })
    );

    console.log("Waiting for deployment to be mined");
    const receiptAfterMined = await tx.wait({ wallet: deployerWallet });
    console.log(`Final deployment status: ${receiptAfterMined.status}`);

    console.log("Checking contract metadata");
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
    console.log("Contract deployment test completed successfully");
  });

  it("Creates a disaster and accepts donations", async () => {
    console.log("Starting disaster creation and donation test");

    console.log("Deploying GodsHand contract");
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();
    console.log(`Contract deployed at: ${contract.address}`);

    // Create disaster (admin is agent by default)
    console.log("Simulating disaster creation");
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();
    console.log(`Disaster hash from simulation: ${disasterHash}`);

    console.log("Creating disaster");
    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Disaster created successfully");

    // Check initial donation count
    console.log("Checking initial donation count");
    let donationCount = await contract.methods
      .get_donation_count(disasterHash)
      .simulate();
    console.log(`Initial donation count: ${donationCount}`);
    expect(donationCount).toBe(0n);

    // Make donation using the donor's wallet
    // const donor = randomWallets[0];
    console.log(`Using donor wallet: ${firstWallet.getAddress()}`);
    const contractWithDonor = contract.withWallet(firstWallet);

    console.log("Making donation");
    await contractWithDonor.methods
      .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Donation completed");

    // Check donation count increased
    console.log("Checking donation count after donation");
    donationCount = await contract.methods
      .get_donation_count(disasterHash)
      .simulate();
    console.log(`Final donation count: ${donationCount}`);
    expect(donationCount).toBe(1n);
    console.log("Disaster creation and donation test completed successfully");
  });

  it("Should fail when trying to donate twice", async () => {
    console.log("Starting duplicate donation test");

    console.log("Deploying GodsHand contract");
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();
    console.log(`Contract deployed at: ${contract.address}`);

    // Register contract with PXE for all wallets to use
    console.log("Registering contract with PXE");
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    console.log("Simulating disaster creation");
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();
    console.log(`Disaster hash: ${disasterHash}`);

    // Create disaster
    console.log("Creating disaster");
    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Disaster created");

    // const donor = randomWallets[0];
    console.log(`Using donor wallet: ${firstWallet.getAddress()}`);
    const contractWithDonor = contract.withWallet(firstWallet);

    // First donation
    console.log("Making first donation");
    await contractWithDonor.methods
      .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("First donation completed");

    console.log("Checking donation count after first donation");
    const donationCount = await contract.methods
      .get_donation_count(disasterHash)
      .simulate();
    console.log(`Donation count: ${donationCount}`);
    expect(donationCount).toBe(1n);

    // We try donating again, but our TX is dropped due to trying to emit duplicate nullifiers
    // first confirm that it fails simulation
    console.log("Attempting second donation (should fail)");
    await expect(
      contractWithDonor.methods
        .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
        .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
        .wait()
    ).rejects.toThrow(/Existing nullifier/);
    console.log("Second donation correctly failed with nullifier error");

    // if we skip simulation before submitting the tx,
    // tx will be included in a block but with app logic reverted
    console.log(
      "Attempting second donation without simulation (should also fail)"
    );
    await expect(
      contractWithDonor.methods
        .donate(disasterHash, 100n, new Fr(1), new Fr(0x123))
        .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
        .wait()
    ).rejects.toThrow(/Existing nullifier/);
    console.log("Second donation without simulation also correctly failed");
    console.log("Duplicate donation test completed successfully");
  });

  it("Creates a disaster and accepts votes", async () => {
    console.log("Starting disaster creation and voting test");

    console.log("Deploying GodsHand contract");
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();
    console.log(`Contract deployed at: ${contract.address}`);

    // Register contract with PXE for all wallets to use
    console.log("Registering contract with PXE");
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    // Create disaster
    console.log("Simulating disaster creation");
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();
    console.log(`Disaster hash: ${disasterHash}`);

    console.log("Creating disaster");
    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Disaster created");

    // Check initial vote count
    console.log("Checking initial vote count");
    let voteCount = await contract.methods
      .get_vote_count(disasterHash)
      .simulate();
    console.log(`Initial vote count: ${voteCount}`);
    expect(voteCount).toBe(0n);

    // Vote
    // const voter = randomWallets[0];
    // const org = randomAddresses[1];
    console.log(
      `Voter: ${firstWallet.getAddress()}, Organization: ${firstWallet.getAddress()}`
    );
    const contractWithVoter = contract.withWallet(firstWallet);

    console.log("Casting vote");
    await contractWithVoter.methods
      .vote(disasterHash, firstWallet.getAddress(), 1)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Vote cast successfully");

    // Check vote count increased
    console.log("Checking vote count after voting");
    voteCount = await contract.methods.get_vote_count(disasterHash).simulate();
    console.log(`Final vote count: ${voteCount}`);
    expect(voteCount).toBe(1n);
    console.log("Disaster creation and voting test completed successfully");
  });

  it("Should fail when trying to vote twice", async () => {
    console.log("Starting duplicate voting test");

    console.log("Deploying GodsHand contract");
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();
    console.log(`Contract deployed at: ${contract.address}`);

    // Register contract with PXE for all wallets to use
    console.log("Registering contract with PXE");
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    // Create disaster
    console.log("Simulating disaster creation");
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();
    console.log(`Disaster hash: ${disasterHash}`);

    console.log("Creating disaster");
    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Disaster created");

    // const voter = randomWallets[0];
    // const org = randomAddresses[1];
    console.log(
      `Voter: ${firstWallet.getAddress()}, Organization: ${firstWallet.getAddress()}`
    );
    const contractWithVoter = contract.withWallet(firstWallet);

    // First vote
    console.log("Casting first vote");
    await contractWithVoter.methods
      .vote(disasterHash, firstWallet.getAddress(), 1)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("First vote cast successfully");

    console.log("Checking vote count after first vote");
    const voteCount = await contract.methods
      .get_vote_count(disasterHash)
      .simulate();
    console.log(`Vote count: ${voteCount}`);
    expect(voteCount).toBe(1n);

    // We try voting again, but our TX is dropped due to trying to emit duplicate nullifiers
    console.log("Attempting second vote (should fail)");
    await expect(
      contractWithVoter.methods
        .vote(disasterHash, firstWallet.getAddress(), 2)
        .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
        .wait()
    ).rejects.toThrow(/Existing nullifier/);
    console.log("Second vote correctly failed with nullifier error");
    console.log("Duplicate voting test completed successfully");
  });

  it("Tests fund management workflow", async () => {
    console.log("Starting fund management workflow test");

    console.log("Deploying GodsHand contract");
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();
    console.log(`Contract deployed at: ${contract.address}`);

    // Register contract with PXE for all wallets to use
    console.log("Registering contract with PXE");
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    // Create disaster
    console.log("Simulating disaster creation");
    const disasterHash = await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();
    console.log(`Disaster hash: ${disasterHash}`);

    const contractWithAdmin = contract.withWallet(firstWallet);

    console.log("Creating disaster");
    await contractWithAdmin.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Disaster created");

    const org = randomAddresses[0];
    console.log(`Organization address: ${org}`);

    // Check initial unlocked funds
    console.log("Checking initial unlocked funds");
    let unlockedFunds = await contractWithAdmin.methods
      .get_unlocked_funds(disasterHash, org)
      .simulate();
    console.log(`Initial unlocked funds: ${unlockedFunds}`);
    expect(unlockedFunds).toBe(0n);

    // Unlock funds (admin is agent by default)
    console.log("Unlocking funds");
    await contractWithAdmin.methods
      .unlock_funds(disasterHash, org, 5000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Funds unlocked");

    // Check unlocked funds
    console.log("Checking unlocked funds after unlock");
    unlockedFunds = await contractWithAdmin.methods
      .get_unlocked_funds(disasterHash, org)
      .simulate();
    console.log(`Unlocked funds after unlock: ${unlockedFunds}`);
    expect(unlockedFunds).toBe(5000n);

    // Claim funds
    // const orgWallet = randomWallets[0]; // org wallet
    console.log(`Organization wallet: ${firstWallet.getAddress()}`);
    const contractWithOrg = contract.withWallet(firstWallet);

    console.log("Claiming funds");
    await contractWithOrg.methods
      .claim(disasterHash)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Funds claimed");

    // Check funds were claimed
    console.log("Checking unlocked funds after claim");
    unlockedFunds = await contract.methods
      .get_unlocked_funds(disasterHash, org)
      .simulate();
    console.log(`Unlocked funds after claim: ${unlockedFunds}`);
    expect(unlockedFunds).toBe(0n);
    console.log("Fund management workflow test completed successfully");
  });

  it("Tests agent management", async () => {
    console.log("Starting agent management test");

    console.log("Deploying GodsHand contract");
    const contract = await GodsHandContract.deploy(
      firstWallet,
      firstWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();
    console.log(`Contract deployed at: ${contract.address}`);

    // Register contract with PXE for all wallets to use
    console.log("Registering contract with PXE");
    await pxe.registerContract({
      instance: contract.instance,
      artifact: GodsHandContractArtifact,
    });

    const agent = randomAddresses[0];
    console.log(`Agent address: ${agent}`);

    // Check agent is not authorized initially
    console.log("Checking initial agent authorization");
    let isAgent = await contract.methods.is_agent(agent).simulate();
    console.log(`Initial agent authorization: ${isAgent}`);
    expect(isAgent).toBe(false);

    // Add agent
    console.log("Adding agent");
    await contract.methods
      .add_agent(agent)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Agent added");

    // Check agent is now authorized
    console.log("Checking agent authorization after adding");
    isAgent = await contract.methods.is_agent(agent).simulate();
    console.log(`Agent authorization after adding: ${isAgent}`);
    expect(isAgent).toBe(true);

    // Agent should be able to create disaster
    // const agentWallet = randomWallets[0];
    console.log(`Agent wallet: ${firstWallet.getAddress()}`);
    const contractWithAgent = contract.withWallet(firstWallet);

    console.log("Agent simulating disaster creation");
    const disasterHash = await contractWithAgent.methods
      .create_disaster(new Fr(789), new Fr(101112), 2000000n)
      .simulate();
    console.log(`Disaster hash from agent simulation: ${disasterHash}`);

    console.log("Agent creating disaster");
    await contractWithAgent.methods
      .create_disaster(new Fr(789), new Fr(101112), 2000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    console.log("Disaster created by agent");

    // Verify disaster was created
    console.log("Verifying disaster information");
    const disasterInfo = await contract.methods
      .get_disaster_info(disasterHash)
      .simulate();
    console.log(`Disaster title: ${disasterInfo.title}`);
    console.log(`Disaster metadata: ${disasterInfo.metadata}`);
    console.log(`Disaster amount: ${disasterInfo.amount}`);
    console.log(`Disaster active: ${disasterInfo.active}`);

    expect(disasterInfo.title).toEqual(789n);
    expect(disasterInfo.metadata).toEqual(101112n);
    expect(disasterInfo.amount).toBe(2000000n);
    expect(disasterInfo.active).toBe(true);
    console.log("Agent management test completed successfully");
  });
});

// describe("Empty test", () => {
//   it("should pass", () => {
//     expect(true).toBe(true);
//   });
// });
