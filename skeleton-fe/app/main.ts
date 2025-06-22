import './style.css';
import {
  AztecAddress,
  Fr,
  type Wallet,
  type AccountWallet,
} from '@aztec/aztec.js';
import { keccak256 } from '@aztec/foundation/crypto';
import { EmbeddedWallet } from './embedded-wallet';
import {
  GodsHandContract,
  GodsHandContractArtifact,
} from './artifacts/GodsHand';

// Helper function to convert text to field using BigInt
function textToField(text: string): Fr {
  const hash = keccak256(Buffer.from(text, 'utf8'));
  console.log(hash);
  const truncatedHash = hash.slice(0, 31);
  console.log(truncatedHash);
  return new Fr(BigInt('0x' + truncatedHash.toString('hex')));
}

// DOM Elements
const createAccountButton =
  document.querySelector<HTMLButtonElement>('#create-account')!;
const connectTestAccountButton = document.querySelector<HTMLButtonElement>(
  '#connect-test-account'
)!;
const createDisasterForm = document.querySelector<HTMLFormElement>(
  '#create-disaster-form'
)!;
const donateForm = document.querySelector<HTMLFormElement>('#donate-form')!;
const voteForm = document.querySelector<HTMLFormElement>('#vote-form')!;
const unlockForm = document.querySelector<HTMLFormElement>('#unlock-form')!;
const claimForm = document.querySelector<HTMLFormElement>('#claim-form')!;
const accountDisplay =
  document.querySelector<HTMLDivElement>('#account-display')!;
const statusMessage =
  document.querySelector<HTMLDivElement>('#status-message')!;
const testAccountNumber = document.querySelector<HTMLSelectElement>(
  '#test-account-number'
)!;

// Local variables
let wallet: EmbeddedWallet;
let contractAddress = process.env.CONTRACT_ADDRESS;
let deployerAddress = process.env.DEPLOYER_ADDRESS;
let deploymentSalt = process.env.DEPLOYMENT_SALT;
let nodeUrl = process.env.AZTEC_NODE_URL;

// On page load
document.addEventListener('DOMContentLoaded', async () => {
  try {
    if (!contractAddress) {
      throw new Error('Missing required environment variables');
    }

    displayStatusMessage('Connecting to node and initializing wallet...');
    wallet = new EmbeddedWallet(nodeUrl);
    await wallet.initialize();

    displayStatusMessage('Registering contracts...');
    await wallet.registerContract(
      GodsHandContractArtifact,
      AztecAddress.fromString(deployerAddress),
      Fr.fromString(deploymentSalt),
      [
        AztecAddress.fromString(
          '0x138dd3b661a4e603aae83e52dc80dd45d453d4a93647b4124bbcb14bde64b704'
        ),
        2,
      ]
    );

    displayStatusMessage('Checking for existing account...');
    const account = await wallet.connectExistingAccount();
    await displayAccount();

    if (account) {
      displayStatusMessage('Ready to interact with Gods Hand contract');
    } else {
      displayStatusMessage(
        'Create a new account to interact with the contract.'
      );
    }
  } catch (error) {
    console.error(error);
    displayError(
      error instanceof Error ? error.message : 'An unknown error occurred'
    );
  }
});

// Create a new account
createAccountButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const button = e.target as HTMLButtonElement;
  button.disabled = true;
  button.textContent = 'Creating account...';

  try {
    displayStatusMessage('Creating account...');
    const account = await wallet.createAccountAndConnect();
    displayAccount();
    displayStatusMessage('Account created successfully');
  } catch (error) {
    console.error(error);
    displayError(
      error instanceof Error ? error.message : 'An unknown error occurred'
    );
  } finally {
    button.disabled = false;
    button.textContent = 'Create Account';
  }
});

// Connect a test account
connectTestAccountButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const button = e.target as HTMLButtonElement;
  button.disabled = true;
  button.textContent = 'Connecting test account...';

  try {
    const index = Number(testAccountNumber.value) - 1;
    const testAccount = await wallet.connectTestAccount(index);
    displayAccount();
    displayStatusMessage('Test account connected successfully');
  } catch (error) {
    console.error(error);
    displayError(
      error instanceof Error ? error.message : 'An unknown error occurred'
    );
  } finally {
    button.disabled = false;
    button.textContent = 'Connect Test Account';
  }
});

// Create Disaster
createDisasterForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = (document.querySelector('#disaster-title') as HTMLInputElement)
    .value;
  const metadata = (
    document.querySelector('#disaster-metadata') as HTMLInputElement
  ).value;
  const amount = Number(
    (document.querySelector('#disaster-amount') as HTMLInputElement).value
  );

  const disasterHash = textToField(JSON.stringify({ title, metadata }));

  console.log(disasterHash);
  console.log(amount);

  await executeTransaction('create_disaster', [disasterHash, amount]);
});

// Donate
donateForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const hash = (document.querySelector('#donate-hash') as HTMLInputElement)
    .value;
  const amount = Number(
    (document.querySelector('#donate-amount') as HTMLInputElement).value
  );
  const chain = (document.querySelector('#donate-chain') as HTMLInputElement)
    .value;
  const token = (document.querySelector('#donate-token') as HTMLInputElement)
    .value;

  const chainField = new Fr(
    BigInt('0x' + Number(chain).toString(16).padStart(62, '0'))
  );
  const tokenField = new Fr(BigInt('0x' + token.slice(2).padStart(62, '0')));
  console.log(chainField);
  console.log(tokenField);

  await executeTransaction('donate', [
    Fr.fromHexString(hash),
    amount,
    chainField,
    tokenField,
  ]);
});

// Vote
voteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const hash = (document.querySelector('#vote-hash') as HTMLInputElement).value;
  const org = (document.querySelector('#vote-org') as HTMLInputElement).value;
  const voteType = Number(
    (document.querySelector('#vote-type') as HTMLSelectElement).value
  );

  await executeTransaction('vote', [
    Fr.fromString(hash),
    AztecAddress.fromString(org),
    voteType,
  ]);
});

// Unlock Funds
unlockForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const hash = (document.querySelector('#unlock-hash') as HTMLInputElement)
    .value;
  const org = (document.querySelector('#unlock-org') as HTMLInputElement).value;
  const amount = Number(
    (document.querySelector('#unlock-amount') as HTMLInputElement).value
  );

  await executeTransaction('unlock_funds', [
    Fr.fromString(hash),
    AztecAddress.fromString(org),
    amount,
  ]);
});

// Claim
claimForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const hash = (document.querySelector('#claim-hash') as HTMLInputElement)
    .value;

  await executeTransaction('claim', [Fr.fromString(hash)]);
});

// Generic transaction executor
async function executeTransaction(method: string, args: any[]) {
  const connectedAccount = wallet.getConnectedAccount();
  if (!connectedAccount) {
    displayError('No account connected');
    return;
  }

  displayStatusMessage(`Executing ${method}...`);

  try {
    const contract = await GodsHandContract.at(
      AztecAddress.fromString(contractAddress),
      connectedAccount
    );

    const interaction = (contract.methods as any)[method](...args);
    await wallet.sendTransaction(interaction);

    displayStatusMessage(`${method} completed successfully`);
  } catch (error) {
    console.error(error);
    displayError(error instanceof Error ? error.message : 'Transaction failed');
  }
}

// UI functions
function displayError(message: string) {
  statusMessage.textContent = message;
  statusMessage.classList.add('error');
  statusMessage.style.display = 'block';
}

function displayStatusMessage(message: string) {
  statusMessage.textContent = message;
  statusMessage.classList.remove('error');
  statusMessage.style.display = message ? 'block' : 'none';
}

function displayAccount() {
  const connectedAccount = wallet.getConnectedAccount();
  if (!connectedAccount) {
    createAccountButton.style.display = 'block';
    testAccountNumber.style.display = 'block';
    connectTestAccountButton.style.display = 'block';
    // Hide all forms
    createDisasterForm.style.display = 'none';
    donateForm.style.display = 'none';
    voteForm.style.display = 'none';
    unlockForm.style.display = 'none';
    claimForm.style.display = 'none';
    return;
  }

  const address = connectedAccount.getAddress().toString();
  const content = `Account: ${address.slice(0, 6)}...${address.slice(-4)}`;
  accountDisplay.textContent = content;
  createAccountButton.style.display = 'none';
  connectTestAccountButton.style.display = 'none';
  testAccountNumber.style.display = 'none';

  // Show all forms
  createDisasterForm.style.display = 'block';
  donateForm.style.display = 'block';
  voteForm.style.display = 'block';
  unlockForm.style.display = 'block';
  claimForm.style.display = 'block';
}
