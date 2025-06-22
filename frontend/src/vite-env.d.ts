/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;

  readonly NEXT_PUBLIC_SANDBOX_AZTEC_NODE_URL: string;
  readonly NEXT_PUBLIC_SANDBOX_AZTEC_CONTRACT_ADDRESS: string;
  readonly NEXT_PUBLIC_SANDBOX_DEPLOYER_ADDRESS: string;
  readonly NEXT_PUBLIC_SANDBOX_DEPLOYMENT_SALT: string;

  readonly NEXT_PUBLIC_AZTEC_NODE_URL: string;
  readonly NEXT_PUBLIC_CONTRACT_ADDRESS: string;
  readonly NEXT_PUBLIC_DEPLOYER_ADDRESS: string;
  readonly NEXT_PUBLIC_DEPLOYMENT_SALT: string;

  readonly VITE_IS_SANDBOX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
