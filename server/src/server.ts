import dotenv from "dotenv";
dotenv.config();

import express from "express";
import sequelize from "./config/connections.js";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/events.js";



const app = express();
const PORT = process.env.PORT || 5000; 

// Middleware
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

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// Root endpoint
app.get("/", (_, res) => {
  res.send("🎉 Welcome to the Event Planner API!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});




