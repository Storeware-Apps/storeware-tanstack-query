import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Shortcut for the src directory
    },
  },
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: "dist", // Output directory for the build
    sourcemap: true, // Generate source maps for debugging
  },
});
