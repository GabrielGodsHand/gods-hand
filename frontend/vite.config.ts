import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      path: "path-browserify",
      util: "util",
      assert: "assert",
      buffer: "buffer",
      process: "process/browser",
      os: "os-browserify/browser",
    },
  },
  optimizeDeps: {
    include: [
      "buffer",
      "process",
      "crypto-browserify",
      "stream-browserify",
      "path-browserify",
      "util",
      "assert",
      "os-browserify/browser",
    ],
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
});
