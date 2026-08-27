import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * GitHub Pages build configuration for the standalone portfolio export.
 * It dynamically uses the repository name supplied by GitHub Actions.
 */
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "ShaikAbdulla";
const base = repositoryName.endsWith(".github.io") ? "/" : `/${repositoryName}/`;

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/github-pages"),
    emptyOutDir: true,
  },
});
