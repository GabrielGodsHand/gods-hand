import { EmbeddedWallet } from './embedded-wallet';

async function main() {
  const wallet = new EmbeddedWallet('https://full-node.alpha-testnet.aztec.network'); // adjust URL
  
  await wallet.initialize();
  
  // Connect to existing account or create new one
  const existingWallet = await wallet.connectExistingAccount();
  if (!existingWallet) {
    console.log('Creating new account...');
    await wallet.createAccountAndConnect();
  }
  
  console.log('Connected account:', wallet.getConnectedAccount()?.getAddress().toString());
}

main().catch(console.error);