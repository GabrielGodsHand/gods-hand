// src/deploy.mjs
import { getInitialTestAccountsWallets } from '@aztec/accounts/testing';
import { Contract, createPXEClient, loadContractArtifact, waitForPXE } from '@aztec/aztec.js';
import GodsHandContractJson from "../contracts/target/godshand-GodsHand.json" with { type: "json" };
import { writeFileSync } from 'fs';

const GodsHandContractArtifact = loadContractArtifact(GodsHandContractJson);

const { PXE_URL = 'http://localhost:8080' } = process.env;

async function main() {
  const pxe = createPXEClient(PXE_URL);
  await waitForPXE(pxe);

  const [ownerWallet] = await getInitialTestAccountsWallets(pxe);
  const ownerAddress = ownerWallet.getAddress();

  const token = await Contract.deploy(ownerWallet, GodsHandContractArtifact, [ownerAddress, 'GodsHandName', 'TKN', 18])
    .send()
    .deployed();

  console.log(`GodsHand deployed at ${token.address.toString()}`);

  const addresses = { token: token.address.toString() };
  writeFileSync('addresses.json', JSON.stringify(addresses, null, 2));
}

main().catch((err) => {
  console.error(`Error in deployment script: ${err}`);
  process.exit(1);
});