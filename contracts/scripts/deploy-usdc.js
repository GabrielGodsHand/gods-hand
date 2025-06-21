const { ethers, run } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);
  console.log(
    "Account balance:",
    (await deployer.provider.getBalance(deployer.address)).toString()
  );

  const ContractFactory = await ethers.getContractFactory("MockUSDC");
  const contract = await ContractFactory.connect(
    deployer
  ).deploy(/* constructor args */);

  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log("Contract deployed to:", address);

  // Optional: wait a few blocks to ensure Blockscout indexed it
  console.log("Waiting for 3 confirmations...");
  await contract.deploymentTransaction().wait(3);

  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address,
      constructorArguments: [], // Add constructor args here if any
    });
    console.log("✅ Contract verified!");
  } catch (err) {
    console.error("❌ Verification failed:", err.message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
