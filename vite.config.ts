import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({}) => {
  return {
    build: {
      outDir: "./dist",
      emptyOutDir: false,
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        name: "KintoneTypeguard",
        fileName: "index",
      },
    },
  };
});
