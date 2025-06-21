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

    logger = createLogger("aztec:aztec-starter:gods-hand");
    logger.info("GodsHand tests running.");

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
    });
    const receipt = await tx.getReceipt();

    expect(receipt).toEqual(
      expect.objectContaining({
        status: TxStatus.PENDING,
        error: "",
      })
    );

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

    await contract.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

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
});
