import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["jwt-decode"],
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://my-team-ep-tester.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
