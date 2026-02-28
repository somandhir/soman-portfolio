import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },

};

const { execSync } = require("child_process");

const buildDate = execSync("git log -1 --format=%cd --date=short")
  .toString()
  .trim();

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: buildDate,
  },
};

export default nextConfig;
