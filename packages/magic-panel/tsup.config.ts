import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/index.tsx", "./src/utils/plugin.ts"],
  format: ["esm"],
  dts: true,
  external: ["react"],
  banner: {
    js: "'use client'",
  },
  ...options,
}));