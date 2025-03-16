import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/event.js";
import { syncDatabase } from "./models/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://my-team-ep-tester.onrender.com"], // Allow frontend origin
    credentials: true, // Allow cookies/auth headers
  })
);

// Define `__dirname` properly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Correct `clientBuildPath`
const clientBuildPath = path.resolve(__dirname, "../../client/dist");

// Serve static frontend files
app.use(express.static(clientBuildPath));

app.use(express.json());

// API Routes

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// Serve React frontend (catch-all for non-API routes)
app.get("*", (_, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});
await syncDatabase(); // Sync database

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})
