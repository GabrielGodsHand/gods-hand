const { ethers } = require("hardhat");

async function main() {
  // Get the signer
  const [deployer] = await ethers.getSigners();
  console.log(deployer);

  console.log("Deploying contracts with account:", deployer.address);
  console.log(
    "Account balance:",
    (await deployer.provider.getBalance(deployer.address)).toString()
  );

  // Get contract factory and connect to signer
  const ContractFactory = await ethers.getContractFactory("MockUSDC");
  const contract = await ContractFactory.connect(
    deployer
  ).deploy(/* constructor args */);

  await contract.waitForDeployment();

  console.log("Contract deployed to:", await contract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
