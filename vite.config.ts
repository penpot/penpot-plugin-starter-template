import { defineConfig } from "vite";
import livePreview from "vite-live-preview";

export default defineConfig({
  base: "./",
  plugins: [
    livePreview({
      reload: true,
      config: {
        build: {
          sourcemap: true,
        },
      },
    }),
  ],
  build: {
    rolldownOptions: {
      input: {
        plugin: "src/plugin.ts",
        index: "./index.html",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  preview: {
    port: 4400,
    cors: true,
  },
});
