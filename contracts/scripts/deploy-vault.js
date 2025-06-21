const { ethers } = require("hardhat");

async function main() {
  // Get the signer
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);
  console.log(
    "Account balance:",
    (await deployer.provider.getBalance(deployer.address)).toString()
  );

  // Get contract factory and connect to signer
  const ContractFactory = await ethers.getContractFactory("Vault");
  const contract = await ContractFactory.connect(deployer).deploy(
    "0x929080c91318E6E03FC91E8A16993df6F93e30D9"
  );

  await contract.waitForDeployment();

  console.log("Contract deployed to:", await contract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
