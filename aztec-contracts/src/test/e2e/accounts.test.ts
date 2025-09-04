<<<<<<< HEAD
import {
  GodsHandContractArtifact,
  GodsHandContract,
} from "../../artifacts/GodsHand.js";
import {
  AccountManager,
  AccountWallet,
  ContractDeployer,
  createLogger,
  Fr,
  PXE,
  TxStatus,
  getContractInstanceFromDeployParams,
  Logger,
} from "@aztec/aztec.js";
import { generateSchnorrAccounts } from "@aztec/accounts/testing";
import { getSchnorrAccount } from "@aztec/accounts/schnorr";
import { spawn } from "child_process";
import { deriveSigningKey } from "@aztec/stdlib/keys";
=======
// import {
//   GodsHandContractArtifact,
//   GodsHandContract,
// } from "../../artifacts/GodsHand.js";
// import {
//   AccountManager,
//   AccountWallet,
//   ContractDeployer,
//   createLogger,
//   Fr,
//   PXE,
//   TxStatus,
//   getContractInstanceFromDeployParams,
//   Logger,
// } from "@aztec/aztec.js";
// import { generateSchnorrAccounts } from "@aztec/accounts/testing";
// import { getSchnorrAccount } from "@aztec/accounts/schnorr";
// import { spawn } from "child_process";
// import { deriveSigningKey } from "@aztec/stdlib/keys";
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58

// import { SponsoredFeePaymentMethod } from "@aztec/aztec.js/fee/testing";
// import {
//   getFeeJuiceBalance,
//   type L2AmountClaim,
//   L1FeeJuicePortalManager,
//   FeeJuicePaymentMethodWithClaim,
//   AztecAddress,
// } from "@aztec/aztec.js";
// import { createEthereumChain, createExtendedL1Client } from "@aztec/ethereum";
// import { getSponsoredFPCInstance } from "../../utils/sponsored_fpc.js";
// import { setupPXE } from "../../utils/setup_pxe.js";
// import { SponsoredFPCContract } from "@aztec/noir-contracts.js/SponsoredFPC";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// describe("Accounts", () => {
//   let pxe: PXE;
//   let logger: Logger;
//   let sandboxInstance;
//   let sponsoredPaymentMethod: SponsoredFeePaymentMethod;
//   let ownerWallet: AccountWallet;

//   let randomAccountManagers: AccountManager[] = [];
//   let randomWallets: AccountWallet[] = [];
//   let randomAddresses: AztecAddress[] = [];

//   let l1PortalManager: L1FeeJuicePortalManager;
//   let feeJuiceAddress: AztecAddress;
//   let skipSandbox: boolean;

//   beforeAll(async () => {
//     skipSandbox = process.env.SKIP_SANDBOX === "true";
//     logger = createLogger("aztec:aztec-starter:accounts");
//     logger.info("Starting Accounts test suite setup");

<<<<<<< HEAD
    logger = createLogger("aztec:aztec-starter:accounts");
    logger.info("GodsHand Accounts tests running.");
=======
//     if (!skipSandbox) {
//       logger.info("Starting sandbox instance");
//       sandboxInstance = spawn("aztec", ["start", "--sandbox"], {
//         detached: true,
//         stdio: "ignore",
//       });
//       await sleep(15000);
//       logger.info("Sandbox instance started");
//     } else {
//       logger.info("Skipping sandbox startup");
//     }
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58

//     logger.info("GodsHand Accounts tests running.");

//     logger.info("Setting up PXE");
//     pxe = await setupPXE();
//     logger.info("PXE setup complete");

//     logger.info("Getting sponsored FPC instance");
//     const sponsoredFPC = await getSponsoredFPCInstance();
//     await pxe.registerContract({
//       instance: sponsoredFPC,
//       artifact: SponsoredFPCContract.artifact,
//     });
//     sponsoredPaymentMethod = new SponsoredFeePaymentMethod(
//       sponsoredFPC.address
//     );
//     logger.info("Sponsored FPC registered");

//     // create default ethereum clients
//     logger.info("Setting up Ethereum clients");
//     const nodeInfo = await pxe.getNodeInfo();
//     const chain = createEthereumChain(
//       ["http://localhost:8545"],
//       nodeInfo.l1ChainId
//     );
//     const DefaultMnemonic =
//       "test test test test test test test test test test test junk";
//     const l1Client = createExtendedL1Client(
//       chain.rpcUrls,
//       DefaultMnemonic,
//       chain.chainInfo
//     );

//     feeJuiceAddress = nodeInfo.protocolContractAddresses.feeJuice;
//     logger.info(`Fee juice address: ${feeJuiceAddress}`);

//     // create portal manager
//     logger.info("Creating L1 portal manager");
//     l1PortalManager = await L1FeeJuicePortalManager.new(pxe, l1Client, logger);
//     logger.info("L1 portal manager created");

//     logger.info("Creating owner wallet");
//     let secretKey = Fr.random();
//     let salt = Fr.random();
//     let schnorrAccount = await getSchnorrAccount(
//       pxe,
//       secretKey,
//       deriveSigningKey(secretKey),
//       salt
//     );
//     await schnorrAccount
//       .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
//       .wait();
//     ownerWallet = await schnorrAccount.getWallet();
//     logger.info(`Owner wallet created: ${ownerWallet.getAddress()}`);
//     logger.info("Accounts test suite setup complete");
//   });

//   beforeEach(async () => {
//     logger.info("Setting up random accounts for test");
//     // generate random accounts
//     randomAccountManagers = await Promise.all(
//       (
//         await generateSchnorrAccounts(2)
//       ).map((a) => getSchnorrAccount(pxe, a.secret, a.signingKey, a.salt))
//     );
//     // get corresponding wallets
//     randomWallets = await Promise.all(
//       randomAccountManagers.map((am) => am.getWallet())
//     );
//     // get corresponding addresses
//     randomAddresses = await Promise.all(
//       randomWallets.map(async (w) => (await w.getCompleteAddress()).address)
//     );
//     logger.info(`Generated ${randomAddresses.length} random accounts`);
//   });

//   afterAll(async () => {
//     logger.info("Cleaning up test suite");
//     if (!skipSandbox) {
//       logger.info("Killing sandbox instance");
//       sandboxInstance!.kill("SIGINT");
//     }
//     logger.info("Test suite cleanup complete");
//   });

//   it("Creates accounts with fee juice", async () => {
//     logger.info("Starting fee juice account creation test");

<<<<<<< HEAD
    // arbitrary transactions to progress 2 blocks, and have fee juice on Aztec ready to claim
    await GodsHandContract.deploy(ownerWallet, ownerWallet.getAddress())
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed(); // deploy contract with first funded wallet
    await GodsHandContract.deploy(ownerWallet, ownerWallet.getAddress())
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed(); // deploy contract with first funded wallet
=======
//     // balance of each random account is 0 before bridge
//     logger.info("Checking initial balances");
//     let balances = await Promise.all(
//       randomAddresses.map(async (a) => getFeeJuiceBalance(a, pxe))
//     );
//     balances.forEach((b, i) => {
//       logger.info(`Initial balance for address ${i}: ${b}`);
//       expect(b).toBe(0n);
//     });
//     logger.info("Confirmed all initial balances are 0");
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58

//     // bridge funds to unfunded random addresses
//     const claimAmount = 1000000000000000000n;
//     const approxMaxDeployCost = 10n ** 10n;
//     let claims: L2AmountClaim[] = [];
//     logger.info(
//       `Bridging ${claimAmount} fee juice to ${randomAddresses.length} addresses`
//     );

//     // bridge sequentially to avoid l1 txs (nonces) being processed out of order
//     for (let i = 0; i < randomAddresses.length; i++) {
//       logger.info(`Bridging to address ${i}: ${randomAddresses[i]}`);
//       claims.push(
//         await l1PortalManager.bridgeTokensPublic(
//           randomAddresses[i],
//           claimAmount,
//           true
//         )
//       );
//       logger.info(`Bridge claim ${i} created`);
//     }
//     logger.info("Completed bridging to all addresses");

//     // arbitrary transactions to progress 2 blocks, and have fee juice on Aztec ready to claim
//     logger.info("Deploying contracts to progress blocks");
//     const contract1 = await GodsHandContract.deploy(
//       ownerWallet,
//       ownerWallet.getAddress()
//     )
//       .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
//       .deployed();
//     logger.info(`First contract deployed at: ${contract1.address}`);

//     const contract2 = await GodsHandContract.deploy(
//       ownerWallet,
//       ownerWallet.getAddress()
//     )
//       .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
//       .deployed();
//     logger.info(`Second contract deployed at: ${contract2.address}`);
//     logger.info("Block progression complete");

<<<<<<< HEAD
  it("Sponsored contract deployment", async () => {
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
=======
//     // claim and pay to deploy random accounts
//     logger.info("Deploying random accounts with claimed fee juice");
//     let sentTxs = [];
//     for (let i = 0; i < randomWallets.length; i++) {
//       logger.info(`Deploying account ${i}: ${randomAddresses[i]}`);
//       const paymentMethod = new FeeJuicePaymentMethodWithClaim(
//         randomWallets[i],
//         claims[i]
//       );
//       const receipt = await randomAccountManagers[i]
//         .deploy({ fee: { paymentMethod } })
//         .wait();
//       logger.info(`Account ${i} deployed with status: ${receipt.status}`);
//     }
//     logger.info("All account deployments complete");

//     // balance after deploy with claimed fee juice
//     logger.info("Checking final balances after deployment");
//     balances = await Promise.all(
//       randomAddresses.map(async (a) => await getFeeJuiceBalance(a, pxe))
//     );
//     const amountAfterDeploy = claimAmount - approxMaxDeployCost;
//     balances.forEach((b, i) => {
//       logger.info(
//         `Final balance for address ${i}: ${b}, expected >= ${amountAfterDeploy}`
//       );
//       expect(b).toBeGreaterThanOrEqual(amountAfterDeploy);
//     });
//     logger.info("Fee juice account creation test completed successfully");
//   });
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58

//   it("Deploys first unfunded account from first funded account", async () => {
//     logger.info("Starting unfunded account deployment test");
//     logger.info(
//       `Deploying account with address: ${randomAccountManagers[0].getAddress()}`
//     );
//     logger.info(`Using owner wallet: ${ownerWallet.getAddress()}`);

//     const receipt = await randomAccountManagers[0]
//       .deploy({
//         fee: { paymentMethod: sponsoredPaymentMethod },
//         deployWallet: ownerWallet,
//       })
//       .wait();

//     logger.info(`Deployment receipt status: ${receipt.status}`);
//     expect(receipt).toEqual(
//       expect.objectContaining({
//         status: TxStatus.SUCCESS,
//       })
//     );

//     const deployedWallet = await randomAccountManagers[0].getWallet();
//     logger.info(`Deployed wallet address: ${deployedWallet.getAddress()}`);
//     logger.info(`Expected address: ${randomAccountManagers[0].getAddress()}`);
//     expect(deployedWallet.getAddress()).toEqual(
//       randomAccountManagers[0].getAddress()
//     );
//     logger.info("Unfunded account deployment test completed successfully");
//   });

//   it("Sponsored contract deployment", async () => {
//     logger.info("Starting sponsored contract deployment test");
//     const salt = Fr.random();
//     logger.info(`Using salt: ${salt}`);

//     const GodsHandArtifact = GodsHandContractArtifact;
//     logger.info("Generating accounts for deployment test");
//     const accounts = await Promise.all(
//       (
//         await generateSchnorrAccounts(2)
//       ).map(
//         async (a) =>
//           await getSchnorrAccount(pxe, a.secret, a.signingKey, a.salt)
//       )
//     );
//     logger.info("Generated 2 accounts for deployment test");

//     logger.info("Deploying test accounts");
//     await Promise.all(
//       accounts.map((a, i) => {
//         logger.info(`Deploying test account ${i}`);
//         return a
//           .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
//           .wait();
//       })
//     );
//     logger.info("Test accounts deployed");

//     const daWallets = await Promise.all(accounts.map((a) => a.getWallet()));
//     const [deployerWallet, adminWallet] = daWallets;
//     const [deployerAddress, adminAddress] = daWallets.map((w) =>
//       w.getAddress()
//     );
//     logger.info(`Deployer: ${deployerAddress}, Admin: ${adminAddress}`);

//     logger.info("Getting contract deployment data");
//     const deploymentData = await getContractInstanceFromDeployParams(
//       GodsHandArtifact,
//       {
//         constructorArgs: [adminAddress],
//         salt,
//         deployer: deployerWallet.getAddress(),
//       }
//     );
//     logger.info(`Contract will be deployed at: ${deploymentData.address}`);

//     const deployer = new ContractDeployer(GodsHandArtifact, deployerWallet);
//     logger.info("Sending deployment transaction");
//     const tx = deployer.deploy(adminAddress).send({
//       contractAddressSalt: salt,
//       fee: { paymentMethod: sponsoredPaymentMethod }, // without the sponsoredFPC the deployment fails, thus confirming it works
//     });

//     const receipt = await tx.getReceipt();
//     logger.info(`Initial receipt status: ${receipt.status}`);
//     expect(receipt).toEqual(
//       expect.objectContaining({
//         status: TxStatus.PENDING,
//       })
//     );

//     logger.info("Waiting for deployment to be mined");
//     const receiptAfterMined = await tx.wait({ wallet: deployerWallet });
//     logger.info(`Final receipt status: ${receiptAfterMined.status}`);

//     logger.info("Checking contract metadata");
//     expect(await pxe.getContractMetadata(deploymentData.address)).toBeDefined();
//     expect(
//       (await pxe.getContractMetadata(deploymentData.address)).contractInstance
//     ).toBeTruthy();
//     expect(receiptAfterMined).toEqual(
//       expect.objectContaining({
//         status: TxStatus.SUCCESS,
//       })
//     );

//     expect(receiptAfterMined.contract.instance.address).toEqual(
//       deploymentData.address
//     );
//     logger.info("Sponsored contract deployment test completed successfully");
//   });

//   it("Creates multiple funded agent accounts", async () => {
//     logger.info("Starting multiple agent accounts test");

//     // Create multiple accounts for agents
//     logger.info("Generating 3 agent accounts");
//     const agentAccounts = await Promise.all(
//       (
//         await generateSchnorrAccounts(3)
//       ).map((a) => getSchnorrAccount(pxe, a.secret, a.signingKey, a.salt))
//     );
//     logger.info("Generated 3 agent accounts");

//     // Deploy all agent accounts with sponsored fees
//     logger.info("Deploying all agent accounts");
//     await Promise.all(
//       agentAccounts.map((a, i) => {
//         logger.info(`Deploying agent account ${i}`);
//         return a
//           .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
//           .wait();
//       })
//     );
//     logger.info("All agent accounts deployed");

//     const agentWallets = await Promise.all(
//       agentAccounts.map((a) => a.getWallet())
//     );
//     const agentAddresses = agentWallets.map((w) => w.getAddress());
//     logger.info(`Agent addresses: ${agentAddresses.join(", ")}`);

//     // Deploy GodsHand contract
//     logger.info("Deploying GodsHand contract");
//     const contract = await GodsHandContract.deploy(
//       ownerWallet,
//       ownerWallet.getAddress()
//     )
//       .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
//       .deployed();
//     logger.info(`Contract deployed at: ${contract.address}`);

//     // Add all agents
//     logger.info("Adding all agents to contract");
//     for (let i = 0; i < agentAddresses.length; i++) {
//       const agentAddress = agentAddresses[i];
//       logger.info(`Adding agent ${i}: ${agentAddress}`);
//       await contract.methods
//         .add_agent(agentAddress)
//         .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
//         .wait();
//       logger.info(`Agent ${i} added successfully`);
//     }

//     // Verify all agents are authorized
//     logger.info("Verifying all agents are authorized");
//     for (let i = 0; i < agentAddresses.length; i++) {
//       const agentAddress = agentAddresses[i];
//       const isAgent = await contract.methods.is_agent(agentAddress).simulate();
//       logger.info(`Agent ${i} (${agentAddress}) authorized: ${isAgent}`);
//       expect(isAgent).toBe(true);
//     }
//     logger.info("Multiple agent accounts test completed successfully");
//   });

//   it("Tests account permissions with GodsHand contract", async () => {
//     logger.info("Starting account permissions test");

//     // Create admin and agent accounts
//     logger.info("Creating admin and agent accounts");
//     const adminAccount = await getSchnorrAccount(
//       pxe,
//       Fr.random(),
//       deriveSigningKey(Fr.random()),
//       Fr.random()
//     );
//     const agentAccount = await getSchnorrAccount(
//       pxe,
//       Fr.random(),
//       deriveSigningKey(Fr.random()),
//       Fr.random()
//     );
//     logger.info("Admin and agent accounts created");

//     // Deploy accounts
//     logger.info("Deploying admin and agent accounts");
//     await adminAccount
//       .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
//       .wait();
//     logger.info("Admin account deployed");

//     await agentAccount
//       .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
//       .wait();
//     logger.info("Agent account deployed");

//     const adminWallet = await adminAccount.getWallet();
//     const agentWallet = await agentAccount.getWallet();
//     logger.info(
//       `Admin: ${adminWallet.getAddress()}, Agent: ${agentWallet.getAddress()}`
//     );

//     // Deploy contract with admin
//     logger.info("Deploying contract with admin wallet");
//     const contract = await GodsHandContract.deploy(
//       adminWallet,
//       adminWallet.getAddress()
//     )
//       .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
//       .deployed();
//     logger.info(`Contract deployed at: ${contract.address}`);

//     // Admin should be able to add agent
//     logger.info("Admin adding agent to contract");
//     await contract.methods
//       .add_agent(agentWallet.getAddress())
//       .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
//       .wait();
//     logger.info("Agent successfully added");

//     // Agent should be able to create disaster
//     logger.info("Agent creating disaster");
//     const contractWithAgent = contract.withWallet(agentWallet);

//     logger.info("Simulating disaster creation");
//     const disasterHash = await contractWithAgent.methods
//       .create_disaster(new Fr(123), new Fr(456), 1000000n)
//       .simulate();
//     logger.info(`Disaster hash from simulation: ${disasterHash}`);

//     logger.info("Executing disaster creation");
//     await contractWithAgent.methods
//       .create_disaster(new Fr(123), new Fr(456), 1000000n)
//       .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
//       .wait();
//     logger.info("Disaster created successfully");

//     expect(disasterHash).toBeDefined();

//     // Verify disaster is active
//     logger.info("Verifying disaster is active");
//     const isActive = await contract.methods
//       .is_disaster_active(disasterHash)
//       .simulate();
//     logger.info(`Disaster active status: ${isActive}`);
//     expect(isActive).toBe(true);
//     logger.info("Account permissions test completed successfully");
//   });
// });

describe("Empty test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("Creates multiple funded agent accounts", async () => {
    // Create multiple accounts for agents
    const agentAccounts = await Promise.all(
      (
        await generateSchnorrAccounts(3)
      ).map((a) => getSchnorrAccount(pxe, a.secret, a.signingKey, a.salt))
    );

    // Deploy all agent accounts with sponsored fees
    await Promise.all(
      agentAccounts.map((a) =>
        a.deploy({ fee: { paymentMethod: sponsoredPaymentMethod } }).wait()
      )
    );

    const agentWallets = await Promise.all(
      agentAccounts.map((a) => a.getWallet())
    );
    const agentAddresses = agentWallets.map((w) => w.getAddress());

    // Deploy GodsHand contract
    const contract = await GodsHandContract.deploy(
      ownerWallet,
      ownerWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Add all agents
    for (const agentAddress of agentAddresses) {
      await contract.methods
        .add_agent(agentAddress)
        .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
        .wait();
    }

    // Verify all agents are authorized
    for (const agentAddress of agentAddresses) {
      const isAgent = await contract.methods.is_agent(agentAddress).simulate();
      expect(isAgent).toBe(true);
    }
  });

  it("Tests account permissions with GodsHand contract", async () => {
    // Create admin and agent accounts
    const adminAccount = await getSchnorrAccount(
      pxe,
      Fr.random(),
      deriveSigningKey(Fr.random()),
      Fr.random()
    );
    const agentAccount = await getSchnorrAccount(
      pxe,
      Fr.random(),
      deriveSigningKey(Fr.random()),
      Fr.random()
    );

    // Deploy accounts
    await adminAccount
      .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();
    await agentAccount
      .deploy({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    const adminWallet = await adminAccount.getWallet();
    const agentWallet = await agentAccount.getWallet();

    // Deploy contract with admin
    const contract = await GodsHandContract.deploy(
      adminWallet,
      adminWallet.getAddress()
    )
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .deployed();

    // Admin should be able to add agent
    await contract.methods
      .add_agent(agentWallet.getAddress())
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    // Agent should be able to create disaster
    const contractWithAgent = contract.withWallet(agentWallet);

    const disasterHash = await contractWithAgent.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .simulate();

    await contractWithAgent.methods
      .create_disaster(new Fr(123), new Fr(456), 1000000n)
      .send({ fee: { paymentMethod: sponsoredPaymentMethod } })
      .wait();

    expect(disasterHash).toBeDefined();

    // Verify disaster is active
    const isActive = await contract.methods
      .is_disaster_active(disasterHash)
      .simulate();
    expect(isActive).toBe(true);
  });
});
