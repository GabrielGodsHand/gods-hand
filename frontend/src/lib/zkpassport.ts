import { QueryResult, QueryResultErrors, ZKPassport } from "@zkpassport/sdk";

export class ZKPassportService {
  private zkPassport: ZKPassport;

  constructor(domain: string = "https://localhost:3000") {
    this.zkPassport = new ZKPassport(domain);
  }

  async verifyAge(minAge: number = 18): Promise<{
    url: string;
    onResult: (
      callback: (data: {
        uniqueIdentifier: string | undefined;
        verified: boolean;
        result: QueryResult;
        queryResultErrors?: QueryResultErrors;
      }) => void
    ) => void;
  }> {
    try {
      const queryBuilder = await this.zkPassport.request({
        name: "ZKPassport",
        logo: "https://zkpassport.id/logo.png",
        purpose: `Prove you are ${minAge}+ years old`,
        scope: "adult",
      });

      const { url, onResult } = queryBuilder.gte("age", minAge).done();

      return { url, onResult };
    } catch (error) {
      console.error("ZKPassport verification error:", error);
      throw error;
    }
  }

  async verifyAgeForVoting(): Promise<{
    url: string;
    onResult: (
      callback: (data: {
        uniqueIdentifier: string | undefined;
        verified: boolean;
        result: QueryResult;
        queryResultErrors?: QueryResultErrors;
      }) => void
    ) => void;
  }> {
    return this.verifyAge(18);
  }
}

// Export a default instance
export const zkPassportService = new ZKPassportService();
