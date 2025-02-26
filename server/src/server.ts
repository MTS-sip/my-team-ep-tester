import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { sequelize } from "./config/connections.js";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/events.js";
import { fileURLToPath } from "url"; //  define `__dirname`
import { dirname } from "path";
import path from "path";


const app = express();
const PORT = process.env.PORT || 5000; 

// Define `__dirname` for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve frontend build folder
app.use(express.static(path.join(__dirname, "../client/dist")));



// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

app.use(express.json());

// Database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");
    await sequelize.sync();
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};
connectDB();

// Root endpoint
app.get("/", (_, res) => {
 res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  //res.send("🎉 Welcome to Occasionally, your place for Event Planning, Online, Organized, for your Most Memorable and Greatest Gatherings. OMG²!");
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});




