import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// fire up CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://my-team-ep-tester.onrender.com"], // Allows frontend origin
    credentials: true, // Allows cookies/auth headers
  })
);

// Define `__dirname` properly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Correct `clientBuildPath`
const clientBuildPath = path.resolve(__dirname, "../../client/dist");

//  Serve static frontend files
app.use(express.static(clientBuildPath));

app.use(express.json());

//  API Routes
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/events.js";
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);


//  Serve React frontend (catch-all for non-API routes)
app.get("*", (_, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// Start Server, listen up
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});






