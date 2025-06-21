/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        net: false,
        tty: false,
        path: require.resolve("path-browserify"),
        fs: false,
        worker_threads: false,
        child_process: false,
        util: require.resolve("util/"),
        assert: require.resolve("assert/"),
        buffer: require.resolve("buffer/"),
        process: require.resolve("process/browser"),
        os: require.resolve("os-browserify/browser"),
      };

      // Critical: Define Buffer globally
      config.plugins.push(
        new (require("webpack").DefinePlugin)({
          global: "globalThis",
        })
      );
    }

    config.plugins.push(
      new (require("webpack").ProvidePlugin)({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      })
    );

    config.externals = config.externals || [];
    config.externals.push("pino-pretty", "encoding");

    config.resolve.alias = {
      ...config.resolve.alias,
      buffer: require.resolve("buffer"),
    };

    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
