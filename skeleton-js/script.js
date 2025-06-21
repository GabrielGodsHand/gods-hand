import { AztecApp } from "./src/index.js";

const app = new AztecApp();
await app.initialize();

// Create/connect accounts
await app.connectTestAccount("admin", 0);
await app.connectTestAccount("donor", 1);
await app.createAccount("org");

// Switch and operate
app.switchAccount("admin");
await app.createDisaster("Flood Relief", "Emergency response", 500000);

app.switchAccount("donor");
await app.donate("hash123", 10000, "1", "0xTokenAddress");
