const { ethers, run } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Vault contract with account:", deployer.address);
  console.log(
    "Account balance:",
    (await deployer.provider.getBalance(deployer.address)).toString()
  );

  const usdcAddress = "0x7ba750053655041AF3b2Ed38fdac946447119D3a";

  const VaultFactory = await ethers.getContractFactory("Vault");
  const vault = await VaultFactory.connect(deployer).deploy(usdcAddress);

  await vault.waitForDeployment();

  const vaultAddress = await vault.getAddress();
  console.log("Vault contract deployed to:", vaultAddress);

  console.log("Waiting for 3 confirmations...");
  await vault.deploymentTransaction().wait(3);

  console.log("Verifying Vault contract...");
  try {
    await run("verify:verify", {
      address: vaultAddress,
      constructorArguments: [usdcAddress],
    });
    console.log("✅ Vault contract verified!");
  } catch (err) {
    console.error("❌ Verification failed:", err.message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
