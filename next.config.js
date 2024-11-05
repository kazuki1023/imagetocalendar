/** @type {import('next').NextConfig} */
module.exports = {
  output: `export`,
  distDir: "extensions/dist",
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "chrome-extension://jpciacnampdoomkmfllkmdgdjdmojlfa",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./",
  pageExtensions: ["page.tsx", "page.ts"],

  webpack: (config, { isServer }) => {
    config.experiments = {
      layers: true,
      asyncWebAssembly: true,
    };
    config.output.webassemblyModuleFilename =
      (isServer ? "../" : "") + "static/wasm/webassembly.wasm";
    return config;
  },
};
