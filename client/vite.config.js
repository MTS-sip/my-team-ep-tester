import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["jwt-decode"], // ✅ Ensure Vite doesn't tree-shake jwt-decode
    },
  },
});
