import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://your-render-api-url.comhttps://my-team-ep-tester.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
