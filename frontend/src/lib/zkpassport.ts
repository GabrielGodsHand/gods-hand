import { QueryResult, QueryResultErrors, ZKPassport } from "@zkpassport/sdk";

export class ZKPassportService {
  private zkPassport: ZKPassport;

  constructor() {
    // Use window.location.hostname if available, fallback to localhost
    const domain =
      typeof window !== "undefined" ? window.location.hostname : "localhost";
    this.zkPassport = new ZKPassport(domain);
  }

  async verifyAgeForVoting(): Promise<{
    url: string;
    onRequestReceived: (callback: () => void) => void;
    onGeneratingProof: (callback: () => void) => void;
    onProofGenerated: (callback: (proof: any) => void) => void;
    onResult: (
      callback: (data: {
        uniqueIdentifier: string | undefined;
        verified: boolean;
        result: QueryResult;
        queryResultErrors?: QueryResultErrors;
      }) => void
    ) => void;
    onReject: (callback: () => void) => void;
    onError: (callback: (error: unknown) => void) => void;
  }> {
    try {
      const queryBuilder = await this.zkPassport.request({
        name: "Gods Hand Voting",
        logo: "https://gods-hand.vercel.app/assets/hand.png",
        purpose: "Prove you are 18+ years old to vote on funding claims",
        scope: "adult",
        mode: "fast",
        devMode: true,
      });

      return queryBuilder.gte("age", 18).done();
    } catch (error) {
      console.error("ZKPassport verification error:", error);
      throw error;
    }
  }
}

export const zkPassportService = new ZKPassportService();
