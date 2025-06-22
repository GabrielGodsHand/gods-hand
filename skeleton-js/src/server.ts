import express, { Request, Response } from "express";
import { AztecApp } from "./index.js";

const app = express();
app.use(express.json());

let aztecApp: AztecApp;

// Initialize Aztec app on startup
async function initializeApp() {
  aztecApp = new AztecApp();
  await aztecApp.initialize();
  console.log("Aztec app initialized");
}

// Create disaster endpoint
app.post("/disaster", async (req: Request, res: Response) => {
  try {
    const { title, metadata, amount } = req.body;
    console.log(req.body);

    if (!title || !metadata || !amount) {
      return res
        .status(400)
        .json({ error: "Missing required fields: title, metadata, amount" });
    }
    const isSandbox = JSON.parse(process.env.IS_SANDBOX || "false");
    aztecApp.switchAccount(isSandbox ? "1" : "2");

    const result = await aztecApp.createDisaster(title, metadata, amount);
    res.json(result);
  } catch (error) {
    console.log(error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: errorMessage });
  }
});

// Unlock funds endpoint
app.post("/unlock-funds", async (req: Request, res: Response) => {
  try {
    const { disasterHash, organizationAddress, amount, accountId } = req.body;

    if (!disasterHash || !organizationAddress || !amount) {
      return res.status(400).json({
        error:
          "Missing required fields: disasterHash, organizationAddress, amount",
      });
    }

    if (accountId) {
      aztecApp.switchAccount(accountId);
    }

    const receipt = await aztecApp.unlockFunds(
      disasterHash,
      organizationAddress,
      amount
    );
    res.json({ receipt });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: errorMessage });
  }
});

// Additional useful endpoints
app.get("/accounts", (req: Request, res: Response) => {
  try {
    const accounts = aztecApp.listAccounts();
    res.json(accounts);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: errorMessage });
  }
});

app.post("/accounts/:accountId/switch", (req: Request, res: Response) => {
  try {
    const { accountId } = req.params;
    aztecApp.switchAccount(accountId);
    res.json({ message: `Switched to account ${accountId}` });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: errorMessage });
  }
});

const PORT = process.env.PORT || 3000;

initializeApp()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(console.error);
