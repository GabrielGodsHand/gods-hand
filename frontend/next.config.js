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
    }

    config.plugins.push(
      new (require("webpack").ProvidePlugin)({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      })
    );

    // Ignore pino and other problematic modules
    config.externals = config.externals || [];
    config.externals.push("pino-pretty", "encoding");

    return config;
  },
};

module.exports = nextConfig;
