import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/index.tsx", "./plugin.ts"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react"],
  banner: {
    js: "'use client'",
  },
  ...options,
}));