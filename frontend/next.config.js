/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        net: false,
        tty: false,
        path: false,
        fs: false,
        worker_threads: false,
        child_process: false,
        util: require.resolve("util/"),
        assert: require.resolve("assert/"),
        buffer: require.resolve("buffer/"),
      };
    }

    config.plugins.push(
      new (require("webpack").ProvidePlugin)({
        Buffer: ["buffer", "Buffer"],
      })
    );

    // Ignore pino worker
    config.externals = config.externals || [];
    config.externals.push("pino-pretty");

    return config;
  },
};

module.exports = nextConfig;
