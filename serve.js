#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * serve.js - Production server launcher for Google Cloud Run
 *
 * Supports both standalone container execution (where server.js is in the same directory)
 * and root directory execution (where server.js is in .next/standalone/server.js).
 */
const fs = require("fs");
const path = require("path");

// Google Cloud Run injects PORT (defaults to 8080) and expects 0.0.0.0 host binding
process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || "8080";
process.env.HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

const candidatePaths = [
  path.join(__dirname, "server.js"),
  path.join(__dirname, ".next", "standalone", "server.js"),
];

const entrypoint = candidatePaths.find(
  (p) => fs.existsSync(p) && path.resolve(p) !== path.resolve(__filename)
);

if (!entrypoint) {
  console.error(
    "Error: Could not locate Next.js standalone server.js. Run 'npm run build' before starting."
  );
  process.exit(1);
}

console.log(
  `[Devrious] Starting production server on ${process.env.HOSTNAME}:${process.env.PORT} via ${path.basename(entrypoint)}`
);

require(entrypoint);
