import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure dist folder is created
    emptyOutDir: true, // Clears old build files before a new build
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:7070", // Replace with your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
